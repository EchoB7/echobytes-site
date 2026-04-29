import Image from "next/image";
import { getWhatsAppUrl, site } from "@/content/site";

// ── Design tokens ──────────────────────────────────────────────
const W = 1200; // max-width

// ── Platform data ──────────────────────────────────────────────
const PLATFORMS = [
  { label: "Samsung TV", icon: "📺" },
  { label: "LG TV",      icon: "📺" },
  { label: "Roku",       icon: "📡" },
  { label: "Android TV", icon: "🖥️" },
  { label: "Fire TV",    icon: "🔥" },
  { label: "Apple TV",   icon: "🍎" },
  { label: "Android",    icon: "📱" },
  { label: "iOS",        icon: "📱" },
  { label: "Web Player", icon: "🌐" },
  { label: "Windows",    icon: "💻" },
  { label: "macOS",      icon: "💻" },
  { label: "Linux",      icon: "🐧" },
];

const FEATURES = [
  {
    icon: "🎨",
    title: "100% White-Label",
    desc: "Nome, logo, cores e identidade visual totalmente personalizados. Seu cliente não sabe que existe um desenvolvedor por trás.",
  },
  {
    icon: "⚡",
    title: "12 Plataformas",
    desc: "Um único app entregue em Smart TV Samsung, LG, Roku, Android TV, Fire TV, Apple TV, iOS, Android, Web, Windows, macOS e Linux.",
  },
  {
    icon: "🔗",
    title: "Integrações Nativas",
    desc: "Compatível com Xtream Codes, M3U, TMDB, EPG e painéis de revendedor. Pronto para conectar qualquer provedor de IPTV.",
  },
  {
    icon: "🛠️",
    title: "Suporte & Updates",
    desc: "Atualizações contínuas e suporte técnico incluídos. Seu app evolui junto com o mercado, sem custo extra.",
  },
  {
    icon: "📊",
    title: "Painel de Gestão",
    desc: "Controle de usuários, playlists, ativação de planos e relatórios de acesso em um painel web intuitivo.",
  },
  {
    icon: "🔒",
    title: "Controle Parental & DRM",
    desc: "Bloqueio por PIN, filtros de conteúdo por categoria e proteção de conteúdo para operações premium.",
  },
];

const SCREENSHOTS = [
  { file: "Home.png",         label: "Tela Principal" },
  { file: "Player.png",       label: "Player de Vídeo" },
  { file: "Movies.png",       label: "Filmes" },
  { file: "Series.png",       label: "Séries" },
  { file: "Config.png",       label: "Configurações" },
  { file: "LoginProvider.png",label: "Login" },
];

const PACKAGES = [
  {
    title: "Starter",
    subtitle: "Para provedores iniciantes",
    price: "Consulte",
    bullets: [
      "Android TV + Fire TV",
      "Android Mobile + iOS",
      "Web Player",
      "Sua marca e logo",
      "Suporte 30 dias",
    ],
    featured: false,
  },
  {
    title: "Pro",
    subtitle: "Mais escolhido",
    price: "Consulte",
    bullets: [
      "Tudo do Starter",
      "Samsung Smart TV",
      "LG webOS",
      "Roku TV",
      "Apple TV",
      "Painel de gestão",
      "Suporte 90 dias",
    ],
    featured: true,
  },
  {
    title: "Enterprise",
    subtitle: "Cobertura total",
    price: "Consulte",
    bullets: [
      "Tudo do Pro",
      "Windows, macOS, Linux",
      "Customizações avançadas",
      "Integração com revendedor",
      "SLA prioritário",
      "Updates 12 meses",
    ],
    featured: false,
  },
];

const STEPS = [
  { n: "1", title: "Briefing", desc: "Você nos envia logo, cores e dados da sua marca. Em 24h já temos o projeto configurado." },
  { n: "2", title: "Desenvolvimento", desc: "Nossa equipe constrói e testa o app em todas as plataformas contratadas." },
  { n: "3", title: "Entrega & Publicação", desc: "App publicado nas lojas (Google Play, App Store, etc.) com sua conta de developer." },
];

// ── Component ──────────────────────────────────────────────────
export default function HomePage() {
  const wa = getWhatsAppUrl(site.links.whatsapp);

  return (
    <main style={{ background: "#080808", color: "#f0f0f0" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{
        position: "relative", overflow: "hidden",
        padding: "100px 24px 80px",
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(229,9,20,0.18) 0%, transparent 70%), #080808",
      }}>
        <div style={{ maxWidth: W, margin: "0 auto", textAlign: "center" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#130305", border: "1px solid #3a0009", borderRadius: 100, padding: "6px 14px", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e50914", display: "inline-block", animation: "pulse-glow 2s infinite" }}></span>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#ff6b6b", letterSpacing: "0.04em" }}>12 PLATAFORMAS · WHITE-LABEL · PRONTO PARA USO</span>
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
            Seu app de streaming<br />
            <span style={{ color: "#e50914" }}>em qualquer tela</span>
          </h1>

          <p className="animate-fade-up-2" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#999", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Desenvolvemos apps OTT white-label completos — da Smart TV ao celular — com sua marca, logo e cores. Entregue em até 30 dias.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={wa} target="_blank" rel="noreferrer" className="btn-red">
              💬 Solicitar orçamento
            </a>
            <a href="#portfolio" className="btn-ghost">
              Ver portfolio →
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", marginTop: 64 }}>
            {[
              { n: "12", label: "Plataformas" },
              { n: "30", label: "Dias p/ entrega" },
              { n: "100%", label: "White-label" },
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
            <span className="section-label">Compatibilidade</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              Um app, todas as telas
            </h2>
            <p style={{ color: "#777", marginTop: 12, fontSize: "1rem", maxWidth: 500, margin: "12px auto 0" }}>
              Desenvolvemos nativamente para cada plataforma — sem soluções genéricas.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12 }}>
            {PLATFORMS.map(p => (
              <div key={p.label} className="platform-badge">
                <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>{p.icon}</span>
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
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#e50914", textTransform: "uppercase", marginBottom: 6 }}>Demonstração ao vivo</p>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f0f0f0" }}>App rodando em Android TV — White-label completo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECURSOS ─────────────────────────────────────── */}
      <section id="recursos" style={{ padding: "80px 24px", borderTop: "1px solid #141414" }}>
        <div style={{ maxWidth: W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Recursos</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              Tudo que seu negócio precisa
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
            <span className="section-label">Portfolio</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              Interface de nível profissional
            </h2>
            <p style={{ color: "#777", marginTop: 12, fontSize: "1rem" }}>Screenshots reais do app rodando em TV</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
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
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid #141414" }}>
        <div style={{ maxWidth: W, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label">Processo</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              Do briefing ao app publicado
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
            <span className="section-label">Planos</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#f0f0f0" }}>
              Escolha seu pacote
            </h2>
            <p style={{ color: "#777", marginTop: 12, fontSize: "1rem" }}>Todos incluem personalização completa da marca</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {PACKAGES.map(pkg => (
              <div key={pkg.title} className={`card${pkg.featured ? " card-featured" : ""}`} style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                {pkg.featured && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "#e50914", color: "#fff", fontSize: "0.72rem", fontWeight: 700,
                    letterSpacing: "0.08em", padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap"
                  }}>MAIS ESCOLHIDO</div>
                )}
                <div style={{ marginBottom: 8 }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#f0f0f0" }}>{pkg.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#666", marginTop: 4 }}>{pkg.subtitle}</p>
                </div>
                <p style={{ fontSize: "1.5rem", fontWeight: 800, color: pkg.featured ? "#e50914" : "#f0f0f0", margin: "16px 0" }}>
                  {pkg.price}
                  <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "#666" }}> — solicite proposta</span>
                </p>
                <hr className="divider" style={{ marginBottom: 20 }} />
                <ul className="check-list" style={{ flex: 1 }}>
                  {pkg.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <a href={wa} target="_blank" rel="noreferrer"
                  className={pkg.featured ? "btn-red" : "btn-ghost"}
                  style={{ marginTop: 28, textAlign: "center", justifyContent: "center" }}>
                  Solicitar este plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section style={{
        padding: "100px 24px",
        borderTop: "1px solid #141414",
        background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(229,9,20,0.14) 0%, transparent 70%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-label">Pronto para começar?</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#f0f0f0", margin: "12px 0 20px" }}>
            Lance seu app de streaming hoje
          </h2>
          <p style={{ color: "#888", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 40 }}>
            Entre em contato agora e receba uma proposta personalizada em até 24 horas. Sem compromisso.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={wa} target="_blank" rel="noreferrer" className="btn-red" style={{ fontSize: "1rem", padding: "16px 32px" }}>
              💬 Falar no WhatsApp
            </a>
            <a href={`mailto:${site.links.email}`} className="btn-ghost" style={{ fontSize: "1rem", padding: "16px 32px" }}>
              ✉️ Enviar e-mail
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
