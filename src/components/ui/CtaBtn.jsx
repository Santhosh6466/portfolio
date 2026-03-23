import { useState } from "react";
import { colors, fonts } from "../../styles/theme";

export default function CtaBtn({ children, href = "#", download, outline }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      download={download}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "14px 32px",
        background: outline ? "transparent" : hov ? "#fff" : colors.primary,
        color: hov ? colors.red : outline ? colors.primary : colors.base,
        border: outline ? `2px solid ${colors.primary}` : "none",
        fontFamily: fonts.body, fontSize: 13, fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase",
        cursor: "pointer", textDecoration: "none",
        transition: "color .3s, background .3s",
      }}
    >
      {children}
    </a>
  );
}
