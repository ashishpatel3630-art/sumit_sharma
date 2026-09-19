"use client";

import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";

const items = [
  "VEDIC ASTROLOGY",
  "PUJA ANUSHTHAN",
  "DOSHA NIVARAN",
  "KUNDLI GUIDANCE",
  "TRADITIONAL VIDHI",
];

export default function TrustStrip() {
  return (
    <section className="border-b border-[#18120F]/10 bg-[#F3E4C7]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 md:grid-cols-5">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
            }}
            className="group flex min-h-24 items-center justify-center border-r border-[#18120F]/10 px-5 last:border-r-0"
          >
            <div className="flex items-center gap-3">
              <CircleDot
                size={11}
                strokeWidth={1.3}
                className="text-[#A52A16]/50 transition-transform duration-300 group-hover:scale-125"
              />

              <span className="text-center text-[9px] font-medium tracking-[0.22em] text-[#18120F]/60 transition-colors group-hover:text-[#A52A16] sm:text-[10px]">
                {item}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}