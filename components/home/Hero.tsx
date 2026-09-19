"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const headlines = [
  "महाकाल की भक्ति से जीवन में नई ऊर्जा पाएं।",
  "सही पूजा, सही संकल्प और सही मार्गदर्शन।",
  "वैदिक ज्योतिष से अपने जीवन को समझें।",
  "श्रद्धा से जुड़ें, शांति की ओर बढ़ें।",
];

const descriptions = [
  "उज्जैन की पावन भूमि से पारंपरिक पूजा अनुष्ठान और आध्यात्मिक मार्गदर्शन के साथ अपने जीवन के महत्वपूर्ण चरणों के लिए सही दिशा खोजें।",
  "विधि-विधान और श्रद्धा के साथ संपन्न पूजा अनुष्ठानों के माध्यम से अपनी मनोकामना, संकल्प और आध्यात्मिक साधना को एक नई दिशा दें।",
  "जन्म कुंडली, ग्रहों और जीवन की परिस्थितियों को समझकर वैदिक ज्योतिष के माध्यम से व्यक्तिगत मार्गदर्शन प्राप्त करें।",
  "महाकाल की नगरी उज्जैन से पूजा, अनुष्ठान और ज्योतिषीय परामर्श — आपकी आस्था और आवश्यकताओं के अनुरूप।",
];

const ROTATION_DURATION = 4000;

export default function Hero() {
  const [activeHeadline, setActiveHeadline] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeadline((current) => (current + 1) % headlines.length);
      setProgressKey((current) => current + 1);
    }, ROTATION_DURATION);

    return () => clearInterval(interval);
  }, []);

  const changeHeadline = (index: number) => {
    setActiveHeadline(index);
    setProgressKey((current) => current + 1);
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#18120F] text-white">
    
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

   
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />


      <div className="pointer-events-none absolute left-[8%] top-[35%] h-72 w-72 rounded-full bg-[#C69A42]/10 blur-[120px]" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 sm:px-8 sm:pb-14 lg:px-12 lg:pb-20">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#E8C46C]" />

              <span className="text-[10px] font-medium tracking-[0.18em] text-[#E8C46C] sm:text-xs">
                वैदिक ज्योतिष · पूजा अनुष्ठान · दोष निवारण
              </span>
            </motion.div>

            {/* Animated Heading */}
            <div className="relative min-h-[clamp(12rem,20vw,18rem)]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeHeadline}
                  initial={{
                    opacity: 0,
                    y: 35,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -25,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.2rem)] font-medium leading-[0.96] tracking-[-0.045em]"
                >
                  {headlines[activeHeadline]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="relative mt-1 min-h-[6.5rem] max-w-2xl sm:min-h-[5.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`description-${activeHeadline}`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
                >
                  {descriptions[activeHeadline]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {/* Primary CTA */}
              <Link
                href="/book-puja"
                className="group relative inline-flex h-14 items-center justify-between overflow-hidden rounded-full bg-[rgb(202,156,3)] pl-7 pr-2 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8a31d] hover:shadow-[0_16px_45px_rgba(0,0,0,0.38)]"
              >
                <span className="relative z-10">पूजा बुक करें</span>

                <span className="ml-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF9EF] text-[#18120F] transition-all duration-300 group-hover:translate-x-0.5 group-hover:rotate-[-5deg]">
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/astrology"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/25 bg-black/20 px-7 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E8C46C]/70 hover:bg-black/30"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E8C46C]/60 text-[#E8C46C]">
                  <Sparkles size={13} />
                </span>

                <span>ज्योतिष परामर्श</span>

                <ArrowUpRight
                  size={16}
                  className="text-[#E8C46C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Trust / Service Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-white/45 sm:text-xs"
            >
              <div className="flex items-center gap-2">
                <CalendarDays size={14} className="text-[#E8C46C]/80" />

                <span>शुभ मुहूर्त के अनुसार</span>
              </div>

              <span className="hidden h-3 w-px bg-white/15 sm:block" />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8C46C]" />

                <span>उज्जैन से वैदिक सेवाएं</span>
              </div>
            </motion.div>

            {/* Headline Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="mt-7 flex items-center gap-2"
            >
              {headlines.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`शीर्षक ${index + 1}`}
                  onClick={() => changeHeadline(index)}
                  className="group relative py-2"
                >
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-500 ${
                      activeHeadline === index
                        ? "w-11 bg-[#E8C46C]"
                        : "w-3 bg-white/25 group-hover:bg-white/50"
                    }`}
                  />

                  {/* Auto Progress */}
                  {activeHeadline === index && (
                    <motion.span
                      key={progressKey}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: ROTATION_DURATION / 1000,
                        ease: "linear",
                      }}
                      className="absolute bottom-2 left-0 h-[2px] rounded-full bg-[#FFF9EF]"
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="absolute bottom-8 right-8 z-10 hidden md:block lg:right-12"
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E8C46C] shadow-[0_0_12px_rgba(232,196,108,0.7)]" />

          <span className="text-[9px] font-medium tracking-[0.25em] text-white/40">
            उज्जैन · मध्य प्रदेश
          </span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[8px] font-medium tracking-[0.3em] text-white/30">
            नीचे देखें
          </span>

          <span className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
