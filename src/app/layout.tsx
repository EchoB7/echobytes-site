import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteHeader } from "@/components/site-header";

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
    default: "YourottApp — App IPTV e OTT White-Label para Smart TV, Mobile e Web",
    template: "%s — YourottApp",
  },
  description:
    "Crie seu app de streaming white-label com sua marca em Samsung TV, LG TV, Android TV, Fire TV, Apple TV, Roku, iOS, Android e Web. Integração com Xtream Codes, M3U e TMDB. Proposta em 24h.",
  applicationName: "YourottApp",
  authors: [{ name: "YourottApp" }],
  keywords: [
    "app IPTV white-label",
    "app OTT white-label",
    "app Smart TV personalizado",
    "app streaming white-label",
    "app IPTV Samsung TV",
    "app IPTV Android TV",
    "app IPTV Android iOS",
    "desenvolvimento app OTT",
    "app hotel IPTV",
    "app revendedor IPTV",
    "white-label streaming app",
    "OTT platform white-label",
  ],
  metadataBase: new URL("https://yourottapp.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "YourottApp — App IPTV e OTT White-Label",
    description:
      "Lance seu app de streaming com sua marca em 12 plataformas: Samsung TV, LG, Android TV, Fire TV, Apple TV, Roku, iOS, Android e Web. Integração com Xtream Codes e M3U. Proposta personalizada em 24h.",
    url: "https://yourottapp.com",
    siteName: "YourottApp",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourottApp — App IPTV e OTT White-Label",
    description:
      "Seu app de streaming com sua marca em Samsung TV, Android TV, iOS, Android e mais. Proposta em 24h.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <SiteHeader />
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
