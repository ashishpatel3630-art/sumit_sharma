"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "क्या पूजा ऑनलाइन बुक की जा सकती है?",
    a: "हाँ। Booking enquiry के माध्यम से अपनी आवश्यकता, preferred service और उपलब्ध तारीख साझा की जा सकती है। आगे की प्रक्रिया availability और आपकी आवश्यकता के अनुसार confirm की जाती है।",
  },
  {
    q: "कुंडली analysis के लिए क्या जानकारी चाहिए?",
    a: "आमतौर पर जन्म तिथि, जन्म का समय और जन्म स्थान की आवश्यकता होती है। उपलब्ध जानकारी जितनी स्पष्ट होगी, consultation में उतना बेहतर संदर्भ मिल सकता है।",
  },
  {
    q: "क्या पहले consultation लेना जरूरी है?",
    a: "हर service के लिए consultation अनिवार्य नहीं है। व्यक्तिगत या विस्तृत आवश्यकता होने पर पहले discussion करना उपयोगी हो सकता है।",
  },
  {
    q: "क्या पूजा की तारीख पहले से तय करनी होती है?",
    a: "पूजा की तारीख availability, अनुष्ठान की प्रकृति और संबंधित requirements के अनुसार तय की जाती है। Enquiry के दौरान preferred date साझा की जा सकती है।",
  },
  {
    q: "क्या online astrology consultation उपलब्ध है?",
    a: "Online consultation की availability service और schedule पर निर्भर करती है। Enquiry के माध्यम से consultation format और available timing के बारे में जानकारी ली जा सकती है।",
  },
  {
    q: "क्या Kaal Sarp Dosh या Mangal Dosh का समाधान निश्चित होता है?",
    a: "ज्योतिषीय दोष और उनके निवारण traditional astrological और धार्मिक संदर्भ में समझे जाते हैं। किसी भी पूजा या अनुष्ठान से निश्चित या guaranteed व्यक्तिगत परिणाम का दावा नहीं किया जाता।",
  },
];

const quickPoints = [
  "पहले आपकी आवश्यकता समझी जाती है",
  "Availability के अनुसार date discuss होती है",
  "Process पहले स्पष्ट किया जाता है",
];

export default function FAQSection() {
  const [open, setOpen] =
    useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#FFF9EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-36"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[-150px] h-[480px] w-[480px] rounded-full border border-[#C69A42]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-200px] bottom-[-180px] h-[500px] w-[500px] rounded-full border border-[#A52A16]/[0.045]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
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
              duration: 0.7,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A52A16]" />

              <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                05 / QUESTIONS
              </p>
            </div>

            <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#C69A42]/30">
              <span className="font-serif text-3xl text-[#A52A16]">
                ?
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
              duration: 0.7,
              delay: 0.08,
            }}
          >
            <h2 className="max-w-5xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">
              सवाल हैं।
              <br />
              <span className="text-[#A52A16]">
                जवाब भी हैं।
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#18120F]/50 sm:text-base">
              पूजा, astrology consultation, Kundli और booking से
              जुड़े सामान्य सवालों के संक्षिप्त जवाब।
            </p>
          </motion.div>
        </div>

        {/* =================================================
            FAQ AREA
        ================================================= */}

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
          {/* LEFT */}
          <motion.aside
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-[9px] font-medium tracking-[0.3em] text-[#18120F]/30">
              BEFORE YOU BEGIN
            </p>

            <div className="mt-7 space-y-5">
              {quickPoints.map(
                (point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7A1717] text-[#FFF9EF]">
                      <Check
                        size={10}
                        strokeWidth={2.5}
                      />
                    </span>

                    <p className="text-sm leading-6 text-[#18120F]/55">
                      {point}
                    </p>
                  </div>
                ),
              )}
            </div>

            <div className="mt-10 border-t border-[#18120F]/10 pt-7">
              <p className="text-xs leading-6 text-[#18120F]/40">
                आपका सवाल यहां नहीं है? Direct enquiry के माध्यम
                से अपनी आवश्यकता साझा करें।
              </p>

              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#A52A16]"
              >
                Ask directly

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.aside>

          {/* RIGHT ACCORDION */}
          <div className="border-t border-[#18120F]/10">
            {faqs.map((faq, index) => {
              const isOpen =
                open === index;

              return (
                <motion.div
                  key={faq.q}
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
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(
                      index * 0.04,
                      0.2,
                    ),
                  }}
                  className="border-b border-[#18120F]/10"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpen(
                        isOpen ? null : index,
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-${index}`}
                    className="group flex w-full items-center gap-5 py-7 text-left sm:py-8"
                  >
                    <span className="w-7 shrink-0 font-mono text-[9px] tracking-[0.15em] text-[#A52A16]">
                      {String(
                        index + 1,
                      ).padStart(2, "0")}
                    </span>

                    <span className="flex-1 font-serif text-xl leading-tight text-[#18120F] transition-colors duration-300 group-hover:text-[#A52A16] sm:text-2xl">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-[#7A1717] bg-[#7A1717] text-white"
                          : "border-[#18120F]/10 bg-white text-[#18120F]/40"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        strokeWidth={1.7}
                      />
                    </span>
                  </button>

                  <AnimatePresence
                    initial={false}
                  >
                    {isOpen && (
                      <motion.div
                        id={`home-faq-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-8 pl-12 pr-8 text-sm leading-7 text-[#18120F]/50 sm:pr-14">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 flex flex-col justify-between gap-7 rounded-[2rem] bg-[#7A1717] p-7 text-[#FFF9EF] sm:p-9 lg:flex-row lg:items-center lg:px-10"
        >
          <div>
            <p className="text-[9px] tracking-[0.3em] text-[#C69A42]">
              STILL WONDERING?
            </p>

            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
              अपनी आवश्यकता सीधे साझा करें।
            </h3>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/book-puja"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-6 py-3.5 text-sm font-semibold text-[#18120F]"
            >
              Book Consultation

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/75 transition-colors hover:border-white/30 hover:text-white"
            >
              View all FAQs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}