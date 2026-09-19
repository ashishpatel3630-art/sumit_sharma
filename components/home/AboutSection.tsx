"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF9EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full border border-[#A52A16]/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] bottom-[-160px] h-[520px] w-[520px] rounded-full border border-[#C69A42]/10"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* =================================================
            TOP EDITORIAL HEADER
        ================================================= */}

        <div className="grid gap-8 border-b border-[#18120F]/10 pb-10 lg:grid-cols-[0.35fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#A52A16]" />

              <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                01 / THE PRACTICE
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="max-w-xl text-sm leading-7 text-[#18120F]/45 lg:justify-self-end"
          >
            वैदिक परंपरा, व्यक्तिगत परिस्थिति और शांत
            consultation — तीनों को साथ लेकर guidance का
            एक thoughtful अनुभव।
          </motion.p>
        </div>

        {/* =================================================
            MAIN STORY
        ================================================= */}

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-24">
          {/* IMAGE STORY */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            {/* Image frame */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F3E4C7]">
              <Image
                src="/images/profile/sumit-sharma.jpg"
                alt="Sumit Sharma — Vedic Astrology and Puja Anushthan"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.025]"
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18120F]/75 via-[#18120F]/5 to-transparent" />

              {/* Top label */}
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-[#18120F]/25 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C69A42]" />

                <span className="text-[9px] tracking-[0.25em] text-white/75">
                  SUMIT SHARMA
                </span>
              </div>

              {/* Bottom story */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-[9px] tracking-[0.3em] text-[#C69A42]">
                  VEDIC ASTROLOGY • PUJA • GUIDANCE
                </p>

                <p className="mt-3 max-w-sm font-serif text-3xl leading-[1] text-white sm:text-4xl">
                  परंपरा से
                  <br />
                  <span className="text-[#C69A42]">
                    मार्गदर्शन तक।
                  </span>
                </p>
              </div>
            </div>

            {/* Floating OM */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="absolute -bottom-7 -right-4 flex h-24 w-24 items-center justify-center rounded-full border border-[#C69A42]/40 bg-[#FFF9EF] shadow-[0_20px_50px_rgba(24,18,15,0.12)] sm:-right-7 sm:h-28 sm:w-28"
            >
              <span className="font-serif text-5xl text-[#A52A16]/80">
                ॐ
              </span>
            </motion.div>

            {/* Vertical editorial marker */}
            <div className="absolute -left-10 top-1/2 hidden -translate-y-1/2 -rotate-90 items-center gap-3 xl:flex">
              <span className="text-[9px] tracking-[0.3em] text-[#18120F]/25">
                TRADITION • GUIDANCE • DISCIPLINE
              </span>

              <span className="h-px w-12 bg-[#18120F]/15" />
            </div>
          </motion.div>

          {/* CONTENT */}
          <div>
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <Sparkles
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#C69A42]"
                />

                <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                  ABOUT THE PRACTICE
                </p>
              </div>

              <h2 className="mt-7 max-w-4xl font-serif text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-[-0.035em]">
                परंपरा को समझें।
                <br />
                <span className="text-[#A52A16]">
                  अपनी दिशा को जानें।
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#18120F]/60 sm:text-lg">
                वैदिक ज्योतिष और पारंपरिक पूजा अनुष्ठानों को
                व्यक्तिगत परिस्थिति के संदर्भ में समझने और
                meaningful guidance प्राप्त करने के लिए एक
                शांत और सम्मानजनक consultation experience।
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="mt-10 origin-left border-t border-[#18120F]/10"
            />

            {/* Story paragraphs */}
            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.12,
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#A52A16]">
                  01
                </span>

                <p className="mt-4 text-sm leading-7 text-[#18120F]/55">
                  प्रत्येक व्यक्ति की परिस्थिति अलग होती है।
                  इसलिए किसी भी ज्योतिषीय या धार्मिक उपाय को
                  समझने से पहले व्यक्ति की आवश्यकता, प्रश्न
                  और उद्देश्य को समझना महत्वपूर्ण है।
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.2,
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#A52A16]">
                  02
                </span>

                <p className="mt-4 text-sm leading-7 text-[#18120F]/55">
                  Sumit Sharma का उद्देश्य वैदिक परंपराओं को
                  सरल, सम्मानजनक और व्यक्तिगत guidance के रूप
                  में प्रस्तुत करना है — बिना अनावश्यक complexity
                  के।
                </p>
              </motion.div>
            </div>

            {/* Practice pillars */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                "वैदिक ज्योतिष",
                "पूजा अनुष्ठान",
                "दोष निवारण",
              ].map((item, index) => (
                <motion.div
                  key={item}
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
                    duration: 0.5,
                    delay: 0.25 + index * 0.07,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-[#18120F]/10 bg-white/55 px-4 py-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A52A16]/7">
                    <Check
                      size={12}
                      className="text-[#A52A16]"
                    />
                  </span>

                  <span className="text-xs font-medium text-[#18120F]/65">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#7A1717] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A52A16] hover:shadow-lg"
              >
                Know the practice

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/astrology"
                className="group inline-flex items-center gap-2 border-b border-[#18120F]/15 pb-1.5 text-sm font-medium text-[#18120F]/65 transition-colors hover:border-[#A52A16]/50 hover:text-[#A52A16]"
              >
                Explore astrology

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            BOTTOM EDITORIAL STATEMENT
        ================================================= */}

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
            duration: 0.8,
            delay: 0.1,
          }}
          className="mt-24 border-t border-[#18120F]/10 pt-10 lg:mt-32"
        >
          <div className="grid gap-8 lg:grid-cols-[0.4fr_1.6fr] lg:items-start">
            <p className="text-[10px] font-medium tracking-[0.3em] text-[#18120F]/30">
              THE APPROACH
            </p>

            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                “मार्गदर्शन का पहला कदम है —
                <span className="text-[#A52A16]">
                  {" "}
                  सही प्रश्न को समझना।
                </span>
                ”
              </h3>

              <div className="hidden shrink-0 sm:block">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C69A42]/30">
                  <span className="font-serif text-2xl text-[#A52A16]">
                    ॐ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}