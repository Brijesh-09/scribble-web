import type { Metadata, Viewport } from "next";
import "@fontsource/reenie-beanie/400.css";
import "@fontsource-variable/shantell-sans";
import "./globals.css";
import { site } from "@/lib/site";

const title = `${site.name}: ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  applicationName: site.name,
  openGraph: { title, description: site.description, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
