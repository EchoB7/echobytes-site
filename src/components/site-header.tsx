"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getWhatsAppUrl, site } from "@/content/site";

const nav = [
  { href: "#plataformas", label: "Plataformas" },
  { href: "#recursos", label: "Recursos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pacotes", label: "Preços" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl(site.links.whatsapp);

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

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"
            style={{ display: "none", fontSize: "0.85rem", color: "#aaa", borderBottom: "1px solid transparent", transition: "color 0.2s" }}
            className="sm:!inline"
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#aaa")}>
            WhatsApp
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-red" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
            Falar com vendas
          </a>
        </div>
      </div>
    </header>
  );
}
