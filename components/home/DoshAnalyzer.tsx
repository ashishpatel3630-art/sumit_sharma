"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const doshas = [
  {
    number: "०१",
    name: "मंगल दोष",
    subtitle: "मंगल की स्थिति से जुड़ी पारंपरिक मान्यता",
    description:
      "मंगल दोष से जुड़ी पारंपरिक ज्योतिषीय व्याख्या जन्म कुंडली में मंगल की स्थिति, भाव और अन्य ग्रहों के संदर्भ में की जाती है। केवल राशि या सामान्य जानकारी के आधार पर किसी निष्कर्ष पर पहुँचना उचित नहीं माना जाता।",
  },
  {
    number: "०२",
    name: "काल सर्प दोष",
    subtitle: "ग्रहों की स्थिति से जुड़ी पारंपरिक व्याख्या",
    description:
      "काल सर्प दोष से संबंधित पारंपरिक व्याख्या के लिए संपूर्ण जन्म कुंडली और उसमें स्थित ग्रहों का संदर्भ देखा जाता है। सामान्य ऑनलाइन परीक्षण किसी व्यक्ति की पूरी कुंडली का विकल्प नहीं है।",
  },
  {
    number: "०३",
    name: "पितृ दोष",
    subtitle: "पितृ संबंधी पारंपरिक ज्योतिषीय मान्यता",
    description:
      "पितृ दोष से जुड़ी पारंपरिक ज्योतिषीय व्याख्या जन्म कुंडली के विभिन्न योगों और ग्रहों की स्थिति के संदर्भ में की जाती है। इसे समझने के लिए व्यक्तिगत कुंडली का विस्तृत अध्ययन आवश्यक हो सकता है।",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function DoshAnalyzer() {
  const [selected, setSelected] = useState(0);
  const current = doshas[selected];

  return (
    <section
      id="dosh-guide"
      className="bg-[#FFF9EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#A52A16]" />

              <span className="text-[10px] font-medium tracking-[0.16em] text-[#A52A16]">
                ०४ / दोष मार्गदर्शन
              </span>
            </div>

            <p className="mt-6 max-w-xs text-xs leading-6 text-[#18120F]/40">
              प्रमुख ज्योतिषीय अवधारणाओं को सरल भाषा में समझें।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
          >
            <h2 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.9] tracking-[-0.04em] text-[#18120F]">
              पहले समझें।
              <br />
              <span className="text-[#A52A16]">फिर उपाय चुनें।</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#18120F]/45 sm:text-base">
              मंगल दोष, काल सर्प दोष और पितृ दोष जैसी पारंपरिक
              ज्योतिषीय अवधारणाओं को समझें। व्यक्तिगत निष्कर्ष के
              लिए जन्म कुंडली का विस्तृत अध्ययन आवश्यक हो सकता है।
            </p>
          </motion.div>
        </div>

        {/* Main */}
        <div className="mt-16 border-t border-[#18120F]/10 pt-10 lg:mt-20">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            {/* Topics */}
            <div className="lg:pr-16">
              {doshas.map((dosha, index) => {
                const isSelected = selected === index;

                return (
                  <motion.button
                    key={dosha.name}
                    type="button"
                    onClick={() => setSelected(index)}
                    whileTap={{ scale: 0.995 }}
                    className="group relative flex w-full items-start gap-5 border-b border-[#18120F]/10 py-6 text-left last:border-b-0"
                  >
                    {/* Active line */}
                    <motion.span
                      initial={false}
                      animate={{
                        height: isSelected ? 32 : 0,
                      }}
                      transition={{ duration: 0.3, ease }}
                      className="absolute left-0 top-6 w-px bg-[#A52A16]"
                    />

                    <span
                      className={`pt-1 font-mono text-[9px] tracking-[0.12em] transition-colors ${
                        isSelected
                          ? "text-[#A52A16]"
                          : "text-[#18120F]/25"
                      }`}
                    >
                      {dosha.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`font-serif text-2xl leading-none transition-colors sm:text-[1.7rem] ${
                            isSelected
                              ? "text-[#18120F]"
                              : "text-[#18120F]/50 group-hover:text-[#18120F]/80"
                          }`}
                        >
                          {dosha.name}
                        </h3>

                        <ArrowRight
                          size={15}
                          strokeWidth={1.4}
                          className={`shrink-0 transition-all duration-300 ${
                            isSelected
                              ? "text-[#A52A16]"
                              : "text-[#18120F]/15 group-hover:translate-x-1 group-hover:text-[#A52A16]"
                          }`}
                        />
                      </div>

                      <p
                        className={`mt-2 text-xs leading-5 transition-colors ${
                          isSelected
                            ? "text-[#18120F]/45"
                            : "text-[#18120F]/30"
                        }`}
                      >
                        {dosha.subtitle}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Information */}
            <div className="mt-10 lg:mt-0 lg:border-l lg:border-[#18120F]/10 lg:pl-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <span className="text-[9px] font-medium tracking-[0.16em] text-[#A52A16]">
                    जानकारी
                  </span>

                  <h3 className="mt-5 font-serif text-4xl leading-none tracking-[-0.025em] text-[#18120F] sm:text-5xl">
                    {current.name}
                  </h3>

                  <p className="mt-3 font-serif text-lg text-[#A52A16]/65">
                    {current.subtitle}
                  </p>

                  <p className="mt-7 max-w-2xl text-sm leading-8 text-[#18120F]/55 sm:text-base">
                    {current.description}
                  </p>

                  <div className="mt-8 flex max-w-xl items-start gap-3 border-t border-[#18120F]/10 pt-5">
                    <Check
                      size={14}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-[#A52A16]"
                    />

                    <p className="text-xs leading-6 text-[#18120F]/35">
                      व्यक्तिगत मार्गदर्शन के लिए संपूर्ण जन्म कुंडली
                      और व्यक्तिगत संदर्भ को ध्यान में रखना आवश्यक हो
                      सकता है।
                    </p>
                  </div>

                  <Link
                    href="/astrology"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#7A1717] transition-colors duration-300 hover:text-[#A52A16]"
                  >
                    <span>कुंडली मार्गदर्शन देखें</span>

                    <ArrowRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-[#18120F]/10 pt-5">
          <p className="max-w-3xl text-[10px] leading-5 text-[#18120F]/30 sm:text-xs">
            ज्योतिषीय दोष और उनके निवारण पारंपरिक ज्योतिषीय एवं
            धार्मिक मान्यताओं के संदर्भ में समझे जाते हैं।
          </p>
        </div>
      </div>
    </section>
  );
}