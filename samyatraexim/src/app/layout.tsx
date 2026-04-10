import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samyatra Exim",
  description:
    "Samyatra Exim exports high-quality spices and moringa powder from India.",
  alternates: {
    canonical: "https://samyatraexim.com/",
  },
  keywords: ["export", "spices", "moringa", "India"],
  authors: [{ name: "Samyatra Exim" }],
  openGraph: {
    title: "Samyatra Exim",
    description:
      "Exporting premium spices and moringa powder from India.",
    url: "https://samyatraexim.com",
    siteName: "Samyatra Exim",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
