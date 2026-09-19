"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{ y: -7 }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <Link
        href={`/services/${service.slug}`}
        aria-label={`Explore ${service.title}`}
        className="
          relative block
          min-h-[350px]
          overflow-hidden
          rounded-[1.5rem]
          border border-white/[0.09]
          bg-[#241914]
          p-6
          text-white
          shadow-[0_12px_40px_rgba(0,0,0,0.12)]
          transition-all duration-500
          hover:border-[#C69A42]/25
          hover:shadow-[0_24px_70px_rgba(0,0,0,0.2)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#C69A42]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#18120F]
          sm:p-7
        "
      >
        {/* ─────────────────────────────
            AMBIENT LIGHT
        ───────────────────────────── */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-16 -top-16
            h-48 w-48
            rounded-full
            bg-[#A52A16]/[0.14]
            blur-3xl
            transition-all duration-700
            group-hover:bg-[#C69A42]/[0.13]
            group-hover:scale-125
          "
        />

        {/* Secondary glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -bottom-24 -left-16
            h-48 w-48
            rounded-full
            bg-[#7A1717]/10
            blur-3xl
            opacity-0
            transition-opacity duration-700
            group-hover:opacity-100
          "
        />

        {/* Editorial border */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            rounded-[1.5rem]
            ring-1 ring-inset
            ring-white/[0.025]
          "
        />

        {/* ─────────────────────────────
            CONTENT
        ───────────────────────────── */}

        <div className="relative flex min-h-[300px] flex-col">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <div>
              <span
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.16em]
                  text-[#C69A42]/80
                "
              >
                {service.number}
              </span>

              <div
                aria-hidden="true"
                className="
                  mt-3
                  h-px w-8
                  bg-[#C69A42]/40
                  transition-all duration-500
                  group-hover:w-14
                  group-hover:bg-[#C69A42]/70
                "
              />
            </div>

            {/* Arrow */}
            <motion.span
              whileHover={{ rotate: 4 }}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.02]
                text-white/60
                transition-all duration-400
                group-hover:border-[#C69A42]/50
                group-hover:bg-[#C69A42]
                group-hover:text-[#18120F]
              "
            >
              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="
                  transition-transform duration-400
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </motion.span>
          </div>

          {/* Bottom content */}
          <div className="mt-auto">
            {/* Category */}
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#C69A42]
              "
            >
              {service.category}
            </p>

            {/* English title */}
            <h3
              className="
                mt-3
                max-w-[90%]
                font-serif
                text-[2rem]
                font-medium
                leading-[1.05]
                tracking-[-0.02em]
                text-white
                transition-colors duration-300
                group-hover:text-[#FFF9EF]
                sm:text-[2.15rem]
              "
            >
              {service.title}
            </h3>

            {/* Hindi title */}
            <p
              className="
                mt-2
                font-serif
                text-lg
                leading-7
                text-[#F3E4C7]/65
                transition-colors duration-300
                group-hover:text-[#F3E4C7]/85
              "
            >
              {service.hindiTitle}
            </p>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-md
                text-[13px]
                leading-6
                text-white/40
                transition-colors duration-300
                group-hover:text-white/55
              "
            >
              {service.shortDescription}
            </p>

            {/* Bottom link indicator */}
            <div
              className="
                mt-6
                flex items-center gap-2
                text-[9px]
                font-medium
                tracking-[0.22em]
                text-white/25
                transition-colors duration-300
                group-hover:text-[#C69A42]
              "
            >
              <span>EXPLORE SERVICE</span>

              <span
                aria-hidden="true"
                className="
                  h-px w-7
                  bg-white/15
                  transition-all duration-500
                  group-hover:w-12
                  group-hover:bg-[#C69A42]/50
                "
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}