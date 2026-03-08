import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from './components/Footer';
import CookieBanner from "./components/CookieBanner";
import ScriptLoader from "./components/ScriptLoader";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://vantedge.uk"),
  title: {
    default: "Vantedge | Expert Product Reviews & Deals",
    template: "%s | Vantedge",
  },
  description: "Discover the best products and exclusive deals. Unbiased reviews and guides to help you make the right purchase.",
  robots: "index, follow",
  openGraph: {
    title: "Vantedge",
    description: "Technology and AI Solutions",
    url: "https://vantedge.uk",
    siteName: "Vantedge",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  const consentOptions = {} as any;
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4807336491663866"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vantedge",
              url: "https://vantedge.uk",
            }),
          }}
        />
        
        
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-Q9X3P2G93S" />
        <Footer />
        <CookieBanner />
        <ScriptLoader />
      </body>
    </html>
  );
}
