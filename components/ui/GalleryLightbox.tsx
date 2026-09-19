"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";
import { useEffect } from "react";

export type GalleryLightboxImage = {
  src: string;
  alt: string;
  title?: string;
  category?: string;
};

interface GalleryLightboxProps {
  images: GalleryLightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  const isOpen =
    activeIndex !== null &&
    activeIndex >= 0 &&
    activeIndex < images.length;

  const activeImage = isOpen
    ? images[activeIndex]
    : null;

  /* ─────────────────────────────────────────
     KEYBOARD CONTROLS
  ───────────────────────────────────────── */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  /* ─────────────────────────────────────────
     BODY SCROLL LOCK
  ───────────────────────────────────────── */

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && activeImage && (
        <motion.div
          key="gallery-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed inset-0 z-[200]
            flex items-center justify-center
            bg-[#0b0908]/[0.97]
            p-3
            sm:p-6
          "
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          {/* ─────────────────────────────
              AMBIENT BACKGROUND
          ───────────────────────────── */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              overflow-hidden
            "
          >
            <div
              className="
                absolute left-1/2 top-1/2
                h-[70vw] w-[70vw]
                max-h-[900px]
                max-w-[900px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-[#C69A42]/[0.035]
              "
            />

            <div
              className="
                absolute left-1/2 top-1/2
                h-[48vw] w-[48vw]
                max-h-[650px]
                max-w-[650px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-white/[0.025]
              "
            />
          </div>

          {/* ─────────────────────────────
              TOP BAR
          ───────────────────────────── */}

          <div
            className="
              absolute inset-x-0 top-0 z-20
              flex items-center
              justify-between
              px-4 py-4
              sm:px-7 sm:py-6
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  hidden
                  font-serif text-lg
                  text-[#C69A42]
                  sm:block
                "
              >
                ॐ
              </span>

              <div>
                <p
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  SUMIT SHARMA
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    tracking-[0.25em]
                    text-white/20
                  "
                >
                  GALLERY
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Counter */}
              <div
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.035]
                  px-3.5 py-2
                  font-mono text-[10px]
                  tracking-[0.15em]
                  text-white/45
                  backdrop-blur-md
                "
              >
                {String(activeIndex + 1).padStart(
                  2,
                  "0"
                )}
                <span className="mx-1 text-white/15">
                  /
                </span>
                {String(images.length).padStart(
                  2,
                  "0"
                )}
              </div>

              {/* Close */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={onClose}
                aria-label="Close gallery"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.035]
                  text-white/70
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#C69A42]/35
                  hover:text-[#C69A42]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#C69A42]
                "
              >
                <X
                  size={19}
                  strokeWidth={1.6}
                />
              </motion.button>
            </div>
          </div>

          {/* ─────────────────────────────
              MAIN IMAGE
          ───────────────────────────── */}

          <div
            className="
              relative z-10
              flex h-full w-full
              max-w-[1500px]
              items-center justify-center
              pb-20 pt-20
              sm:pb-24
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={activeImage.src}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  flex h-full w-full
                  items-center justify-center
                "
              >
                <div
                  className="
                    relative
                    h-full
                    max-h-[72vh]
                    w-full
                    max-w-[1150px]
                    overflow-hidden
                    rounded-[1rem]
                    border border-white/[0.08]
                    bg-[#18120F]
                    shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                    sm:rounded-[1.35rem]
                  "
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    priority
                    sizes="
                      (max-width: 640px) 94vw,
                      (max-width: 1024px) 90vw,
                      1150px
                    "
                    className="
                      object-contain
                      p-1
                      sm:p-2
                    "
                  />

                  {/* Image edge */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-0
                      rounded-[inherit]
                      ring-1 ring-inset
                      ring-white/[0.06]
                    "
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ─────────────────────────
                PREVIOUS
            ───────────────────────── */}

            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={onPrevious}
              aria-label="Previous image"
              className="
                absolute left-1
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-white/10
                bg-[#18120F]/80
                text-white/65
                backdrop-blur-xl
                transition-all duration-300
                hover:border-[#C69A42]/35
                hover:text-[#C69A42]
                sm:left-4
                sm:h-12 sm:w-12
                lg:left-8
              "
            >
              <ChevronLeft
                size={21}
                strokeWidth={1.5}
              />
            </motion.button>

            {/* ─────────────────────────
                NEXT
            ───────────────────────── */}

            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="
                absolute right-1
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-white/10
                bg-[#18120F]/80
                text-white/65
                backdrop-blur-xl
                transition-all duration-300
                hover:border-[#C69A42]/35
                hover:text-[#C69A42]
                sm:right-4
                sm:h-12 sm:w-12
                lg:right-8
              "
            >
              <ChevronRight
                size={21}
                strokeWidth={1.5}
              />
            </motion.button>
          </div>

          {/* ─────────────────────────────
              BOTTOM INFORMATION
          ───────────────────────────── */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.12,
              duration: 0.3,
            }}
            className="
              absolute inset-x-4 bottom-4
              z-20
              flex items-end
              justify-between
              gap-5
              sm:inset-x-7 sm:bottom-6
            "
          >
            <div className="min-w-0">
              {activeImage.category && (
                <p
                  className="
                    text-[9px]
                    tracking-[0.3em]
                    text-[#C69A42]
                  "
                >
                  {activeImage.category}
                </p>
              )}

              {activeImage.title && (
                <h2
                  className="
                    mt-1
                    truncate
                    font-serif
                    text-xl
                    text-white
                    sm:text-2xl
                  "
                >
                  {activeImage.title}
                </h2>
              )}
            </div>

            <div
              className="
                hidden items-center gap-2
                text-[9px]
                tracking-[0.2em]
                text-white/25
                sm:flex
              "
            >
              <Maximize2 size={12} />
              <span>ESC TO CLOSE</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}