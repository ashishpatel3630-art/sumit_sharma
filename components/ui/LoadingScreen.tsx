"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const phases = [
  "VEDIC ASTROLOGY",
  "PUJA ANUSHTHAN",
  "DOSHA NIVARAN",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const phaseTimer = setInterval(() => {
      setPhase((current) =>
        current < phases.length - 1 ? current + 1 : current
      );
    }, 480);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1900);

    return () => {
      clearInterval(phaseTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.015,
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            overflow-hidden
            bg-[#18120F]
            text-white
          "
          aria-label="Loading Sumit Sharma website"
          role="status"
        >
          {/* ═════════════════════════════════════
              BACKGROUND
          ═════════════════════════════════════ */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              overflow-hidden
            "
          >
            {/* Large sacred circle */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute left-1/2 top-1/2
                h-[min(78vw,780px)]
                w-[min(78vw,780px)]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-[#C69A42]/[0.10]
              "
            />

            {/* Inner circle */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.15,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute left-1/2 top-1/2
                h-[min(55vw,550px)]
                w-[min(55vw,550px)]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-white/[0.035]
              "
            />

            {/* Cardinal lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.25,
                duration: 1.1,
              }}
              className="
                absolute left-1/2 top-1/2
                h-px w-[min(90vw,900px)]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#C69A42]/[0.08]
                to-transparent
              "
            />

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                delay: 0.3,
                duration: 1.1,
              }}
              className="
                absolute left-1/2 top-1/2
                h-[min(90vw,900px)] w-px
                -translate-x-1/2
                -translate-y-1/2
                bg-gradient-to-b
                from-transparent
                via-[#C69A42]/[0.08]
                to-transparent
              "
            />

            {/* Very subtle central glow */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-[260px] w-[260px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#C69A42]/[0.055]
                blur-[90px]
              "
            />
          </div>

          {/* ═════════════════════════════════════
              MAIN CONTENT
          ═════════════════════════════════════ */}

          <div className="relative z-10 flex w-full flex-col items-center px-6">
            {/* OM */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative flex
                h-20 w-20
                items-center justify-center
                sm:h-24 sm:w-24
              "
            >
              {/* OM outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute inset-0
                  rounded-full
                  border border-[#C69A42]/25
                  border-t-[#C69A42]/70
                "
              />

              <span
                className="
                  relative
                  font-serif
                  text-[3.2rem]
                  leading-none
                  text-[#C69A42]
                  sm:text-[3.8rem]
                "
              >
                ॐ
              </span>
            </motion.div>

            {/* Gold rule */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: 82,
                opacity: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-7 h-px
                bg-[#C69A42]
              "
            />

            {/* Brand */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
                letterSpacing: "0.12em",
              }}
              animate={{
                opacity: 1,
                y: 0,
                letterSpacing: "0.34em",
              }}
              transition={{
                delay: 0.55,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-6
                text-center
                text-[11px]
                font-medium
                text-white
              "
            >
              SUMIT SHARMA
            </motion.div>

            {/* Hindi tagline */}
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 0.7,
                y: 0,
              }}
              transition={{
                delay: 0.72,
                duration: 0.65,
              }}
              className="
                mt-4
                text-center
                font-serif
                text-base
                tracking-wide
                text-[#F3E4C7]
                sm:text-lg
              "
            >
              वैदिक परंपरा • आध्यात्मिक मार्गदर्शन
            </motion.p>

            {/* Loading phase */}
            <div
              className="
                mt-10
                flex
                min-h-[14px]
                items-center
                justify-center
              "
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={phase}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    text-[8px]
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  {phases[phase]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress */}
            <div
              className="
                mt-4
                h-px
                w-40
                overflow-hidden
                bg-white/[0.08]
                sm:w-48
              "
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  h-full
                  bg-[#C69A42]
                "
              />
            </div>

            {/* Bottom microcopy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="
                mt-5
                flex
                items-center
                gap-3
                text-[8px]
                tracking-[0.2em]
                text-white/20
              "
            >
              <span>TRADITION</span>

              <span
                aria-hidden="true"
                className="h-px w-4 bg-white/15"
              />

              <span>GUIDANCE</span>

              <span
                aria-hidden="true"
                className="h-px w-4 bg-white/15"
              />

              <span>CLARITY</span>
            </motion.div>
          </div>

          {/* ═════════════════════════════════════
              CORNER DETAILS
          ═════════════════════════════════════ */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-5 top-5
              h-8 w-8
              border-l border-t
              border-[#C69A42]/20
              sm:left-8 sm:top-8
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute bottom-5 right-5
              h-8 w-8
              border-b border-r
              border-[#C69A42]/20
              sm:bottom-8 sm:right-8
            "
          />

          {/* Bottom copyright-style label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="
              absolute bottom-6
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              text-[8px]
              tracking-[0.28em]
              text-white/15
            "
          >
            SUMIT SHARMA · UJJAIN
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}