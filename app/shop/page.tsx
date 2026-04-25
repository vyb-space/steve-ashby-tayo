import Link from "next/link";
import { getAllProducts, formatPrice } from "@/lib/shopify";

export const revalidate = 60;

export default async function Shop() {
  const products = await getAllProducts().catch(() => []);

  return (
    <section style={{ background: "var(--yellow)", padding: "4rem 0 6rem" }}>
      <div className="container">
        <h1 className="display-italic" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", lineHeight: 0.9, marginBottom: "4rem" }}>
          Shop
        </h1>
        <div className="product-grid">
          {products.map((p) => (
            <Link key={p.handle} href={`/shop/${p.handle}`} style={{ textDecoration: "none" }}>
              <div className="product-card" style={{ cursor: "pointer" }}>
                {/* Product image */}
                {p.featuredImage ? (
                  <img
                    src={p.featuredImage.url}
                    alt={p.featuredImage.altText ?? p.title}
                    style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", marginBottom: "2rem" }}
                  />
                ) : (
                  <div className="img-placeholder" style={{ aspectRatio: "1/1", marginBottom: "2rem" }}>Product Image</div>
                )}
                <h2 className="display" style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
                  {p.title}
                </h2>
                <p className="body-sm" style={{ flex: 1, marginBottom: "1.5rem" }}>
                  {p.description.slice(0, 120)}{p.description.length > 120 ? "…" : ""}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500 }}>
                    {formatPrice(p.priceRange.minVariantPrice.amount, p.priceRange.minVariantPrice.currencyCode)}
                  </span>
                  <span className="btn" style={{ padding: "0.5rem 1.2rem", fontSize: "0.68rem" }}>Shop now</span>
                </div>
              </div>
            </Link>
          ))}
          {products.length === 0 && (
            <div style={{ gridColumn: "1/-1", padding: "4rem", textAlign: "center", opacity: 0.4 }}>
              <p style={{ fontFamily: "var(--font-body)" }}>Products coming soon</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
