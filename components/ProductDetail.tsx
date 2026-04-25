"use client";
import { useState } from "react";
import Link from "next/link";
import { ShopifyProduct, formatPrice } from "@/lib/shopify";

export default function ProductDetail({
  product,
  related,
}: {
  product: ShopifyProduct;
  related: ShopifyProduct[];
}) {
  const [variantIdx, setVariantIdx] = useState(0);
  const variants = product.variants.nodes;
  const selectedVariant = variants[variantIdx];
  const mainImage = product.featuredImage ?? product.images.nodes[0];

  return (
    <>
      {/* ─── Product hero ─── */}
      <section style={{ background: "var(--beige)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "70vh", maxWidth: "1728px", margin: "0 auto" }}>
          {/* Image */}
          {mainImage ? (
            <img
              src={mainImage.url}
              alt={mainImage.altText ?? product.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRight: "1px solid var(--black)" }}
            />
          ) : (
            <div className="img-placeholder" style={{ borderRight: "1px solid var(--black)", minHeight: "60vh" }}>
              Product Image
            </div>
          )}

          {/* Info panel */}
          <div style={{ padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ border: "1px solid rgba(0,0,0,0.2)", padding: "3rem" }}>
              <h1 className="display" style={{ fontSize: "clamp(1.8rem, 2.8vw, 3.2rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
                {product.title}
              </h1>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", lineHeight: 1.8, opacity: 0.65, marginBottom: "2rem" }}>
                {product.description}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem" }}>
                {selectedVariant ? formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode) : "—"}
              </p>

              {/* Variants */}
              {variants.length > 1 && (
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                  {variants.map((v, i) => (
                    <button key={v.id} onClick={() => setVariantIdx(i)} style={{
                      background: "none", border: "none", cursor: "pointer", padding: "2px 0",
                      fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: i === variantIdx ? 600 : 400,
                      opacity: i === variantIdx ? 1 : 0.4,
                      borderBottom: i === variantIdx ? "1px solid black" : "1px solid transparent",
                    }}>
                      {v.title}
                    </button>
                  ))}
                </div>
              )}

              <button
                className="btn"
                style={{ padding: "0.8rem 2.5rem" }}
                disabled={!selectedVariant?.availableForSale}
              >
                {selectedVariant?.availableForSale ? "Add to cart" : "Out of stock"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related products ─── */}
      {related.length > 0 && (
        <section style={{ background: "var(--yellow)", padding: "5rem 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ paddingRight: "3rem", borderRight: "1px solid var(--black)" }}>
              <h2 className="display-italic" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.8rem)", lineHeight: 1.15 }}>
                More soul-awakening tastes of the Philippines
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${related.length}, 1fr)`, gap: "0", border: "1px solid var(--black)" }}>
              {related.map((rel, i) => (
                <Link key={rel.handle} href={`/shop/${rel.handle}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "var(--beige)", padding: "2rem",
                    borderRight: i < related.length - 1 ? "1px solid var(--black)" : "none",
                    display: "flex", flexDirection: "column", height: "100%",
                  }}>
                    {rel.featuredImage ? (
                      <img src={rel.featuredImage.url} alt={rel.featuredImage.altText ?? rel.title}
                        style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", marginBottom: "1.25rem" }} />
                    ) : (
                      <div className="img-placeholder" style={{ aspectRatio: "1/1", marginBottom: "1.25rem" }}>Image</div>
                    )}
                    <h3 className="display" style={{ fontSize: "1.15rem", lineHeight: 1.1, marginBottom: "1.25rem", flex: 1 }}>{rel.title}</h3>
                    <span className="btn" style={{ alignSelf: "flex-start", padding: "0.5rem 1.2rem", fontSize: "0.68rem" }}>View product</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
