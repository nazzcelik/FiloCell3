"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import api, { ACCESS_TOKEN_KEY, getApiErrorMessage } from "@/lib/api";
import type { LiveVehicleForMap, VehicleRoute } from "@/components/VehicleLiveMap";
import { taskStatusClass, vehicleStatusClass } from "@/lib/statusBadges";
import { findRoute, calcHeading, type LatLng } from "@/lib/routeData";

const VehicleLiveMap = dynamic(() => import("@/components/VehicleLiveMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-2xl text-sm"
      style={{ background: "#f0f5ff", color: "#6a8ab0", border: "1px solid #d0ddf0" }}>
      🗺 Harita yükleniyor…
    </div>
  ),
});

// ─── Types ────────────────────────────────────────────────────────────────────
type VehicleRow = {
  id: string; plateNumber: string; brand: string; model: string;
  year?: number; fuelType?: string; status: string;
  driver?: { id: string; name: string; email: string } | null;
};
type TaskRow = {
  id: string; title: string; status: string;
  startLocation: string; destinationLocation: string;
  estimatedDuration?: number;
  driver?: { id: string; name: string } | null;
  vehicle?: { id: string; plateNumber: string } | null;
};
type DriverRow = {
  id: string;
  fullName: string;   // backend'den gelen alan
  name?: string;      // uyumluluk için
  email: string;
  phone?: string;
  role: string;
  assignedVehicle?: Array<{ id: string; plateNumber: string; brand: string; model: string; status: string }>;
};
type HistoryPoint = { latitude: number; longitude: number; speed: number; heading?: number; timestamp: string };
type SpeedAlert = { vehicleId: string; plateNumber: string; speed: number; latitude: number; longitude: number; detectedAt: string };
type LiveVehicleRow = LiveVehicleForMap;
type Tab = "overview" | "vehicles" | "tasks" | "drivers" | "alerts";

// Rota simülatörü state
type RouteSimState = {
  vehicleId:   string;
  plateNumber: string;
  waypoints:   LatLng[];
  currentIdx:  number;
  label:       string;
  color:       string;
  active:      boolean;
};

const TASK_STATUS_OPTIONS = ["ASSIGNED", "ON_THE_WAY", "COMPLETED", "CANCELLED"] as const;
const TABS: Tab[] = ["overview", "vehicles", "tasks", "drivers", "alerts"];
const TC_NAVY = "#003087";
const TC_YELLOW = "#FFC72C";
const ROUTE_COLORS = ["#1d4ed8","#7c3aed","#059669","#dc2626","#d97706","#0891b2","#be185d","#65a30d"];

// ─── UI bileşenleri ───────────────────────────────────────────────────────────
function KpiCard({ icon, label, value, sub, accent }: {
  icon: string; label: string; value: string | number; sub?: string; accent?: boolean;
}) {
  return (
    <div className="rounded-2xl p-5 flex gap-4 items-start shadow-sm"
      style={{ background: accent ? TC_NAVY : "white", border: `1px solid ${accent ? TC_NAVY : "#d0ddf0"}`, color: accent ? "white" : TC_NAVY }}>
      <div className="text-2xl rounded-xl p-2 flex-shrink-0"
        style={{ background: accent ? "rgba(255,199,44,0.2)" : "#f0f5ff", lineHeight: 1 }}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider mb-1"
          style={{ color: accent ? "#a0b4d4" : "#6a8ab0" }}>{label}</p>
        <p className="text-3xl font-bold tabular-nums leading-none">{value}</p>
        {sub && <p className="mt-1 text-xs" style={{ color: accent ? "#7090b4" : "#6a8ab0" }}>{sub}</p>}
      </div>
    </div>
  );
}

function SectionCard({ title, icon, children, action }: {
  title: string; icon?: string; children: ReactNode; action?: ReactNode;
}) {
  return (
    <div className="rounded-2xl shadow-sm" style={{ background: "white", border: "1px solid #d0ddf0" }}>
      <div className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: "1px solid #e8f0ff" }}>
        <h2 className="font-semibold text-base flex items-center gap-2" style={{ color: TC_NAVY }}>
          {icon && <span>{icon}</span>}{title}
        </h2>
        {action && <div>{action}</div>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-10 text-sm" style={{ color: "#6a8ab0" }}>
      <div className="text-3xl mb-2">📭</div>{message}
    </div>
  );
}

function Spinner({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 py-4 text-sm" style={{ color: "#6a8ab0" }}>
      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#d0ddf0" strokeWidth="3"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke={TC_NAVY} strokeWidth="3" strokeLinecap="round"/>
      </svg>
      {text}
    </div>
  );
}

// ─── Ana sayfa ────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // Data
  const [vehicles, setVehicles]         = useState<VehicleRow[] | null>(null);
  const [tasks, setTasks]               = useState<TaskRow[] | null>(null);
  const [liveVehicles, setLiveVehicles] = useState<LiveVehicleRow[] | null>(null);
  const [drivers, setDrivers]           = useState<DriverRow[] | null>(null);
  const [speedAlerts, setSpeedAlerts]   = useState<SpeedAlert[]>([]);
  const [history, setHistory]           = useState<HistoryPoint[] | null>(null);
  const [historyVehicleId, setHistoryVehicleId] = useState("");
  const [historyFrom, setHistoryFrom]   = useState("");
  const [historyTo, setHistoryTo]       = useState("");

  // Loading/error
  const [loadingVehicles, setLoadingVehicles] = useState(false);
  const [loadingTasks, setLoadingTasks]       = useState(false);
  const [loadingLive, setLoadingLive]         = useState(false);
  const [loadingDrivers, setLoadingDrivers]   = useState(false);
  const [loadingHistory, setLoadingHistory]   = useState(false);
  const [vehiclesError, setVehiclesError]     = useState<string | null>(null);
  const [tasksError, setTasksError]           = useState<string | null>(null);
  const [liveError, setLiveError]             = useState<string | null>(null);
  const [driversError, setDriversError]       = useState<string | null>(null);

  // Task form
  const [showTaskForm, setShowTaskForm]   = useState(false);
  const [updatingTaskId, setUpdatingTaskId] = useState<string | null>(null);
  const [newTask, setNewTask]             = useState({ title:"", startLocation:"", destinationLocation:"", estimatedDuration:"", vehicleId:"", driverId:"" });
  const [submittingTask, setSubmittingTask] = useState(false);
  const [taskFormError, setTaskFormError]   = useState<string | null>(null);
  const [taskFormSuccess, setTaskFormSuccess] = useState(false);

  // Rota simülatörü
  const [routeSimStates, setRouteSimStates] = useState<Map<string, RouteSimState>>(new Map());
  const [simRunning, setSimRunning]         = useState(false);
  const simIntervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const liveIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auth guard
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(ACCESS_TOKEN_KEY)) router.replace("/");
  }, [router]);

  // ── Fetchers ──────────────────────────────────────────────────────────────
  const fetchVehicles = useCallback(async () => {
    setVehiclesError(null); setLoadingVehicles(true);
    try { const { data } = await api.get<VehicleRow[]>("/vehicles"); setVehicles(data); }
    catch (err) { setVehiclesError(getApiErrorMessage(err)); }
    finally { setLoadingVehicles(false); }
  }, []);

  const fetchTasks = useCallback(async () => {
    setTasksError(null); setLoadingTasks(true);
    try { const { data } = await api.get<TaskRow[]>("/tasks"); setTasks(data); }
    catch (err) { setTasksError(getApiErrorMessage(err)); }
    finally { setLoadingTasks(false); }
  }, []);

  const fetchDrivers = useCallback(async () => {
    setDriversError(null); setLoadingDrivers(true);
    try { const { data } = await api.get<DriverRow[]>("/drivers"); setDrivers(data); }
    catch (err) { setDriversError(getApiErrorMessage(err)); }
    finally { setLoadingDrivers(false); }
  }, []);

  const fetchLiveLocations = useCallback(async () => {
    setLiveError(null); setLoadingLive(true);
    try {
      const { data } = await api.get<LiveVehicleRow[]>("/vehicles/live");
      setLiveVehicles(data);
      const alerts: SpeedAlert[] = data
        .filter((v) => v.latestLocation && v.latestLocation.speed > 120)
        .map((v) => ({
          vehicleId: v.id, plateNumber: v.plateNumber,
          speed: v.latestLocation!.speed,
          latitude: v.latestLocation!.latitude, longitude: v.latestLocation!.longitude,
          detectedAt: new Date().toISOString(),
        }));
      if (alerts.length > 0) {
        setSpeedAlerts((prev) => {
          const ids = new Set(prev.map((a) => a.vehicleId));
          return [...prev, ...alerts.filter((a) => !ids.has(a.vehicleId))].slice(-50);
        });
      }
    } catch (err) { setLiveError(getApiErrorMessage(err)); }
    finally { setLoadingLive(false); }
  }, []);

  const fetchHistory = useCallback(async () => {
    if (!historyVehicleId) return;
    setLoadingHistory(true);
    try {
      const params: Record<string, string> = {};
      if (historyFrom) params.from = historyFrom;
      if (historyTo)   params.to   = historyTo;
      const { data } = await api.get<HistoryPoint[]>(`/vehicles/${historyVehicleId}/history`, { params });
      setHistory(data);
    } catch { setHistory([]); }
    finally { setLoadingHistory(false); }
  }, [historyVehicleId, historyFrom, historyTo]);

  // ── İlk yükleme ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined" || !localStorage.getItem(ACCESS_TOKEN_KEY)) return;
    void fetchVehicles();
    void fetchTasks();
    void fetchLiveLocations();
    void fetchDrivers();
  }, [fetchVehicles, fetchTasks, fetchLiveLocations, fetchDrivers]);

  // ── Canlı yenileme — her 8 saniye ─────────────────────────────────────────
  useEffect(() => {
    liveIntervalRef.current = setInterval(() => {
      if (localStorage.getItem(ACCESS_TOKEN_KEY)) void fetchLiveLocations();
    }, 8_000);
    return () => { if (liveIntervalRef.current) clearInterval(liveIntervalRef.current); };
  }, [fetchLiveLocations]);

  // ── Rota simülatörünü kur (araçlar + görevler hazır olunca) ────────────────
  useEffect(() => {
    if (!vehicles || !tasks) return;
    const map = new Map<string, RouteSimState>();
    tasks.forEach((task, ti) => {
      if (!task.vehicle) return;
      const vId = task.vehicle.id;
      if (map.has(vId)) return; // bir araç = bir rota
      const waypoints = findRoute(task.startLocation, task.destinationLocation);
      if (waypoints.length < 2) return;
      map.set(vId, {
        vehicleId:   vId,
        plateNumber: task.vehicle.plateNumber,
        waypoints,
        currentIdx:  0,
        label:       task.title,
        color:       ROUTE_COLORS[ti % ROUTE_COLORS.length],
        active:      task.status === "ON_THE_WAY" || task.status === "ASSIGNED",
      });
    });
    setRouteSimStates(map);
  }, [vehicles, tasks]);

  // ── Rota simülatörünü başlat/durdur ────────────────────────────────────────
  function startSimulator() {
    if (simIntervalRef.current) return;
    setSimRunning(true);

    simIntervalRef.current = setInterval(async () => {
      setRouteSimStates((prev) => {
        const next = new Map(prev);
        const postBatch: Array<{ vehicleId: string; lat: number; lng: number; speed: number; heading: number }> = [];

        for (const [vid, state] of next) {
          if (!state.active || state.waypoints.length < 2) continue;

          const nextIdx = (state.currentIdx + 1) % state.waypoints.length;
          const [lat, lng] = state.waypoints[nextIdx];
          const from = state.waypoints[state.currentIdx];
          const heading = Math.round(calcHeading(from, [lat, lng]));

          // 60-95 km/h arası hız, sona yakınken yavaşla
          const progress = nextIdx / (state.waypoints.length - 1);
          const speed = Math.round(
            progress > 0.9
              ? 30 + Math.random() * 15
              : 60 + Math.random() * 35,
          );

          next.set(vid, { ...state, currentIdx: nextIdx });
          postBatch.push({ vehicleId: vid, lat, lng, speed, heading });
        }

        // backend'e konumu gönder (async ama state dışında)
        void Promise.allSettled(
          postBatch.map(({ vehicleId, lat, lng, speed, heading }) =>
            api.post(`/vehicles/${vehicleId}/location`, {
              latitude: lat, longitude: lng, speed, heading,
            }),
          ),
        ).then(() => {
          void fetchLiveLocations();
        });

        return next;
      });
    }, 5_000);
  }

  function stopSimulator() {
    if (simIntervalRef.current) { clearInterval(simIntervalRef.current); simIntervalRef.current = null; }
    setSimRunning(false);
  }

  useEffect(() => () => {
    if (simIntervalRef.current)  clearInterval(simIntervalRef.current);
    if (liveIntervalRef.current) clearInterval(liveIntervalRef.current);
  }, []);

  // ── Task actions ──────────────────────────────────────────────────────────
  async function updateTaskStatus(taskId: string, status: string) {
    setUpdatingTaskId(taskId);
    try { await api.patch(`/tasks/${taskId}/status`, { status }); await fetchTasks(); }
    catch (err) { setTasksError(getApiErrorMessage(err)); }
    finally { setUpdatingTaskId(null); }
  }

  async function submitNewTask(e: React.FormEvent) {
    e.preventDefault();
    setSubmittingTask(true); setTaskFormError(null); setTaskFormSuccess(false);
    try {
      const payload: Record<string, unknown> = {
        title: newTask.title,
        startLocation: newTask.startLocation,
        destinationLocation: newTask.destinationLocation,
      };
      if (newTask.estimatedDuration) payload.estimatedDuration = Number(newTask.estimatedDuration);
      if (newTask.vehicleId) payload.vehicleId = newTask.vehicleId;
      if (newTask.driverId)  payload.driverId  = newTask.driverId;
      await api.post("/tasks", payload);
      setTaskFormSuccess(true);
      setNewTask({ title:"", startLocation:"", destinationLocation:"", estimatedDuration:"", vehicleId:"", driverId:"" });
      await fetchTasks();
      setTimeout(() => { setShowTaskForm(false); setTaskFormSuccess(false); }, 1500);
    } catch (err) { setTaskFormError(getApiErrorMessage(err)); }
    finally { setSubmittingTask(false); }
  }

  function logout() {
    stopSimulator();
    if (liveIntervalRef.current) clearInterval(liveIntervalRef.current);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    router.push("/");
  }

  // ── Türetilmiş metrikler ──────────────────────────────────────────────────
  const totalVehicles  = vehicles?.length ?? 0;
  const activeVehicles = vehicles?.filter((v) => v.status === "ACTIVE").length ?? 0;
  const totalTasks     = tasks?.length ?? 0;
  const completedTasks = tasks?.filter((t) => t.status === "COMPLETED").length ?? 0;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const liveWithGps    = liveVehicles?.filter((v) => v.latestLocation != null).length ?? 0;
  const avgSpeed = useMemo(() => {
    if (!liveVehicles) return 0;
    const pts = liveVehicles.filter((v) => v.latestLocation?.speed != null);
    if (!pts.length) return 0;
    return Math.round(pts.reduce((s, v) => s + (v.latestLocation?.speed ?? 0), 0) / pts.length);
  }, [liveVehicles]);

  // Haritaya gönderilecek rota verisi
  const mapRoutes: VehicleRoute[] = useMemo(
    () =>
      Array.from(routeSimStates.values())
        .filter((s) => s.active && s.waypoints.length >= 2)
        .map((s) => ({
          vehicleId:  s.vehicleId,
          waypoints:  s.waypoints,
          currentIdx: s.currentIdx,
          color:      s.color,
          label:      s.label,
        })),
    [routeSimStates],
  );

  const tabLabels: Record<Tab, { label: string; icon: string }> = {
    overview: { label: "Genel Bakış",   icon: "📊" },
    vehicles: { label: "Araçlar",       icon: "🚗" },
    tasks:    { label: "Görevler",      icon: "📋" },
    drivers:  { label: "Sürücüler",     icon: "👤" },
    alerts:   { label: `Uyarılar${speedAlerts.length > 0 ? ` (${speedAlerts.length})` : ""}`, icon: "⚠" },
  };

  return (
    <div className="min-h-full flex flex-col" style={{ background: "#f0f5ff" }}>

      {/* ── NAV BAR ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: TC_NAVY, boxShadow: "0 2px 12px rgba(0,48,135,0.3)" }}>
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-10 h-10 relative flex-shrink-0">
            <Image src="/filocell-logo.svg" alt="FiloCell Logo" fill style={{ objectFit: "contain" }} priority />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight" style={{ color: TC_YELLOW }}>FiloCell</span>
            <span className="ml-2 text-xs hidden sm:inline" style={{ color: "#7090b4" }}>Kurumsal Araç Takip</span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {speedAlerts.length > 0 && (
            <button onClick={() => setActiveTab("alerts")}
              className="alert-pulse flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
              style={{ background: "#dc2626", color: "white" }}>
              ⚡ {speedAlerts.length} Hız İhlali
            </button>
          )}

          {/* Simülatör kontrolü */}
          <button onClick={simRunning ? stopSimulator : startSimulator}
            className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all"
            style={{
              background: simRunning ? "rgba(220,38,38,0.2)" : "rgba(255,199,44,0.2)",
              color: simRunning ? "#fca5a5" : TC_YELLOW,
              border: `1px solid ${simRunning ? "rgba(220,38,38,0.4)" : "rgba(255,199,44,0.4)"}`,
            }}>
            {simRunning ? "⏹ Simülatörü Durdur" : "▶ Simülatörü Başlat"}
          </button>

          <div className="text-xs" style={{ color: "#7090b4" }}>🔄 8sn</div>
          <button onClick={logout}
            className="rounded-xl px-4 py-2 text-xs font-semibold"
            style={{ background: "rgba(255,199,44,0.15)", color: TC_YELLOW, border: "1px solid rgba(255,199,44,0.3)" }}>
            Çıkış
          </button>
        </div>
      </header>

      {/* ── TAB BAR ────────────────────────────────────────────── */}
      <div className="sticky z-40 px-6 flex gap-1 overflow-x-auto"
        style={{ top: "57px", background: "white", borderBottom: "1px solid #d0ddf0" }}>
        {TABS.map((tab) => {
          const active = tab === activeTab;
          return (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-all"
              style={{
                color: active ? TC_NAVY : "#6a8ab0",
                borderBottom: active ? `2.5px solid ${TC_YELLOW}` : "2.5px solid transparent",
                fontWeight: active ? 600 : 400,
              }}>
              {tabLabels[tab].icon} {tabLabels[tab].label}
            </button>
          );
        })}
      </div>

      {/* ── CONTENT ─────────────────────────────────────────────── */}
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 space-y-6">

        {/* ════════════ GENEL BAKIŞ ════════════ */}
        {activeTab === "overview" && (
          <div className="tab-content space-y-6">
            {speedAlerts.length > 0 && (
              <div className="rounded-2xl p-4 flex items-start gap-3"
                style={{ background: "#fff0f0", border: "1.5px solid #fca5a5" }}>
                <span className="text-xl flex-shrink-0">🚨</span>
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: "#dc2626" }}>Hız İhlali Tespit Edildi!</p>
                  <p className="text-xs mt-0.5" style={{ color: "#b91c1c" }}>
                    {speedAlerts.slice(-3).map((a) => `${a.plateNumber}: ${a.speed} km/h`).join(" • ")}
                    {speedAlerts.length > 3 ? ` • +${speedAlerts.length - 3} daha` : ""}
                  </p>
                </div>
                <button onClick={() => setActiveTab("alerts")}
                  className="flex-shrink-0 rounded-lg px-3 py-1 text-xs font-medium"
                  style={{ background: "#dc2626", color: "white" }}>Detaylar</button>
              </div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <KpiCard icon="🚗" label="Toplam Araç"  value={vehicles === null ? "—" : totalVehicles} sub={`${activeVehicles} aktif`} accent />
              <KpiCard icon="📍" label="Canlı GPS"    value={liveVehicles === null ? "—" : liveWithGps} sub={`${liveVehicles?.length ?? 0} araçtan`} />
              <KpiCard icon="✅" label="Tamamlanma"   value={`%${completionRate}`} sub={`${completedTasks}/${totalTasks} görev`} />
              <KpiCard icon="⚡" label="Ort. Hız"     value={`${avgSpeed}`} sub="km/h (anlık)" />
            </div>

            {/* Simülatör durumu */}
            {simRunning && (
              <div className="rounded-2xl p-4 flex items-center gap-3"
                style={{ background: "#f0fff4", border: "1.5px solid #86efac" }}>
                <span className="text-xl">🛰</span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#16a34a" }}>
                    IoT Rota Simülatörü Aktif — {mapRoutes.length} araç rota üzerinde hareket ediyor
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#4ade80" }}>
                    Her 5 saniyede bir yeni konum üretiliyor ve backend'e gönderiliyor
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[0,1,2].map((i) => (
                    <div key={i} className="rounded-full" style={{
                      width: 8, height: 8, background: "#16a34a",
                      animation: `pulse-red ${1 + i * 0.3}s ease-in-out infinite`,
                    }}/>
                  ))}
                </div>
              </div>
            )}

            <SectionCard title="Canlı Araç Haritası" icon="🗺"
              action={
                <div className="flex gap-2">
                  <button onClick={fetchLiveLocations} disabled={loadingLive}
                    className="rounded-xl px-4 py-2 text-xs font-medium"
                    style={{ background: TC_NAVY, color: "white", opacity: loadingLive ? 0.6 : 1 }}>
                    {loadingLive ? "Yükleniyor…" : "🔄 Yenile"}
                  </button>
                </div>
              }>
              {liveError && <p className="text-sm text-red-600 mb-3">⚠ {liveError}</p>}
              <VehicleLiveMap vehicles={liveVehicles ?? []} routes={mapRoutes} />
              <p className="mt-2 text-xs" style={{ color: "#6a8ab0" }}>
                {liveWithGps > 0
                  ? `${liveWithGps} araç GPS aktarıyor • ${mapRoutes.length > 0 ? `${mapRoutes.length} aktif rota gösteriliyor` : "Simülatörü başlatarak araçları rota üzerinde hareket ettirin"}`
                  : "GPS verisi bekleniyor — simülatörü başlatın"}
              </p>
            </SectionCard>

            <SectionCard title="Son Görevler" icon="📋">
              {!tasks ? <EmptyState message="Görev verisi yüklenmedi" />
               : tasks.length === 0 ? <EmptyState message="Henüz görev yok" />
               : (
                <div className="space-y-2">
                  {tasks.slice(0, 6).map((t) => (
                    <div key={t.id} className="flex items-center justify-between rounded-xl px-4 py-3"
                      style={{ background: "#f0f5ff" }}>
                      <div>
                        <p className="text-sm font-medium" style={{ color: TC_NAVY }}>{t.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#6a8ab0" }}>
                          {t.startLocation} → {t.destinationLocation}
                          {t.driver && ` • ${t.driver.name}`}
                        </p>
                      </div>
                      <span className={taskStatusClass(t.status)}>{t.status.replace("_", " ")}</span>
                    </div>
                  ))}
                  {tasks.length > 6 && (
                    <button onClick={() => setActiveTab("tasks")}
                      className="w-full text-xs text-center py-2 rounded-xl"
                      style={{ color: TC_NAVY, background: "#f0f5ff" }}>
                      Tümünü gör ({tasks.length} görev) →
                    </button>
                  )}
                </div>
              )}
            </SectionCard>
          </div>
        )}

        {/* ════════════ ARAÇLAR ════════════ */}
        {activeTab === "vehicles" && (
          <div className="tab-content space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold" style={{ color: TC_NAVY }}>Araç Yönetimi</h1>
              <button onClick={fetchVehicles} disabled={loadingVehicles}
                className="rounded-xl px-4 py-2 text-sm font-medium"
                style={{ background: TC_NAVY, color: "white", opacity: loadingVehicles ? 0.6 : 1 }}>
                {loadingVehicles ? "Yükleniyor…" : "🔄 Yenile"}
              </button>
            </div>
            {vehiclesError && <div className="rounded-xl p-3 text-sm"
              style={{ background: "#fff0f0", color: "#dc2626", border: "1px solid #fca5a5" }}>⚠ {vehiclesError}</div>}

            <SectionCard title="Araç Listesi" icon="🚗">
              {loadingVehicles ? <Spinner text="Araçlar yükleniyor…" />
               : !vehicles || vehicles.length === 0 ? <EmptyState message="Kayıtlı araç bulunamadı" />
               : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left min-w-[620px]">
                    <thead>
                      <tr style={{ background: "#f0f5ff", borderBottom: "1px solid #d0ddf0" }}>
                        {["Plaka", "Marka / Model / Yıl", "Yakıt", "Durum", "Sürücü", "Canlı Hız"].map((h) => (
                          <th key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: TC_NAVY }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {vehicles.map((v, i) => {
                        const live = liveVehicles?.find((l) => l.id === v.id);
                        const spd  = live?.latestLocation?.speed;
                        const fast = spd !== undefined && spd > 120;
                        return (
                          <tr key={v.id} style={{ background: i % 2 === 0 ? "white" : "#f8fbff", borderBottom: "1px solid #e8f0ff" }}>
                            <td className="px-4 py-3 font-bold" style={{ color: TC_NAVY }}>{v.plateNumber}</td>
                            <td className="px-4 py-3" style={{ color: "#4a6080" }}>
                              {v.brand} {v.model}
                              {v.year && <span className="ml-1 text-xs" style={{ color: "#6a8ab0" }}>({v.year})</span>}
                            </td>
                            <td className="px-4 py-3 text-xs" style={{ color: "#6a8ab0" }}>{v.fuelType ?? "—"}</td>
                            <td className="px-4 py-3"><span className={vehicleStatusClass(v.status)}>{v.status}</span></td>
                            <td className="px-4 py-3 text-xs" style={{ color: "#6a8ab0" }}>{v.driver?.name ?? "—"}</td>
                            <td className="px-4 py-3">
                              {spd !== undefined ? (
                                <span className="font-mono font-semibold text-xs px-2 py-1 rounded-full"
                                  style={{ background: fast ? "#fef2f2" : "#f0fdf4", color: fast ? "#dc2626" : "#16a34a", border: `1px solid ${fast ? "#fca5a5" : "#86efac"}` }}>
                                  {fast ? "⚡ " : ""}{spd} km/h
                                </span>
                              ) : <span style={{ color: "#c0cce0" }}>—</span>}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </SectionCard>

            {/* Konum Geçmişi */}
            <SectionCard title="Konum Geçmişi Sorgula" icon="📍">
              <div className="grid sm:grid-cols-4 gap-3">
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: TC_NAVY }}>Araç Seç</label>
                  <select value={historyVehicleId} onChange={(e) => setHistoryVehicleId(e.target.value)}
                    className="w-full rounded-xl border text-sm px-3 py-2 outline-none"
                    style={{ borderColor: "#d0ddf0", color: TC_NAVY }}>
                    <option value="">-- Araç --</option>
                    {vehicles?.map((v) => <option key={v.id} value={v.id}>{v.plateNumber}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: TC_NAVY }}>Başlangıç</label>
                  <input type="datetime-local" value={historyFrom} onChange={(e) => setHistoryFrom(e.target.value)}
                    className="w-full rounded-xl border text-sm px-3 py-2 outline-none"
                    style={{ borderColor: "#d0ddf0", color: TC_NAVY }}/>
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: TC_NAVY }}>Bitiş</label>
                  <input type="datetime-local" value={historyTo} onChange={(e) => setHistoryTo(e.target.value)}
                    className="w-full rounded-xl border text-sm px-3 py-2 outline-none"
                    style={{ borderColor: "#d0ddf0", color: TC_NAVY }}/>
                </div>
                <div className="flex items-end">
                  <button onClick={fetchHistory} disabled={!historyVehicleId || loadingHistory}
                    className="w-full rounded-xl py-2 text-sm font-semibold"
                    style={{ background: !historyVehicleId || loadingHistory ? "#b0c4de" : TC_NAVY, color: "white" }}>
                    {loadingHistory ? "Sorgulanıyor…" : "Sorgula"}
                  </button>
                </div>
              </div>
              {history !== null && (
                <div className="mt-4">
                  {history.length === 0 ? <EmptyState message="Bu aralıkta kayıt bulunamadı" /> : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left min-w-[420px]">
                        <thead>
                          <tr style={{ background: "#f0f5ff" }}>
                            {["#", "Zaman", "Enlem", "Boylam", "Hız", "Yön"].map((h) => (
                              <th key={h} className="px-3 py-2 font-semibold uppercase tracking-wider" style={{ color: TC_NAVY }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {history.slice(0, 30).map((pt, i) => (
                            <tr key={i} style={{ borderBottom: "1px solid #e8f0ff" }}>
                              <td className="px-3 py-2" style={{ color: "#6a8ab0" }}>{i + 1}</td>
                              <td className="px-3 py-2 font-mono" style={{ color: "#4a6080" }}>{new Date(pt.timestamp).toLocaleString("tr-TR")}</td>
                              <td className="px-3 py-2 font-mono">{pt.latitude.toFixed(5)}</td>
                              <td className="px-3 py-2 font-mono">{pt.longitude.toFixed(5)}</td>
                              <td className="px-3 py-2 font-semibold" style={{ color: pt.speed > 120 ? "#dc2626" : "#16a34a" }}>{pt.speed} km/h</td>
                              <td className="px-3 py-2" style={{ color: "#6a8ab0" }}>{pt.heading ?? "—"}°</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {history.length > 30 && (
                        <p className="text-xs mt-2 text-center" style={{ color: "#6a8ab0" }}>İlk 30 kayıt ({history.length} toplam)</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </SectionCard>
          </div>
        )}

        {/* ════════════ GÖREVLER ════════════ */}
        {activeTab === "tasks" && (
          <div className="tab-content space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold" style={{ color: TC_NAVY }}>Görev Yönetimi</h1>
              <div className="flex gap-2">
                <button onClick={() => setShowTaskForm(!showTaskForm)}
                  className="rounded-xl px-4 py-2 text-sm font-semibold"
                  style={{ background: TC_YELLOW, color: TC_NAVY, boxShadow: "0 2px 8px rgba(255,199,44,0.4)" }}>
                  {showTaskForm ? "✕ Kapat" : "+ Yeni Görev"}
                </button>
                <button onClick={fetchTasks} disabled={loadingTasks}
                  className="rounded-xl px-4 py-2 text-sm font-medium"
                  style={{ background: TC_NAVY, color: "white", opacity: loadingTasks ? 0.6 : 1 }}>
                  🔄 Yenile
                </button>
              </div>
            </div>

            {showTaskForm && (
              <SectionCard title="Yeni Görev Oluştur" icon="📝">
                <form onSubmit={submitNewTask} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: "Görev Adı *", key: "title", ph: "İstanbul → Ankara Kargo Teslimatı", req: true },
                      { label: "Tahmini Süre (dk)", key: "estimatedDuration", ph: "120", req: false },
                      { label: "Başlangıç Noktası *", key: "startLocation", ph: "İstanbul Anadolu Depo", req: true },
                      { label: "Varış Noktası *", key: "destinationLocation", ph: "Ankara Ostim", req: true },
                    ].map(({ label, key, ph, req }) => (
                      <div key={key}>
                        <label className="text-xs font-medium block mb-1" style={{ color: TC_NAVY }}>{label}</label>
                        <input required={req} value={(newTask as Record<string,string>)[key]}
                          onChange={(e) => setNewTask({ ...newTask, [key]: e.target.value })}
                          placeholder={ph}
                          className="w-full rounded-xl border text-sm px-3 py-2 outline-none"
                          style={{ borderColor: "#d0ddf0" }}/>
                      </div>
                    ))}
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: TC_NAVY }}>Araç Seç</label>
                      <select value={newTask.vehicleId} onChange={(e) => setNewTask({ ...newTask, vehicleId: e.target.value })}
                        className="w-full rounded-xl border text-sm px-3 py-2 outline-none" style={{ borderColor: "#d0ddf0" }}>
                        <option value="">-- Araç Seç --</option>
                        {vehicles?.map((v) => <option key={v.id} value={v.id}>{v.plateNumber} – {v.brand} {v.model}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: TC_NAVY }}>Sürücü Ata</label>
                      <select value={newTask.driverId} onChange={(e) => setNewTask({ ...newTask, driverId: e.target.value })}
                        className="w-full rounded-xl border text-sm px-3 py-2 outline-none" style={{ borderColor: "#d0ddf0" }}>
                        <option value="">-- Sürücü Seç --</option>
                        {drivers?.map((d) => <option key={d.id} value={d.id}>{d.fullName ?? d.name}</option>)}
                      </select>
                    </div>
                  </div>
                  {taskFormError && <p className="text-sm text-red-600">⚠ {taskFormError}</p>}
                  {taskFormSuccess && <p className="text-sm" style={{ color: "#16a34a" }}>✅ Görev başarıyla oluşturuldu!</p>}
                  <div className="flex gap-3 pt-2">
                    <button type="submit" disabled={submittingTask}
                      className="rounded-xl px-6 py-2.5 text-sm font-semibold"
                      style={{ background: submittingTask ? "#b0c4de" : TC_YELLOW, color: TC_NAVY }}>
                      {submittingTask ? "Oluşturuluyor…" : "Görevi Oluştur"}
                    </button>
                    <button type="button" onClick={() => setShowTaskForm(false)}
                      className="rounded-xl px-6 py-2.5 text-sm font-medium"
                      style={{ background: "#f0f5ff", color: "#6a8ab0" }}>İptal</button>
                  </div>
                </form>
              </SectionCard>
            )}

            <SectionCard title="Görev Listesi" icon="📋">
              {tasksError && <p className="text-sm text-red-600 mb-3">⚠ {tasksError}</p>}
              {loadingTasks ? <Spinner text="Görevler yükleniyor…" />
               : !tasks || tasks.length === 0 ? <EmptyState message="Henüz görev yok" />
               : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left min-w-[720px]">
                    <thead>
                      <tr style={{ background: "#f0f5ff", borderBottom: "1px solid #d0ddf0" }}>
                        {["Görev", "Durum", "Güzergah", "Sürücü", "Araç", "Süre", "Durum Güncelle"].map((h) => (
                          <th key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: TC_NAVY }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((t, i) => (
                        <tr key={t.id} style={{ background: i % 2 === 0 ? "white" : "#f8fbff", borderBottom: "1px solid #e8f0ff" }}>
                          <td className="px-4 py-3 font-medium max-w-[160px]" style={{ color: TC_NAVY }}>
                            <span className="truncate block">{t.title}</span>
                          </td>
                          <td className="px-4 py-3"><span className={taskStatusClass(t.status)}>{t.status.replace("_", " ")}</span></td>
                          <td className="px-4 py-3 text-xs" style={{ color: "#6a8ab0" }}>
                            <span className="block truncate max-w-[140px]">{t.startLocation}</span>
                            <span className="block truncate max-w-[140px]">→ {t.destinationLocation}</span>
                          </td>
                          <td className="px-4 py-3 text-xs" style={{ color: "#6a8ab0" }}>{t.driver?.name ?? "—"}</td>
                          <td className="px-4 py-3 text-xs" style={{ color: "#6a8ab0" }}>{t.vehicle?.plateNumber ?? "—"}</td>
                          <td className="px-4 py-3 text-xs" style={{ color: "#6a8ab0" }}>
                            {t.estimatedDuration ? `${t.estimatedDuration} dk` : "—"}
                          </td>
                          <td className="px-4 py-3">
                            <select value={t.status} disabled={updatingTaskId === t.id}
                              onChange={(e) => { if (e.target.value !== t.status) void updateTaskStatus(t.id, e.target.value); }}
                              className="rounded-xl border text-xs px-3 py-1.5 outline-none"
                              style={{ borderColor: "#d0ddf0", color: TC_NAVY, background: "white", opacity: updatingTaskId === t.id ? 0.5 : 1 }}>
                              {TASK_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.replace("_", " ")}</option>)}
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </SectionCard>
          </div>
        )}

        {/* ════════════ SÜRÜCÜLER ════════════ */}
        {activeTab === "drivers" && (
          <div className="tab-content space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold" style={{ color: TC_NAVY }}>Sürücü Yönetimi</h1>
              <button onClick={fetchDrivers} disabled={loadingDrivers}
                className="rounded-xl px-4 py-2 text-sm font-medium"
                style={{ background: TC_NAVY, color: "white", opacity: loadingDrivers ? 0.6 : 1 }}>
                🔄 Yenile
              </button>
            </div>

            <SectionCard title="Sürücüler" icon="👤">
              {driversError && <p className="text-sm text-red-600 mb-3">⚠ {driversError}</p>}
              {loadingDrivers ? <Spinner text="Sürücüler yükleniyor…" />
               : !drivers || drivers.length === 0 ? <EmptyState message="Kayıtlı sürücü bulunamadı" />
               : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {drivers.map((d) => {
                    // Önce backend'den gelen assignedVehicle array'ine bak, yoksa vehicles state'inden eşle
                    const assignedVehicle = d.assignedVehicle?.[0] ?? vehicles?.find((v) => v.driver?.id === d.id);
                    const driverTask = tasks?.find((t) => t.driver?.id === d.id && t.status === "ON_THE_WAY");
                    return (
                      <div key={d.id} className="rounded-2xl p-4"
                        style={{ background: "#f0f5ff", border: "1px solid #d0ddf0" }}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
                            style={{ background: TC_NAVY, color: TC_YELLOW }}>
                            {(d.fullName ?? d.name ?? "?").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-sm" style={{ color: TC_NAVY }}>{d.fullName ?? d.name}</p>
                            <p className="text-xs" style={{ color: "#6a8ab0" }}>{d.email}</p>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="text-xs rounded-lg px-3 py-2" style={{ background: "white", border: "1px solid #e0ebff" }}>
                            <span style={{ color: "#6a8ab0" }}>Araç: </span>
                            <span className="font-medium" style={{ color: assignedVehicle ? TC_NAVY : "#c0cce0" }}>
                              {assignedVehicle ? `${assignedVehicle.plateNumber} — ${assignedVehicle.brand}` : "Atanmamış"}
                            </span>
                          </div>
                          {driverTask && (
                            <div className="text-xs rounded-lg px-3 py-2" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
                              <span style={{ color: "#92400e" }}>Aktif Görev: </span>
                              <span className="font-medium" style={{ color: "#78350f" }}>{driverTask.title}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </SectionCard>

            {/* Bakım Planlama */}
            <SectionCard title="Bakım Planlama" icon="🔧">
              {!vehicles || vehicles.length === 0 ? <EmptyState message="Araç verisi yüklenmedi" /> : (
                <div className="space-y-3">
                  {vehicles.map((v) => {
                    const needsMaintenance = v.status === "MAINTENANCE";
                    const isFaulty = v.status === "FAULTY";
                    return (
                      <div key={v.id} className="flex items-center justify-between rounded-xl px-4 py-3"
                        style={{ background: needsMaintenance || isFaulty ? "#fff8f0" : "#f0f5ff", border: `1px solid ${needsMaintenance || isFaulty ? "#fcd0a0" : "#d0ddf0"}` }}>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{isFaulty ? "🔴" : needsMaintenance ? "🟠" : "🟢"}</span>
                          <div>
                            <p className="font-semibold text-sm" style={{ color: TC_NAVY }}>{v.plateNumber}</p>
                            <p className="text-xs" style={{ color: "#6a8ab0" }}>{v.brand} {v.model}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-medium"
                            style={{ color: needsMaintenance || isFaulty ? "#c2410c" : "#16a34a" }}>
                            {isFaulty ? "⛔ Arızalı — Servis gerekli"
                             : needsMaintenance ? "⚙ Bakımda"
                             : "✅ Bakım güncel"}
                          </p>
                          <span className={vehicleStatusClass(v.status)} style={{ marginTop: 4, display: "inline-flex" }}>{v.status}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </SectionCard>
          </div>
        )}

        {/* ════════════ UYARILAR ════════════ */}
        {activeTab === "alerts" && (
          <div className="tab-content space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold" style={{ color: TC_NAVY }}>Uyarılar &amp; Alarmlar</h1>
              {speedAlerts.length > 0 && (
                <button onClick={() => setSpeedAlerts([])}
                  className="rounded-xl px-4 py-2 text-xs font-medium"
                  style={{ background: "#f0f5ff", color: "#6a8ab0", border: "1px solid #d0ddf0" }}>
                  Tümünü Temizle
                </button>
              )}
            </div>

            <SectionCard title="Hız İhlalleri (›120 km/h)" icon="🚨">
              {speedAlerts.length === 0
               ? <EmptyState message="Şu an ihlal yok 🎉 Tüm araçlar normal hızda seyrediyor" />
               : (
                <div className="space-y-3">
                  {speedAlerts.map((a, i) => (
                    <div key={i} className="rounded-xl px-4 py-3 flex items-center justify-between"
                      style={{ background: "#fff0f0", border: "1.5px solid #fca5a5" }}>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">⚡</span>
                        <div>
                          <p className="font-bold text-sm" style={{ color: "#dc2626" }}>{a.plateNumber}</p>
                          <p className="text-xs" style={{ color: "#b91c1c" }}>{new Date(a.detectedAt).toLocaleString("tr-TR")}</p>
                          <p className="text-xs font-mono" style={{ color: "#b91c1c" }}>{a.latitude.toFixed(4)}, {a.longitude.toFixed(4)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black tabular-nums" style={{ color: "#dc2626" }}>
                          {a.speed} <span className="text-sm font-medium">km/h</span>
                        </p>
                        <p className="text-xs" style={{ color: "#b91c1c" }}>Limit: 120 km/h</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </SectionCard>

            <SectionCard title="Geofence Bölgeleri" icon="🗺">
              <div className="space-y-2">
                {[
                  { name: "İstanbul Anadolu Depo",   radius: "5 km",  lat: "40.9886", lng: "29.0300", active: true },
                  { name: "Ankara Ostim",             radius: "3 km",  lat: "39.9334", lng: "32.8597", active: true },
                  { name: "İzmir Liman",             radius: "2 km",  lat: "38.4220", lng: "27.1281", active: false },
                  { name: "Bursa Merkez Depo",        radius: "4 km",  lat: "40.1828", lng: "29.0665", active: true },
                  { name: "Gebze Lojistik Merkezi",   radius: "3.5 km",lat: "40.7983", lng: "29.4308", active: false },
                ].map((zone) => (
                  <div key={zone.name} className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{ background: zone.active ? "#f0fff4" : "#f8f8ff", border: `1px solid ${zone.active ? "#86efac" : "#e0ebff"}` }}>
                    <div className="flex items-center gap-2">
                      <span>{zone.active ? "🟢" : "⚪"}</span>
                      <div>
                        <p className="font-medium text-sm" style={{ color: TC_NAVY }}>📍 {zone.name}</p>
                        <p className="text-xs font-mono" style={{ color: "#6a8ab0" }}>{zone.lat}, {zone.lng}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold" style={{ color: zone.active ? "#16a34a" : "#9ca3af" }}>r = {zone.radius}</p>
                      <p className="text-xs" style={{ color: "#6a8ab0" }}>{zone.active ? "İzleniyor" : "Pasif"}</p>
                    </div>
                  </div>
                ))}
                <p className="text-xs mt-2" style={{ color: "#6a8ab0" }}>
                  Gerçek zamanlı giriş/çıkış bildirimleri IoT simülatörü üzerinden üretilmektedir.
                </p>
              </div>
            </SectionCard>
          </div>
        )}
      </main>

      <footer className="text-center text-xs py-4"
        style={{ background: TC_NAVY, color: "#5a7aa4", borderTop: "1px solid #001a52" }}>
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 relative">
            <Image src="/filocell-logo.svg" alt="" fill style={{ objectFit: "contain" }} />
          </div>
          FiloCell v1.0 • Turkcell CodeNight 2026 •{" "}
          <span style={{ color: TC_YELLOW }}>Powered by Turkcell IoT &amp; M2M</span>
        </div>
      </footer>
    </div>
  );
}
