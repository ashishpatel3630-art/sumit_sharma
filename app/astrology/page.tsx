 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Heart,
  Home,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

const guidanceAreas = [
  {
    number: "01",
    title: "Career",
    hindi: "करियर",
    description:
      "व्यावसायिक दिशा, कार्यक्षेत्र और करियर से जुड़े प्रश्नों पर ज्योतिषीय संदर्भ में चर्चा।",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Marriage",
    hindi: "विवाह",
    description:
      "विवाह, संबंध और compatibility से जुड़े प्रश्नों को कुंडली के संदर्भ में समझने का प्रयास।",
    icon: Heart,
  },
  {
    number: "03",
    title: "Business",
    hindi: "व्यवसाय",
    description:
      "व्यवसाय और professional decisions से जुड़े प्रश्नों पर जन्म विवरण के आधार पर चर्चा।",
    icon: ArrowUpRight,
  },
  {
    number: "04",
    title: "Family",
    hindi: "परिवार",
    description:
      "परिवार और व्यक्तिगत जीवन से जुड़े विषयों को समझने के लिए कुंडली के संकेतों पर चर्चा।",
    icon: Users,
  },
  {
    number: "05",
    title: "Education",
    hindi: "शिक्षा",
    description:
      "शिक्षा, learning direction और academic concerns से संबंधित ज्योतिषीय चर्चा।",
    icon: GraduationCap,
  },
  {
    number: "06",
    title: "Dosh",
    hindi: "दोष",
    description:
      "कुंडली में माने जाने वाले विभिन्न दोषों और उनसे जुड़े पारंपरिक उपायों की जानकारी।",
    icon: Sparkles,
  },
];

const process = [
  {
    number: "01",
    title: "जन्म विवरण",
    description:
      "जन्म तारीख, समय और स्थान जैसे आवश्यक विवरण साझा किए जाते हैं।",
  },
  {
    number: "02",
    title: "कुंडली अध्ययन",
    description:
      "उपलब्ध जन्म विवरण के आधार पर कुंडली और संबंधित ज्योतिषीय संदर्भों का अध्ययन।",
  },
  {
    number: "03",
    title: "व्यक्तिगत चर्चा",
    description:
      "आपके वास्तविक प्रश्नों और परिस्थितियों के संदर्भ में consultation की जाती है।",
  },
  {
    number: "04",
    title: "मार्गदर्शन",
    description:
      "चर्चा के आधार पर संबंधित ज्योतिषीय जानकारी और पारंपरिक विकल्प साझा किए जाते हैं।",
  },
];

const topics = [
  "जन्म कुंडली",
  "ग्रह स्थिति",
  "दशा एवं गोचर",
  "विवाह मिलान",
  "दोष संबंधी चर्चा",
  "करियर एवं व्यवसाय",
];

export default function AstrologyPage() {
  return (
    <main className="overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =====================================================
          CINEMATIC HERO
      ===================================================== */}
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-[#18120F] text-[#FFF9EF]">
        {/* Decorative orbital rings */}
        <div
          aria-hidden="true"
          className="absolute -right-[180px] top-[8%] h-[720px] w-[720px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute -right-[90px] top-[15%] h-[540px] w-[540px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute right-[40px] top-[24%] h-[360px] w-[360px] rounded-full border border-[#A52A16]/20"
        />

        {/* Minimal stars */}
        <div className="absolute right-[30%] top-[25%] h-1 w-1 rounded-full bg-[#C69A42]" />
        <div className="absolute right-[17%] top-[48%] h-1.5 w-1.5 rounded-full bg-[#C69A42]/60" />
        <div className="absolute right-[37%] top-[65%] h-1 w-1 rounded-full bg-white/40" />

        {/* Grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-soft-light"
          style={{
            backgroundImage: 'url("/noise.svg")',
          }}
        />

        {/* Maroon ambient block */}
        <div
          aria-hidden="true"
          className="absolute bottom-[-250px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#7A1717]/20 blur-[90px]"
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1440px] flex-col justify-end px-5 pb-12 pt-36 sm:px-10 lg:px-16 lg:pb-16">
          <div className="grid items-end gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C69A42]"
              >
                <span className="h-px w-9 bg-[#C69A42]" />
                Vedic Astrology
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-5xl font-serif text-[clamp(4rem,8.5vw,9rem)] leading-[0.8] tracking-[-0.05em]"
              >
                अपनी कुंडली
                <br />
                <span className="text-[#C69A42]">
                  समझिए।
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className="mt-9 max-w-xl text-sm leading-7 text-white/55 sm:text-base"
              >
                व्यक्तिगत जन्म विवरण के आधार पर वैदिक ज्योतिषीय
                consultation और जीवन के महत्वपूर्ण क्षेत्रों पर
                चर्चा।
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="/book-puja"
                  className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#C69A42] px-7 text-xs font-bold uppercase tracking-[0.08em] text-[#18120F] transition-all duration-500 hover:-translate-y-1 hover:bg-[#DFBD72]"
                >
                  Request Consultation

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#guidance"
                  className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/15 px-7 text-xs font-bold uppercase tracking-[0.08em] text-white transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/5"
                >
                  Explore Guidance
                </a>
              </motion.div>
            </div>

            {/* Kundli-inspired visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative hidden min-h-[500px] items-center justify-center lg:flex"
            >
              <div className="relative h-[430px] w-[430px]">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-[#C69A42]/25" />

                {/* Inner ring */}
                <div className="absolute inset-[42px] rounded-full border border-[#C69A42]/15" />

                {/* Cross geometry */}
                <div className="absolute left-1/2 top-1/2 h-[280px] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#C69A42]/25" />

                <div className="absolute left-1/2 top-1/2 h-[280px] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#C69A42]/25" />

                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#C69A42]/20" />

                {/* Central OM */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#C69A42]/30 bg-[#18120F]">
                    <span className="font-serif text-6xl text-[#C69A42]">
                      ॐ
                    </span>
                  </div>
                </div>

                {/* Zodiac-style markers */}
                <span className="absolute left-1/2 top-[-10px] -translate-x-1/2 font-serif text-lg text-[#C69A42]/60">
                  मे
                </span>

                <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 font-serif text-lg text-[#C69A42]/60">
                  तुला
                </span>

                <span className="absolute left-[-10px] top-1/2 -translate-y-1/2 font-serif text-lg text-[#C69A42]/60">
                  कर्क
                </span>

                <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 font-serif text-lg text-[#C69A42]/60">
                  मकर
                </span>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-[9px] uppercase tracking-[0.26em] text-white/30">
              जन्म विवरण • कुंडली • मार्गदर्शन
            </span>

            <motion.a
              href="#guidance"
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-label="Scroll to guidance"
              className="text-[#C69A42]"
            >
              <ArrowDown size={18} strokeWidth={1} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
              <span className="h-px w-8 bg-[#7A1717]" />
              Astrology
            </p>

            <p className="mt-7 max-w-xs font-serif text-2xl leading-tight text-[#18120F]/65 sm:text-3xl">
              ग्रहों को समझना, स्वयं को समझने की एक परंपरागत
              प्रक्रिया है।
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-[clamp(2.8rem,5.5vw,5.8rem)] leading-[0.88] tracking-[-0.04em]">
              कुंडली केवल एक chart नहीं,
              <br />
              <span className="text-[#7A1717]">
                एक संदर्भ है।
              </span>
            </h2>

            <div className="mt-10 max-w-2xl border-t border-[#18120F]/10 pt-8">
              <p className="text-sm leading-8 text-[#18120F]/60">
                वैदिक ज्योतिष में जन्म के समय ग्रहों की स्थिति को
                जीवन के विभिन्न पहलुओं को समझने के एक पारंपरिक
                माध्यम के रूप में देखा जाता है। Consultation का
                उद्देश्य इन्हीं संदर्भों को आपके वास्तविक प्रश्नों
                के साथ जोड़कर समझना है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GUIDANCE AREAS
      ===================================================== */}
      <section
        id="guidance"
        className="bg-[#F3E4C7] px-5 py-24 sm:px-10 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
                Areas of Guidance
              </p>

              <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.9]">
                किन विषयों पर
                <br />
                <span className="text-[#7A1717]">
                  चर्चा हो सकती है?
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#18120F]/50 lg:justify-self-end">
              Consultation को किसी एक निश्चित प्रश्न तक सीमित
              रखना आवश्यक नहीं है। आपकी परिस्थिति के अनुसार
              अलग-अलग जीवन क्षेत्रों पर चर्चा की जा सकती है।
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-[#18120F]/10 bg-[#18120F]/10 sm:grid-cols-2 lg:grid-cols-3">
            {guidanceAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                  }}
                  className="group relative min-h-[330px] bg-[#FFF9EF] p-7 transition-colors duration-500 hover:bg-[#18120F] hover:text-white sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-[#A52A16] transition-colors group-hover:text-[#C69A42]">
                      {item.number}
                    </span>

                    <Icon
                      size={19}
                      strokeWidth={1.2}
                      className="text-[#C69A42] transition-transform duration-500 group-hover:rotate-12"
                    />
                  </div>

                  <div className="absolute bottom-8 left-7 right-7 sm:left-9 sm:right-9">
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#18120F]/35 transition-colors group-hover:text-white/35">
                      {item.hindi}
                    </p>

                    <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-xs leading-6 text-[#18120F]/50 transition-colors group-hover:text-white/45">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS INCLUDED
      ===================================================== */}
      <section className="bg-[#FFF9EF] px-5 py-24 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
                Consultation
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.9]">
                चर्चा में क्या
                <br />
                <span className="text-[#7A1717]">
                  देखा जा सकता है?
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#18120F]/55">
                Consultation आपके साझा किए गए जन्म विवरण और
                प्रश्नों के अनुसार केंद्रित की जाती है।
              </p>
            </div>

            <div className="border-t border-[#18120F]/10">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className="flex items-center justify-between border-b border-[#18120F]/10 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-[#C69A42]">
                      0{index + 1}
                    </span>

                    <span className="font-serif text-xl">
                      {topic}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.2}
                    className="text-[#18120F]/30"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="bg-[#18120F] px-5 py-24 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C69A42]">
                The Process
              </p>

              <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.9]">
                शुरुआत से
                <br />
                <span className="text-[#C69A42]">
                  मार्गदर्शन तक।
                </span>
              </h2>
            </div>

            <div className="border-t border-white/10">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-center"
                >
                  <span className="font-serif text-3xl text-[#C69A42]">
                    {item.number}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/40">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#7A1717] px-5 py-24 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute right-[-150px] top-[-160px] h-[520px] w-[520px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="absolute right-[-75px] top-[-85px] h-[370px] w-[370px] rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-[1000px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C69A42]">
            Personal Consultation
          </p>

          <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.86] tracking-[-0.04em]">
            आपके प्रश्न से
            <br />
            <span className="text-[#C69A42]">
              शुरुआत होती है।
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55">
            अपनी जन्म जानकारी और consultation से जुड़े प्रश्न
            साझा करें। आगे की प्रक्रिया उसी आवश्यकता के अनुसार
            समझाई जाएगी।
          </p>

          <Link
            href="/book-puja"
            className="group mt-9 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#FFF9EF] px-8 text-xs font-bold uppercase tracking-[0.08em] text-[#18120F] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          >
            Request Consultation

            <ArrowRight
              size={16}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ===================================================== */}
      <section className="bg-[#F3E4C7] px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <Sparkles
            size={19}
            strokeWidth={1}
            className="text-[#C69A42]"
          />

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#7A1717]">
            Important Note
          </p>

          <p className="mt-4 text-sm leading-7 text-[#18120F]/50">
            ज्योतिषीय consultation पारंपरिक एवं आध्यात्मिक
            मान्यताओं पर आधारित है। इसे चिकित्सा, कानूनी,
            वित्तीय या अन्य professional advice का विकल्प नहीं
            माना जाना चाहिए।
          </p>
        </div>
      </section>
    </main>
  );
}