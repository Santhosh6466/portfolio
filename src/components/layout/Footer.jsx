import { colors, fonts } from "../../styles/theme";

const cols = [
  { title: "Navigate", links: [{ label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }, { label: "Education", href: "#education" }, { label: "Certificates", href: "#certificates" }] },
  { title: "Projects", links: [{ label: "ShareByte", href: "https://github.com/Santhosh6466" }, { label: "Malicious URL", href: "https://github.com/Santhosh6466" }, { label: "WebSocket POC", href: "https://github.com/Santhosh6466" }] },
  { title: "Contact",  links: [{ label: "GitHub", href: "https://github.com/Santhosh6466" }, { label: "LinkedIn", href: "https://linkedin.com/in/sai-santhosh45" }, { label: "Email", href: "mailto:santhoshchode8469@gmail.com" }] },
];

export default function Footer() {
  return (
    <footer style={{ background: "#171717", color: colors.base, padding: "56px 48px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -20, right: 40, fontFamily: fonts.display, fontSize: "10vw", fontWeight: 700, color: "rgba(255,255,255,.04)", pointerEvents: "none", userSelect: "none", lineHeight: 1 }}>2025</div>
      <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 44, marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: fonts.display, fontSize: "1.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.05em", marginBottom: 12 }}>Sai Santhosh</div>
          <p style={{ fontFamily: fonts.body, fontSize: 12, lineHeight: 1.7, color: "rgba(228,226,221,.5)", maxWidth: 200, marginBottom: 22 }}>Building scalable backends and full-stack apps with real-world impact.</p>
          <div style={{ display: "flex", gap: 10 }}>
            {[["GH","https://github.com/Santhosh6466"],["LI","https://linkedin.com/in/sai-santhosh45"]].map(([s, href]) => (
              <a key={s} href={href} target="_blank" rel="noreferrer" style={{ width: 36, height: 36, border: "1px solid rgba(228,226,221,.15)", display: "flex", alignItems: "center", justifyContent: "center", color: colors.base, textDecoration: "none", fontFamily: fonts.body, fontSize: 10, fontWeight: 700 }}>{s}</a>
            ))}
          </div>
        </div>
        {cols.map(({ title, links }) => (
          <div key={title}>
            <div style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(228,226,221,.35)", marginBottom: 18 }}>{title}</div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {links.map(l => (
                <li key={l.label}><a href={l.href} style={{ fontFamily: fonts.body, fontSize: 12, color: "rgba(228,226,221,.6)", textDecoration: "none" }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid rgba(228,226,221,.08)", fontFamily: fonts.body, fontSize: 11, color: "rgba(228,226,221,.35)" }}>
        <span>© 2025 Chode Sai Santhosh. All rights reserved.</span>
        <span>Backend · Full Stack · ML</span>
      </div>
    </footer>
  );
}
