"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Info,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const doshas = [
  {
    name: "Mangal Dosh",
    hindi: "मंगल दोष",
    short: "Mars-related traditional assessment",
    text: "Mangal Dosha की traditional assessment जन्म कुंडली में मंगल की स्थिति और संबंधित house placements के आधार पर की जाती है। केवल राशि या सामान्य जानकारी से इसकी पुष्टि नहीं की जा सकती।",
  },
  {
    name: "Kaal Sarp Dosh",
    hindi: "काल सर्प दोष",
    short: "Planetary alignment assessment",
    text: "Kaal Sarp से संबंधित interpretation के लिए पूरी जन्म कुंडली और ग्रहों की स्थितियों को संदर्भ में देखना आवश्यक माना जाता है। सामान्य online test इसे conclusively establish नहीं करता।",
  },
  {
    name: "Pitru Dosh",
    hindi: "पितृ दोष",
    short: "Traditional horoscope interpretation",
    text: "Pitru Dosha से संबंधित traditional interpretation जन्म कुंडली के विभिन्न factors और पारंपरिक ज्योतिषीय framework के आधार पर की जाती है।",
  },
];

export default function DoshAnalyzer() {
  const [selected, setSelected] =
    useState(0);

  const current = doshas[selected];

  return (
    <section
      id="dosh-guide"
      className="relative overflow-hidden bg-[#FFF9EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-36"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[-160px] h-[500px] w-[500px] rounded-full border border-[#A52A16]/[0.05]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[500px] w-[500px] rounded-full border border-[#C69A42]/10"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A52A16]" />

              <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                04 / DOSH GUIDE
              </p>
            </div>

            <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#C69A42]/30">
              <span className="font-serif text-3xl text-[#A52A16]">
                ॐ
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
            }}
          >
            <h2 className="max-w-5xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
              पहले समझें।
              <br />
              <span className="text-[#A52A16]">
                फिर उपाय चुनें।
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#18120F]/50 sm:text-base">
              कुछ सामान्य dosha concepts को educational context
              में समझें। किसी भी dosha की वास्तविक assessment के
              लिए individual birth chart analysis आवश्यक हो सकता है।
            </p>
          </motion.div>
        </div>

        {/* =================================================
            ANALYZER
        ================================================= */}

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          {/* OPTIONS */}
          <div className="space-y-3">
            {doshas.map((dosha, index) => {
              const isSelected =
                selected === index;

              return (
                <motion.button
                  key={dosha.name}
                  type="button"
                  onClick={() =>
                    setSelected(index)
                  }
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 sm:p-7 ${
                    isSelected
                      ? "border-[#7A1717] bg-[#7A1717] text-white shadow-xl"
                      : "border-[#18120F]/10 bg-white hover:border-[#A52A16]/25"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`font-mono text-[9px] tracking-[0.2em] ${
                        isSelected
                          ? "text-[#C69A42]"
                          : "text-[#A52A16]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-300 ${
                        isSelected
                          ? "text-[#C69A42]"
                          : "text-[#18120F]/20 group-hover:translate-x-1 group-hover:text-[#A52A16]"
                      }`}
                    />
                  </div>

                  <h3 className="mt-10 font-serif text-3xl">
                    {dosha.name}
                  </h3>

                  <p
                    className={`mt-1 font-serif text-lg ${
                      isSelected
                        ? "text-white/55"
                        : "text-[#A52A16]/70"
                    }`}
                  >
                    {dosha.hindi}
                  </p>

                  <p
                    className={`mt-5 text-xs leading-5 ${
                      isSelected
                        ? "text-white/45"
                        : "text-[#18120F]/40"
                    }`}
                  >
                    {dosha.short}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* RESULT / EDUCATIONAL PANEL */}
          <motion.div
            key={selected}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative overflow-hidden rounded-[2rem] border border-[#18120F]/10 bg-[#F3E4C7]/55 p-7 sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute right-[-100px] top-[-100px] font-serif text-[18rem] leading-none text-[#A52A16]/[0.035]"
            >
              ॐ
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A52A16]/8 text-[#A52A16]">
                  <Info size={15} />
                </div>

                <p className="text-[9px] font-medium tracking-[0.25em] text-[#A52A16]">
                  EDUCATIONAL GUIDE
                </p>
              </div>

              <div className="mt-10">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#18120F]/25">
                  SELECTED TOPIC
                </span>

                <h3 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">
                  {current.name}
                </h3>

                <p className="mt-2 font-serif text-xl text-[#A52A16]/70">
                  {current.hindi}
                </p>
              </div>

              <div className="my-9 h-px bg-[#18120F]/10" />

              <p className="max-w-2xl text-sm leading-8 text-[#18120F]/60 sm:text-base">
                {current.text}
              </p>

              <div className="mt-8 rounded-2xl border border-[#A52A16]/10 bg-white/60 p-5">
                <div className="flex items-start gap-3">
                  <Sparkles
                    size={15}
                    className="mt-0.5 shrink-0 text-[#A52A16]"
                  />

                  <p className="text-xs leading-6 text-[#18120F]/50">
                    यह section केवल general educational information
                    देता है। इससे किसी व्यक्ति में Dosha की पुष्टि,
                    diagnosis या guaranteed remedy result निर्धारित
                    नहीं होता।
                  </p>
                </div>
              </div>

              <Link
                href="/astrology"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#7A1717] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A52A16]"
              >
                Discuss Your Kundli

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-start gap-3">
          <Check
            size={14}
            className="mt-0.5 shrink-0 text-[#A52A16]"
          />

          <p className="max-w-4xl text-[10px] leading-5 text-[#18120F]/35">
            ज्योतिषीय दोष और उनके निवारण पारंपरिक ज्योतिषीय एवं
            धार्मिक मान्यताओं के संदर्भ में समझे जाते हैं।
          </p>
        </div>
      </div>
    </section>
  );
}