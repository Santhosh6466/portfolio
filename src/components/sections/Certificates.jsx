import { useState, useEffect } from "react";
import { colors, fonts } from "../../styles/theme";
import { certificates } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionDivider from "../ui/SectionDivider";

function CertCard({ cert, index, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={index * 0.07}>
      <div onClick={() => onClick(index)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ cursor: "pointer", background: colors.base, transform: hov ? "translateY(-6px)" : "translateY(0)", boxShadow: hov ? "0 20px 50px rgba(0,0,0,.1)" : "none", transition: "transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s" }}>
        <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
          <img src={cert.img} alt={cert.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: `rgba(219,74,43,${hov ? .85 : 0})`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, transition: "background .25s" }}>
            {hov && (
              <>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                <span style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>View</span>
              </>
            )}
          </div>
        </div>
        <div style={{ padding: "16px 18px 20px" }}>
          <div style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 700, color: colors.primary, marginBottom: 4 }}>{cert.title}</div>
          <div style={{ fontFamily: fonts.body, fontSize: 11, color: colors.muted, marginBottom: 4 }}>Issued by · {cert.issuer}</div>
          <div style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.red }}>{cert.date}</div>
        </div>
      </div>
    </Reveal>
  );
}

function Lightbox({ index, onClose, onNavigate }) {
  const cert = certificates[index];
  const total = certificates.length;
  useEffect(() => {
    const fn = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % total);
      if (e.key === "ArrowLeft")  onNavigate((index - 1 + total) % total);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [index]);

  const navBtn = { width: 48, height: 48, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", color: colors.base, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(12,12,12,.96)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button onClick={onClose} style={{ position: "absolute", top: 24, right: 24, ...navBtn }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <button onClick={e => { e.stopPropagation(); onNavigate((index - 1 + total) % total); }} style={{ position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)", ...navBtn }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <div onClick={e => e.stopPropagation()} className="lightbox-inner" style={{ display: "flex", gap: 48, alignItems: "center", maxWidth: 860, width: "90%", animation: "slideUp .4s cubic-bezier(.16,1,.3,1) both" }}>
        <div style={{ flex: "1.4 1 0", aspectRatio: "4/3", overflow: "hidden", border: "1px solid rgba(255,255,255,.07)" }}>
          <img src={cert.img} alt={cert.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ flex: "1 1 0", color: colors.base }}>
          <div style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: colors.red, marginBottom: 16 }}>{index + 1} / {total}</div>
          <h3 style={{ fontFamily: fonts.display, fontSize: "clamp(20px,2.5vw,36px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 14 }}>{cert.title}</h3>
          <p style={{ fontFamily: fonts.body, fontSize: 14, color: "rgba(228,226,221,.55)", marginBottom: 8 }}>Issued by · {cert.issuer}</p>
          <p style={{ fontFamily: fonts.body, fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: colors.orange }}>{cert.date}</p>
        </div>
      </div>
      <button onClick={e => { e.stopPropagation(); onNavigate((index + 1) % total); }} style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", ...navBtn }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
}

export default function Certificates() {
  const [lbIdx, setLbIdx] = useState(null);
  useEffect(() => { document.body.style.overflow = lbIdx !== null ? "hidden" : ""; }, [lbIdx]);

  return (
    <section id="certificates" style={{ background: colors.surface }}>
      <SectionDivider label="Credentials" title="CERTIFICATES" />
      <div className="certs-grid" style={{ padding: "0 48px 72px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
        {certificates.map((cert, i) => <CertCard key={cert.title} cert={cert} index={i} onClick={setLbIdx} />)}
      </div>
      {lbIdx !== null && <Lightbox index={lbIdx} onClose={() => setLbIdx(null)} onNavigate={setLbIdx} />}
    </section>
  );
}
