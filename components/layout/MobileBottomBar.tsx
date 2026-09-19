"use client";

import Link from "next/link";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/data/siteConfig";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const whatsappUrl = createWhatsAppUrl(
  "Namaste Sumit Sharma Ji, mujhe puja/astrology consultation ke baare mein jaankari chahiye."
);

const actions = [
  {
    label: "Call",
    href: `tel:${siteConfig.phone}`,
    icon: Phone,
    external: false,
  },
  {
    label: "WhatsApp",
    href: whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
];

export default function MobileBottomBar() {
  return (
    <div
      className="
        fixed inset-x-3 bottom-3 z-50 md:hidden
        [padding-bottom:env(safe-area-inset-bottom)]
      "
    >
      <nav
        aria-label="Mobile quick actions"
        className="
          relative overflow-hidden
          rounded-[1.35rem]
          border border-white/10
          bg-[#18120F]/95
          p-1.5
          shadow-[0_18px_60px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
        "
      >
        {/* Subtle top highlight */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-6 top-0 h-px
            bg-gradient-to-r
            from-transparent
            via-[#C69A42]/50
            to-transparent
          "
        />

        <div className="grid grid-cols-3 gap-1">
          {actions.map((action) => {
            const Icon = action.icon;

            if (action.external) {
              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.96 }}
                  className="
                    group flex min-h-[58px]
                    flex-col items-center justify-center
                    gap-1.5 rounded-xl
                    text-[10px] font-medium
                    tracking-[0.02em]
                    text-white/60
                    transition-colors duration-200
                    hover:bg-white/[0.05]
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#C69A42]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#18120F]
                  "
                  aria-label="WhatsApp consultation"
                >
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className="
                      text-white/55
                      transition-colors duration-200
                      group-hover:text-[#C69A42]
                    "
                  />
                  <span>{action.label}</span>
                </motion.a>
              );
            }

            return (
              <motion.a
                key={action.label}
                href={action.href}
                whileTap={{ scale: 0.96 }}
                className="
                  group flex min-h-[58px]
                  flex-col items-center justify-center
                  gap-1.5 rounded-xl
                  text-[10px] font-medium
                  tracking-[0.02em]
                  text-white/60
                  transition-colors duration-200
                  hover:bg-white/[0.05]
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#C69A42]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#18120F]
                "
                aria-label={`Call ${siteConfig.name}`}
              >
                <Icon
                  size={18}
                  strokeWidth={1.7}
                  className="
                    text-white/55
                    transition-colors duration-200
                    group-hover:text-[#C69A42]
                  "
                />
                <span>{action.label}</span>
              </motion.a>
            );
          })}

          <Link href="/book-puja" className="block">
            <motion.span
              whileTap={{ scale: 0.96 }}
              className="
                group flex min-h-[58px]
                flex-col items-center justify-center
                gap-1.5 rounded-xl
                bg-[#C69A42]
                text-[10px]
                font-semibold
                tracking-[0.03em]
                text-[#18120F]
                shadow-[0_8px_24px_rgba(198,154,66,0.18)]
                transition-all duration-200
                hover:bg-[#D5AC5D]
                hover:shadow-[0_10px_30px_rgba(198,154,66,0.25)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#18120F]
              "
            >
              <CalendarDays
                size={18}
                strokeWidth={1.8}
                className="
                  transition-transform duration-200
                  group-hover:-translate-y-0.5
                "
              />
              <span>Book</span>
            </motion.span>
          </Link>
        </div>
      </nav>
    </div>
  );
}