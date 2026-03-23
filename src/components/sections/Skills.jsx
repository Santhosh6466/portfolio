import { useState } from "react";
import { colors, fonts } from "../../styles/theme";
import { skills } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionDivider from "../ui/SectionDivider";

function SkillCard({ cat, items, delay }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: hov ? colors.primary : colors.base, padding: "32px 26px", transition: "background .25s", height: "100%" }}>
        <div style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: hov ? colors.orange : colors.red, marginBottom: 16, transition: "color .25s" }}>{cat}</div>
        <div style={{ fontFamily: fonts.body, fontSize: 14, lineHeight: 2, color: hov ? colors.base : colors.primary, transition: "color .25s" }}>
          {items.map(it => <div key={it}>{it}</div>)}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: colors.surface }}>
      <SectionDivider label="Technical Arsenal" title="SKILLS" />
      <div className="skills-grid" style={{ padding: "0 48px 72px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 2 }}>
        {skills.map((s, i) => <SkillCard key={s.cat} {...s} delay={i * 0.05} />)}
      </div>
    </section>
  );
}
