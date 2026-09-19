"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const contactItems = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
    description: "सीधे बात करने के लिए",
  },
  {
    label: "WhatsApp",
    value: "WhatsApp Consultation",
    href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`,
    icon: MessageCircle,
    description: "त्वरित enquiry के लिए",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: "विस्तृत जानकारी के लिए",
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "#location",
    icon: MapPin,
    description: "पूजा एवं consultation location",
  },
];

const expectations = [
  "आपकी आवश्यकता को पहले समझा जाएगा",
  "उपयुक्त सेवा या consultation पर चर्चा होगी",
  "तारीख और प्रक्रिया आपकी सुविधा के अनुसार तय होगी",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9EF]">
      {/* HERO */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#18120F] px-6 pb-20 pt-36 text-[#FFF9EF] sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
        {/* Ambient geometry */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12%] top-[-20%] h-[650px] w-[650px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-7%] top-[-13%] h-[510px] w-[510px] rounded-full border border-[#FFF9EF]/[0.06]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[3%] top-[-5%] h-[350px] w-[350px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute right-[14%] top-[22%] font-serif text-[9rem] leading-none text-[#C69A42]/[0.08] sm:text-[14rem]"
        >
          ॐ
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#C69A42]" />
                <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
                  CONTACT / ENQUIRY
                </p>
              </div>

              <h1 className="mt-8 max-w-5xl font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.045em]">
                बात शुरू
                <br />
                <span className="text-[#C69A42]">करते हैं।</span>
              </h1>

              <p className="mt-9 max-w-2xl text-sm leading-7 text-[#FFF9EF]/55 sm:text-base">
                आपकी आवश्यकता, पूजा अनुष्ठान या ज्योतिषीय consultation के
                बारे में विस्तार से बात करने के लिए संपर्क करें।
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/book-puja"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-6 py-3.5 text-sm font-semibold text-[#18120F] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Book Consultation
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-[#FFF9EF]/15 px-6 py-3.5 text-sm font-medium text-[#FFF9EF] transition-colors duration-300 hover:border-[#C69A42]/50 hover:bg-[#FFF9EF]/5"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden lg:block"
            >
              <div className="border-l border-[#FFF9EF]/10 pl-8">
                <p className="text-xs tracking-[0.22em] text-[#C69A42]">
                  A SIMPLE BEGINNING
                </p>

                <p className="mt-6 max-w-sm font-serif text-3xl leading-tight text-[#FFF9EF]/90">
                  हर consultation की शुरुआत आपकी बात सुनने से होती है।
                </p>

                <div className="mt-10 flex items-center gap-3 text-xs tracking-[0.15em] text-[#FFF9EF]/40">
                  <ArrowDown size={15} />
                  <span>SCROLL TO CONNECT</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
              CONNECT DIRECTLY
            </p>

            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-3xl font-serif text-4xl leading-[0.95] tracking-[-0.025em] sm:text-6xl">
                सही मार्गदर्शन की शुरुआत
                <br />
                <span className="text-[#A52A16]">एक बातचीत से होती है।</span>
              </h2>

              <p className="max-w-sm text-sm leading-6 text-[#18120F]/50">
                अपनी आवश्यकता के अनुसार सीधे संपर्क करें या consultation
                request भेजें।
              </p>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#18120F]/10 bg-[#18120F]/10 md:grid-cols-2">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "WhatsApp" ? "_blank" : undefined
                  }
                  rel={
                    item.label === "WhatsApp" ? "noreferrer" : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="group relative min-h-[220px] bg-white p-7 transition-colors duration-500 hover:bg-[#F3E4C7]/45 sm:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#18120F]/10 bg-[#FFF9EF] text-[#A52A16]">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-[#18120F]/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A52A16]"
                    />
                  </div>

                  <div className="mt-14">
                    <p className="text-[10px] font-medium tracking-[0.25em] text-[#A52A16]">
                      {item.label.toUpperCase()}
                    </p>

                    <p className="mt-3 break-words font-serif text-2xl text-[#18120F] sm:text-3xl">
                      {item.value}
                    </p>

                    <p className="mt-3 text-sm text-[#18120F]/45">
                      {item.description}
                    </p>
                  </div>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C69A42] transition-all duration-500 group-hover:w-full" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-[#F3E4C7]/55 px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <Sparkles size={15} className="text-[#A52A16]" />
                <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                  WHAT HAPPENS NEXT
                </p>
              </div>

              <h2 className="mt-6 font-serif text-4xl leading-[0.95] sm:text-6xl">
                पहले समझेंगे।
                <br />
                फिर मार्गदर्शन करेंगे।
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#18120F]/55">
                हर व्यक्ति और हर आवश्यकता अलग होती है। इसलिए बातचीत को
                आपकी परिस्थिति के अनुसार रखा जाता है।
              </p>
            </motion.div>

            <div className="space-y-0">
              {expectations.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="flex gap-6 border-t border-[#18120F]/10 py-7 last:border-b"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#A52A16]">
                    0{index + 1}
                  </span>

                  <div className="flex flex-1 items-start justify-between gap-5">
                    <p className="max-w-xl font-serif text-2xl leading-tight text-[#18120F]/85">
                      {item}
                    </p>

                    <Check
                      size={18}
                      className="mt-1 shrink-0 text-[#C69A42]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / CONSULTATION */}
      <section
        id="location"
        className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-[#7A1717] text-[#FFF9EF] lg:grid-cols-[1fr_.75fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-8 sm:p-12 lg:p-16"
            >
              <div className="absolute right-[-60px] top-[-60px] font-serif text-[16rem] leading-none text-[#C69A42]/10">
                ॐ
              </div>

              <div className="relative">
                <p className="text-[10px] tracking-[0.3em] text-[#C69A42]">
                  LOCATION
                </p>

                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[0.95] sm:text-6xl">
                  परंपरा, आस्था
                  <br />
                  और व्यक्तिगत संवाद।
                </h2>

                <div className="mt-10 flex items-start gap-4">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-[#C69A42]"
                  />

                  <div>
                    <p className="text-sm text-[#FFF9EF]/45">
                      Consultation / Puja Location
                    </p>

                    <p className="mt-2 max-w-md font-serif text-2xl">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>

                <p className="mt-8 max-w-xl text-sm leading-7 text-[#FFF9EF]/50">
                  Location और availability से संबंधित जानकारी booking के
                  समय confirm की जा सकती है।
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col justify-between border-t border-[#FFF9EF]/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <div>
                <CalendarDays
                  size={23}
                  strokeWidth={1.5}
                  className="text-[#C69A42]"
                />

                <h3 className="mt-7 font-serif text-3xl">
                  अपनी आवश्यकता साझा करें।
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#FFF9EF]/50">
                  Service, preferred date और contact details भेजें। इसके
                  बाद consultation या puja के अगले steps पर बात की जाएगी।
                </p>
              </div>

              <Link
                href="/book-puja"
                className="group mt-12 inline-flex w-fit items-center gap-3 border-b border-[#C69A42]/50 pb-2 text-sm font-medium text-[#FFF9EF]"
              >
                Open Booking Form
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#18120F]/10 bg-[#18120F] px-6 py-24 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-[10px] tracking-[0.3em] text-[#C69A42]">
            BEGIN YOUR ENQUIRY
          </p>

          <h2 className="mx-auto mt-7 max-w-4xl font-serif text-5xl leading-[0.9] tracking-[-0.03em] sm:text-7xl">
            एक सवाल से
            <br />
            <span className="text-[#C69A42]">शुरुआत करें।</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#FFF9EF]/45">
            ज्योतिष consultation हो या पूजा अनुष्ठान — अपनी आवश्यकता
            साझा करें।
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book-puja"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-7 py-4 text-sm font-semibold text-[#18120F] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book Consultation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/astrology"
              className="inline-flex items-center gap-3 rounded-full border border-[#FFF9EF]/15 px-7 py-4 text-sm text-[#FFF9EF]/80 transition-colors hover:border-[#C69A42]/50 hover:text-[#FFF9EF]"
            >
              Explore Astrology
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}