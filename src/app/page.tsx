"use client";
import { useState } from "react";
import Image from "next/image";
import {
  siSamsung, siLg, siRoku, siGoogletv,
  siApple, siAppletv, siAndroid, siLinux, siFirefoxbrowser,
} from "simple-icons";
import { getWhatsAppUrl, site } from "@/content/site";
import { useLanguage } from "@/contexts/LanguageContext";

// ── Design tokens ──────────────────────────────────────────────
const W = 1200; // max-width

// ── Platform SVG icon component ───────────────────────────────
function BrandIcon({ path, hex, size = 32 }: { path: string; hex: string; size?: number }) {
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill={`#${hex}`} xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  );
}

// Custom SVGs for brands not in simple-icons
const WINDOWS_PATH = "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801";
const FIRETV_PATH = "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z";

// ── Platform data ──────────────────────────────────────────────
type Platform = { label: string; svgPath: string; hex: string };
const PLATFORMS: Platform[] = [
  { label: "Samsung TV",  svgPath: siSamsung.path,      hex: siSamsung.hex },
  { label: "LG TV",       svgPath: siLg.path,           hex: siLg.hex },
  { label: "Roku",        svgPath: siRoku.path,         hex: siRoku.hex },
  { label: "Android TV",  svgPath: siGoogletv.path,     hex: siGoogletv.hex },
  { label: "Fire TV",     svgPath: FIRETV_PATH,         hex: "FF9900" },
  { label: "Apple TV",    svgPath: siAppletv.path,      hex: siAppletv.hex },
  { label: "Android",     svgPath: siAndroid.path,      hex: siAndroid.hex },
  { label: "iOS",         svgPath: siApple.path,        hex: siApple.hex },
  { label: "Web Player",  svgPath: siFirefoxbrowser.path, hex: "FF7139" },
  { label: "Windows",     svgPath: WINDOWS_PATH,        hex: "0078D4" },
  { label: "macOS",       svgPath: siApple.path,        hex: "999999" },
  { label: "Linux",       svgPath: siLinux.path,        hex: siLinux.hex },
];

// ── Lead capture form ────────────────────────────────────────
const PLATFORM_OPTIONS = [
  "Android TV", "Samsung TV", "LG TV", "Apple TV",
  "Fire TV", "Roku", "iOS", "Android", "Web Player",
];

function LeadForm({ t }: { t: (k: Parameters<ReturnType<typeof useLanguage>["t"]>[0]) => string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [msg, setMsg] = useState("");

  function togglePlatform(p: string) {
    setPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parts = [
      `*Nome:* ${name}`,
      phone ? `*WhatsApp/Tel:* ${phone}` : null,
      platforms.length ? `*Plataformas:* ${platforms.join(", ")}` : null,
      msg ? `*Mensagem:* ${msg}` : null,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/5521990590516?text=${encodeURIComponent(parts)}`, "_blank", "noreferrer");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "#111", border: "1px solid #2a2a2a",
    borderRadius: 10, color: "#f0f0f0", fontSize: "0.95rem",
    padding: "12px 16px", outline: "none", boxSizing: "border-box",
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left", marginTop: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label style={{ display: "block", color: "#aaa", fontSize: "0.85rem", marginBottom: 6 }}>
            {t("form_name_label")} *
          </label>
          <input required style={inputStyle} value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t("form_placeholder_name")} />
        </div>
        <div>
          <label style={{ display: "block", color: "#aaa", fontSize: "0.85rem", marginBottom: 6 }}>
            {t("form_phone_label")}
          </label>
          <input style={inputStyle} value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder={t("form_placeholder_phone")} />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", color: "#aaa", fontSize: "0.85rem", marginBottom: 10 }}>
          {t("form_platform_label")}
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {PLATFORM_OPTIONS.map(p => (
            <button key={p} type="button" onClick={() => togglePlatform(p)}
              style={{
                padding: "6px 14px", borderRadius: 20, cursor: "pointer", transition: "all 0.15s",
                border: platforms.includes(p) ? "1.5px solid #e50914" : "1.5px solid #333",
                background: platforms.includes(p) ? "rgba(229,9,20,0.15)" : "transparent",
                color: platforms.includes(p) ? "#ff4d5a" : "#888",
                fontSize: "0.82rem",
              }}>
              {p}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={{ display: "block", color: "#aaa", fontSize: "0.85rem", marginBottom: 6 }}>
          {t("form_message_label")}
        </label>
        <textarea rows={3} style={{ ...inputStyle, resize: "vertical" }} value={msg}
          onChange={e => setMsg(e.target.value)}
          placeholder={t("form_placeholder_message")} />
      </div>

      <button type="submit" className="btn-red"
        style={{ width: "100%", fontSize: "1rem", padding: "16px 32px", justifyContent: "center" }}>
        {t("form_send")}
      </button>
    </form>
  );
}

// ── Component ──────────────────────────────────────────────────
export default function HomePage() {
  const wa = getWhatsAppUrl(site.links.whatsapp);
  const { t } = useLanguage();

  const FEATURES = [
    { icon: "🎨", title: t("feat_wl_title"),    desc: t("feat_wl_desc") },
    { icon: "⚡",  title: t("feat_12_title"),    desc: t("feat_12_desc") },
    { icon: "🔗", title: t("feat_int_title"),   desc: t("feat_int_desc") },
    { icon: "🛠️", title: t("feat_sup_title"),   desc: t("feat_sup_desc") },
    { icon: "📊", title: t("feat_panel_title"), desc: t("feat_panel_desc") },
    { icon: "🔒", title: t("feat_drm_title"),   desc: t("feat_drm_desc") },
  ];

  const SCREENSHOTS = [
    { file: "Home.png",          label: t("screen_home") },
    { file: "Player.png",        label: t("screen_player") },
    { file: "Movies.png",        label: t("screen_movies") },
    { file: "Series.png",        label: t("screen_series") },
    { file: "Config.png",        label: t("screen_config") },
    { file: "LoginProvider.png", label: t("screen_login") },
  ];

  const MODEL2 = [
    { file: "Home.png",          label: t("screen_home") },
    { file: "Live.png",          label: t("screen_live") },
    { file: "SearchLive.png",    label: t("screen_search_live") },
    { file: "Movies.png",        label: t("screen_movies") },
    { file: "MoviesSinopse.png", label: t("screen_movies_sinopse") },
    { file: "Series.png",        label: t("screen_series") },
    { file: "Player.png",        label: t("screen_player") },
    { file: "SearchMovies.png",  label: t("screen_search_movies") },
  ];

  const PACKAGES = [
    {
      title: "Starter",
      subtitle: t("pkg_starter_subtitle"),
      price: "Consulte",
      bullets: [
        "Android TV + Fire TV",
        "Android Mobile + iOS",
        "Web Player",
        t("pkg_brand"),
        t("pkg_support_30"),
      ],
      featured: false,
    },
    {
      title: "Pro",
      subtitle: t("pkg_pro_subtitle"),
      price: "Consulte",
      bullets: [
        "Tudo do Starter",
        "Samsung Smart TV",
        "LG webOS",
        "Roku TV",
        "Apple TV",
        t("pkg_panel"),
        t("pkg_support_90"),
      ],
      featured: true,
    },
    {
      title: "Enterprise",
      subtitle: t("pkg_enterprise_subtitle"),
      price: "Consulte",
      bullets: [
        "Tudo do Pro",
        "Windows, macOS, Linux",
        t("pkg_advanced"),
        t("pkg_reseller"),
        t("pkg_sla"),
        t("pkg_updates_12"),
      ],
      featured: false,
    },
  ];

  const STEPS = [
    { n: "1", title: t("step1_title"), desc: t("step1_desc") },
    { n: "2", title: t("step2_title"), desc: t("step2_desc") },
    { n: "3", title: t("step3_title"), desc: t("step3_desc") },
  ];

  return (
    <main style={{ background: "#080808", color: "#f0f0f0" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden",
        padding: "100px 24px 80px",
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(229,9,20,0.18) 0%, transparent 70%), #080808",
      }}>
        <div style={{ maxWidth: W, margin: "0 auto", textAlign: "center" }}>

          {/* Icon */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            <Image src="/icon.png" alt="YourottApp" width={80} height={80} style={{ borderRadius: 20, boxShadow: "0 0 40px rgba(229,9,20,0.4)" }} />
          </div>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#130305", border: "1px solid #3a0009", borderRadius: 100, padding: "6px 14px", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e50914", display: "inline-block", animation: "pulse-glow 2s infinite" }}></span>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#ff6b6b", letterSpacing: "0.04em" }}>{t("hero_badge")}</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up" style={{
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: 24,
            color: "#f5f5f5",
          }}>
            {t("hero_h1_1")}<br />
            <span style={{ color: "#e50914" }}>{t("hero_h1_2")}</span>
          </h1>

          <p className="animate-fade-up-2" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#999", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}>
            {t("hero_sub")}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={wa} target="_blank" rel="noreferrer" className="btn-red">
              {t("hero_cta_quote")}
            </a>
            <a href="#portfolio" className="btn-ghost">
              {t("hero_cta_portfolio")}
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", marginTop: 64 }}>
            {[
              { n: t("stat_platforms"), label: t("nav_platforms") },
              { n: t("stat_delivery"),   label: t("stat_delivery_label") },
              { n: t("stat_whitelabel"), label: "White-label" },
            ].map(s => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2rem", fontWeight: 900, color: "#e50914", lineHeight: 1, letterSpacing: "-0.03em" }}>{s.n}</p>
                <p style={{ fontSize: "0.8rem", color: "#666", marginTop: 4, fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATAFORMAS ──────────────────────────────────── */}
      <section id="plataformas" style={{ padding: "80px 24px", borderTop: "1px solid #141414" }}>
        <div style={{ maxWidth: W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">{t("sect_compat")}</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              {t("platforms_h2")}
            </h2>
            <p style={{ color: "#777", marginTop: 12, fontSize: "1rem", maxWidth: 500, margin: "12px auto 0" }}>
              {t("platforms_sub")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12 }}>
            {PLATFORMS.map(p => (
              <div key={p.label} className="platform-badge">
                <BrandIcon path={p.svgPath} hex={p.hex} size={30} />
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO DEMO ────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: W, margin: "0 auto" }}>
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid #222", background: "#000" }}>
            {/* TV frame overlay */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2, borderRadius: 16, boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)" }} />
            <video
              autoPlay muted loop playsInline
              style={{ width: "100%", display: "block", maxHeight: 520, objectFit: "cover" }}
              src="/portfolio/tv/demo.mp4"
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3,
              background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
              padding: "40px 28px 24px",
            }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#e50914", textTransform: "uppercase", marginBottom: 6 }}>{t("video_live_demo")}</p>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f0f0f0" }}>{t("video_caption")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECURSOS ─────────────────────────────────────── */}
      <section id="recursos" style={{ padding: "80px 24px", borderTop: "1px solid #141414" }}>
        <div style={{ maxWidth: W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">{t("sect_features")}</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              {t("features_h2")}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 16 }}>
            {FEATURES.map(f => (
              <div key={f.title} className="card">
                <span style={{ fontSize: "1.8rem", marginBottom: 16, display: "block" }}>{f.icon}</span>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#f0f0f0", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ──────────────────────────────────── */}
      <section id="portfolio" style={{ padding: "80px 24px", borderTop: "1px solid #141414", background: "#0a0a0a" }}>
        <div style={{ maxWidth: W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">{t("sect_portfolio")}</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              {t("portfolio_h2")}
            </h2>
            <p style={{ color: "#777", marginTop: 12, fontSize: "1rem" }}>{t("portfolio_sub")}</p>
          </div>

          {/* Tab labels */}
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#e50914", textTransform: "uppercase", marginBottom: 16 }}>{t("portfolio_smarttv_label")}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14, marginBottom: 48 }}>
            {SCREENSHOTS.map(s => (
              <div key={s.file} style={{ position: "relative", overflow: "hidden", borderRadius: 10, border: "1px solid #1e1e1e", background: "#111" }}>
                <Image
                  src={`/portfolio/tv/${s.file}`}
                  alt={s.label}
                  width={560}
                  height={315}
                  className="screenshot-img"
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 0 }}
                />
                <div style={{ padding: "10px 14px", borderTop: "1px solid #1e1e1e" }}>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#aaa" }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile screenshots */}
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#e50914", textTransform: "uppercase", marginBottom: 16 }}>{t("portfolio_mobile_label")}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14 }}>
            {["1", "2", "3", "4"].map((n, i) => (
              <div key={n} style={{ overflow: "hidden", borderRadius: 16, border: "1px solid #1e1e1e", background: "#111" }}>
                <Image
                  src={`/portfolio/mobile/${n}.jpeg`}
                  alt={`${t("mobile_screen")} ${i + 1}`}
                  width={360}
                  height={640}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>

          {/* ── MODELO 2 ── */}
          <div style={{ marginTop: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#a855f7", textTransform: "uppercase" }}>{t("model2_label")}</p>
              <div style={{ flex: 1, height: 1, background: "#1e1e1e" }} />
            </div>
            <p style={{ color: "#666", fontSize: "0.85rem", marginBottom: 24 }}>{t("model2_sub")}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {[
                ...MODEL2
              ].map(s => (
                <div key={s.file} style={{ position: "relative", overflow: "hidden", borderRadius: 10, border: "1px solid #2a1a3a", background: "#0e0a14" }}>
                  <Image
                    src={`/portfolio/modelo2/${s.file}`}
                    alt={s.label}
                    width={560}
                    height={315}
                    className="screenshot-img"
                    style={{ width: "100%", height: "auto", display: "block", borderRadius: 0 }}
                  />
                  <div style={{ padding: "10px 14px", borderTop: "1px solid #2a1a3a" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#c084fc" }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid #141414" }}>
        <div style={{ maxWidth: W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">{t("sect_process")}</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              {t("steps_h2")}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div className="step-number">{s.n}</div>
                  {i < STEPS.length - 1 && (
                    <div style={{ flex: 1, height: 1, background: "#222" }} className="hidden sm:block" />
                  )}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#f0f0f0" }}>{s.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACOTES ──────────────────────────────────────── */}
      <section id="pacotes" style={{ padding: "80px 24px", borderTop: "1px solid #141414", background: "#0a0a0a" }}>
        <div style={{ maxWidth: W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">{t("sect_plans")}</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              {t("packages_h2")}
            </h2>
            <p style={{ color: "#777", marginTop: 12, fontSize: "1rem" }}>{t("packages_sub")}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {PACKAGES.map(pkg => (
              <div key={pkg.title} className={`card${pkg.featured ? " card-featured" : ""}`} style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                {pkg.featured && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "#e50914", color: "#fff", fontSize: "0.72rem", fontWeight: 700,
                    letterSpacing: "0.08em", padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap"
                  }}>{t("pkg_most_chosen")}</div>
                )}
                <div style={{ marginBottom: 8 }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#f0f0f0" }}>{pkg.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#666", marginTop: 4 }}>{pkg.subtitle}</p>
                </div>
                <p style={{ fontSize: "1.5rem", fontWeight: 800, color: pkg.featured ? "#e50914" : "#f0f0f0", margin: "16px 0" }}>
                  {pkg.price}
                  <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "#666" }}>{t("pkg_price_note")}</span>
                </p>
                <hr className="divider" style={{ marginBottom: 20 }} />
                <ul className="check-list" style={{ flex: 1 }}>
                  {pkg.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <a href={wa} target="_blank" rel="noreferrer"
                  className={pkg.featured ? "btn-red" : "btn-ghost"}
                  style={{ marginTop: 28, textAlign: "center", justifyContent: "center" }}>
                  {t("pkg_request")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section style={{
        padding: "80px 24px 100px",
        borderTop: "1px solid #141414",
        background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(229,9,20,0.14) 0%, transparent 70%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span className="section-label">{t("sect_ready")}</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#f0f0f0", margin: "12px 0 20px" }}>
            {t("cta_h2")}
          </h2>
          <p style={{ color: "#888", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 40 }}>
            {t("cta_sub")}
          </p>
          <LeadForm t={t} />
        </div>
      </section>

    </main>
  );
}
