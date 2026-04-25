import Link from "next/link";

const products = [
  {
    handle: "cloudy-coconut-vinegar",
    eyebrow: "Bright & Aromatic",
    name: "Cloudy Coconut Vinegar",
    description: "An enlivening vinegar for adding dimensions of flavour. Naturally fermented, unfiltered, soul-awakening.",
  },
  {
    handle: "adobo-sauce",
    eyebrow: "Rich & Savory",
    name: "Adobo Sauce",
    description: "The iconic Filipino flavour — tangy, umami-rich, and deeply satisfying. Pour over everything.",
  },
  {
    handle: "young-banana-ketchup",
    eyebrow: "Sweet & Vibrant",
    name: "Young Banana Ketchup",
    description: "Playful, naturally sweet, made from unripe banana. Your new favourite everything sauce.",
  },
];

const features = [
  {
    label: "All natural, all flavour",
    body: "Our ingredients come from pristine fields surrounded by the tropical sun. You can taste the happiness.",
  },
  {
    label: "Traditionally crafted",
    body: "We believe the best flavour comes from doing as little as possible — as Filipino artisans have done for centuries.",
  },
  {
    label: "Instant pow!",
    body: "We've bottled the soul-awakening taste of the Philippines, so all you have to do is pour.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ background: "var(--black)", minHeight: "72vh", display: "flex", alignItems: "flex-end" }}>
        <div className="container" style={{ paddingBottom: "5rem", paddingTop: "5rem" }}>
          <h1 className="display-italic" style={{ color: "var(--yellow)", fontSize: "clamp(5rem, 12vw, 11rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}>
            Tayo.
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "rgba(255,255,255,0.6)", maxWidth: "36rem", marginTop: "1.5rem", lineHeight: 1.7 }}>
            Soul-awakening Filipino condiments — artisan, all-natural, made with centuries of tradition.
          </p>
          <Link href="/shop" className="btn-inv" style={{ marginTop: "2.5rem", display: "inline-block" }}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* ─── PRODUCT CARDS ─── */}
      <section style={{ background: "var(--yellow)", padding: "5rem 0" }}>
        <div className="container">
          <div className="product-grid">
            {products.map((p) => (
              <div key={p.handle} className="product-card">
                <div className="img-placeholder" style={{ aspectRatio: "1/1", marginBottom: "2rem" }}>
                  Product Image
                </div>
                <p className="label" style={{ marginBottom: "0.75rem" }}>{p.eyebrow}</p>
                <h2 className="display" style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
                  {p.name}
                </h2>
                <p className="body-sm" style={{ flex: 1, marginBottom: "1.75rem" }}>{p.description}</p>
                <Link href={`/shop/${p.handle}`} className="btn" style={{ alignSelf: "flex-start" }}>
                  Shop now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE BAND (warm gradient) ─── */}
      <section style={{
        background: "linear-gradient(135deg, #ff7b54 0%, #ff9a76 40%, var(--beige) 100%)",
        padding: "6rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <blockquote className="container">
          <p className="display-italic" style={{ fontSize: "clamp(1.8rem, 4vw, 3.8rem)", lineHeight: 1.1, maxWidth: "56rem", margin: "0 auto" }}>
            &ldquo;Food is at the heart of life in the Philippines, where big bold flavours and no rules abound.&rdquo;
          </p>
        </blockquote>
      </section>

      {/* ─── FEATURE SECTIONS ─── */}
      <section style={{ background: "var(--beige)" }}>
        {features.map((f, i) => (
          <div key={i} style={{
            borderBottom: i < features.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
            padding: "5rem 0",
          }}>
            <div className="container" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <p className="label" style={{ marginBottom: "1rem" }}>{f.label}</p>
                <p className="display-italic" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", lineHeight: 1.15 }}>
                  {f.body}
                </p>
              </div>
              <div className="img-placeholder" style={{ aspectRatio: "4/3", order: i % 2 === 0 ? 1 : 0 }}>
                Image
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ─── TASTE TAYO strip ─── */}
      <section style={{ background: "var(--yellow)", padding: "5rem 0" }}>
        <div className="container">
          <h2 className="display-italic" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", textAlign: "center", marginBottom: "3rem" }}>
            Taste Tayo
          </h2>
          <div className="image-strip">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="img-placeholder" style={{ flex: "none", width: "18rem", height: "18rem" }}>
                Photo {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK QUOTE / CTA ─── */}
      <section style={{ background: "var(--black)", padding: "6rem 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "52rem" }}>
          <p className="display-italic" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.8rem)", color: "var(--white)", lineHeight: 1.15 }}>
            &ldquo;We&apos;ve bottled this spirit using all natural ingredients and slow, time-honoured techniques, so they awaken the taste buds and add instant vibrant flavour.&rdquo;
          </p>
          <Link href="/story" className="btn-inv" style={{ marginTop: "2.5rem", display: "inline-block" }}>
            Our Story
          </Link>
        </div>
      </section>
    </>
  );
}
