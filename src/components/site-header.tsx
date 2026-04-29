"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { getWhatsAppUrl, site } from "@/content/site";
import { useLanguage, LANGS } from "@/contexts/LanguageContext";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = getWhatsAppUrl(site.links.whatsapp);
  const { t, lang, setLang } = useLanguage();

  const nav = [
    { href: "#plataformas", label: t("nav_platforms") },
    { href: "#recursos",    label: t("nav_features") },
    { href: "#portfolio",   label: t("nav_portfolio") },
    { href: "#pacotes",     label: t("nav_pricing") },
    { href: "#contato",     label: t("nav_contact") },
  ];

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      borderBottom: "1px solid #1a1a1a",
      background: "rgba(8,8,8,0.92)",
      backdropFilter: "blur(12px)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/icon.png" alt="YourottApp" width={34} height={34} style={{ borderRadius: 8 }} />
          <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#f0f0f0", letterSpacing: "-0.02em" }}>
            Yourott<span style={{ color: "#e50914" }}>App</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden sm:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </nav>

        {/* Right: language picker + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

          {/* Language picker */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "transparent", border: "1px solid #333",
                borderRadius: 8, padding: "6px 10px", cursor: "pointer",
                color: "#ccc", fontSize: "0.82rem", fontWeight: 600,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#e50914")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333")}
              aria-label="Select language"
            >
              <span style={{ fontSize: "1rem" }}>{current.flag}</span>
              <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" style={{ opacity: 0.6 }}>
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>

            {langOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "#111", border: "1px solid #2a2a2a",
                borderRadius: 10, minWidth: 160, zIndex: 200,
                boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                maxHeight: 340, overflowY: "auto",
              }}>
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 8,
                      width: "100%", padding: "8px 14px",
                      background: l.code === lang ? "#1a1a1a" : "transparent",
                      border: "none", cursor: "pointer", color: l.code === lang ? "#e50914" : "#ccc",
                      fontSize: "0.85rem", textAlign: "left", fontWeight: l.code === lang ? 700 : 400,
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { if (l.code !== lang) (e.currentTarget as HTMLElement).style.background = "#1a1a1a"; }}
                    onMouseLeave={(e) => { if (l.code !== lang) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <span style={{ fontSize: "1rem" }}>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp text link (desktop only) */}
          <a href={whatsappUrl} target="_blank" rel="noreferrer"
            style={{ display: "none", fontSize: "0.85rem", color: "#aaa", transition: "color 0.2s" }}
            className="sm:!inline"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}>
            WhatsApp
          </a>

          {/* CTA button */}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-red hidden sm:inline-flex" style={{ padding: "10px 18px", fontSize: "0.82rem" }}>
            {t("nav_talk_sales")}
          </a>
        </div>
      </div>
    </header>
  );
}
