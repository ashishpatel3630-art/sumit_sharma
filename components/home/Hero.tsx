"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Play,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#18120F] text-white">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero/mahakal-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/mahakal-hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic treatment */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#18120F] via-[#18120F]/45 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#18120F]/85 via-[#18120F]/25 to-transparent" />

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:url('/noise.svg')]" />

      {/* Fine frame */}
      <div className="pointer-events-none absolute inset-5 rounded-[1.5rem] border border-white/[0.08] sm:inset-7 lg:inset-9" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-10 pt-36 sm:pb-14 md:px-10 lg:px-16 lg:pb-16">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#C69A42]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#E8C46C] sm:text-xs">
              Vedic Astrology · Puja Anushthan · Dosh Nivaran
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.055em]"
          >
            Align your
            <br />
            <span className="text-[#E8C46C]">destiny.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-xl text-sm leading-7 text-white/65 sm:text-base md:text-lg"
          >
            वैदिक ज्योतिष, पारंपरिक पूजा अनुष्ठान और दोष संबंधी
            मार्गदर्शन — आपकी आवश्यकता और परिस्थिति को समझकर।
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.38,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/book-puja"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FFF9EF] px-7 py-4 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8C46C]"
            >
              Book a Puja

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/astrology"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-black/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#E8C46C]/50 hover:bg-white/10"
            >
              Explore Astrology

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex flex-col gap-5 border-t border-white/15 pt-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.32em] text-white/40">
              SUMIT SHARMA
            </p>

            <p className="mt-2 text-xs text-white/55 sm:text-sm">
              Vedic Astrology · Puja Anushthan
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Play
              size={12}
              className="fill-[#E8C46C] text-[#E8C46C]"
            />

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Sacred traditions · Modern guidance
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 hidden items-center gap-3 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
          Scroll to explore
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}