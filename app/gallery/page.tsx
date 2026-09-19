"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Mahakal Anushthan",
    category: "Puja",
    image: "/images/gallery/puja-1.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 2,
    title: "Vedic Havan",
    category: "Anushthan",
    image: "/images/gallery/havan-1.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Temple Ritual",
    category: "Puja",
    image: "/images/gallery/puja-2.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 4,
    title: "Navgrah Shanti",
    category: "Anushthan",
    image: "/images/gallery/navgrah-1.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 5,
    title: "Rudrabhishek",
    category: "Puja",
    image: "/images/gallery/rudrabhishek-1.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 6,
    title: "Vedic Consultation",
    category: "Astrology",
    image: "/images/gallery/astrology-1.jpg",
    aspect: "aspect-[4/5]",
  },
];

const categories = ["All", "Puja", "Anushthan", "Astrology"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory,
    );
  }, [activeCategory]);

  const selectedImage =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null || filteredItems.length === 0) return;

    setSelectedIndex(
      selectedIndex === 0
        ? filteredItems.length - 1
        : selectedIndex - 1,
    );
  };

  const showNext = () => {
    if (selectedIndex === null || filteredItems.length === 0) return;

    setSelectedIndex(
      selectedIndex === filteredItems.length - 1
        ? 0
        : selectedIndex + 1,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredItems.length]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#18120F] px-6 pb-24 pt-36 text-[#FFF9EF] sm:px-10 lg:px-16 lg:pb-32">
        {/* Sacred geometry */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-15%] top-[-30%] h-[720px] w-[720px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-7%] top-[-19%] h-[560px] w-[560px] rounded-full border border-[#FFF9EF]/[0.05]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[5%] top-[-8%] h-[390px] w-[390px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[14%] top-[8%] font-serif text-[12rem] leading-none text-[#C69A42]/[0.06] sm:text-[17rem]"
        >
          ॐ
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs text-[#FFF9EF]/40 transition-colors hover:text-[#FFF9EF]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to home
          </Link>

          <div className="mt-16 grid items-end gap-12 lg:grid-cols-[1fr_.55fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#C69A42]" />

                <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
                  GALLERY / ARCHIVE
                </p>
              </div>

              <h1 className="mt-8 max-w-5xl font-serif text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.045em]">
                Sacred moments,
                <br />
                <span className="text-[#C69A42]">
                  captured with reverence.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-sm leading-7 text-[#FFF9EF]/50 sm:text-base">
                वैदिक पूजा, अनुष्ठान और आध्यात्मिक practices की कुछ
                झलकियां — परंपरा, अनुशासन और श्रद्धा के साथ।
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
              }}
              className="hidden lg:block"
            >
              <div className="border-l border-[#FFF9EF]/10 pl-8">
                <p className="text-[10px] tracking-[0.25em] text-[#C69A42]">
                  VISUAL ARCHIVE
                </p>

                <p className="mt-5 max-w-sm font-serif text-3xl leading-tight text-[#FFF9EF]/80">
                  हर frame एक प्रक्रिया, एक परंपरा और एक क्षण को दर्ज
                  करता है।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILTER BAR
      ========================================================= */}
      <section className="sticky top-0 z-30 border-b border-[#18120F]/10 bg-[#FFF9EF]/90 px-6 py-4 backdrop-blur-xl sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-5">
          <div className="flex min-w-0 gap-1 overflow-x-auto pb-1">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                  }}
                  className={`relative shrink-0 rounded-full px-4 py-2.5 text-[11px] font-medium tracking-[0.08em] transition-all duration-300 ${
                    active
                      ? "bg-[#7A1717] text-[#FFF9EF]"
                      : "text-[#18120F]/50 hover:bg-[#F3E4C7] hover:text-[#18120F]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <span className="hidden shrink-0 font-mono text-[10px] tracking-[0.15em] text-[#18120F]/30 sm:block">
            {String(filteredItems.length).padStart(2, "0")} ITEMS
          </span>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="columns-1 gap-5 sm:columns-2 lg:columns-3"
            >
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedIndex(index)}
                  className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#F3E4C7] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A52A16] focus-visible:ring-offset-4"
                >
                  <div className={`relative ${item.aspect}`}>
                    <Image
                      src={item.image}
                      alt={`${item.title} — ${item.category}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top index */}
                    <div className="absolute left-5 top-5 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/20 bg-black/15 px-2 backdrop-blur-md">
                      <span className="font-mono text-[9px] tracking-[0.1em] text-white/75">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Expand */}
                    <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-black/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Expand size={15} strokeWidth={1.7} />
                    </div>

                    {/* Caption */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="text-[9px] font-medium tracking-[0.25em] text-[#E8C979]">
                        {item.category.toUpperCase()}
                      </p>

                      <div className="mt-2 flex items-end justify-between gap-4">
                        <h2 className="font-serif text-2xl leading-none text-white sm:text-3xl">
                          {item.title}
                        </h2>

                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================
          EDITORIAL NOTE
      ========================================================= */}
      <section className="border-y border-[#18120F]/10 bg-[#F3E4C7]/50 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                A GLIMPSE
              </p>

              <div className="mt-6 font-serif text-7xl leading-none text-[#A52A16]/15">
                ॐ
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <h2 className="max-w-3xl font-serif text-4xl leading-[0.95] tracking-[-0.025em] sm:text-6xl">
                तस्वीर सिर्फ एक
                <br />
                <span className="text-[#A52A16]">
                  क्षण को दिखाती है।
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#18120F]/55 sm:text-base">
                पूजा और अनुष्ठान की वास्तविक प्रक्रिया उससे कहीं अधिक
                विस्तृत होती है। Gallery केवल एक visual glimpse है — पूरी
                जानकारी के लिए संबंधित service या consultation page देखें।
              </p>

              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#18120F]/20 pb-2 text-sm font-medium"
              >
                Explore services
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#7A1717] px-6 py-20 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#C69A42]">
                BEGIN YOUR JOURNEY
              </p>

              <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl">
                अपनी आवश्यकता
                <br />
                <span className="text-[#C69A42]">साझा करें।</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#FFF9EF]/50">
                पूजा अनुष्ठान या ज्योतिषीय consultation के लिए अपनी
                enquiry भेजें।
              </p>
            </div>

            <Link
              href="/book-puja"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#C69A42] px-7 py-4 text-sm font-semibold text-[#18120F] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book Consultation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0908]/95 p-4 backdrop-blur-xl sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedImage.title} gallery viewer`}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:right-7 sm:top-7"
            >
              <X size={19} strokeWidth={1.7} />
            </button>

            {/* Counter */}
            <div className="absolute left-5 top-6 z-20 font-mono text-[10px] tracking-[0.2em] text-white/40 sm:left-8 sm:top-8">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredItems.length).padStart(2, "0")}
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/15 sm:left-7 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/15 sm:right-7 sm:h-12 sm:w-12"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-[72vh] w-[calc(100vw-110px)] max-w-6xl sm:h-[78vh] sm:w-[calc(100vw-180px)]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-5 left-1/2 z-20 w-[calc(100%-40px)] -translate-x-1/2 text-center sm:bottom-7">
              <p className="text-[9px] font-medium tracking-[0.25em] text-[#C69A42]">
                {selectedImage.category.toUpperCase()}
              </p>

              <h2 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                {selectedImage.title}
              </h2>

              <p className="mt-2 text-[10px] tracking-[0.12em] text-white/30">
                ESC TO CLOSE · ← → TO NAVIGATE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}