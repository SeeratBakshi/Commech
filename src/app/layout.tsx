import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Building the Future of Tech",
  description: "A premium, responsive hero section replicated with next.js, Tailwind CSS, and custom SVG grid wave mesh.",
  metadataBase: new URL("https://test-task-hero.vercel.app"),
  openGraph: {
    title: "Building the Future of Tech",
    description: "A premium, responsive hero section replicated with next.js, Tailwind CSS, and custom SVG grid wave mesh.",
    type: "website",
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
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f5f7] text-[#171717] font-sans">
        {children}
      </body>
    </html>
  );
}
