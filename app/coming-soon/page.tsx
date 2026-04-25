"use client";
export default function ComingSoon() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--yellow)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "3rem",
    }}>
      <h1 className="display-italic" style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(4rem, 12vw, 12rem)",
        lineHeight: 0.88,
        letterSpacing: "-0.02em",
        marginBottom: "2.5rem",
      }}>
        Tayo.
      </h1>

      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
        opacity: 0.6,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: "1.5rem",
      }}>
        Something delicious is coming
      </p>

      <p className="display-italic" style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.2rem, 2vw, 2rem)",
        maxWidth: "32rem",
        lineHeight: 1.3,
        opacity: 0.75,
        marginBottom: "3rem",
      }}>
        Premium artisan Filipino condiments, bottled with centuries of tradition.
      </p>

      {/* Email signup */}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "flex", gap: "0", maxWidth: "28rem", width: "100%" }}
      >
        <input
          type="email"
          placeholder="your@email.com"
          style={{
            flex: 1,
            padding: "0.8rem 1.2rem",
            border: "1px solid black",
            borderRight: "none",
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            background: "transparent",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.8rem 1.5rem",
            background: "black",
            color: "var(--yellow)",
            border: "1px solid black",
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Notify me
        </button>
      </form>

      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.7rem",
        opacity: 0.4,
        marginTop: "1rem",
        letterSpacing: "0.06em",
      }}>
        Be first to know when we launch.
      </p>

      {/* Socials */}
      <div style={{ display: "flex", gap: "2rem", marginTop: "3rem" }}>
        {["Instagram", "TikTok"].map((s) => (
          <a
            key={s}
            href="#"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.5,
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  );
}
