"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const contactItems = [
  {
    label: "PHONE",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
  },
  {
    label: "WHATSAPP",
    value: "Start a conversation",
    href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`,
    icon: MessageCircle,
  },
  {
    label: "EMAIL",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LOCATION",
    value: siteConfig.location,
    href: "/contact#location",
    icon: MapPin,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#18120F] px-6 py-24 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-36"
    >
      {/* Decorative geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[-180px] h-[650px] w-[650px] rounded-full border border-[#C69A42]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-90px] top-[-90px] h-[470px] w-[470px] rounded-full border border-white/[0.035]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-250px] left-[-180px] h-[560px] w-[560px] rounded-full border border-white/[0.03]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[12%] font-serif text-[15rem] leading-none text-[#C69A42]/[0.035] sm:text-[20rem]"
      >
        ॐ
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#C69A42]" />

            <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
              06 / BEGIN A CONVERSATION
            </p>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end">
            <h2 className="max-w-6xl font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[0.82] tracking-[-0.045em]">
              आपकी यात्रा,
              <br />
              <span className="text-[#C69A42]">
                आपकी कहानी।
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/45 lg:justify-self-end">
              पूजा, दोष निवारण या कुंडली consultation के लिए
              अपनी आवश्यकता साझा करें। आगे की प्रक्रिया
              बातचीत के माध्यम से तय की जाती है।
            </p>
          </div>
        </motion.div>

        {/* =================================================
            PRIMARY CTA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.12,
          }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <Link
            href="/book-puja"
            className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-7 py-4 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Book Consultation

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm text-white/70 transition-all duration-300 hover:border-[#C69A42]/50 hover:text-white"
          >
            Contact Details

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* =================================================
            CONTACT GRID
        ================================================= */}

        <div className="mt-20 border-y border-white/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  {...(item.href.startsWith("https://")
                    ? {
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : {})}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="group border-b border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025] sm:p-7 lg:border-b-0 lg:border-r lg:p-8 lg:last:border-r-0"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#C69A42]"
                    />

                    <ArrowUpRight
                      size={15}
                      className="text-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C69A42]"
                    />
                  </div>

                  <p className="mt-12 text-[9px] tracking-[0.28em] text-white/30">
                    {item.label}
                  </p>

                  <p className="mt-3 break-words text-sm leading-6 text-white/65 transition-colors group-hover:text-white">
                    {item.value}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* =================================================
            FINAL NOTE
        ================================================= */}

        <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-[10px] leading-5 text-white/25">
            Enquiry भेजने से appointment automatically confirm
            नहीं होता। Final availability और service details
            direct communication के बाद confirm की जाती हैं।
          </p>

          <Link
            href="/faq"
            className="group flex w-fit items-center gap-2 text-xs text-white/40 transition-colors hover:text-[#C69A42]"
          >
            Read frequently asked questions

            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}