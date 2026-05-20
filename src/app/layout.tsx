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
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sharoz · Agentic AI Engineer & Fullstack Developer",
  description:
    "I build autonomous AI agents, RAG systems, and fullstack web apps with Next.js & FastAPI. Cyber Sakura aesthetic. Production ready.",
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
  openGraph: {
    title: "Sharoz · Agentic AI Engineer & Fullstack Developer",
    description:
      "Autonomous AI agents and fullstack apps. Next.js + FastAPI specialist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharoz · Agentic AI Engineer",
    description: "Autonomous AI + Fullstack. Building the future.",
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
