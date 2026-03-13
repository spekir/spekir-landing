export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px"
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <h1
          style={{
            fontSize: 56,
            letterSpacing: "0.08em",
            marginBottom: 20
          }}
        >
          SPEKIR
        </h1>

        <h2
          style={{
            fontSize: 34,
            lineHeight: 1.2,
            marginBottom: 20
          }}
        >
          Decision intelligence for founders and leaders
        </h2>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            marginBottom: 30,
            color: "#475569"
          }}
        >
          Think clearer. Decide better. Build a decision dataset over time.
        </p>

        <div
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#0A1A2F",
            color: "white",
            borderRadius: 10,
            fontWeight: 600
          }}
        >
          Coming soon
        </div>
      </div>
    </main>
  );
}
