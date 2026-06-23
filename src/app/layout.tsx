import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CommMech — Building the Future of Tech",
  description:
    "CommMech delivers cutting-edge technology solutions. Request a demo to see how we build the future of tech.",
  metadataBase: new URL("https://commmech.com"),
  openGraph: {
    title: "CommMech — Building the Future of Tech",
    description:
      "CommMech delivers cutting-edge technology solutions. Request a demo to see how we build the future of tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
