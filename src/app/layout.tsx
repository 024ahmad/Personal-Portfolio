import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const display = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  // TODO: Replace with your real production domain before deploying.
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Sharoz · Agentic AI Engineer & Fullstack Developer",
    template: "%s · Sharoz",
  },
  description:
    "I build autonomous AI agents, RAG systems, and fullstack web apps with Next.js & FastAPI. Neon Cyan aesthetic. Production ready.",
  keywords: [
    "Agentic AI",
    "AI Engineer",
    "Fullstack Developer",
    "Next.js",
    "FastAPI",
    "LLM",
    "RAG",
    "Portfolio",
  ],
  authors: [{ name: "Sharoz" }],
  creator: "Sharoz",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Sharoz · Agentic AI Engineer",
    title: "Sharoz · Agentic AI Engineer & Fullstack Developer",
    description:
      "Autonomous AI agents and fullstack apps. Next.js + FastAPI specialist.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sharoz · Agentic AI Engineer & Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharoz · Agentic AI Engineer",
    description: "Autonomous AI + Fullstack. Building the future.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
