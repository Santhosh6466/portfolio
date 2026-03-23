import { colors, fonts } from "../../styles/theme";
import { tickerItems } from "../../data/portfolio";

const ITEMS = [...tickerItems, ...tickerItems];

export default function Ticker() {
  return (
    <div style={{ background: colors.primary, overflow: "hidden", padding: "15px 0" }}>
      <div style={{ display: "flex", width: "max-content", animation: "ticker 28s linear infinite" }}>
        {ITEMS.map((item, i) => (
          <span key={i} style={{ fontFamily: fonts.body, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: colors.base, padding: "0 24px", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 24 }}>
            {item}<span style={{ color: colors.red, fontSize: 8 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
