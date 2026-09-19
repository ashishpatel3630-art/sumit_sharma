"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function MuhuratSection() {
  return (
    <section className="relative overflow-hidden bg-[#A52A16] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-18%] top-[-40%] h-[700px] w-[700px] rounded-full border border-[#E8C46C]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-45%] left-[-15%] h-[650px] w-[650px] rounded-full border border-white/[0.05]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#E8C46C]" />

              <span className="text-[10px] tracking-[0.35em] text-[#E8C46C]">
                MUHURAT / AVAILABILITY
              </span>
            </div>

            <h2 className="mt-7 max-w-2xl font-serif text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              विशेष पूजा
              <br />
              <span className="text-[#E8C46C]">एवं शुभ अवसर।</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-white/60 sm:text-base"
          >
            पूजा की तिथि और उपलब्धता समय के अनुसार बदल सकती है।
            वर्तमान तारीख, मुहूर्त या उपलब्धता जानने के लिए सीधे
            enquiry करें।
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-14 overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#7A1717]/55"
        >
          <div className="grid md:grid-cols-[0.75fr_1.25fr]">
            <div className="relative min-h-[280px] border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-9">
              <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C46C]/25 text-[#E8C46C]">
                <CalendarDays size={17} strokeWidth={1.4} />
              </div>

              <p className="text-[9px] tracking-[0.3em] text-[#E8C46C]">
                DATE TO BE UPDATED
              </p>

              <h3 className="mt-16 max-w-xs font-serif text-4xl leading-none">
                Upcoming
                <br />
                Puja Date
              </h3>

              <p className="mt-5 max-w-sm text-xs leading-6 text-white/40">
                यहां verified upcoming dates और relevant puja
                availability publish की जा सकती है।
              </p>
            </div>

            <div className="p-7 md:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
                  <Clock3
                    size={18}
                    strokeWidth={1.4}
                    className="text-[#E8C46C]"
                  />

                  <p className="mt-7 text-[9px] tracking-[0.25em] text-white/35">
                    MUHURAT
                  </p>

                  <p className="mt-2 font-serif text-2xl">
                    Contact to confirm
                  </p>

                  <p className="mt-3 text-xs leading-5 text-white/35">
                    Current timings और suitable slot के लिए enquiry
                    करें।
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
                  <MessageCircle
                    size={18}
                    strokeWidth={1.4}
                    className="text-[#E8C46C]"
                  />

                  <p className="mt-7 text-[9px] tracking-[0.25em] text-white/35">
                    ENQUIRY
                  </p>

                  <p className="mt-2 font-serif text-2xl">
                    Share your requirement
                  </p>

                  <p className="mt-3 text-xs leading-5 text-white/35">
                    पूजा का उद्देश्य और preferred date साझा करें।
                  </p>
                </div>
              </div>

              <Link
                href="/book-puja"
                className="group mt-5 flex items-center justify-between rounded-2xl bg-[#C69A42] px-6 py-5 text-sm font-semibold text-[#18120F] transition hover:bg-[#E8C46C]"
              >
                Check Puja Availability

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-7 flex items-center gap-2 text-[10px] tracking-[0.2em] text-white/30">
          <Sparkles size={12} className="text-[#E8C46C]/60" />
          DATES ARE PUBLISHED ONLY AFTER CONFIRMATION
        </div>
      </div>
    </section>
  );
}