"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =========================================================
          CINEMATIC HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#18120F] px-6 pb-24 pt-36 text-[#FFF9EF] sm:px-10 lg:px-16 lg:pb-32">
        {/* Sacred geometry */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-16%] top-[-30%] h-[760px] w-[760px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-[-18%] h-[590px] w-[590px] rounded-full border border-[#FFF9EF]/[0.05]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[5%] top-[-5%] h-[410px] w-[410px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[13%] top-[8%] font-serif text-[13rem] leading-none text-[#C69A42]/[0.055] sm:text-[19rem]"
        >
          ॐ
        </div>

        {/* Minimal grid */}
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
          {/* Back */}
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs text-[#FFF9EF]/35 transition-colors hover:text-[#FFF9EF]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All Services
          </Link>

          <div className="mt-16 grid items-end gap-12 lg:grid-cols-[1fr_.42fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Category */}
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#C69A42]" />

                <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
                  {service.category}
                </p>
              </div>

              {/* Title */}
              <h1 className="mt-8 max-w-6xl font-serif text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.045em]">
                {service.title}
              </h1>

              {/* Hindi title */}
              <p className="mt-7 max-w-3xl font-serif text-2xl leading-tight text-[#F3E4C7]/70 sm:text-3xl lg:text-4xl">
                {service.hindiTitle}
              </p>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#FFF9EF]/45 sm:text-base">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href={`/book-puja?service=${service.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-6 py-3.5 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Book Consultation
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="#details"
                  className="group inline-flex items-center gap-3 rounded-full border border-[#FFF9EF]/15 px-6 py-3.5 text-sm text-[#FFF9EF]/65 transition-all duration-300 hover:border-[#C69A42]/50 hover:text-[#FFF9EF]"
                >
                  Explore details
                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Editorial side */}
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
                    strokeWidth={1.5}
                    className="text-[#C69A42]"
                  />

                  <span className="text-[10px] tracking-[0.25em] text-[#C69A42]">
                    PERSONAL GUIDANCE
                  </span>
                </div>

                <p className="mt-6 max-w-sm font-serif text-3xl leading-[1.08] text-[#FFF9EF]/75">
                  आपकी परिस्थिति को समझकर आगे की दिशा तय की जाती है।
                </p>

                <div className="mt-8 h-px w-full bg-[#FFF9EF]/10" />

                <p className="mt-5 text-xs leading-6 text-[#FFF9EF]/30">
                  किसी भी धार्मिक या ज्योतिषीय सेवा को अपनी व्यक्तिगत परिस्थिति
                  के संदर्भ में समझना महत्वपूर्ण है।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE INTRO
      ========================================================= */}
      <section
        id="details"
        className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-24">
            {/* Main copy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                ABOUT THIS SERVICE
              </p>

              <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[0.95] tracking-[-0.025em] sm:text-6xl">
                परंपरा को समझें,
                <br />
                <span className="text-[#A52A16]">अपनी आवश्यकता के अनुसार।</span>
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-[#18120F]/65 sm:text-lg">
                {service.description}
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#18120F]/45">
                प्रत्येक व्यक्ति की परिस्थिति अलग हो सकती है। किसी भी धार्मिक या
                ज्योतिषीय उपाय को अपनाने से पहले व्यक्तिगत consultation के
                माध्यम से अपनी आवश्यकता को समझना उचित है।
              </p>
            </motion.div>

            {/* Side card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="h-fit rounded-[2rem] border border-[#18120F]/10 bg-[#F3E4C7]/60 p-7 sm:p-9"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7A1717] text-[#C69A42]">
                <CircleDot size={18} strokeWidth={1.5} />
              </div>

              <p className="mt-7 text-[10px] font-medium tracking-[0.25em] text-[#A52A16]">
                {service.category}
              </p>

              <h3 className="mt-3 font-serif text-3xl leading-tight">
                आगे की प्रक्रिया समझें।
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#18120F]/50">
                अपनी आवश्यकता साझा करें। Consultation के दौरान service से जुड़ी
                आवश्यक जानकारी और अगले steps पर चर्चा की जा सकती है।
              </p>

              <Link
                href={`/book-puja?service=${service.slug}`}
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#7A1717] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Start enquiry
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="border-y border-[#18120F]/10 bg-[#F3E4C7]/45 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr] md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                HOW IT BEGINS
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-[0.95] sm:text-5xl">
                एक स्पष्ट
                <br />
                <span className="text-[#A52A16]">प्रक्रिया।</span>
              </h2>
            </motion.div>

            <div className="divide-y divide-[#18120F]/10 border-y border-[#18120F]/10">
              {[
                {
                  number: "01",
                  title: "अपनी आवश्यकता साझा करें",
                  text: "आप अपनी enquiry और service requirement साझा करते हैं।",
                },
                {
                  number: "02",
                  title: "व्यक्तिगत चर्चा",
                  text: "आपकी परिस्थिति और प्रश्नों को समझने के लिए consultation की जाती है।",
                },
                {
                  number: "03",
                  title: "उचित मार्गदर्शन",
                  text: "उपलब्ध जानकारी के आधार पर आगे की प्रक्रिया और relevant guidance पर चर्चा की जाती है।",
                },
                {
                  number: "04",
                  title: "अनुष्ठान / consultation",
                  text: "आपकी आवश्यकता के अनुसार agreed service या consultation आगे बढ़ाई जाती है।",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="grid gap-5 py-7 sm:grid-cols-[55px_1fr] sm:gap-8 sm:py-8"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#A52A16]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#18120F]/50">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CONSULT FIRST
      ========================================================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
              BEFORE PROCEEDING
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl">
              Consultation क्यों
              <br />
              <span className="text-[#A52A16]">महत्वपूर्ण हो सकती है?</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Context",
                hindi: "परिस्थिति",
                text: "एक ही concern के पीछे अलग-अलग व्यक्तिगत परिस्थितियां हो सकती हैं।",
              },
              {
                title: "Clarity",
                hindi: "स्पष्टता",
                text: "आपकी enquiry के आधार पर relevant service को समझना आसान होता है।",
              },
              {
                title: "Process",
                hindi: "प्रक्रिया",
                text: "आगे की प्रक्रिया, आवश्यक जानकारी और practical next steps पर चर्चा की जा सकती है।",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="rounded-[1.75rem] border border-[#18120F]/10 bg-white p-7 sm:p-9"
              >
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-[#A52A16]" strokeWidth={2} />

                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#18120F]/35">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-3xl">{item.title}</h3>

                <p className="mt-1 text-xs tracking-[0.08em] text-[#A52A16]/70">
                  {item.hindi}
                </p>

                <p className="mt-5 text-sm leading-7 text-[#18120F]/50">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#7A1717] px-6 py-20 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12%] top-[-65%] h-[780px] w-[780px] rounded-full border border-[#C69A42]/10"
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="grid items-end gap-12 md:grid-cols-[1fr_auto]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] font-medium tracking-[0.3em] text-[#C69A42]">
                READY TO DISCUSS?
              </p>

              <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[0.95] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
                अपने लिए सही
                <br />
                <span className="text-[#C69A42]">मार्गदर्शन प्राप्त करें।</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#FFF9EF]/50 sm:text-base">
                अपनी आवश्यकता साझा करें और consultation के लिए enquiry भेजें।
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
              className="flex flex-wrap gap-3"
            >
              <Link
                href={`/book-puja?service=${service.slug}`}
                className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-7 py-4 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Book Consultation
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-[#FFF9EF]/20 px-6 py-4 text-sm text-[#FFF9EF]/75 transition-all duration-300 hover:border-[#C69A42]/50 hover:text-white"
              >
                <MessageCircle size={16} />
                Contact
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
          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A52A16]" />

          <p className="max-w-4xl text-[11px] leading-6 text-[#18120F]/35">
            धार्मिक अनुष्ठान और ज्योतिषीय guidance पारंपरिक एवं आध्यात्मिक
            संदर्भ में प्रदान किए जाते हैं। किसी भी service को medical, legal या
            financial advice का substitute नहीं माना जाना चाहिए।
          </p>
        </div>
      </section>
    </main>
  );
}
