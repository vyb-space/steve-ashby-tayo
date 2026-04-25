export default function Taste() {
  return (
    <>
      <section style={{ background: "var(--beige)", padding: "8rem 0 6rem", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "60rem" }}>
          <h1 className="display-italic" style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)", lineHeight: 0.95 }}>
            Sour. Sweet. Salty. Funk. Bitter.
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, opacity: 0.65, marginTop: "2rem", maxWidth: "38rem", margin: "2rem auto 0" }}>
            Welcome to the big bold flavours of the Philippines. When they come together just so, they produce the prized essence of deliciousness known as{" "}
            <em style={{ fontFamily: "var(--font-display)" }}>malinamam.</em>
          </p>
        </div>
      </section>

      <section style={{ background: "var(--yellow)", padding: "5rem 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "48rem" }}>
          <p className="display-italic" style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.5rem)", lineHeight: 1.1 }}>
            Here, life anchors around the pure joy of food and sharing it with others. It&apos;s our love language.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--beige)", padding: "5rem 0", borderTop: "1px solid var(--black)", borderBottom: "1px solid var(--black)" }}>
        <div className="container" style={{ maxWidth: "48rem", textAlign: "center" }}>
          <p className="display-italic" style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)", marginBottom: "1.5rem" }}>
            No rules!
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.9, opacity: 0.65 }}>
            In the Philippines, eaters tailor their dish or mouthful by adding a little bit of this condiment or a lot of that one. At Tayo, we encourage you to let loose and do the same. Use our sauces to marinate, cook, drizzle or splash over meat, seafood, vegetables, or a simply satisfying bowl of steamed rice and fried eggs.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--yellow)", padding: "5rem 0" }}>
        <div className="container">
          <h2 className="display-italic" style={{ fontSize: "clamp(2.5rem, 6vw, 6.5rem)", textAlign: "center", marginBottom: "3rem" }}>
            Taste Tayo
          </h2>
          <p className="label" style={{ textAlign: "center", marginBottom: "3rem" }}>
            Some of our favourites — from Filipino classics to dishes from around the world
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", border: "1px solid var(--black)" }}>
            {["Adobo Chicken","Banana Ketchup Burgers","Coconut Vinegar Slaw"].map((r, i) => (
              <div key={i} style={{ background: "var(--beige)", padding: "2rem", borderRight: i < 2 ? "1px solid var(--black)" : "none" }}>
                <div className="img-placeholder" style={{ aspectRatio: "4/3", marginBottom: "1.25rem" }}>Recipe photo</div>
                <h3 className="display" style={{ fontSize: "1.3rem" }}>{r}</h3>
              </div>
            ))}
          </div>
          <p className="label" style={{ textAlign: "center", marginTop: "2rem" }}>Recipes coming soon</p>
        </div>
      </section>
    </>
  );
}
