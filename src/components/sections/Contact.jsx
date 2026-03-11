import { useState } from "react";
import { colors, fonts } from "../../styles/theme";
import { contactLinks } from "../../data/portfolio";
import Reveal from "../ui/Reveal";

const EMAILJS_SERVICE_ID = "service_hlkdytq";
const EMAILJS_TEMPLATE_ID = "template_fhdokjp";
const EMAILJS_PUBLIC_KEY = "kOhiz6ANrk7FjStsk";
const TO_EMAIL = "santhoshchode8469@gmail.com";

function FocusInput({ value, onChange, placeholder, multiline }) {
  const [focus, setFocus] = useState(false);

  const style = {
    background: focus ? "rgba(219,74,43,.05)" : "rgba(255,255,255,.05)",
    border: `1px solid ${focus ? colors.red : "rgba(228,226,221,.12)"}`,
    padding: "14px 18px",
    color: colors.base,
    fontFamily: fonts.body,
    fontSize: 14,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "all .2s ease"
  };

  if (multiline) {
    return (
      <textarea
        rows={5}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ ...style, resize: "none" }}
      />
    );
  }

  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={style}
    />
  );
}

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (value) =>
    setForm((prev) => ({ ...prev, [field]: value }));


  const send = async () => {

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in name, email and message.");
      return;
    }

    setSending(true);
    setError("");

    try {

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          accessToken: EMAILJS_PUBLIC_KEY,

          template_params: {
            name: form.name,
            email: form.email,
            title: form.subject || "Portfolio Contact",
            message: form.message
          }
        })
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const txt = await res.text();
        setError("Error " + res.status + ": " + txt);
      }

    } catch {
      setError("Failed to send — email directly: " + TO_EMAIL);
    }

    setSending(false);
  };


  const labelStyle = {
    fontFamily: fonts.body,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(228,226,221,.4)",
    display: "block",
    marginBottom: 7
  };


  return (

    <section
      id="contact"
      style={{
        background: colors.primary,
        padding: "100px 60px",
        position: "relative",
        overflow: "hidden"
      }}
    >

      {/* background CONTACT text */}

      <div
        style={{
          position: "absolute",
          bottom: -40,
          right: 40,
          fontFamily: fonts.display,
          fontSize: "10vw",
          fontWeight: 700,
          color: "rgba(255,255,255,.04)",
          pointerEvents: "none",
          userSelect: "none"
        }}
      >
        CONTACT
      </div>


      {/* main grid */}

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 120,
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          alignItems: "start"
        }}
      >

        {/* LEFT SIDE */}

        <Reveal>

          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: colors.red,
              marginBottom: 16
            }}
          >
            LET'S WORK TOGETHER
          </p>


          <h2
            style={{
              fontFamily: fonts.display,
              fontSize: "clamp(32px,4vw,60px)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: colors.base,
              marginBottom: 40
            }}
          >
            GOT AN <br />
            <span style={{ color: colors.red }}>IDEA?</span> <br />
            LET'S <br />
            BUILD IT.
          </h2>


          <a
            href="/FinalCV_main_.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              border: "2px solid rgba(228,226,221,.3)",
              color: colors.base,
              fontFamily: fonts.body,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none"
            }}
          >
            ↓ Download CV
          </a>

        </Reveal>


        {/* RIGHT SIDE FORM */}

        <Reveal delay={0.1}>

          <div style={{ maxWidth: 720, marginLeft: "auto" }}>

            <div
              className="contact-name-email"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 16
              }}
            >

              <div>
                <label style={labelStyle}>Name</label>
                <FocusInput value={form.name} onChange={update("name")} placeholder="Your name" />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <FocusInput value={form.email} onChange={update("email")} placeholder="your@email.com" />
              </div>

            </div>


            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Subject</label>
              <FocusInput value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
            </div>


            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Message</label>
              <FocusInput multiline value={form.message} onChange={update("message")} placeholder="Tell me about your project..." />
            </div>


            <button
              onClick={send}
              style={{
                width: "100%",
                padding: 16,
                background: colors.red,
                border: "none",
                color: "#fff",
                fontFamily: fonts.body,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                opacity: sending ? 0.7 : 1
              }}
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>


            {sent && (
              <p style={{ marginTop: 14, color: colors.orange }}>
                ✦ Message sent! I'll get back to you soon.
              </p>
            )}

            {error && (
              <p style={{ marginTop: 14, color: "#ff6b6b" }}>
                ⚠ {error}
              </p>
            )}


            {/* contact links */}

            <div style={{ marginTop: 40 }}>

              {contactLinks.map(({ label, value, href }) => (

                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    borderTop: "1px solid rgba(228,226,221,.1)",
                    textDecoration: "none"
                  }}
                >

                  <span
                    style={{
                      fontFamily: fonts.body,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(228,226,221,.35)"
                    }}
                  >
                    {label}
                  </span>

                  <span
                    style={{
                      fontFamily: fonts.body,
                      fontSize: 12,
                      color: "rgba(228,226,221,.65)"
                    }}
                  >
                    {value} ↗
                  </span>

                </a>

              ))}

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}