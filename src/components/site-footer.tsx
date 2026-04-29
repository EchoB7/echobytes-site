import { getWhatsAppUrl, site } from "@/content/site";

export function SiteFooter() {
  const whatsappUrl = getWhatsAppUrl(site.links.whatsapp);
  const year = new Date().getFullYear();

  return (
    <footer id="contato" style={{ borderTop: "1px solid #1a1a1a", background: "#080808" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <p style={{ fontWeight: 800, fontSize: "1.1rem", color: "#f0f0f0", letterSpacing: "-0.02em", marginBottom: 8 }}>
              Yourott<span style={{ color: "#e50914" }}>App</span>
            </p>
            <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>
              Apps OTT white-label para qualquer tela — Smart TV, mobile, web e desktop.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666", marginBottom: 16 }}>Produto</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Plataformas", "Recursos", "Portfolio", "Preços"].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="footer-link">{l}</a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666", marginBottom: 16 }}>Contato</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href={`mailto:${site.links.email}`} className="footer-link">{site.links.email}</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="footer-link">WhatsApp</a>
              <a href="/privacy" className="footer-link">Política de Privacidade</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "0.8rem", color: "#555" }}>© {year} YourottApp. Todos os direitos reservados.</p>
          <p style={{ fontSize: "0.8rem", color: "#555" }}>{site.brand.domain}</p>
        </div>
      </div>
    </footer>
  );
}
