import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "YouOTT — Apps OTT white-label",
    template: "%s — YouOTT",
  },
  description:
    "Apps OTT white-label sob medida para Smart TVs, mobile e web. Integrações, monetização e suporte para operações premium.",
  applicationName: "YouOTT",
  authors: [{ name: "YouOTT" }],
  metadataBase: new URL("https://youott.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "YouOTT — Apps OTT white-label",
    description:
      "Lance sua marca em Smart TVs, mobile e web com uma experiência premium e integrações sob medida.",
    url: "https://youott.com",
    siteName: "YouOTT",
    locale: "pt_BR",
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
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
