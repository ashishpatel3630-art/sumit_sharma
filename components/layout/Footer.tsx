"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/siteConfig";

const footerLinks = [
  { label: "होम", href: "/" },
  { label: "हमारे बारे में", href: "/about" },
  { label: "सेवाएं", href: "/services" },
  { label: "ज्योतिष", href: "/astrology" },
  { label: "गैलरी", href: "/gallery" },
  { label: "संपर्क", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Namaste, I would like to enquire about Vedic Astrology / Puja Anushthan."
  )}`;

  return (
    <footer className="bg-[#17110E] text-[#FFF9EF]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-2xl tracking-wide">
                {siteConfig.name}
              </h2>
            </Link>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C69A42]">
              Vedic Astrology · Puja Anushthan
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              वैदिक ज्योतिष, पूजा अनुष्ठान और दोष निवारण के माध्यम से
              पारंपरिक ज्ञान एवं आध्यात्मिक मार्गदर्शन।
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium text-white/35">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium text-white/35">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                {siteConfig.phone}
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all text-sm text-white/55 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 text-sm text-[#C69A42] transition-colors hover:text-[#DDB96A]"
              >
                <MessageCircle size={15} strokeWidth={1.7} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 transition-colors hover:text-white/60"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Developer */}
          <a
            href="https://patrexmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/30 transition-colors hover:text-[#C69A42]"
          >
            Designed by Patrex Media
          </a>
        </div>
      </div>
    </footer>
  );
}