import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Datahivemind — We Build Your Idea Into Software",
  description:
    "Turn your business idea into a working app, SaaS, or automation. Fixed-price packages, fast delivery, no technical knowledge required.",
  openGraph: {
    title: "Datahivemind — We Build Your Idea Into Software",
    description:
      "Turn your business idea into a working app, SaaS, or automation. Fixed-price packages, fast delivery.",
    type: "website",
    url: "https://datahivemind.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
