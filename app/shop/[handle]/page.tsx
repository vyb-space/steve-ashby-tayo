"use client";
import { useState } from "react";
import Link from "next/link";

const catalog: Record<string, {
  eyebrow: string; name: string; short: string; description: string;
  variants: string[]; related: { handle: string; eyebrow: string; name: string }[];
}> = {
  "cloudy-coconut-vinegar": {
    eyebrow: "Bright & Aromatic", name: "Cloudy Coconut Vinegar",
    short: "An enlivening vinegar for adding dimensions of flavour.",
    description: "Known as 'sukang tuba', our Cloudy Coconut Vinegar is made from the nectar of pristine coconut palms in the Philippines. Naturally fermented and unfiltered, it's bright and aromatic, leaving the tastebuds wanting more.",
    variants: ["Single", "2-pack", "3-pack"],
    related: [{ handle: "adobo-sauce", eyebrow: "Rich & Savory", name: "Adobo Sauce" }, { handle: "young-banana-ketchup", eyebrow: "Sweet & Vibrant", name: "Young Banana Ketchup" }],
  },
  "adobo-sauce": {
    eyebrow: "Rich & Savory", name: "Adobo Sauce",
    short: "The iconic Filipino flavour, bottled.",
    description: "Made from the classic Filipino adobo method — a slow cook in vinegar, garlic, and bay leaves. Rich, tangy, umami-forward. Pour over everything.",
    variants: ["Single", "2-pack", "3-pack"],
    related: [{ handle: "cloudy-coconut-vinegar", eyebrow: "Bright & Aromatic", name: "Cloudy Coconut Vinegar" }, { handle: "young-banana-ketchup", eyebrow: "Sweet & Vibrant", name: "Young Banana Ketchup" }],
  },
  "young-banana-ketchup": {
    eyebrow: "Sweet & Vibrant", name: "Young Banana Ketchup",
    short: "Your new favourite everything sauce.",
    description: "Crafted from unripe bananas, this is the Philippines' beloved answer to tomato ketchup — naturally sweet, gently spiced, and brilliantly versatile. A joy on everything.",
    variants: ["Single", "2-pack", "3-pack"],
    related: [{ handle: "cloudy-coconut-vinegar", eyebrow: "Bright & Aromatic", name: "Cloudy Coconut Vinegar" }, { handle: "adobo-sauce", eyebrow: "Rich & Savory", name: "Adobo Sauce" }],
  },
};

export default function ProductPage({ params }: { params: { handle: string } }) {
  const product = catalog[params.handle] ?? catalog["cloudy-coconut-vinegar"];
  const [variant, setVariant] = useState(0);

  return (
    <>
      {/* ─── Product hero ─── */}
      <section style={{ background: "var(--beige)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "70vh", maxWidth: "1728px", margin: "0 auto" }}>
          {/* Image */}
          <div className="img-placeholder" style={{ borderRight: "1px solid var(--black)", minHeight: "60vh" }}>
            Product Image
          </div>

          {/* Info panel */}
          <div style={{ padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ border: "1px solid rgba(0,0,0,0.2)", padding: "3rem" }}>
              <p className="label" style={{ marginBottom: "1rem" }}>{product.eyebrow}</p>
              <h1 className="display" style={{ fontSize: "clamp(1.8rem, 2.8vw, 3.2rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
                {product.name}
              </h1>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", opacity: 0.7, marginBottom: "0.75rem" }}>
                {product.short}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", lineHeight: 1.8, opacity: 0.55, marginBottom: "2rem" }}>
                {product.description}
              </p>

              {/* Variants */}
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                {product.variants.map((v, i) => (
                  <button key={i} onClick={() => setVariant(i)} style={{
                    background: "none", border: "none", cursor: "pointer", padding: "2px 0",
                    fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: i === variant ? 600 : 400,
                    opacity: i === variant ? 1 : 0.4,
                    borderBottom: i === variant ? "1px solid black" : "1px solid transparent",
                  }}>
                    {v}
                  </button>
                ))}
              </div>

              <button className="btn" style={{ padding: "0.8rem 2.5rem" }}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related products ─── */}
      <section style={{ background: "var(--yellow)", padding: "5rem 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "center" }}>
          <div style={{ paddingRight: "3rem", borderRight: "1px solid var(--black)" }}>
            <h2 className="display-italic" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.8rem)", lineHeight: 1.15 }}>
              More soul-awakening tastes of the Philippines
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1px solid var(--black)" }}>
            {product.related.map((rel, i) => (
              <Link key={rel.handle} href={`/shop/${rel.handle}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--beige)", padding: "2rem",
                  borderRight: i === 0 ? "1px solid var(--black)" : "none",
                  display: "flex", flexDirection: "column", height: "100%",
                  cursor: "pointer", transition: "opacity 0.15s",
                }}>
                  <div className="img-placeholder" style={{ aspectRatio: "1/1", marginBottom: "1.25rem" }}>Image</div>
                  <p className="label" style={{ marginBottom: "0.5rem" }}>{rel.eyebrow}</p>
                  <h3 className="display" style={{ fontSize: "1.15rem", lineHeight: 1.1, marginBottom: "1.25rem", flex: 1 }}>{rel.name}</h3>
                  <span className="btn" style={{ alignSelf: "flex-start", padding: "0.5rem 1.2rem", fontSize: "0.68rem" }}>Add to cart</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
