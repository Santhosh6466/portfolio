import { useState, useEffect } from "react";
import { colors, fonts } from "../../styles/theme";
import { useTypewriter } from "../../hooks/useTypewriter";
import CtaBtn from "../ui/CtaBtn";

const HERO_TEXT = "Backend & Full Stack Developer — building secure, scalable systems with Java, Spring Boot, MongoDB, and ML-powered solutions.";

function Blob({ color, style, animName = "blobPulse", animDelay = "0s" }) {
  return (
    <div style={{
      position: "absolute", borderRadius: "50%",
      filter: "blur(130px)", mixBlendMode: "multiply", opacity: .7,
      animation: `${animName} 12s ${animDelay} ease-in-out infinite`,
      pointerEvents: "none", background: color, ...style,
    }} />
  );
}

export default function Hero() {
  const typed = useTypewriter(HERO_TEXT);
  const [cur, setCur] = useState(true);
  useEffect(() => { const iv = setInterval(() => setCur(v => !v), 530); return () => clearInterval(iv); }, []);

  return (
    <section className="hero-section" style={{ position: "relative", minHeight: "95vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 48px 72px", overflow: "hidden" }}>
      <Blob color={colors.red}    style={{ width: "55vw", height: "55vw", top: "-8vw", left: "-8vw" }} />
      <Blob color={colors.orange} style={{ width: "55vw", height: "55vw", top: "15vw", right: "-12vw" }} animName="blobPulse2" animDelay="3s" />
      <Blob color={colors.pink}   style={{ width: "38vw", height: "38vw", bottom: "-8vw", left: "25vw" }} animDelay="6s" />

      <p style={{ animation: "slideUp .7s .1s cubic-bezier(.16,1,.3,1) both", fontFamily: fonts.body, fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: colors.red, marginBottom: 14 }}>
        Available for Opportunities · India
      </p>
      <h1 style={{ animation: "slideUp .8s .2s cubic-bezier(.16,1,.3,1) both", fontFamily: fonts.display, fontSize: "clamp(36px,6vw,100px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.05em", lineHeight: .85, color: colors.primary, marginBottom: 36 }}>
        SAI<br />SANTHOSH
      </h1>
      <p style={{ animation: "slideUp .8s .3s cubic-bezier(.16,1,.3,1) both", maxWidth: 420, fontSize: 16, lineHeight: 1.65, color: "#555", marginBottom: 36, fontFamily: fonts.body, minHeight: "3.2em" }}>
        {typed}
        <span style={{ opacity: cur ? 1 : 0, display: "inline-block", width: 2, height: "1em", background: colors.red, marginLeft: 3, verticalAlign: "text-bottom" }} />
      </p>
      <div style={{ animation: "slideUp .8s .4s cubic-bezier(.16,1,.3,1) both", display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
        <CtaBtn href="#projects">View Projects ↓</CtaBtn>
        <CtaBtn href="/FinalCV_main_.pdf" download outline>Download CV ↓</CtaBtn>
        <a href="#contact" style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.red, textDecoration: "none" }}>
          Let's Connect →
        </a>
      </div>
    </section>
  );
}
