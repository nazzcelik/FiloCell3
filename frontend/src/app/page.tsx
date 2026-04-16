"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import api, {
  ACCESS_TOKEN_KEY,
  API_BASE_URL,
  getApiClientErrorFields,
  type ApiClientErrorFields,
} from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<ApiClientErrorFields | { message: string } | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data } = await api.post<{ accessToken: string }>("/auth/login", {
        email,
        password,
      });
      localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      router.push("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const fullUrl = err.config ? axios.getUri(err.config) : API_BASE_URL;
        console.log("[login] error (raw)", err);
        setError(getApiClientErrorFields(err) ?? { message: err.message });
        console.log("[login] request URL (resolved)", fullUrl);
      } else {
        setError({ message: err instanceof Error ? err.message : String(err) });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-full flex items-center justify-center px-4 py-12"
      style={{
        background: "linear-gradient(135deg, #003087 0%, #001a52 60%, #0a1f4e 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "400px",
            height: "400px",
            background: "rgba(255,199,44,0.08)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            background: "rgba(255,199,44,0.05)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="w-full max-w-sm relative z-10">
        {/* Logo & Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <div
              style={{
                background: "#FFC72C",
                borderRadius: "16px",
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(255,199,44,0.4)",
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 7l-7-4-7 4m14 0v10l-7 4m7-14l-7 4m-7-4l7 4m0 10V11"
                  stroke="#003087"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{ color: "#FFC72C" }}
          >
            FiloCell
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#a0b4d4" }}>
            Kurumsal Araç Takip Platformu
          </p>
          <p className="mt-1 text-xs" style={{ color: "#6a8ab0" }}>
            Turkcell IoT &amp; M2M
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8 shadow-2xl"
          style={{ background: "rgba(255,255,255,0.97)" }}
        >
          <h2
            className="text-lg font-semibold mb-6 text-center"
            style={{ color: "#003087" }}
          >
            Hesabınıza giriş yapın
          </h2>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "#003087" }}
              >
                E-posta
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@firma.com"
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                style={{
                  borderColor: "#c8d8f0",
                  color: "#0f1b35",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#003087";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,48,135,0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#c8d8f0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "#003087" }}
              >
                Şifre
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition"
                style={{ borderColor: "#c8d8f0", color: "#0f1b35" }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#003087";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,48,135,0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#c8d8f0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {error && (
              <div
                className="rounded-xl px-4 py-3 text-sm space-y-1"
                style={{
                  background: "#fff0f0",
                  border: "1px solid #fca5a5",
                  color: "#dc2626",
                }}
                role="alert"
              >
                <div>message: {error.message}</div>
                {"code" in error && error.code != null && error.code !== "" && (
                  <div>code: {error.code}</div>
                )}
                {"status" in error && error.status != null && (
                  <div>status: {error.status}</div>
                )}
                {"data" in error && error.data !== undefined && (
                  <div className="break-words">
                    data:{" "}
                    {typeof error.data === "string"
                      ? error.data
                      : JSON.stringify(error.data)}
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl py-3 text-sm font-semibold transition-all"
              style={{
                background: loading ? "#6a8ab0" : "#FFC72C",
                color: "#003087",
                boxShadow: loading ? "none" : "0 4px 16px rgba(255,199,44,0.45)",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Giriş yapılıyor…" : "Giriş Yap"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#6a8ab0" }}>
          © 2026 Turkcell Teknoloji — FiloCell v1.0
        </p>
      </div>
    </div>
  );
}
