"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#18120F]"
          role="status"
          aria-label="Loading website"
        >
          {/* Very subtle background glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C69A42]/[0.06] blur-[90px]"
          />

          <div className="relative flex flex-col items-center">
            {/* OM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 scale-150 rounded-full bg-[#C69A42] blur-2xl"
              />

              <span className="relative font-serif text-6xl leading-none text-[#C69A42]">
                ॐ
              </span>
            </motion.div>

            {/* Brand */}
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="mt-5 text-center text-xs font-medium tracking-[0.32em] text-white"
            >
              SUMIT SHARMA
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="mt-2 font-serif text-sm text-[#F3E4C7]"
            >
              वैदिक परंपरा • आध्यात्मिक मार्गदर्शन
            </motion.p>

            {/* Progress */}
            <div className="mt-8 h-[2px] w-36 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="h-full bg-[#C69A42]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}