"use client";
import Link from "next/link";

const products = [
  { handle: "cloudy-coconut-vinegar", eyebrow: "Bright & Aromatic", name: "Cloudy Coconut Vinegar", description: "Known as 'sukang tuba', naturally fermented and unfiltered, bright and aromatic.", price: "$18.00" },
  { handle: "adobo-sauce", eyebrow: "Rich & Savory", name: "Adobo Sauce", description: "The iconic Filipino flavour — tangy, umami-rich, and deeply satisfying.", price: "$16.00" },
  { handle: "young-banana-ketchup", eyebrow: "Sweet & Vibrant", name: "Young Banana Ketchup", description: "Naturally sweet, made from unripe banana. Your new favourite everything sauce.", price: "$14.00" },
];

export default function Shop() {
  return (
    <section style={{ background: "var(--yellow)", padding: "4rem 0 6rem" }}>
      <div className="container">
        <h1 className="display-italic" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", lineHeight: 0.9, marginBottom: "4rem" }}>
          Shop
        </h1>
        <div className="product-grid">
          {products.map((p) => (
            <Link key={p.handle} href={`/shop/${p.handle}`} style={{ textDecoration: "none" }}>
              <div className="product-card" style={{ cursor: "pointer", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <div className="img-placeholder" style={{ aspectRatio: "1/1", marginBottom: "2rem" }}>Product Image</div>
                <p className="label" style={{ marginBottom: "0.75rem" }}>{p.eyebrow}</p>
                <h2 className="display" style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)", lineHeight: 1.05, marginBottom: "1rem" }}>{p.name}</h2>
                <p className="body-sm" style={{ flex: 1, marginBottom: "1.5rem" }}>{p.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500 }}>{p.price}</span>
                  <span className="btn" style={{ padding: "0.5rem 1.2rem", fontSize: "0.68rem" }}>Shop now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
