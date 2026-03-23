import { useState } from "react";
import { colors, fonts } from "../../styles/theme";
import { education, achievements } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionDivider from "../ui/SectionDivider";

function EducationCard({ degree, school, location, score, period, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: hov ? colors.primary : colors.surface, padding: "30px 26px", transition: "background .25s, transform .25s cubic-bezier(.16,1,.3,1)", transform: hov ? "translateY(-3px)" : "translateY(0)", position: "relative", overflow: "hidden", height: "100%" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: hov ? "100%" : "0%", background: colors.red, transition: "height .35s cubic-bezier(.16,1,.3,1)" }} />
        <div style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: hov ? colors.orange : colors.red, marginBottom: 10, transition: "color .25s" }}>{period}</div>
        <h3 style={{ fontFamily: fonts.display, fontSize: "clamp(14px,1.5vw,20px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 8, color: hov ? colors.base : colors.primary, transition: "color .25s" }}>{degree}</h3>
        <div style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 500, color: hov ? "rgba(228,226,221,.75)" : "#444", marginBottom: 3, transition: "color .25s" }}>{school}</div>
        <div style={{ fontFamily: fonts.body, fontSize: 11, color: hov ? "rgba(228,226,221,.45)" : colors.muted, marginBottom: 14, transition: "color .25s" }}>{location}</div>
        <span style={{ display: "inline-block", fontFamily: fonts.body, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 11px", background: "rgba(219,74,43,.12)", color: colors.red }}>{score}</span>
      </div>
    </Reveal>
  );
}

function AchievementCard({ icon, title, desc, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: hov ? colors.red : colors.surface, padding: "28px 26px", transition: "background .25s, transform .25s cubic-bezier(.16,1,.3,1)", transform: hov ? "translateY(-3px)" : "translateY(0)", display: "flex", gap: 18, alignItems: "flex-start" }}>
        <span style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>{icon}</span>
        <div>
          <div style={{ fontFamily: fonts.display, fontSize: 17, fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.02em", color: hov ? "#fff" : colors.primary, marginBottom: 7, transition: "color .25s" }}>{title}</div>
          <div style={{ fontFamily: fonts.body, fontSize: 12, lineHeight: 1.65, color: hov ? "rgba(255,255,255,.8)" : "#555", transition: "color .25s" }}>{desc}</div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Education() {
  return (
    <section id="education" style={{ background: colors.base }}>
      <SectionDivider label="Academic Background" title="EDUCATION" />
      <div className="edu-grid" style={{ padding: "0 48px 56px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
        {education.map((ed, i) => <EducationCard key={ed.school} {...ed} delay={i * 0.08} />)}
      </div>
      <div className="edu-bottom" style={{ padding: "0 48px 72px" }}>
        <Reveal>
          <p style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: colors.red, marginBottom: 18 }}>Achievements</p>
        </Reveal>
        <div className="ach-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2 }}>
          {achievements.map((a, i) => <AchievementCard key={a.title} {...a} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  );
}
