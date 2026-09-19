"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =========================================================
          CINEMATIC HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#18120F] px-6 pb-24 pt-36 text-[#FFF9EF] sm:px-10 lg:px-16 lg:pb-32">
        {/* Sacred geometry */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-14%] top-[-30%] h-[720px] w-[720px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-7%] top-[-18%] h-[560px] w-[560px] rounded-full border border-[#FFF9EF]/[0.05]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-[-5%] h-[390px] w-[390px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[12%] top-[7%] font-serif text-[13rem] leading-none text-[#C69A42]/[0.055] sm:text-[18rem]"
        >
          ॐ
        </div>

        {/* Minimal grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs text-[#FFF9EF]/35 transition-colors hover:text-[#FFF9EF]"
          >
            <ArrowRight
              size={14}
              className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to home
          </Link>

          <div className="mt-16 grid items-end gap-12 lg:grid-cols-[1fr_.48fr] lg:gap-20">
            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#C69A42]" />

                <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
                  SERVICES / ANUSHthan
                </p>
              </div>

              <h1 className="mt-8 max-w-6xl font-serif text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.045em]">
                परंपरा,
                <br />
                <span className="text-[#C69A42]">विधि और मार्गदर्शन।</span>
              </h1>

              <p className="mt-9 max-w-2xl text-sm leading-7 text-[#FFF9EF]/50 sm:text-base">
                पूजा, अनुष्ठान, दोष निवारण और वैदिक ज्योतिषीय guidance —
                अपनी आवश्यकता के अनुसार सेवा चुनें और consultation के लिए
                enquiry करें।
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="#services"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-6 py-3.5 text-sm font-semibold text-[#18120F] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore services
                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/book-puja"
                  className="group inline-flex items-center gap-3 rounded-full border border-[#FFF9EF]/15 px-6 py-3.5 text-sm text-[#FFF9EF]/75 transition-all duration-300 hover:border-[#C69A42]/50 hover:text-[#FFF9EF]"
                >
                  Book consultation
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Side editorial block */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
              }}
              className="hidden lg:block"
            >
              <div className="border-l border-[#FFF9EF]/10 pl-8">
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={15}
                    className="text-[#C69A42]"
                    strokeWidth={1.5}
                  />

                  <span className="text-[10px] tracking-[0.25em] text-[#C69A42]">
                    THE PRACTICE
                  </span>
                </div>

                <p className="mt-6 max-w-sm font-serif text-3xl leading-[1.08] text-[#FFF9EF]/75">
                  हर सेवा की शुरुआत आपकी आवश्यकता को समझने से होती है।
                </p>

                <div className="mt-8 h-px w-full bg-[#FFF9EF]/10" />

                <p className="mt-5 text-xs leading-6 text-[#FFF9EF]/35">
                  Detailed information के लिए individual service page
                  देखें।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / SECTION HEADING
      ========================================================= */}
      <section
        id="services"
        className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="ALL SERVICES"
            title="पूजा, अनुष्ठान और वैदिक मार्गदर्शन।"
            description="अपनी आवश्यकता के अनुसार सेवा चुनें और व्यक्तिगत consultation के लिए enquiry करें।"
          />

          {/* Small editorial divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 origin-left border-t border-[#18120F]/10"
          />
        </div>
      </section>

      {/* =========================================================
          SERVICE GRID
      ========================================================= */}
      <section className="bg-[#FFF9EF] px-6 pb-24 sm:px-10 lg:px-16 lg:pb-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
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
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.65,
                  delay: (index % 3) * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EDITORIAL GUIDANCE STRIP
      ========================================================= */}
      <section className="border-y border-[#18120F]/10 bg-[#F3E4C7]/50 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                BEFORE YOU BOOK
              </p>

              <div className="mt-6 font-serif text-8xl leading-none text-[#A52A16]/10">
                ॐ
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
            >
              <h2 className="max-w-4xl font-serif text-4xl leading-[0.95] tracking-[-0.025em] sm:text-6xl">
                सही सेवा का चुनाव
                <br />
                <span className="text-[#A52A16]">
                  आपकी परिस्थिति पर निर्भर है।
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#18120F]/55 sm:text-base">
                हर व्यक्ति की परिस्थिति, प्रश्न और आवश्यकता अलग हो सकती
                है। यदि आपको यह तय करने में सहायता चाहिए कि कौन-सी पूजा,
                अनुष्ठान या consultation आपके लिए relevant हो सकती है,
                तो पहले enquiry करें।
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#18120F]/20 pb-2 text-sm font-medium transition-colors hover:border-[#A52A16]"
              >
                Discuss your requirement
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#7A1717] px-6 py-20 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[-70%] h-[800px] w-[800px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-55%] left-[-10%] h-[600px] w-[600px] rounded-full border border-[#FFF9EF]/[0.05]"
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="grid items-end gap-12 md:grid-cols-[1fr_auto]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#C69A42]" />

                <p className="text-[10px] font-medium tracking-[0.3em] text-[#C69A42]">
                  PERSONAL GUIDANCE
                </p>
              </div>

              <h2 className="mt-7 max-w-4xl font-serif text-4xl leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
                अपनी आवश्यकता
                <br />
                <span className="text-[#C69A42]">
                  साझा करें।
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#FFF9EF]/50 sm:text-base">
                पूजा, दोष निवारण या astrology consultation के लिए अपनी
                enquiry भेजें। आगे की प्रक्रिया आपकी आवश्यकता के अनुसार
                तय की जाएगी।
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
            >
              <Link
                href="/book-puja"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-7 py-4 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Book Consultation
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================= */}
      <section className="bg-[#FFF9EF] px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1200px] items-start gap-3">
          <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A52A16]" />

          <p className="max-w-4xl text-[11px] leading-6 text-[#18120F]/35">
            ज्योतिषीय guidance और धार्मिक अनुष्ठान आध्यात्मिक एवं
            पारंपरिक संदर्भ में प्रदान किए जाते हैं। इन्हें medical,
            legal या financial advice का substitute नहीं माना जाना
            चाहिए।
          </p>
        </div>
      </section>
    </main>
  );
}