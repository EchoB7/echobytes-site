import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

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
    default: "YourottApp — Apps OTT White-Label",
    template: "%s — YourottApp",
  },
  description:
    "Apps OTT white-label para Samsung TV, LG, Roku, Android, iOS, Apple TV, Fire TV, Web e desktop. Sua marca em 12 plataformas.",
  applicationName: "YourottApp",
  authors: [{ name: "YourottApp" }],
  metadataBase: new URL("https://yourottapp.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "YourottApp — Apps OTT White-Label",
    description:
      "Lance seu streaming em qualquer tela com app white-label profissional. 12 plataformas, entrega em 30 dias.",
    url: "https://yourottapp.com",
    siteName: "YourottApp",
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
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
