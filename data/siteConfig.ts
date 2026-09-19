export interface SiteNavigationItem {
  label: string;
  href: string;
}

export const siteConfig = {
  /* ─────────────────────────────────────────
     BRAND
  ───────────────────────────────────────── */

  name: "SUMIT SHARMA",

  shortName: "SUMIT",

  title: "Vedic Astrology • Puja Anushthan • Dosh Nivaran",

  tagline: "प्राचीन ज्ञान • आधुनिक मार्गदर्शन",

  description:
    "वैदिक ज्योतिष, पूजा अनुष्ठान और दोष निवारण से संबंधित व्यक्तिगत मार्गदर्शन एवं पारंपरिक सेवाएं।",

  /* ─────────────────────────────────────────
     LOCATION & CONTACT
  ───────────────────────────────────────── */

  location: "Ujjain, Madhya Pradesh",

  phone: "",

  whatsapp: "",

  email: "",

  /* ─────────────────────────────────────────
     MEDIA
  ───────────────────────────────────────── */

  heroVideo: "/videos/mahakal-hero.mp4",

  heroPoster: "/images/hero/mahakal-poster.jpg",

  ritualVideo: "/videos/ritual.mp4",

  profileImage: "/images/profile/sumit-sharma.jpg",

  ogImage: "/images/og/sumit-sharma-og.jpg",

  /* ─────────────────────────────────────────
     BRAND COLORS
  ───────────────────────────────────────── */

  colors: {
    maroon: "#7A1717",
    templeRed: "#A52A16",
    saffron: "#D85B16",
    burntOrange: "#B94716",
    ivory: "#FFF9EF",
    cream: "#F3E4C7",
    gold: "#C69A42",
    charcoal: "#18120F",
  },

  /* ─────────────────────────────────────────
     NAVIGATION
  ───────────────────────────────────────── */

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Puja",
      href: "/services",
    },
    {
      label: "Astrology",
      href: "/astrology",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ] satisfies SiteNavigationItem[],

  /* ─────────────────────────────────────────
     PRIMARY CTA
  ───────────────────────────────────────── */

  primaryCta: {
    label: "Book Consultation",
    href: "/book-puja",
  },

  /* ─────────────────────────────────────────
     SOCIAL / EXTERNAL LINKS
     
     Keep empty until actual profiles exist.
  ───────────────────────────────────────── */

  social: {
    instagram: "",
    youtube: "",
    facebook: "",
  },

  /* ─────────────────────────────────────────
     LEGAL
  ───────────────────────────────────────── */

  legal: {
    privacy: "/privacy",
    terms: "/terms",
    disclaimer: "/disclaimer",
  },

  /* ─────────────────────────────────────────
     SEO
  ───────────────────────────────────────── */

  seo: {
    siteUrl: "https://sumitsharmaujjain.com",

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
  },
} as const;