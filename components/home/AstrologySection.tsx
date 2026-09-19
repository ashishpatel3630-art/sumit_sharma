"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "CAREER",
    hindi: "करियर",
  },
  {
    number: "02",
    title: "MARRIAGE",
    hindi: "विवाह",
  },
  {
    number: "03",
    title: "BUSINESS",
    hindi: "व्यवसाय",
  },
  {
    number: "04",
    title: "FAMILY",
    hindi: "परिवार",
  },
  {
    number: "05",
    title: "DOSHA",
    hindi: "दोष",
  },
  {
    number: "06",
    title: "GUIDANCE",
    hindi: "मार्गदर्शन",
  },
];

export default function AstrologySection() {
  return (
    <section
      id="astrology"
      className="relative overflow-hidden bg-[#18120F] px-6 py-24 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND ORBITS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-[-180px] h-[720px] w-[720px] rounded-full border border-[#C69A42]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[-100px] h-[560px] w-[560px] rounded-full border border-[#FFF9EF]/[0.045]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-16 h-[340px] w-[340px] rounded-full border border-[#C69A42]/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] bottom-[-220px] h-[520px] w-[520px] rounded-full border border-[#FFF9EF]/[0.035]"
      />

      {/* OM */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[11%] top-[17%] select-none font-serif text-[14rem] leading-none text-[#C69A42]/[0.045] sm:text-[19rem]"
      >
        ॐ
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#C69A42]" />

              <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
                03 / VEDIC ASTROLOGY
              </p>
            </div>

            <h2 className="mt-8 max-w-5xl font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.86] tracking-[-0.04em]">
              कुंडली को केवल
              <br />
              <span className="text-[#C69A42]">
                पढ़ें नहीं।
              </span>
              <br />
              उसे समझें।
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="lg:justify-self-end"
          >
            <p className="max-w-md text-sm leading-7 text-[#FFF9EF]/50 sm:text-base">
              जन्म तिथि, समय और स्थान के आधार पर कुंडली को
              एक व्यक्तिगत संदर्भ के रूप में समझने और जीवन के
              महत्वपूर्ण क्षेत्रों पर चर्चा करने का अवसर।
            </p>

            <Link
              href="/astrology"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#FFF9EF]/20 pb-2 text-sm text-[#FFF9EF]/75 transition-colors hover:border-[#C69A42] hover:text-[#C69A42]"
            >
              Explore Vedic Astrology

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* =================================================
            MAIN PANEL
        ================================================= */}

        <div className="mt-20 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT EDITORIAL CARD */}
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
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#211915] p-7 sm:p-9"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={15}
                    strokeWidth={1.4}
                    className="text-[#C69A42]"
                  />

                  <span className="text-[9px] tracking-[0.3em] text-[#C69A42]">
                    THE KUNDLI
                  </span>
                </div>

                <span className="font-mono text-[9px] tracking-[0.15em] text-white/20">
                  01—06
                </span>
              </div>

              {/* Kundli-inspired geometry */}
              <div className="relative mx-auto my-14 aspect-square w-full max-w-[360px]">
                <motion.div
                  initial={{
                    rotate: -8,
                    scale: 0.92,
                    opacity: 0,
                  }}
                  whileInView={{
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-[8%] rotate-45 border border-[#C69A42]/25"
                />

                <div className="absolute inset-[19%] rotate-45 border border-[#FFF9EF]/10" />

                <div className="absolute inset-[8%] grid grid-cols-2 grid-rows-2">
                  <div className="border-r border-b border-[#C69A42]/15" />
                  <div className="border-b border-[#C69A42]/15" />
                  <div className="border-r border-[#C69A42]/15" />
                  <div />
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C69A42]/25 bg-[#18120F]">
                  <span className="font-serif text-5xl text-[#C69A42]/80">
                    ॐ
                  </span>
                </div>

                {[
                  ["top-2 left-1/2", "01"],
                  ["right-5 top-1/3", "02"],
                  ["right-8 bottom-8", "03"],
                  ["bottom-5 left-1/3", "04"],
                  ["left-8 bottom-1/3", "05"],
                  ["left-5 top-1/3", "06"],
                ].map(([position, number]) => (
                  <span
                    key={number}
                    className={`absolute ${position} font-mono text-[8px] tracking-widest text-[#FFF9EF]/20`}
                  >
                    {number}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="font-serif text-2xl leading-tight text-white/80">
                  जन्म विवरण से
                  <br />
                  <span className="text-[#C69A42]">
                    व्यक्तिगत चर्चा तक।
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FOCUS AREAS */}
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
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7"
          >
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="group relative min-h-[150px] overflow-hidden bg-[#18120F] p-5 transition-colors duration-300 hover:bg-[#241914] sm:min-h-[170px] sm:p-6"
                >
                  <span className="font-mono text-[9px] tracking-[0.15em] text-[#C69A42]/60">
                    {area.number}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
                    <p className="text-[9px] tracking-[0.25em] text-white/30">
                      {area.title}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-white/85 sm:text-3xl">
                      {area.hindi}
                    </h3>
                  </div>

                  <span className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-300 group-hover:border-[#C69A42]/40 group-hover:text-[#C69A42]">
                    <ArrowUpRight size={13} />
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-7 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-[9px] tracking-[0.25em] text-[#C69A42]">
                  CONSULTATION
                </p>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
                  जन्म कुंडली, ग्रह स्थिति, दशा-गोचर, विवाह,
                  करियर, व्यवसाय और दोष संबंधी विषयों पर
                  व्यक्तिगत चर्चा।
                </p>
              </div>

              <Link
                href="/book-puja"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#C69A42] px-6 py-3.5 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-0.5"
              >
                Begin Consultation

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            FOOTNOTE
        ================================================= */}

        <div className="mt-8 flex items-start gap-3">
          <Check
            size={13}
            className="mt-1 shrink-0 text-[#C69A42]"
          />

          <p className="max-w-3xl text-[10px] leading-5 text-white/25">
            ज्योतिषीय consultation पारंपरिक ज्योतिषीय framework
            के संदर्भ में guidance प्रदान करता है। इसे medical,
            legal या financial advice का substitute नहीं माना
            जाना चाहिए।
          </p>
        </div>
      </div>
    </section>
  );
}