import Reveal from "./Reveal";
import { colors, fonts } from "../../styles/theme";

export default function SectionDivider({ label, title, align = "left", dark }) {
  const textColor = dark ? colors.base : colors.primary;
  const accentColor = dark ? colors.orange : colors.red;
  return (
    <div className="section-divider" style={{
      padding: "72px 56px 48px", position: "relative",
      display: "flex", alignItems: "flex-end",
      justifyContent: "space-between", gap: 24,
      borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.08)" : colors.border}`,
    }}>
      <div>
        <Reveal>
          <p style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: accentColor, marginBottom: 14 }}>
            ✦&nbsp;&nbsp;{label}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(36px,6.5vw,96px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.05em", lineHeight: 0.85, color: textColor }}>
            {title}
          </h2>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <span className="watermark" style={{
          fontFamily: fonts.display, fontSize: "clamp(60px,8vw,120px)", fontWeight: 700,
          color: dark ? "rgba(255,255,255,0.05)" : "rgba(26,26,26,0.05)",
          letterSpacing: "-0.06em", lineHeight: 1, userSelect: "none", flexShrink: 0,
        }}>
          {label.split(" ")[0].substring(0, 2).toUpperCase()}
        </span>
      </Reveal>
    </div>
  );
}
