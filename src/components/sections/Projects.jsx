import { useState } from "react";
import { colors, fonts } from "../../styles/theme";
import { projects } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionDivider from "../ui/SectionDivider";

function ProjectCard({ num, title, tags, desc, image, features, link, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: hov ? "#cbc8c2" : colors.surface, padding: "38px 28px", transition: "background .3s, transform .3s cubic-bezier(.16,1,.3,1)", transform: hov ? "translateY(-4px)" : "translateY(0)", position: "relative", overflow: "hidden", height: "100%" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: hov ? "100%" : "0%", height: 3, background: colors.red, transition: "width .4s cubic-bezier(.16,1,.3,1)" }} />
        
        {/* Project Image */}
        <div style={{ marginBottom: 20, borderRadius: 8, overflow: "hidden", border: `2px solid ${hov ? colors.red : "transparent"}`, transition: "border-color .3s" }}>
          <img 
            src={image} 
            alt={title}
            style={{ 
              width: "100%", 
              height: "180px", 
              objectFit: "cover",
              transition: "transform .3s ease",
              transform: hov ? "scale(1.05)" : "scale(1)"
            }} 
          />
        </div>
        
        <span style={{ fontFamily: fonts.display, fontSize: 40, fontWeight: 700, color: "rgba(30,30,30,.07)", display: "block", marginBottom: 18 }}>{num}</span>
        <h3 style={{ fontFamily: fonts.display, fontSize: "clamp(18px,1.9vw,26px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 12, color: hov ? colors.red : colors.primary, transition: "color .2s" }}>{title}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {tags.map(t => <span key={t} style={{ fontFamily: fonts.body, fontSize: 9, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", padding: "3px 9px", border: "1px solid rgba(30,30,30,.18)", color: "#555" }}>{t}</span>)}
        </div>
        <p style={{ fontFamily: fonts.body, fontSize: 13, lineHeight: 1.7, color: "#555", marginBottom: 18 }}>{desc}</p>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 22 }}>
          {features.map(f => (
            <li key={f} style={{ fontFamily: fonts.body, fontSize: 11, lineHeight: 1.9, color: "#444", paddingLeft: 14, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: colors.red }}>—</span>{f}
            </li>
          ))}
        </ul>
        <a href={link} target="_blank" rel="noreferrer" style={{ fontFamily: fonts.body, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: colors.primary, textDecoration: "none", borderBottom: `1px solid ${colors.primary}`, paddingBottom: 2 }}>
          View on GitHub ↗
        </a>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: colors.base }}>
      <SectionDivider label="Selected Work" title="PROJECTS" align="right" />
      <div className="projects-grid" style={{ padding: "0 48px 72px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
        {projects.map((p, i) => <ProjectCard key={p.num} {...p} delay={i * 0.1} />)}
      </div>
    </section>
  );
}
