 "use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import BookingForm from "@/components/forms/BookingForm";

const processSteps = [
  {
    number: "01",
    title: "अपनी आवश्यकता",
    description: "Service और consultation की अपनी आवश्यकता साझा करें।",
  },
  {
    number: "02",
    title: "विवरण की समीक्षा",
    description: "आपके द्वारा दिए गए details को समझकर आगे की प्रक्रिया बताई जाएगी।",
  },
  {
    number: "03",
    title: "समय तय करें",
    description: "उपलब्धता के अनुसार consultation या puja का समय तय किया जाएगा।",
  },
];

const assurances = [
  {
    icon: ShieldCheck,
    title: "व्यक्तिगत जानकारी",
    description: "आपके द्वारा साझा की गई जानकारी को आवश्यक consultation context में ही उपयोग किया जाता है।",
  },
  {
    icon: MessageCircle,
    title: "स्पष्ट संवाद",
    description: "Service, प्रक्रिया और उपलब्ध विकल्पों के बारे में पहले स्पष्ट जानकारी दी जाती है।",
  },
  {
    icon: CalendarDays,
    title: "समय के अनुसार",
    description: "Preferred date और आवश्यकता के आधार पर आगे की availability समझी जाती है।",
  },
];

export default function BookPujaPage() {
  return (
    <main className="overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-[#18120F] text-[#FFF9EF]">
        {/* Decorative rings */}
        <div
          aria-hidden="true"
          className="absolute -right-[220px] top-[-180px] h-[650px] w-[650px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute -right-[130px] top-[-90px] h-[470px] w-[470px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-240px] left-[-180px] h-[520px] w-[520px] rounded-full border border-[#A52A16]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-soft-light"
          style={{
            backgroundImage: 'url("/noise.svg")',
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-36 sm:px-10 lg:px-16 lg:pb-24 lg:pt-44">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C69A42]"
              >
                <span className="h-px w-9 bg-[#C69A42]" />
                Book / Enquire
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-5xl font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[0.82] tracking-[-0.045em]"
              >
                अपनी आवश्यकता
                <br />
                <span className="text-[#C69A42]">
                  साझा करें।
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base"
              >
                Puja Anushthan, Dosh Nivaran या Vedic Astrology
                consultation से जुड़ी अपनी आवश्यकता साझा करें।
                आगे की प्रक्रिया आपकी requirement के अनुसार
                समझाई जाएगी।
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden lg:block"
            >
              <div className="relative ml-auto h-64 w-64">
                <div className="absolute inset-0 rounded-full border border-[#C69A42]/20" />

                <div className="absolute inset-6 rounded-full border border-[#C69A42]/10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-7xl text-[#C69A42]">
                    ॐ
                  </span>
                </div>

                <div className="absolute bottom-4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#C69A42]" />
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-[9px] uppercase tracking-[0.26em] text-white/30">
              Consultation • Puja • Dosh Nivaran
            </span>

            <ArrowDown
              size={18}
              strokeWidth={1}
              className="text-[#C69A42]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING AREA
      ===================================================== */}
      <section className="px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          {/* LEFT INFORMATION */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
              <span className="h-px w-8 bg-[#7A1717]" />
              Start Here
            </p>

            <h2 className="mt-5 max-w-md font-serif text-[clamp(2.7rem,4.5vw,4.7rem)] leading-[0.9] tracking-[-0.035em]">
              आपकी बात,
              <br />
              <span className="text-[#7A1717]">
                आपकी आवश्यकता।
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#18120F]/55">
              Form में जितनी जानकारी आपके लिए relevant हो, उतनी
              साझा करें। इससे आपकी आवश्यकता को समझना आसान होगा।
            </p>

            <div className="mt-9 space-y-3">
              <div className="flex items-center gap-3 text-xs text-[#18120F]/55">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3E4C7]">
                  <CalendarDays
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#7A1717]"
                  />
                </span>

                Preferred date साझा करें
              </div>

              <div className="flex items-center gap-3 text-xs text-[#18120F]/55">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3E4C7]">
                  <Clock3
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#7A1717]"
                  />
                </span>

                अपनी preferred timing बताएं
              </div>

              <div className="flex items-center gap-3 text-xs text-[#18120F]/55">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3E4C7]">
                  <MessageCircle
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#7A1717]"
                  />
                </span>

                आगे की प्रक्रिया की जानकारी
              </div>
            </div>

            <div className="mt-10 border-t border-[#18120F]/10 pt-6">
              <p className="font-serif text-xl text-[#7A1717]">
                श्रद्धा से शुरुआत करें।
              </p>

              <p className="mt-1 text-xs text-[#18120F]/40">
                Begin with your requirement.
              </p>
            </div>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-[#C69A42]/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#18120F]/10 bg-white shadow-[0_25px_80px_rgba(55,27,15,0.08)]">
              {/* Form header */}
              <div className="border-b border-[#18120F]/10 bg-[#18120F] px-6 py-7 text-white sm:px-9">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C69A42]">
                      Enquiry Form
                    </p>

                    <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
                      अपनी जानकारी दें।
                    </h3>
                  </div>

                  <span className="hidden font-serif text-3xl text-[#C69A42] sm:block">
                    ॐ
                  </span>
                </div>

                <p className="mt-3 max-w-lg text-xs leading-6 text-white/40">
                  Required information भरें और अपनी preferred
                  service तथा date साझा करें।
                </p>
              </div>

              {/* Existing functional form */}
              <div className="p-5 sm:p-8 lg:p-10">
                <BookingForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROCESS STRIP
      ===================================================== */}
      <section className="bg-[#F3E4C7] px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
                What Happens Next
              </p>

              <h2 className="mt-5 font-serif text-[clamp(2.7rem,4.5vw,4.7rem)] leading-[0.9]">
                आगे की
                <br />
                <span className="text-[#7A1717]">
                  प्रक्रिया।
                </span>
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#18120F]/10 bg-[#18120F]/10 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="bg-[#FFF9EF] p-7 sm:p-8"
                >
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#C69A42]">
                    {step.number}
                  </span>

                  <h3 className="mt-12 font-serif text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#18120F]/50">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ASSURANCE
      ===================================================== */}
      <section className="bg-[#FFF9EF] px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7A1717]">
              A Thoughtful Experience
            </p>

            <h2 className="mt-4 font-serif text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.9]">
              स्पष्टता पहले।
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {assurances.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-[#18120F]/10 bg-white p-7 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E4C7]">
                    <Icon
                      size={18}
                      strokeWidth={1.4}
                      className="text-[#7A1717]"
                    />
                  </div>

                  <h3 className="mt-8 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#18120F]/50">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL SPIRITUAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#18120F] px-5 py-20 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C69A42]/10"
        />

        <div className="relative mx-auto max-w-[850px] text-center">
          <Sparkles
            size={18}
            strokeWidth={1}
            className="mx-auto text-[#C69A42]"
          />

          <h2 className="mt-6 font-serif text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.88]">
            हर यात्रा की
            <br />
            <span className="text-[#C69A42]">
              शुरुआत एक प्रश्न से होती है।
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40">
            अपनी आवश्यकता स्पष्ट रूप से साझा करें। सही service और
            आगे की प्रक्रिया को समझने में आपको सहायता मिलेगी।
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/30">
            <Check size={13} className="text-[#C69A42]" />
            Requirement first • Guidance next
          </div>
        </div>
      </section>
    </main>
  );
}