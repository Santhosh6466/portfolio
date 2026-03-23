import { useState } from "react";
import { colors, fonts } from "../../styles/theme";
import Reveal from "../ui/Reveal";
import SectionDivider from "../ui/SectionDivider";

export default function About() {
  const [hov, setHov] = useState(false);
  return (
    <section id="about" style={{ background: colors.base }}>
      <SectionDivider label="Get to Know Me" title="ABOUT" />
      <div id="about-grid" className="about-grid">
        <Reveal>
          <div className="about-image">
            <img src="/profile.jpg" alt="Sai Santhosh" />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="about-content" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ background: hov ? "#cbc8c2" : colors.surface, padding: "38px 28px", transition: "background .3s, transform .3s cubic-bezier(.16,1,.3,1)", transform: hov ? "translateY(-4px)" : "translateY(0)", position: "relative", overflow: "hidden", height: "100%" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: hov ? "100%" : "0%", height: 3, background: colors.red, transition: "width .4s cubic-bezier(.16,1,.3,1)" }} />
            <span style={{ fontFamily: fonts.display, fontSize: 40, fontWeight: 700, color: "rgba(30,30,30,.07)", display: "block", marginBottom: 18 }}>01</span>
            <h3 style={{ fontFamily: fonts.display, fontSize: "clamp(18px,1.9vw,26px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 12, color: hov ? colors.red : colors.primary, transition: "color .2s" }}>Sai Santhosh</h3>
            <p style={{ fontFamily: fonts.body, fontSize: 16, lineHeight: 1.7, color: "#555", marginBottom: 18 }}>
              Hi, I'm Sai Santhosh, a third-year Computer Science student at Lovely Professional University with a strong interest in Backend and Full Stack Development.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: 22 }}>
              <li style={{ fontFamily: fonts.body, fontSize: 14, lineHeight: 1.9, color: "#444", paddingLeft: 14, position: "relative", marginBottom: 8 }}>
                <span style={{ position: "absolute", left: 0, color: colors.red }}>—</span>Proficient in Java, Spring Boot, and MongoDB
              </li>
              <li style={{ fontFamily: fonts.body, fontSize: 14, lineHeight: 1.9, color: "#444", paddingLeft: 14, position: "relative", marginBottom: 8 }}>
                <span style={{ position: "absolute", left: 0, color: colors.red }}>—</span>Hands-on experience with scalable and secure applications
              </li>
              <li style={{ fontFamily: fonts.body, fontSize: 14, lineHeight: 1.9, color: "#444", paddingLeft: 14, position: "relative", marginBottom: 8 }}>
                <span style={{ position: "absolute", left: 0, color: colors.red }}>—</span>Focus on clean architecture and efficient system design
              </li>
              <li style={{ fontFamily: fonts.body, fontSize: 14, lineHeight: 1.9, color: "#444", paddingLeft: 14, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: colors.red }}>—</span>Actively learning and contributing to projects
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}