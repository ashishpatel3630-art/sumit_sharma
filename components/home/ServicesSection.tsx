"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
ArrowRight,
ArrowUpRight,
Sparkles,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesSection() {
return ( <section className="relative overflow-hidden bg-[#18120F] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
{/* Top border */} <div
     aria-hidden="true"
     className="absolute inset-x-0 top-0 h-px bg-white/[0.08]"
   />


  <div className="relative z-10 mx-auto max-w-[1400px]">
    {/* ───────────────── Header ───────────────── */}
    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
      <SectionHeading
        eyebrow="०२ / हमारी सेवाएँ"
        title="वैदिक परंपरा, व्यक्तिगत मार्गदर्शन।"
        description="दोष निवारण, पूजा अनुष्ठान और ज्योतिषीय मार्गदर्शन के लिए ऐसी सेवाएँ, जिन्हें आपकी आवश्यकता और उद्देश्य के अनुसार समझा जाता है।"
        light
      />

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
      >
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 text-sm font-medium text-[#C69A42] transition-colors duration-300 hover:text-white"
        >
          <span>सभी सेवाएँ देखें</span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C69A42]/25 transition-all duration-300 group-hover:border-[#C69A42]/60 group-hover:bg-[#C69A42]/10">
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </motion.div>
    </div>

    {/* ───────────────── Service label ───────────────── */}
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease,
      }}
      className="mt-16 origin-left border-t border-white/10 pt-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles
            size={14}
            strokeWidth={1.4}
            className="text-[#C69A42]"
          />

          <p className="text-xs font-medium tracking-[0.08em] text-white/40">
            अपनी आवश्यकता के अनुसार सेवा चुनें
          </p>
        </div>

        <span className="hidden text-xs tracking-[0.12em] text-white/20 sm:block">
          {String(services.length).padStart(2, "0")} सेवाएँ
        </span>
      </div>
    </motion.div>

    {/* ───────────────── Service cards ───────────────── */}
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.slug}
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(6px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.75,
            delay: (index % 3) * 0.1,
            ease,
          }}
          className="h-full"
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </div>

    {/* ───────────────── Bottom information ───────────────── */}
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
        margin: "-60px",
      }}
      transition={{
        duration: 0.7,
        delay: 0.15,
        ease,
      }}
      className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex max-w-2xl items-start gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C69A42]" />

        <p className="text-xs leading-6 text-white/35 sm:text-sm">
          किसी भी सेवा की उपयुक्तता आपकी व्यक्तिगत परिस्थिति,
          आवश्यकता और परामर्श के संदर्भ में समझी जानी चाहिए।
        </p>
      </div>

      <Link
        href="/book-puja"
        className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-[#C69A42]"
      >
        <span>कौन-सी सेवा उपयुक्त है?</span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#C69A42]/40 group-hover:bg-[#C69A42]/10">
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  </div>
</section>


);
}
