"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#18120F] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20%] top-[-20%] h-[700px] w-[700px] rounded-full border border-[#C69A42]/[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="SERVICES / ANUSHTHAN"
            title="वैदिक परंपरा, व्यक्तिगत मार्गदर्शन।"
            description="दोष निवारण, पूजा अनुष्ठान और ज्योतिषीय परामर्श के लिए उपलब्ध सेवाओं को अपनी आवश्यकता के अनुसार explore करें।"
            light
          />

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 self-end text-sm text-[#C69A42]"
          >
            View all services
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-14 border-t border-white/10 pt-5">
          <p className="text-[9px] tracking-[0.28em] text-white/25">
            SELECT A SERVICE TO EXPLORE
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
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
                margin: "-70px",
              }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.07,
              }}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[11px] leading-5 text-white/30">
            किसी भी सेवा की उपयुक्तता आपकी व्यक्तिगत परिस्थिति और
            consultation के संदर्भ में समझी जानी चाहिए।
          </p>

          <Link
            href="/book-puja"
            className="group inline-flex items-center gap-2 text-xs text-[#C69A42]"
          >
            Need help choosing a service?
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}