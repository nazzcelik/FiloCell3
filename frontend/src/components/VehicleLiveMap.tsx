"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { vehicleStatusClass } from "@/lib/statusBadges";

const DEFAULT_CENTER: [number, number] = [39.5, 32.5];
const DEFAULT_ZOOM = 6;
const FOCUS_ZOOM   = 7;

export type LiveVehicleForMap = {
  id: string;
  plateNumber: string;
  status?: string;
  latestLocation: {
    latitude:  number;
    longitude: number;
    speed:     number;
    heading?:  number;
  } | null;
};

export type VehicleRoute = {
  vehicleId:   string;
  waypoints:   [number, number][];   // tüm rota noktaları
  currentIdx:  number;               // aracın şu anki konumu
  color:       string;
  label:       string;               // görev adı
};

// ── Araç ikonları ─────────────────────────────────────────────────────────────
function makeVehicleIcon(speed: number, status?: string, heading = 0): L.DivIcon {
  const isAlert = speed > 120;
  const isFaulty = status?.toUpperCase() === "FAULTY";
  const isMaint  = status?.toUpperCase() === "MAINTENANCE";

  const bodyColor =
    isAlert || isFaulty ? "#dc2626" : isMaint ? "#d97706" : "#1d4ed8";
  const accentColor = "#FFC72C";

  // SVG pin + araç
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="54" viewBox="0 0 44 54">
  <defs>
    <filter id="s${speed}" x="-30%" y="-20%" width="160%" height="160%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(0,0,0,0.3)"/>
    </filter>
  </defs>
  <!-- Pin shape -->
  <path d="M22 2 C10 2, 2 12, 2 22 C2 34, 12 44, 22 52 C32 44, 42 34, 42 22 C42 12, 34 2, 22 2Z"
        fill="${bodyColor}" filter="url(#s${speed})"/>
  <!-- Yellow ring -->
  <circle cx="22" cy="22" r="14" fill="none" stroke="${accentColor}" stroke-width="2.5" opacity="0.9"/>
  <!-- Car top-view icon inside -->
  <g transform="translate(22,22) rotate(${heading})">
    <!-- Body -->
    <rect x="-6" y="-9" width="12" height="18" rx="3" fill="white" opacity="0.95"/>
    <!-- Windshield -->
    <rect x="-5" y="-9" width="10" height="5" rx="2" fill="${bodyColor}" opacity="0.7"/>
    <!-- Headlights -->
    <rect x="-7" y="-9" width="3" height="4" rx="1" fill="${accentColor}"/>
    <rect x="4"  y="-9" width="3" height="4" rx="1" fill="${accentColor}"/>
    <!-- Tail lights -->
    <rect x="-7" y="6" width="3" height="3" rx="1" fill="#ef4444"/>
    <rect x="4"  y="6" width="3" height="3" rx="1" fill="#ef4444"/>
  </g>
  <!-- Speed alert badge -->
  ${isAlert ? `<circle cx="36" cy="8" r="8" fill="#dc2626" stroke="white" stroke-width="1.5"/>
  <text x="36" y="12" text-anchor="middle" font-size="7" font-weight="bold" fill="white">⚡</text>` : ""}
</svg>`;

  return L.divIcon({
    html: svg,
    className: "",
    iconSize:   [44, 54],
    iconAnchor: [22, 52],
    popupAnchor:[0,  -52],
  });
}

// ── Rota renkleri ──────────────────────────────────────────────────────────────
const ROUTE_COLORS = [
  "#1d4ed8", "#7c3aed", "#059669", "#dc2626",
  "#d97706", "#0891b2", "#be185d", "#65a30d",
];

function fixLeafletIcons() {
  const proto = L.Icon.Default.prototype as unknown as { _getIconUrl?: string };
  delete proto._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

function MapViewSync({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, center[0], center[1], zoom]);
  return null;
}

// ── Start / bitiş marker ikonları ─────────────────────────────────────────────
function makeEndpointIcon(type: "start" | "end"): L.DivIcon {
  const color = type === "start" ? "#16a34a" : "#dc2626";
  const symbol = type === "start" ? "▶" : "■";
  return L.divIcon({
    html: `<div style="
      width:24px;height:24px;border-radius:50%;
      background:${color};color:white;
      display:flex;align-items:center;justify-content:center;
      font-size:10px;font-weight:bold;
      box-shadow:0 2px 6px rgba(0,0,0,0.3);
      border:2px solid white;">${symbol}</div>`,
    className: "",
    iconSize:   [24, 24],
    iconAnchor: [12, 12],
  });
}

// ── Ana bileşen ────────────────────────────────────────────────────────────────
export default function VehicleLiveMap({
  vehicles,
  routes = [],
}: {
  vehicles: LiveVehicleForMap[];
  routes?:  VehicleRoute[];
}) {
  const iconsFixed = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined" || iconsFixed.current) return;
    fixLeafletIcons();
    iconsFixed.current = true;
  }, []);

  const points = useMemo(
    () =>
      vehicles.filter(
        (v): v is typeof v & { latestLocation: NonNullable<typeof v.latestLocation> } =>
          v.latestLocation != null,
      ),
    [vehicles],
  );

  const hasPoints = points.length > 0;
  const center: [number, number] = hasPoints
    ? [points[0].latestLocation.latitude, points[0].latestLocation.longitude]
    : DEFAULT_CENTER;
  const zoom = hasPoints ? FOCUS_ZOOM : DEFAULT_ZOOM;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "460px", borderRadius: "14px", border: "1px solid #d0ddf0" }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom
        className="h-full w-full"
        style={{ minHeight: 460, zIndex: 0 }}
      >
        <MapViewSync center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ── Rota çizgileri ──────────────────────────────────── */}
        {routes.map((route, ri) => {
          const color     = route.color || ROUTE_COLORS[ri % ROUTE_COLORS.length];
          const completed = route.waypoints.slice(0, route.currentIdx + 1);
          const remaining = route.waypoints.slice(route.currentIdx);

          return (
            <div key={route.vehicleId}>
              {/* Tamamlanan yol — koyu */}
              {completed.length >= 2 && (
                <Polyline
                  positions={completed}
                  pathOptions={{ color, weight: 4, opacity: 0.85 }}
                />
              )}
              {/* Kalan yol — kesik çizgi */}
              {remaining.length >= 2 && (
                <Polyline
                  positions={remaining}
                  pathOptions={{
                    color,
                    weight: 3,
                    opacity: 0.45,
                    dashArray: "8 6",
                  }}
                />
              )}
              {/* Başlangıç noktası */}
              {route.waypoints.length > 0 && (
                <Marker
                  position={route.waypoints[0]}
                  icon={makeEndpointIcon("start")}
                >
                  <Popup>
                    <p style={{ fontWeight: 600, fontSize: "12px", color: "#16a34a" }}>
                      ▶ Başlangıç
                    </p>
                    <p style={{ fontSize: "11px", color: "#4a6080" }}>{route.label}</p>
                  </Popup>
                </Marker>
              )}
              {/* Varış noktası */}
              {route.waypoints.length > 1 && (
                <Marker
                  position={route.waypoints[route.waypoints.length - 1]}
                  icon={makeEndpointIcon("end")}
                >
                  <Popup>
                    <p style={{ fontWeight: 600, fontSize: "12px", color: "#dc2626" }}>
                      ■ Hedef
                    </p>
                    <p style={{ fontSize: "11px", color: "#4a6080" }}>{route.label}</p>
                  </Popup>
                </Marker>
              )}
            </div>
          );
        })}

        {/* ── Araç marker'ları ─────────────────────────────────── */}
        {points.map((v) => (
          <Marker
            key={v.id}
            position={[v.latestLocation.latitude, v.latestLocation.longitude]}
            icon={makeVehicleIcon(
              v.latestLocation.speed,
              v.status,
              v.latestLocation.heading ?? 0,
            )}
          >
            <Popup>
              <div style={{ minWidth: "170px", fontFamily: "inherit" }}>
                <p style={{ fontWeight: 700, fontSize: "13px", color: "#003087", marginBottom: 6 }}>
                  🚗 {v.plateNumber}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "3px 8px", fontSize: "12px", color: "#4a6080" }}>
                  <span>Hız:</span>
                  <span style={{ fontWeight: 600, color: v.latestLocation.speed > 120 ? "#dc2626" : "#16a34a" }}>
                    {v.latestLocation.speed} km/h{v.latestLocation.speed > 120 ? " ⚡ İHLAL" : ""}
                  </span>
                  <span>Enlem:</span>
                  <span style={{ fontFamily: "monospace" }}>{v.latestLocation.latitude.toFixed(5)}</span>
                  <span>Boylam:</span>
                  <span style={{ fontFamily: "monospace" }}>{v.latestLocation.longitude.toFixed(5)}</span>
                  {v.latestLocation.heading !== undefined && (
                    <>
                      <span>Yön:</span>
                      <span>{v.latestLocation.heading}°</span>
                    </>
                  )}
                </div>
                {v.status && (
                  <div style={{ marginTop: 6 }}>
                    <span className={vehicleStatusClass(v.status)}>{v.status}</span>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* ── Lejand ───────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", bottom: 12, left: 12, zIndex: 1000,
        background: "rgba(255,255,255,0.96)", borderRadius: 10,
        padding: "8px 12px", fontSize: 11, color: "#4a6080",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)", pointerEvents: "none",
        backdropFilter: "blur(4px)",
      }}>
        <p style={{ fontWeight: 700, color: "#003087", marginBottom: 4, fontSize: 11 }}>
          Harita Göstergesi
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <span>🟦 Aktif araç konumu</span>
          <span>🟢 Rota başlangıcı &nbsp; 🔴 Hedef</span>
          <span style={{ color: "#6a8ab0" }}>—— Tamamlanan yol</span>
          <span style={{ color: "#6a8ab0" }}>- - Kalan yol</span>
          {hasPoints ? (
            <span style={{ color: "#003087", fontWeight: 600 }}>
              📡 {points.length} araç aktif
            </span>
          ) : (
            <span style={{ color: "#c0cce0" }}>GPS bekleniyor…</span>
          )}
        </div>
      </div>

      {routes.length > 0 && (
        <div style={{
          position: "absolute", top: 12, right: 12, zIndex: 1000,
          background: "rgba(255,255,255,0.96)", borderRadius: 10,
          padding: "8px 12px", fontSize: 11,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)", pointerEvents: "none",
          maxWidth: 200,
        }}>
          <p style={{ fontWeight: 700, color: "#003087", marginBottom: 4, fontSize: 11 }}>
            Aktif Rotalar ({routes.length})
          </p>
          {routes.slice(0, 5).map((r, ri) => (
            <div key={r.vehicleId} style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
              <div style={{
                width: 12, height: 3, borderRadius: 2,
                background: r.color || ROUTE_COLORS[ri % ROUTE_COLORS.length],
                flexShrink: 0,
              }} />
              <span style={{ color: "#4a6080", fontSize: 10 }} className="truncate">{r.label}</span>
            </div>
          ))}
          {routes.length > 5 && (
            <span style={{ color: "#6a8ab0", fontSize: 10 }}>+{routes.length - 5} daha…</span>
          )}
        </div>
      )}
    </div>
  );
}
