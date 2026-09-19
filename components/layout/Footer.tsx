"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/data/siteConfig";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Astrology", href: "/astrology" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Astrology Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Namaste, I would like to enquire about Vedic Astrology / Puja Anushthan.",
  )}`;

  return (
    <footer className="relative overflow-hidden bg-[#18120F] px-6 pb-28 pt-16 text-[#FFF9EF] sm:px-10 md:pb-10 lg:px-16">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[18%] -top-[35%] h-[750px] w-[750px] rounded-full border border-[#C69A42]/[0.055]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[45%] -left-[15%] h-[650px] w-[650px] rounded-full border border-white/[0.035]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[7%] top-[4%] select-none font-serif text-[18rem] leading-none text-[#C69A42]/[0.025] sm:text-[24rem]"
      >
        ॐ
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Top brand area */}
        <div className="grid gap-14 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C69A42]" />

              <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
                SUMIT SHARMA
              </p>
            </div>

            <h2 className="mt-7 max-w-3xl font-serif text-5xl leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              वैदिक ज्ञान।
              <br />
              <span className="text-[#C69A42]">सही दिशा।</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/40 sm:text-base">
              Vedic Astrology, Puja Anushthan और Dosh Nivaran के
              संदर्भ में व्यक्तिगत consultation और traditional
              guidance.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book-puja"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-6 py-3.5 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8C46C]"
              >
                Book Consultation

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm text-white/65 transition-all duration-300 hover:border-[#C69A42]/40 hover:text-white"
              >
                <MessageCircle
                  size={16}
                  className="text-[#C69A42]"
                />

                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-2">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/30">
                EXPLORE
              </p>

              <nav className="mt-6 grid gap-3">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/30">
                LEGAL
              </p>

              <nav className="mt-6 grid gap-3">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60"
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Contact rail */}
        <div className="mt-16 grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] sm:grid-cols-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="group border-b border-white/10 p-6 transition-colors hover:bg-white/[0.035] sm:border-b-0 sm:border-r"
          >
            <div className="flex items-center justify-between">
              <Phone
                size={17}
                strokeWidth={1.4}
                className="text-[#C69A42]"
              />

              <ArrowUpRight
                size={15}
                className="text-white/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>

            <p className="mt-7 text-[9px] tracking-[0.3em] text-white/25">
              PHONE
            </p>

            <p className="mt-2 text-sm text-white/65">
              {siteConfig.phone}
            </p>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group border-b border-white/10 p-6 transition-colors hover:bg-white/[0.035] sm:border-b-0 sm:border-r"
          >
            <div className="flex items-center justify-between">
              <Mail
                size={17}
                strokeWidth={1.4}
                className="text-[#C69A42]"
              />

              <ArrowUpRight
                size={15}
                className="text-white/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>

            <p className="mt-7 text-[9px] tracking-[0.3em] text-white/25">
              EMAIL
            </p>

            <p className="mt-2 break-all text-sm text-white/65">
              {siteConfig.email}
            </p>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group p-6 transition-colors hover:bg-white/[0.035]"
          >
            <div className="flex items-center justify-between">
              <MessageCircle
                size={17}
                strokeWidth={1.4}
                className="text-[#C69A42]"
              />

              <ArrowUpRight
                size={15}
                className="text-white/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>

            <p className="mt-7 text-[9px] tracking-[0.3em] text-white/25">
              WHATSAPP
            </p>

            <p className="mt-2 text-sm text-white/65">
              Start an enquiry
            </p>
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/25">
                SUMIT SHARMA
              </p>

              <p className="mt-2 text-xs text-white/35">
                Vedic Astrology · Puja Anushthan · Dosh Nivaran
              </p>
            </div>

            <div className="max-w-md lg:text-right">
              <p className="text-[10px] leading-5 text-white/25">
                ज्योतिषीय guidance और धार्मिक अनुष्ठान आध्यात्मिक एवं
                पारंपरिक संदर्भ में प्रदान किए जाते हैं। इन्हें
                medical, legal या financial advice का substitute नहीं
                माना जाना चाहिए।
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-white/[0.06] pt-5 text-[10px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All
              rights reserved.
            </p>

            <p>
              Designed with respect for tradition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}