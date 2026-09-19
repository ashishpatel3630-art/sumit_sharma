"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/data/siteConfig";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Astrology", href: "/astrology" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappUrl = createWhatsAppUrl(
    "Namaste Sumit Sharma Ji, mujhe puja/astrology consultation ke baare mein jaankari chahiye."
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* ─────────────────────────────────────────
          DESKTOP / MOBILE HEADER
      ───────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`mx-auto px-3 pt-3 transition-all duration-500 sm:px-5 lg:px-7 ${
            scrolled ? "pt-2" : "pt-4"
          }`}
        >
          <nav
            className={`
              relative mx-auto flex h-[68px] max-w-[1500px]
              items-center justify-between
              rounded-[1.25rem]
              border px-4 text-white
              backdrop-blur-2xl
              transition-all duration-500
              sm:px-5
              ${
                scrolled
                  ? "border-white/[0.14] bg-[#18120F]/90 shadow-[0_14px_50px_rgba(0,0,0,0.24)]"
                  : "border-white/10 bg-[#18120F]/65 shadow-2xl"
              }
            `}
          >
            {/* Subtle gold top highlight */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-x-8 top-0
                h-px bg-gradient-to-r
                from-transparent via-[#C69A42]/40 to-transparent
              "
            />

            {/* ───────────────── BRAND ───────────────── */}
            <Link
              href="/"
              aria-label="Sumit Sharma — Home"
              className="group relative flex items-center gap-3"
            >
              <motion.span
                whileHover={{ rotate: 8 }}
                transition={{ duration: 0.3 }}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#C69A42]/35
                  bg-[#C69A42]/[0.04]
                  font-serif text-[19px]
                  text-[#C69A42]
                  transition-colors duration-300
                  group-hover:border-[#C69A42]/70
                  group-hover:bg-[#C69A42]/10
                "
              >
                ॐ
              </motion.span>

              <span className="leading-none">
                <span className="block text-[10px] font-medium tracking-[0.34em] text-white/90">
                  SUMIT
                </span>

                <span className="mt-1 block text-[10px] font-medium tracking-[0.34em] text-[#C69A42]">
                  SHARMA
                </span>
              </span>
            </Link>

            {/* ───────────────── DESKTOP NAV ───────────────── */}
            <div className="hidden items-center gap-1 lg:flex">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      group relative rounded-full
                      px-3.5 py-2.5
                      text-[13px]
                      transition-colors duration-300
                    "
                  >
                    <span
                      className={
                        active
                          ? "text-white"
                          : "text-white/55 group-hover:text-white"
                      }
                    >
                      {link.label}
                    </span>

                    {/* Active indicator */}
                    <span
                      className={`
                        absolute bottom-1.5 left-1/2 h-px
                        -translate-x-1/2
                        bg-[#C69A42]
                        transition-all duration-300
                        ${
                          active
                            ? "w-4 opacity-100"
                            : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-70"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* ───────────────── DESKTOP CTA ───────────────── */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp consultation"
                className="
                  group flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  text-white/55
                  transition-all duration-300
                  hover:border-[#C69A42]/30
                  hover:bg-white/[0.04]
                  hover:text-[#C69A42]
                "
              >
                <MessageCircle
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <Link
                href="/book-puja"
                className="
                  group inline-flex items-center gap-2
                  rounded-full
                  bg-[#C69A42]
                  px-5 py-3
                  text-[13px] font-semibold
                  text-[#18120F]
                  shadow-[0_8px_25px_rgba(198,154,66,0.12)]
                  transition-all duration-300
                  hover:bg-[#D8B365]
                  hover:shadow-[0_10px_32px_rgba(198,154,66,0.2)]
                "
              >
                Book Consultation

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>

            {/* ───────────────── MOBILE MENU BUTTON ───────────────── */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setOpen(true)}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={open}
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.025]
                text-white
                transition-all duration-300
                hover:border-[#C69A42]/30
                hover:text-[#C69A42]
                lg:hidden
              "
            >
              <Menu size={20} strokeWidth={1.6} />
            </motion.button>
          </nav>
        </div>
      </header>

      {/* ─────────────────────────────────────────
          MOBILE FULLSCREEN MENU
      ───────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="
              fixed inset-0 z-[100]
              overflow-y-auto
              bg-[#18120F]
              text-white
              lg:hidden
            "
          >
            {/* Background geometry */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-32 top-24
                h-[420px] w-[420px]
                rounded-full
                border border-[#C69A42]/10
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-16 top-40
                h-[260px] w-[260px]
                rounded-full
                border border-[#C69A42]/[0.07]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                bottom-0 left-0
                h-[360px] w-[360px]
                rounded-full
                bg-[#7A1717]/10
                blur-3xl
              "
            />

            {/* Header */}
            <div className="relative flex items-center justify-between px-5 py-5 sm:px-8">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <span
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-[#C69A42]/40
                    font-serif text-lg
                    text-[#C69A42]
                  "
                >
                  ॐ
                </span>

                <span className="text-[10px] font-medium tracking-[0.3em]">
                  SUMIT SHARMA
                </span>
              </Link>

              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => setOpen(false)}
                type="button"
                aria-label="Close navigation menu"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  text-white/75
                  transition-colors
                  hover:border-[#C69A42]/30
                  hover:text-[#C69A42]
                "
              >
                <X size={20} strokeWidth={1.6} />
              </motion.button>
            </div>

            {/* Menu content */}
            <div
              className="
                relative mx-auto
                flex min-h-[calc(100svh-84px)]
                max-w-2xl
                flex-col
                justify-center
                px-6 pb-12
                sm:px-10
              "
            >
              <div className="mb-7">
                <p className="text-[10px] tracking-[0.32em] text-[#C69A42]">
                  NAVIGATION
                </p>

                <p className="mt-3 max-w-xs font-serif text-lg leading-7 text-white/45">
                  वैदिक ज्योतिष, पूजा अनुष्ठान और व्यक्तिगत मार्गदर्शन।
                </p>
              </div>

              {/* Links */}
              <div>
                {links.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.06 + index * 0.045,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="
                          group flex items-center justify-between
                          border-b border-white/[0.08]
                          py-4
                        "
                      >
                        <span
                          className={`
                            font-serif text-[2.1rem]
                            leading-none
                            transition-colors duration-300
                            ${
                              active
                                ? "text-[#C69A42]"
                                : "text-white/90 group-hover:text-[#C69A42]"
                            }
                          `}
                        >
                          {link.label}
                        </span>

                        <span
                          className={`
                            font-mono text-[9px]
                            tracking-[0.2em]
                            transition-colors duration-300
                            ${
                              active
                                ? "text-[#C69A42]"
                                : "text-white/20 group-hover:text-white/50"
                            }
                          `}
                        >
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile actions */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="mt-8 grid grid-cols-2 gap-3"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center justify-center gap-2
                    rounded-full
                    border border-white/10
                    px-5 py-3.5
                    text-sm
                    text-white/75
                    transition-all
                    hover:border-[#C69A42]/35
                    hover:text-white
                  "
                >
                  <MessageCircle size={16} strokeWidth={1.7} />
                  WhatsApp
                </a>

                <Link
                  href="/book-puja"
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center justify-center gap-2
                    rounded-full
                    bg-[#C69A42]
                    px-5 py-3.5
                    text-sm font-semibold
                    text-[#18120F]
                    transition-colors
                    hover:bg-[#D8B365]
                  "
                >
                  <CalendarDays size={16} strokeWidth={1.7} />
                  Book Consultation
                </Link>
              </motion.div>

              {/* Bottom identity */}
              <div className="mt-10 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <div>
                  <p className="text-[9px] tracking-[0.28em] text-white/25">
                    VEDIC ASTROLOGY
                  </p>
                  <p className="mt-1 text-[9px] tracking-[0.28em] text-white/25">
                    PUJA ANUSHTHAN
                  </p>
                </div>

                <span className="font-serif text-3xl text-[#C69A42]/25">
                  ॐ
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}