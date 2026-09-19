"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#18120f] px-6 text-[#fff9ef]">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7a1717]/40 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#c69a42]/40 text-3xl text-[#c69a42]"
        >
          ॐ
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm uppercase tracking-[0.3em] text-[#c69a42]"
        >
          404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-5 font-serif text-5xl md:text-7xl"
        >
          The path is not here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mx-auto mt-6 max-w-lg text-base leading-7 text-white/60"
        >
          The page you are looking for may have moved or does not exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fff9ef] px-6 py-3 text-sm font-semibold text-[#18120f] transition hover:bg-[#f3e4c7]"
          >
            <Home size={16} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </motion.div>
      </div>
    </main>
  );
}