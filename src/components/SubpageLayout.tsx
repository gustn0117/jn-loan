import Header from "./Header";
import Footer from "./Footer";

export default function SubpageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: 72 }}>
        <div style={{ background: "linear-gradient(160deg, #0a2a1a 0%, #0d3320 40%, #27ae60 100%)", padding: "72px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent)", pointerEvents: "none" }} />
          <div className="container-main" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{title}</h1>
            {subtitle && <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 14, fontSize: 16 }}>{subtitle}</p>}
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
