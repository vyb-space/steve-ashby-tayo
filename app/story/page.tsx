export default function Story() {
  return (
    <>
      <section style={{ background: "var(--beige)", padding: "8rem 0 6rem", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "56rem" }}>
          <h1 className="display-italic" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", lineHeight: 0.92 }}>
            Have you eaten?
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, opacity: 0.65, marginTop: "2rem", maxWidth: "36rem", margin: "2rem auto 0" }}>
            In the Philippines, people greet each other with:{" "}
            <em style={{ fontFamily: "var(--font-display)", fontStyle: "normal" }}>Kumain ka na ba?</em>
            {" "}— Have you eaten?
          </p>
        </div>
      </section>

      <section style={{ background: "var(--yellow)", padding: "6rem 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "52rem" }}>
          <p className="display-italic" style={{ fontSize: "clamp(2rem, 4vw, 4rem)", lineHeight: 1.1 }}>
            Here, life anchors around the pure joy of food and sharing it with others. It&apos;s our love language.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--beige)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", padding: "5rem 3rem", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.9, opacity: 0.7, maxWidth: "28rem" }}>
            We grew up savouring unique native ingredients and tantalising dishes in the Philippines. So we set out to bring the experience to home kitchens — sourcing all natural ingredients from across the archipelago and working with local farmers to sustainably craft products that taste of the Philippines&apos; terroir.
          </p>
          <div className="img-placeholder" style={{ aspectRatio: "4/3" }}>Image</div>
        </div>

        <div className="container" style={{ padding: "5rem 3rem", textAlign: "center", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <p className="display-italic" style={{ fontSize: "clamp(1.8rem, 3vw, 3.5rem)", lineHeight: 1.1, maxWidth: "48rem", margin: "0 auto" }}>
            &lsquo;Tayo&rsquo; means &lsquo;you and me&rsquo; in Filipino — we&apos;ve coined it to invite you to our table, laden with options and soul-awakening flavours.
          </p>
        </div>

        <div className="container" style={{ padding: "5rem 3rem" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.9, opacity: 0.7, maxWidth: "36rem" }}>
            Tayo has been years in the making; it&apos;s our mission to share the wonder of the Philippines with the world. Join us for the delicious ride!
          </p>
        </div>
      </section>
    </>
  );
}
