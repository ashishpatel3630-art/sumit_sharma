"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const points = [
  {
    number: "01",
    title: "व्यक्तिगत परामर्श",
    text: "हर enquiry को व्यक्ति की आवश्यकता और संदर्भ के अनुसार समझने का प्रयास।",
  },
  {
    number: "02",
    title: "परंपरागत वैदिक विधि",
    text: "पूजा और अनुष्ठान को संबंधित पारंपरिक विधि एवं संकल्प के संदर्भ में समझाया जाता है।",
  },
  {
    number: "03",
    title: "स्पष्ट प्रक्रिया",
    text: "Enquiry से लेकर consultation और अनुष्ठान तक अगले चरणों को पहले से स्पष्ट रखा जाता है।",
  },
  {
    number: "04",
    title: "सम्मानजनक अनुभव",
    text: "आध्यात्मिक consultation को शांत, सम्मानजनक और व्यक्तिगत अनुभव के रूप में प्रस्तुत करना।",
  },
  {
    number: "05",
    title: "ऑनलाइन एवं प्रत्यक्ष",
    text: "जहां लागू हो, consultation और enquiry को online माध्यम से भी शुरू किया जा सकता है।",
  },
  {
    number: "06",
    title: "आवश्यकता के अनुसार मार्गदर्शन",
    text: "एक ही समाधान सभी परिस्थितियों पर लागू नहीं होता — इसलिए context को प्राथमिकता दी जाती है।",
  },
];

export default function WhySumit() {
  return (
    <section className="relative overflow-hidden bg-[#F3E4C7] px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[-20%] font-serif text-[28rem] leading-none text-[#A52A16]/[0.035]"
      >
        ॐ
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#A52A16]" />

              <span className="text-[10px] tracking-[0.35em] text-[#A52A16]">
                THE PRACTICE
              </span>
            </div>

            <h2 className="mt-7 max-w-xl font-serif text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              आस्था के साथ
              <br />
              <span className="text-[#A52A16]">स्पष्टता।</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#18120F]/55 sm:text-base">
              यह अनुभव केवल पूजा तक सीमित नहीं है। उद्देश्य है
              आपकी आवश्यकता को समझकर प्रक्रिया और उपलब्ध guidance
              को सरल तरीके से सामने रखना।
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 border-b border-[#18120F]/20 pb-2 text-sm font-medium"
            >
              Know the practice

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2">
            {points.map((point, index) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.08,
                }}
                className="group border-t border-[#18120F]/15 p-7 first:border-t sm:nth-[2]:border-t"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#A52A16]">
                    {point.number}
                  </span>

                  <Check
                    size={15}
                    strokeWidth={1.4}
                    className="text-[#A52A16]/40 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-10 font-serif text-2xl leading-tight sm:text-3xl">
                  {point.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#18120F]/50">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}