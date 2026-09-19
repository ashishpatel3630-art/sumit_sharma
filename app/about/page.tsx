"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CircleDot,
  Sparkles,
} from "lucide-react";

const practicePoints = [
  {
    number: "01",
    title: "वैदिक ज्योतिष",
    description:
      "कुंडली और ग्रहों की स्थिति के आधार पर जीवन से जुड़े प्रश्नों को समझने और दिशा देने का प्रयास।",
  },
  {
    number: "02",
    title: "पूजा अनुष्ठान",
    description:
      "परंपरागत वैदिक विधियों और मंत्रोच्चार के माध्यम से विभिन्न धार्मिक अनुष्ठानों का आयोजन।",
  },
  {
    number: "03",
    title: "दोष निवारण",
    description:
      "कुंडली में दिखाई देने वाले दोषों और संबंधित मान्यताओं को समझकर उपयुक्त धार्मिक उपायों की जानकारी।",
  },
];

const principles = [
  "व्यक्ति की परिस्थिति को पहले समझना",
  "परंपरा और शास्त्रीय संदर्भ का सम्मान",
  "सरल और स्पष्ट संवाद",
  "व्यक्तिगत आवश्यकता के अनुसार मार्गदर्शन",
];

const stats = [
  {
    value: "01",
    label: "व्यक्तिगत",
    description: "हर consultation के लिए व्यक्तिगत दृष्टिकोण",
  },
  {
    value: "02",
    label: "परंपरागत",
    description: "वैदिक परंपराओं और अनुष्ठानों से जुड़ा कार्य",
  },
  {
    value: "03",
    label: "सरल",
    description: "जटिल विषयों को सहज भाषा में समझाने का प्रयास",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate min-h-[82vh] overflow-hidden bg-[#18120F] text-[#FFF9EF]">
        {/* Ambient architectural shapes */}
        <div
          aria-hidden="true"
          className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="absolute -right-16 top-36 h-[360px] w-[360px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full border border-[#A52A16]/20"
        />

        {/* Grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-soft-light"
          style={{
            backgroundImage: 'url("/noise.svg")',
          }}
        />

        <div className="relative mx-auto flex min-h-[82vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-20">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#C69A42]"
              >
                <span className="h-px w-8 bg-[#C69A42]" />
                About Sumit Sharma
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-5xl font-serif text-[clamp(3.6rem,8vw,8.5rem)] leading-[0.82] tracking-[-0.045em]"
              >
                परंपरा के साथ
                <br />
                <span className="text-[#C69A42]">मार्गदर्शन।</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base"
              >
                वैदिक ज्ञान, व्यक्तिगत समझ और धार्मिक परंपराओं के
                बीच एक सरल और संवेदनशील संवाद।
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden justify-end lg:flex"
            >
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-full border border-[#C69A42]/30" />
                <div className="absolute inset-5 rounded-full border border-[#C69A42]/15" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-7xl text-[#C69A42]/80">
                    ॐ
                  </span>
                </div>

                <div className="absolute bottom-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#C69A42]" />
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-[9px] uppercase tracking-[0.28em] text-white/35">
              Vedic Astrology • Puja Anushthan • Dosh Nivaran
            </span>

            <ArrowDownRight
              size={20}
              strokeWidth={1}
              className="text-[#C69A42]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="relative px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
                <span className="h-px w-8 bg-[#7A1717]" />
                The Practice
              </p>

              <p className="mt-7 max-w-xs font-serif text-2xl leading-tight text-[#18120F]/75 sm:text-3xl">
                “ज्ञान तभी सार्थक है जब वह जीवन को समझने में सहायता
                करे।”
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-[clamp(2.8rem,5.5vw,5.8rem)] leading-[0.9] tracking-[-0.035em]">
                आध्यात्मिक अनुभव को
                <br />
                <span className="text-[#7A1717]">
                  सरल और व्यक्तिगत
                </span>{" "}
                बनाना।
              </h2>

              <div className="mt-10 grid gap-7 border-t border-[#18120F]/10 pt-8 sm:grid-cols-2">
                <p className="text-sm leading-7 text-[#18120F]/60">
                  Sumit Sharma के माध्यम से वैदिक ज्योतिष, पूजा
                  अनुष्ठान और दोष निवारण से जुड़ा व्यक्तिगत
                  मार्गदर्शन प्रदान किया जाता है।
                </p>

                <p className="text-sm leading-7 text-[#18120F]/60">
                  प्रत्येक consultation का उद्देश्य व्यक्ति की
                  परिस्थिति, प्रश्न और आवश्यकता को समझना तथा
                  उपलब्ध पारंपरिक संदर्भों के आधार पर मार्गदर्शन
                  देना है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTRAIT / STORY
      ===================================================== */}
      <section className="bg-[#F3E4C7] px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          {/* Portrait frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-[#C69A42]" />

            <div className="relative aspect-[4/5] overflow-hidden bg-[#7A1717]">
              <Image
                src="/images/profile/sumit-sharma.jpg"
                alt="Sumit Sharma"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#18120F]/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                      The Practitioner
                    </p>

                    <p className="mt-1 font-serif text-3xl text-white">
                      Sumit Sharma
                    </p>
                  </div>

                  <span className="font-serif text-3xl text-[#C69A42]">
                    ॐ
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b border-r border-[#C69A42]" />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
              A Personal Approach
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.9]">
              केवल उत्तर नहीं,
              <br />
              <span className="text-[#7A1717]">
                समझ की दिशा।
              </span>
            </h2>

            <div className="mt-9 space-y-5 text-sm leading-7 text-[#18120F]/65">
              <p>
                ज्योतिष और धार्मिक अनुष्ठान से जुड़े विषय अक्सर
                व्यक्ति के जीवन के बहुत निजी प्रश्नों से जुड़े
                होते हैं। इसलिए हर बातचीत को एक व्यक्तिगत संदर्भ
                के साथ समझना महत्वपूर्ण है।
              </p>

              <p>
                यहां प्रयास रहता है कि जटिल विषयों को सरल भाषा
                में समझाया जाए और व्यक्ति को उसकी परिस्थिति के
                अनुसार उपलब्ध विकल्पों की स्पष्ट जानकारी दी जाए।
              </p>
            </div>

            <div className="mt-10 border-t border-[#18120F]/10 pt-7">
              <p className="font-devanagari text-xl text-[#7A1717]">
                श्रद्धा • परंपरा • मार्गदर्शन
              </p>

              <p className="mt-2 text-xs tracking-[0.08em] text-[#18120F]/40">
                Faith • Tradition • Guidance
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          THREE PRACTICES
      ===================================================== */}
      <section className="bg-[#FFF9EF] px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-8 border-b border-[#18120F]/10 pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
                Areas of Practice
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.9]">
                तीन परंपराएँ।
                <br />
                <span className="text-[#7A1717]">
                  एक व्यक्तिगत दृष्टिकोण।
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#18120F]/50">
              प्रत्येक सेवा अपने अलग उद्देश्य और धार्मिक संदर्भ
              के साथ प्रस्तुत की जाती है।
            </p>
          </div>

          <div className="mt-10 divide-y divide-[#18120F]/10">
            {practicePoints.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group grid gap-6 py-9 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center"
              >
                <span className="font-serif text-4xl text-[#C69A42]">
                  {item.number}
                </span>

                <div className="flex items-center gap-3">
                  <CircleDot
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#7A1717]"
                  />

                  <h3 className="font-serif text-3xl transition-colors duration-300 group-hover:text-[#7A1717]">
                    {item.title}
                  </h3>
                </div>

                <p className="max-w-lg text-sm leading-7 text-[#18120F]/55">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#7A1717] px-5 py-24 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute right-[-100px] top-[-100px] h-[420px] w-[420px] rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="absolute right-[-40px] top-[-40px] h-[300px] w-[300px] rounded-full border border-[#C69A42]/20"
        />

        <div className="relative mx-auto grid max-w-[1240px] gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C69A42]">
              Our Approach
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.9]">
              हर संवाद में
              <br />
              <span className="text-[#C69A42]">
                चार सिद्धांत।
              </span>
            </h2>
          </div>

          <div className="border-t border-white/15">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-5 border-b border-white/10 py-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C69A42]/50">
                  <Check
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#C69A42]"
                  />
                </span>

                <span className="font-serif text-xl sm:text-2xl">
                  {principle}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL STATS
      ===================================================== */}
      <section className="bg-[#18120F] px-5 py-20 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="px-0 py-8 md:px-10 md:py-2 first:md:pl-0 last:md:pr-0"
            >
              <p className="font-serif text-5xl text-[#C69A42]">
                {item.value}
              </p>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                {item.label}
              </p>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/40">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ===================================================== */}
      <section className="bg-[#FFF9EF] px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[900px] text-center">
          <Sparkles
            size={20}
            strokeWidth={1}
            className="mx-auto text-[#C69A42]"
          />

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl">
            श्रद्धा के साथ, स्पष्टता के साथ।
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#18120F]/50">
            यहां दी जाने वाली जानकारी धार्मिक और आध्यात्मिक
            संदर्भ में है। यह चिकित्सा, कानूनी, वित्तीय या किसी
            अन्य professional advice का विकल्प नहीं है। किसी भी
            महत्वपूर्ण निर्णय के लिए संबंधित qualified professional
            से सलाह लेना उचित है।
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F3E4C7] px-5 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute bottom-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-[#C69A42]/20"
        />

        <div className="relative mx-auto max-w-[1000px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
            Begin Your Conversation
          </p>

          <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.88] tracking-[-0.035em]">
            अपने प्रश्न को
            <br />
            <span className="text-[#7A1717]">
              समझने से शुरुआत करें।
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#18120F]/55">
            Kundli, astrology consultation या किसी विशेष puja
            anushthan से संबंधित अपनी आवश्यकता साझा करें।
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book-puja"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#7A1717] px-7 text-xs font-bold uppercase tracking-[0.08em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#541010] hover:shadow-[0_18px_40px_rgba(122,23,23,0.2)]"
            >
              Book a Consultation

              <ArrowRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/astrology"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-[#18120F]/15 px-7 text-xs font-bold uppercase tracking-[0.08em] text-[#18120F] transition-all duration-500 hover:-translate-y-1 hover:bg-[#18120F] hover:text-white"
            >
              Explore Astrology
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}