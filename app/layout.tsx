import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AnimationProvider } from "@/components/animation/AnimationProvider";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.person.name} | ${site.person.title}`,
    template: `%s | ${site.person.displayName}`
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.person.name, url: site.url }],
  creator: site.person.name,
  publisher: site.person.name,
  keywords: [
    "AI-native web developer",
    "Next.js developer",
    "Claude Code",
    "OpenAI Codex",
    "v0",
    "Vercel",
    "Rahib"
  ],
  category: "portfolio"
};

export const viewport: Viewport = {
  themeColor: "#050607",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}

