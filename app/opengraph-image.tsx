import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Scribble: Drop it. Find it later.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // the handwriting font ships with the fontsource package, so no network is needed
  const font = await readFile(
    path.join(process.cwd(), "node_modules/@fontsource/reenie-beanie/files/reenie-beanie-latin-400-normal.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0f10",
          color: "#f4eeeb",
          fontFamily: "Reenie",
        }}
      >
        <div style={{ fontSize: 250, lineHeight: 0.9, display: "flex" }}>Drop it.</div>
        <div style={{ fontSize: 250, lineHeight: 0.9, display: "flex" }}>Find it later.</div>
        <svg width="560" height="30" viewBox="0 0 120 8" style={{ marginTop: 12 }}>
          <path d="M2 5c18-4 34 2 52-1s40 2 64-1" fill="none" stroke="#d9b8ae" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div style={{ fontSize: 80, marginTop: 20, color: "#d9b8ae", display: "flex" }}>Scribble</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Reenie", data: font, style: "normal", weight: 400 }] }
  );
}
