import axios, { AxiosError } from "axios";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api/v1";

export const ACCESS_TOKEN_KEY = "accessToken";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// ── Request interceptor: JWT token ekle ──────────────────────────────────────
api.interceptors.request.use((config) => {
  if (typeof window === "undefined") return config;

  const isLoginRequest =
    typeof config.url === "string" &&
    (config.url === "/auth/login" || config.url.endsWith("/auth/login"));

  if (!isLoginRequest) {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

// ── Response interceptor: 401 → login'e yönlendir ───────────────────────────
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (
      typeof window !== "undefined" &&
      error.response?.status === 401 &&
      // login isteğinin kendisi 401 dönerse döngüye girme
      !error.config?.url?.includes("/auth/login")
    ) {
      console.warn("[api] 401 — token geçersiz veya süresi doldu, login sayfasına yönlendiriliyor");
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

/** Login sayfasında hata ayrıntılarını göstermek için kullanılan tip */
export type ApiClientErrorFields = {
  message: string;
  code?: string;
  status?: number;
  data?: unknown;
};

/** Axios hata nesnesinden login sayfasına özgü ayrıntılı hata alanlarını çıkartır */
export function getApiClientErrorFields(error: unknown): ApiClientErrorFields | null {
  if (!axios.isAxiosError(error)) return null;

  const data = error.response?.data;
  let message = "Bilinmeyen hata";

  if (data == null || data === "") {
    if (error.response?.status === 401) message = "E-posta veya şifre hatalı.";
    else if (error.response?.status === 403) message = "Bu işlem için yetkiniz yok.";
    else if (error.response?.status === 404) message = "İstenen kayıt bulunamadı.";
    else if (error.response?.status) message = `Hata (HTTP ${error.response.status}) — ${error.message}`;
    else message = error.message || "Ağ hatası — backend çalışıyor mu?";
  } else if (typeof data === "string") {
    message = data;
  } else if (typeof data === "object" && data !== null) {
    const o = data as Record<string, unknown>;
    if (typeof o.message === "string") message = o.message;
    else if (Array.isArray(o.message)) message = o.message.map(String).join(", ");
    else if (typeof o.error === "string") message = o.error;
    else { try { message = JSON.stringify(data); } catch { message = error.message || "Bilinmeyen hata"; } }
  }

  return {
    message,
    code: error.code,
    status: error.response?.status,
    data: error.response?.data,
  };
}

/** Axios hata nesnesinden okunabilir mesaj çıkartır */
export function getApiErrorMessage(error: unknown): string {
  if (!axios.isAxiosError(error)) {
    return error instanceof Error ? error.message : "Bilinmeyen hata";
  }

  const data = error.response?.data;

  if (data == null || data === "") {
    if (error.response?.status === 401) return "Oturum süresi doldu, lütfen tekrar giriş yapın.";
    if (error.response?.status === 403) return "Bu işlem için yetkiniz yok.";
    if (error.response?.status === 404) return "İstenen kayıt bulunamadı.";
    if (error.response?.status) return `Hata (HTTP ${error.response.status}) — ${error.message}`;
    return error.message || "Ağ hatası — backend çalışıyor mu?";
  }

  if (typeof data === "string") return data;

  if (typeof data === "object" && data !== null) {
    const o = data as Record<string, unknown>;
    if (typeof o.message === "string") return o.message;
    if (Array.isArray(o.message))      return o.message.map(String).join(", ");
    if (typeof o.error === "string")   return o.error;
  }

  try { return JSON.stringify(data); } catch { return error.message || "Bilinmeyen hata"; }
}

export default api;
