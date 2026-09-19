"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Expand,
  ImageIcon,
  Sparkles,
} from "lucide-react";

const galleryItems = [
  {
    src: "/images/gallery/puja-1.jpg",
    title: "Puja Anushthan",
    category: "PUJA",
    className: "aspect-[4/5]",
  },
  {
    src: "/images/gallery/havan-1.jpg",
    title: "Havan & Sankalp",
    category: "ANUSHTHAN",
    className: "aspect-[5/4]",
  },
  {
    src: "/images/gallery/navgrah-1.jpg",
    title: "Navgrah Shanti",
    category: "PUJA",
    className: "aspect-[4/5]",
  },
  {
    src: "/images/gallery/astrology-1.jpg",
    title: "Vedic Astrology",
    category: "ASTROLOGY",
    className: "aspect-[5/4]",
  },
];

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#18120F] px-6 py-24 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] top-[15%] h-[600px] w-[600px] rounded-full border border-[#C69A42]/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] bottom-[-30%] h-[700px] w-[700px] rounded-full border border-[#FFF9EF]/[0.04]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C69A42]" />

              <span className="text-[10px] tracking-[0.35em] text-[#C69A42]">
                FROM THE PRACTICE
              </span>
            </div>

            <h2 className="mt-7 max-w-xl font-serif text-5xl leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              परंपरा के
              <br />
              <span className="text-[#C69A42]">कुछ दृश्य।</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between gap-7 border-l border-[#FFF9EF]/10 pl-6 lg:flex-row lg:items-end lg:pl-8"
          >
            <p className="max-w-xl text-sm leading-7 text-[#FFF9EF]/45 sm:text-base">
              पूजा अनुष्ठान, हवन, वैदिक परंपराओं और ज्योतिषीय अभ्यास
              से जुड़े चुनिंदा क्षण। पूरी gallery में और देखें।
            </p>

            <Link
              href="/gallery"
              className="group inline-flex shrink-0 items-center gap-2 text-sm text-[#C69A42]"
            >
              View full gallery
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-[#FFF9EF]/10 bg-[#251b17] ${
                index === 0
                  ? "md:col-span-5"
                  : index === 1
                    ? "md:col-span-7"
                    : index === 2
                      ? "md:col-span-7"
                      : "md:col-span-5"
              }`}
            >
              <div className={`relative ${item.className}`}>
                <Image
                  src={item.src}
                  alt={`${item.title} — Sumit Sharma`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-[9px] tracking-[0.3em] text-[#E8C46C]">
                        {item.category}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition duration-300 group-hover:bg-[#C69A42] group-hover:text-[#18120F]">
                      <Expand size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[#FFF9EF]/10 pt-5">
          <div className="flex items-center gap-2">
            <ImageIcon size={14} className="text-[#C69A42]" />
            <span className="text-[10px] tracking-[0.25em] text-[#FFF9EF]/30">
              GALLERY / VISUAL ARCHIVE
            </span>
          </div>

          <Sparkles
            size={15}
            strokeWidth={1}
            className="text-[#C69A42]/50"
          />
        </div>
      </div>
    </section>
  );
}