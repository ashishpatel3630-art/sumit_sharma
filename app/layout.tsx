import type { Metadata, Viewport } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import LoadingScreen from "@/components/ui/LoadingScreen";

const siteUrl = "https://sumitsharmaujjain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sumit Sharma | Vedic Astrology • Puja Anushthan • Dosh Nivaran",
    template: "%s | Sumit Sharma",
  },

  description:
    "Sumit Sharma provides Vedic Astrology, Kundli guidance, Puja Anushthan and traditional Dosh Nivaran services with a personalized and spiritually grounded approach.",

  applicationName: "Sumit Sharma",

  authors: [
    {
      name: "Sumit Sharma",
    },
  ],

  creator: "Sumit Sharma",
  publisher: "Sumit Sharma",

  keywords: [
    "Sumit Sharma",
    "Vedic Astrology",
    "Vedic Astrologer",
    "Puja Anushthan",
    "Dosh Nivaran",
    "Kundli",
    "Kundli Analysis",
    "Kaal Sarp Dosh",
    "Mangal Dosh",
    "Pitru Dosh",
    "Navgrah Shanti",
    "Rudrabhishek",
    "Mahamrityunjaya Jaap",
    "Vastu Shanti",
    "Marriage Kundli",
    "Online Puja",
    "Ujjain Astrology",
    "Ujjain Puja",
    "Mahakal Puja",
  ],

  category: "Astrology & Spiritual Services",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: siteUrl,

    siteName: "Sumit Sharma",

    title:
      "Sumit Sharma | Vedic Astrology & Puja Anushthan",

    description:
      "Vedic Astrology, Kundli guidance, Puja Anushthan and traditional Dosh Nivaran services by Sumit Sharma.",

    images: [
      {
        url: "/images/og/sumit-sharma-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sumit Sharma — Vedic Astrology & Puja Anushthan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sumit Sharma | Vedic Astrology & Puja Anushthan",

    description:
      "Vedic Astrology, Kundli guidance, Puja Anushthan and Dosh Nivaran services.",

    images: ["/images/og/sumit-sharma-og.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#FFF9EF",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#18120F",
    },
  ],

  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body>
        {/* Initial cinematic brand experience */}
        <LoadingScreen />

        {/* Global navigation */}
        <Navbar />

        {/* Main application content */}
        <main id="main-content">{children}</main>

        {/* Global footer */}
        <Footer />

        {/* Mobile-only conversion/navigation layer */}
        <MobileBottomBar />
      </body>
    </html>
  );
}