import { useState, useEffect } from "react";
import { colors, fonts } from "../../styles/theme";
import { navLinks } from "../../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 48px",
        background: scrolled || open ? "rgba(228,226,221,.97)" : "rgba(228,226,221,.68)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled || open ? "1px solid rgba(30,30,30,.08)" : "none",
        transition: "background .3s",
      }}>
        <a href="#" style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "1.35rem", textTransform: "uppercase", letterSpacing: "-0.05em", color: colors.primary, textDecoration: "none" }}>
          Sai Santhosh
        </a>

        {/* Desktop nav */}
        <ul className="nav-desktop" style={{ display: "flex", gap: 32, listStyle: "none" }}>
          {navLinks.map(l => (
            <li key={l}>
              <a href={`#${l}`}
                style={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.primary, textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => e.target.style.color = colors.red}
                onMouseLeave={e => e.target.style.color = colors.primary}
              >{l}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger — shown only on mobile via CSS */}
        <button className="nav-hamburger" onClick={() => setOpen(o => !o)}
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          <span style={{ display: "block", width: 22, height: 2, background: colors.primary, transition: "transform .3s", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: colors.primary, transition: "opacity .3s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: colors.primary, transition: "transform .3s", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: "fixed", top: 57, left: 0, right: 0, zIndex: 99,
          background: "rgba(228,226,221,.98)", backdropFilter: "blur(14px)",
          padding: "16px 24px 24px",
          borderBottom: "1px solid rgba(30,30,30,.08)",
          display: "flex", flexDirection: "column",
        }}>
          {navLinks.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
              style={{ fontFamily: fonts.body, fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: colors.primary, textDecoration: "none", padding: "13px 0", borderBottom: "1px solid rgba(30,30,30,.06)" }}
            >{l}</a>
          ))}
        </div>
      )}
    </>
  );
}
