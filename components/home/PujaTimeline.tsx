"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "परामर्श",
    english: "CONSULTATION",
    text: "आपकी आवश्यकता, प्रश्न और उद्देश्य को समझा जाता है।",
  },
  {
    number: "02",
    title: "जन्म विवरण",
    english: "DETAILS",
    text: "उपलब्ध जन्म विवरण के आधार पर relevant context समझा जाता है।",
  },
  {
    number: "03",
    title: "संकल्प",
    english: "SANKALPA",
    text: "अनुष्ठान के उद्देश्य और प्रक्रिया को स्पष्ट किया जाता है।",
  },
  {
    number: "04",
    title: "अनुष्ठान",
    english: "ANUSHTHAN",
    text: "निर्धारित विधि के अनुसार पूजा या अनुष्ठान सम्पन्न किया जाता है।",
  },
];

export default function PujaTimeline() {
  return (
    <section className="bg-[#FFF9EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#A52A16]" />

              <span className="text-[10px] tracking-[0.35em] text-[#A52A16]">
                THE PROCESS
              </span>
            </div>

            <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl">
              हर चरण
              <br />
              <span className="text-[#A52A16]">स्पष्ट।</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-[#18120F]/55 sm:text-base"
          >
            पूजा या consultation से पहले प्रक्रिया को समझना उतना
            ही महत्वपूर्ण है जितना अनुष्ठान स्वयं। इसलिए हर चरण को
            सरल और transparent रखा गया है।
          </motion.p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[2.1rem] hidden h-px bg-[#18120F]/10 md:block" />

          <div className="grid md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group relative border-t border-[#18120F]/10 py-7 md:border-t-0 md:px-6 md:first:pl-0 md:last:pr-0"
              >
                <div className="relative z-10 flex items-center justify-between bg-[#FFF9EF] md:w-fit md:pr-6">
                  <span className="font-mono text-xs text-[#A52A16]">
                    {step.number}
                  </span>

                  <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#18120F]/10 bg-[#FFF9EF] md:hidden">
                    <CheckCircle2
                      size={15}
                      className="text-[#A52A16]"
                    />
                  </div>
                </div>

                <p className="mt-10 text-[9px] tracking-[0.3em] text-[#18120F]/30">
                  {step.english}
                </p>

                <h3 className="mt-4 font-serif text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-[#18120F]/50">
                  {step.text}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={17}
                    strokeWidth={1}
                    className="absolute right-5 top-8 hidden text-[#A52A16]/30 md:block"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}