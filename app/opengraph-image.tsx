import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.person.name} - ${site.person.title}`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background:
            "linear-gradient(135deg, #050607 0%, #0b1012 46%, #072522 100%)",
          color: "#f7fbfb",
          fontFamily: "Inter, Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(33,246,212,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(33,246,212,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.55
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-140px",
            top: "60px",
            width: "520px",
            height: "520px",
            border: "1px solid rgba(33,246,212,0.28)",
            transform: "rotate(18deg)",
            borderRadius: "34px"
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: "fit-content",
              alignItems: "center",
              gap: 12,
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              padding: "12px 18px",
              background: "rgba(255,255,255,0.06)",
              color: "#21f6d4",
              fontSize: 28
            }}
          >
            {site.person.tagline}
          </div>
          <h1
            style={{
              margin: 0,
              maxWidth: "860px",
              fontSize: 92,
              lineHeight: 0.95,
              letterSpacing: 0
            }}
          >
            {site.person.name}
          </h1>
          <p
            style={{
              margin: 0,
              color: "rgba(247,251,251,0.74)",
              fontSize: 38
            }}
          >
            {site.person.title}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "rgba(247,251,251,0.78)"
          }}
        >
          <span>Claude Code / OpenAI Codex / v0 / Next.js</span>
          <span style={{ color: "#21f6d4" }}>rahib.dev</span>
        </div>
      </div>
    ),
    size
  );
}

