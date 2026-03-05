import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Datahivemind — We Build Your Idea Into Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          <span>data</span>
          <span style={{ color: "#6366f1" }}>hivemind</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          We Build Your Idea Into Software
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 48,
            fontSize: 18,
            color: "#71717a",
          }}
        >
          <span>Fixed price</span>
          <span>·</span>
          <span>2-8 weeks</span>
          <span>·</span>
          <span>You own the code</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
