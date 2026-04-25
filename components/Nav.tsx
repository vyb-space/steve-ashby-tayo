"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "var(--yellow)",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "3.5rem" }}>
          <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 500, letterSpacing: "0.04em" }}>
            Tayo
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">
            {["shop","story","taste"].map(p => (
              <Link key={p} href={`/${p}`} style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 500, textTransform: "capitalize", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "none" }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            <span style={{ display: "block", width: "1.25rem", height: "1.5px", background: "black", marginBottom: "4px" }} />
            <span style={{ display: "block", width: "1.25rem", height: "1.5px", background: "black", marginBottom: "4px" }} />
            <span style={{ display: "block", width: "1.25rem", height: "1.5px", background: "black" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: "var(--yellow)", borderTop: "1px solid rgba(0,0,0,0.1)", padding: "1.5rem 1.5rem 2rem" }}>
            {["Shop","Story","Taste"].map(p => (
              <Link key={p} href={`/${p.toLowerCase()}`} onClick={() => setOpen(false)}
                style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "2rem", fontStyle: "italic", marginBottom: "1rem" }}>
                {p}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <div style={{ height: "3.5rem" }} />

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
