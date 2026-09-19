
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

const practicePillars = [
  "वैदिक ज्योतिष",
  "पूजा अनुष्ठान",
  "दोष निवारण",
];

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF9EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* शीर्षक */}
        <div className="grid gap-8 border-b border-[#18120F]/10 pb-10 lg:grid-cols-[0.4fr_1fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A52A16]" />

              <p className="text-[10px] font-medium tracking-[0.22em] text-[#A52A16]">
                ०१ / हमारा परिचय
              </p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease,
            }}
            className="max-w-xl text-sm leading-7 text-[#18120F]/45 lg:justify-self-end"
          >
            वैदिक परंपरा, व्यक्तिगत परिस्थिति और शांत
            संवाद — इन तीनों को साथ लेकर आध्यात्मिक
            मार्गदर्शन का एक सरल और सम्मानजनक अनुभव।
          </motion.p>
        </div>

        {/* मुख्य भाग */}
        <div className="mt-16 grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-24">

          {/* चित्र */}
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
              ease,
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F3E4C7]">
              <Image
                src="/images/profile/sumit-sharma.jpg"
                alt="समित शर्मा — वैदिक ज्योतिष एवं पूजा अनुष्ठान"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.025]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#18120F]/80 via-[#18120F]/10 to-transparent"
              />

              {/* नाम */}
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-[#18120F]/25 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C69A42]" />

                <span className="text-[9px] tracking-[0.22em] text-white/75">
                  समित शर्मा
                </span>
              </div>

              {/* चित्र का संदेश */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-[9px] tracking-[0.2em] text-[#C69A42]">
                  वैदिक ज्योतिष • पूजा • आध्यात्मिक मार्गदर्शन
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

            {/* ॐ */}
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
                ease,
              }}
              className="absolute -bottom-7 -right-4 flex h-24 w-24 items-center justify-center rounded-full border border-[#C69A42]/40 bg-[#FFF9EF] shadow-[0_20px_50px_rgba(24,18,15,0.12)] sm:-right-7 sm:h-28 sm:w-28"
            >
              <span className="font-serif text-5xl text-[#A52A16]/80">
                ॐ
              </span>
            </motion.div>
          </motion.div>

          {/* सामग्री */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-80px",
              }}
              variants={reveal}
              transition={{
                duration: 0.8,
                ease,
              }}
            >
              <div className="flex items-center gap-3">
                <Sparkles
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#C69A42]"
                />

                <p className="text-[10px] font-medium tracking-[0.22em] text-[#A52A16]">
                  हमारी परंपरा
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
                व्यक्तिगत परिस्थिति के संदर्भ में समझने तथा
                जीवन के महत्वपूर्ण प्रश्नों पर सही दिशा प्राप्त
                करने के लिए एक शांत और सम्मानजनक अनुभव।
              </p>
            </motion.div>

            <div className="my-10 h-px bg-[#18120F]/10" />

            {/* हमारी सोच */}
            <div className="grid gap-8 sm:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{
                  duration: 0.65,
                  delay: 0.12,
                  ease,
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#A52A16]">
                  ०१
                </span>

                <p className="mt-4 text-sm leading-7 text-[#18120F]/55">
                  प्रत्येक व्यक्ति की परिस्थिति अलग होती है।
                  इसलिए किसी भी ज्योतिषीय या धार्मिक उपाय को
                  समझने से पहले व्यक्ति की आवश्यकता, प्रश्न
                  और उद्देश्य को समझना महत्वपूर्ण है।
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{
                  duration: 0.65,
                  delay: 0.2,
                  ease,
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#A52A16]">
                  ०२
                </span>

                <p className="mt-4 text-sm leading-7 text-[#18120F]/55">
                  समित शर्मा का उद्देश्य वैदिक परंपराओं को
                  सरल, सम्मानजनक और व्यक्तिगत मार्गदर्शन के
                  रूप में प्रस्तुत करना है — बिना अनावश्यक
                  जटिलता के।
                </p>
              </motion.div>
            </div>

            {/* मुख्य सेवाएँ */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {practicePillars.map((item, index) => (
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
                    ease,
                  }}
                  className="group flex items-center gap-3 rounded-xl border border-[#18120F]/10 bg-white/60 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A52A16]/20 hover:bg-white"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A52A16]/[0.07]">
                    <Check
                      size={12}
                      strokeWidth={2}
                      className="text-[#A52A16]"
                    />
                  </span>

                  <span className="text-xs font-medium text-[#18120F]/65">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* बटन */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease,
              }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#8c0606] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A52A16] hover:shadow-[0_12px_30px_rgba(122,23,23,0.18)]"
              >
                <span>हमारे बारे में जानें</span>

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/astrology"
                className="group inline-flex items-center gap-2 border-b border-[#18120F]/15 pb-1.5 text-sm font-medium text-[#18120F]/65 transition-all duration-300 hover:border-[#A52A16]/50 hover:text-[#A52A16]"
              >
                <span>ज्योतिष के बारे में जानें</span>

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* अंतिम संदेश */}
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
            ease,
          }}
          className="mt-24 border-t border-[#18120F]/10 pt-10 lg:mt-32"
        >
          <div className="grid gap-8 lg:grid-cols-[0.4fr_1.6fr] lg:items-start">
            <p className="text-[10px] font-medium tracking-[0.25em] text-[#18120F]/30">
              हमारा दृष्टिकोण
            </p>

            <div className="flex items-start justify-between gap-8">
              <h3 className="max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                “मार्गदर्शन का पहला कदम है —
                <span className="text-[#A52A16]">
                  {" "}
                  सही प्रश्न को समझना।
                </span>
                ”
              </h3>

              <div className="hidden shrink-0 sm:flex">
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
