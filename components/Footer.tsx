"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--yellow)", borderTop: "1px solid var(--black)" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 3rem", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "TikTok", href: "https://tiktok.com" },
            { label: "Facebook", href: "https://facebook.com" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="label" style={{ opacity: 1, transition: "opacity 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.4")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Shop","Story","Taste"].map(p => (
            <Link key={p} href={`/${p.toLowerCase()}`} className="label" style={{ opacity: 1, transition: "opacity 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.4")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {p}
            </Link>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "0.75rem 3rem" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", opacity: 0.4 }}>
          © {new Date().getFullYear()} Tayo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
