"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#FFF9EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#A52A16]" />

            <span className="text-[10px] tracking-[0.35em] text-[#A52A16]">
              CLIENT EXPERIENCES
            </span>

            <span className="h-px w-8 bg-[#A52A16]" />
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            विश्वास शब्दों से नहीं,
            <br />
            <span className="text-[#A52A16]">अनुभव से बनता है।</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] border border-[#18120F]/10 bg-white"
        >
          <div className="absolute right-7 top-7">
            <Quote
              size={38}
              strokeWidth={1}
              className="text-[#A52A16]/15"
            />
          </div>

          <div className="p-8 sm:p-12 lg:p-14">
            <div className="flex items-center gap-3">
              <Sparkles
                size={15}
                strokeWidth={1.4}
                className="text-[#C69A42]"
              />

              <span className="text-[9px] tracking-[0.3em] text-[#18120F]/35">
                REVIEWS TO BE UPDATED
              </span>
            </div>

            <p className="mt-10 max-w-2xl font-serif text-3xl leading-[1.15] text-[#18120F]/65 sm:text-4xl">
              वास्तविक client experiences यहां प्रकाशित की जाएंगी।
            </p>

            <div className="mt-10 border-t border-[#18120F]/10 pt-5">
              <p className="text-xs leading-6 text-[#18120F]/40">
                Testimonials केवल वास्तविक client permission और
                verified information के आधार पर add करें।
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}