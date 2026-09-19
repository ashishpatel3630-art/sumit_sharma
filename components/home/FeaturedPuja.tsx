"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Sparkles,
} from "lucide-react";

const details = [
  "पारंपरिक पूजा विधि",
  "संकल्प एवं अनुष्ठान",
  "व्यक्तिगत मार्गदर्शन",
];

export default function FeaturedPuja() {
  return (
    <section className="relative overflow-hidden bg-[#7A1717] px-6 py-24 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-36">
      {/* Background geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[18%] -top-[35%] h-[850px] w-[850px] rounded-full border border-[#C69A42]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -top-[22%] h-[650px] w-[650px] rounded-full border border-[#FFF9EF]/[0.05]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[35%] -left-[18%] h-[650px] w-[650px] rounded-full border border-[#C69A42]/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[8%] select-none font-serif text-[15rem] leading-none text-[#C69A42]/[0.035] sm:text-[20rem] lg:text-[24rem]"
      >
        ॐ
      </div>

      {/* Fine texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "110px 110px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#C69A42]" />

              <p className="text-[10px] font-medium tracking-[0.35em] text-[#E8C46C]">
                FEATURED ANUSHTHAN
              </p>
            </div>

            <div className="mt-8">
              <p className="font-serif text-xl text-[#E8C46C]/80 sm:text-2xl">
                पारंपरिक अनुष्ठान
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-[clamp(3.8rem,7vw,7rem)] leading-[0.84] tracking-[-0.045em]">
                काल सर्प दोष
                <br />
                <span className="text-[#E8C46C]">निवारण</span>
              </h2>
            </div>

            <p className="mt-9 max-w-xl text-sm leading-7 text-[#FFF9EF]/60 sm:text-base">
              पारंपरिक विधि, उचित संकल्प और व्यक्तिगत मार्गदर्शन के
              साथ अनुष्ठान की जानकारी एवं enquiry के लिए संपर्क करें।
            </p>

            {/* Details */}
            <div className="mt-9 grid max-w-xl gap-3 border-y border-[#FFF9EF]/10 py-5 sm:grid-cols-3 sm:gap-0">
              {details.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 text-xs text-[#FFF9EF]/55 ${
                    index !== 0
                      ? "sm:border-l sm:border-[#FFF9EF]/10 sm:pl-5"
                      : ""
                  }`}
                >
                  <Check
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#E8C46C]"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/services/kaal-sarp-dosh"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-6 py-3.5 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8C46C] hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
              >
                Explore Puja

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/book-puja"
                className="group inline-flex items-center gap-2 text-sm text-[#FFF9EF]/65 transition-colors hover:text-[#FFF9EF]"
              >
                Enquire for this service

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* Sacred visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[#FFF9EF]/10 bg-[#641212]">
              {/* Inner vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,154,66,.14),transparent_52%)]" />

              {/* Large outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 70,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C69A42]/15"
              >
                <span className="absolute left-[13%] top-[4%] h-2 w-2 rounded-full bg-[#C69A42]/70" />
                <span className="absolute bottom-[11%] right-[8%] h-1.5 w-1.5 rounded-full bg-[#E8C46C]/60" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 48,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8C46C]/20"
              >
                <span className="absolute right-[7%] top-[21%] h-1.5 w-1.5 rounded-full bg-[#C69A42]" />
              </motion.div>

              {/* Cardinal markers */}
              <div className="absolute left-1/2 top-[10%] -translate-x-1/2 text-[9px] tracking-[0.3em] text-[#C69A42]/45">
                NORTH
              </div>

              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] text-[#C69A42]/45">
                SOUTH
              </div>

              <div className="absolute left-[7%] top-1/2 -translate-y-1/2 text-[9px] tracking-[0.3em] text-[#C69A42]/45 [writing-mode:vertical-rl]">
                TRADITION
              </div>

              <div className="absolute right-[7%] top-1/2 -translate-y-1/2 text-[9px] tracking-[0.3em] text-[#C69A42]/45 [writing-mode:vertical-rl]">
                GUIDANCE
              </div>

              {/* Central sacred geometry */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#C69A42]/25 sm:h-64 sm:w-64">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[18%] rotate-45 border border-[#C69A42]/25"
                  />

                  <div className="absolute inset-[29%] rotate-45 border border-[#E8C46C]/20" />

                  <div className="absolute h-[1px] w-[72%] bg-[#C69A42]/20" />
                  <div className="absolute h-[72%] w-[1px] bg-[#C69A42]/20" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#C69A42]/35 bg-[#641212] shadow-[0_0_70px_rgba(198,154,66,0.08)] sm:h-32 sm:w-32">
                    <span className="font-serif text-6xl text-[#E8C46C] sm:text-7xl">
                      ॐ
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute left-5 top-5 flex items-center gap-2 text-[9px] tracking-[0.22em] text-[#FFF9EF]/30 sm:left-7 sm:top-7">
                <CircleDot size={11} className="text-[#C69A42]/60" />
                ANUSHTHAN
              </div>

              <div className="absolute bottom-5 right-5 flex items-center gap-2 text-[9px] tracking-[0.22em] text-[#FFF9EF]/30 sm:bottom-7 sm:right-7">
                <Sparkles size={11} className="text-[#C69A42]/60" />
                PARAMPARA
              </div>

              {/* Bottom information rail */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-[#FFF9EF]/10 bg-[#4f0d0d]/50 px-5 py-4 backdrop-blur-sm sm:px-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] tracking-[0.25em] text-[#C69A42]">
                      FEATURED SERVICE
                    </p>

                    <p className="mt-1 font-serif text-lg text-[#FFF9EF]/80">
                      Kaal Sarp Dosh
                    </p>
                  </div>

                  <ArrowDownRight
                    size={20}
                    strokeWidth={1}
                    className="text-[#C69A42]/60"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Editorial footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex flex-col gap-4 border-t border-[#FFF9EF]/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-[11px] leading-5 text-[#FFF9EF]/30">
            किसी भी दोष या अनुष्ठान की उपयुक्तता व्यक्तिगत जन्मकुंडली,
            परिस्थिति और consultation के संदर्भ में समझी जानी चाहिए।
          </p>

          <Link
            href="/astrology"
            className="group inline-flex shrink-0 items-center gap-2 text-xs text-[#C69A42]"
          >
            Understand your chart first
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}