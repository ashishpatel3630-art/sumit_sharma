"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/siteConfig";

type Language = "hi" | "en";

const navigation = {
  hi: [
    { label: "होम", href: "/" },
    { label: "कालसर्प पूजा", href: "/kaal-sarp-dosh-puja" },
    { label: "मंगल दोष पूजा", href: "/mangal-dosh-puja" },
    { label: "पूजा सेवाएं", href: "/#pujas" },
    { label: "ऑनलाइन पूजा", href: "/online-puja" },
    { label: "संपर्क करें", href: "/#contact" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Kaal Sarp Puja", href: "/kaal-sarp-dosh-puja" },
    { label: "Mangal Dosh Puja", href: "/mangal-dosh-puja" },
    { label: "Puja Services", href: "/#pujas" },
    { label: "Online Puja", href: "/online-puja" },
    { label: "Contact", href: "/#contact" },
  ],
};

const content = {
  hi: {
    name: "पंडित सौरभ जीवैदिक ज्योतिषी",
    shortName: "पंडित सौरभ",
    book: "पूजा बुक करें",
    menu: "मेन्यू",
    close: "बंद करें",
  },
  en: {
    name: "Pandit Saurabh Jeevaidik Jyotishi",
    shortName: "Pandit Saurabh",
    book: "Book Puja",
    menu: "Menu",
    close: "Close",
  },
};

export default function Navbar() {
  const pathname = usePathname();

  const [language, setLanguage] = useState<Language>("hi");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = content[language];
  const links = navigation[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.startsWith("/#")) {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  const bookHref = "/book-puja";

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-300
          ${scrolled ? "pt-2" : "pt-4"}
        `}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <nav
            className={`
              relative flex h-[70px] items-center
              justify-between
              rounded-2xl
              border
              px-4 sm:px-5 lg:px-6
              transition-all duration-300
              ${
                scrolled
                  ? "border-[#E7DED1] bg-[#FFFDF9]/95 shadow-[0_8px_30px_rgba(44,31,20,0.08)] backdrop-blur-xl"
                  : "border-[#E8DFD2]/80 bg-[#FFFDF9]/90 backdrop-blur-xl"
              }
            `}
          >
            {/* LEFT — BRAND */}
            <Link
              href="/"
              aria-label={`${t.name} — Home`}
              className="group flex min-w-0 items-center gap-3"
            >
              {/* Om */}
              <span
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-full
                  border border-[#B8893D]/30
                  bg-[#B8893D]/[0.05]
                  font-serif text-[20px]
                  text-[#9A6C28]
                  transition-all duration-300
                  group-hover:border-[#B8893D]/60
                  group-hover:bg-[#B8893D]/10
                "
              >
                ॐ
              </span>

              {/* Name */}
              <span className="hidden min-w-0 sm:block">
                <span
                  className="
                    block truncate
                    font-serif
                    text-[14px]
                    font-semibold
                    tracking-[-0.01em]
                    text-[#2E241D]
                    lg:text-[15px]
                  "
                >
                  {t.name}
                </span>

                <span
                  className="
                    mt-0.5 block
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#A78355]
                  "
                >
                  Vedic Astrology
                </span>
              </span>

              {/* Mobile brand */}
              <span
                className="
                  block sm:hidden
                  font-serif
                  text-[15px]
                  font-semibold
                  text-[#2E241D]
                "
              >
                {t.shortName}
              </span>
            </Link>

            {/* CENTER — DESKTOP NAV */}
            <div className="hidden items-center lg:flex">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      group relative
                      px-3 py-2.5
                      text-[12.5px]
                      font-medium
                      text-[#5D5148]
                      transition-colors duration-200
                      hover:text-[#9A6C28]
                    "
                  >
                    <span
                      className={
                        active
                          ? "text-[#9A6C28]"
                          : undefined
                      }
                    >
                      {link.label}
                    </span>

                    {/* Active underline */}
                    <span
                      className={`
                        absolute
                        bottom-0.5
                        left-1/2
                        h-px
                        -translate-x-1/2
                        bg-[#B8893D]
                        transition-all duration-300
                        ${
                          active
                            ? "w-5 opacity-100"
                            : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-60"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* RIGHT — LANGUAGE + CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Language Switcher */}
              <div
                className="
                  flex items-center
                  rounded-full
                  border border-[#E7DED1]
                  bg-white/70
                  p-1
                "
              >
                <button
                  type="button"
                  onClick={() => setLanguage("hi")}
                  className={`
                    rounded-full
                    px-2.5 py-1.5
                    text-[10px]
                    font-semibold
                    transition-all duration-200
                    ${
                      language === "hi"
                        ? "bg-[#2E241D] text-white"
                        : "text-[#74665A] hover:text-[#2E241D]"
                    }
                  `}
                >
                  हिंदी
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`
                    rounded-full
                    px-2.5 py-1.5
                    text-[10px]
                    font-semibold
                    transition-all duration-200
                    ${
                      language === "en"
                        ? "bg-[#2E241D] text-white"
                        : "text-[#74665A] hover:text-[#2E241D]"
                    }
                  `}
                >
                  EN
                </button>
              </div>

              {/* CTA */}
              <Link
                href={bookHref}
                className="
                  group
                  inline-flex
                  h-11
                  items-center
                  gap-2
                  rounded-full
                  bg-[#9A6C28]
                  px-5
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-[0_7px_20px_rgba(154,108,40,0.16)]
                  transition-all duration-300
                  hover:bg-[#83591E]
                  hover:shadow-[0_10px_26px_rgba(154,108,40,0.22)]
                "
              >
                <CalendarDays
                  size={15}
                  strokeWidth={1.8}
                />

                {t.book}

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={t.menu}
              aria-expanded={mobileOpen}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[#E7DED1]
                bg-white/70
                text-[#2E241D]
                transition-all duration-200
                hover:border-[#B8893D]/40
                hover:text-[#9A6C28]
                lg:hidden
              "
            >
              <Menu
                size={19}
                strokeWidth={1.7}
              />
            </motion.button>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed inset-0 z-[100]
              overflow-y-auto
              bg-[#FFFDF9]
              text-[#2E241D]
              lg:hidden
            "
          >
            {/* MOBILE HEADER */}
            <div
              className="
                flex h-[74px]
                items-center justify-between
                border-b border-[#E9E0D5]
                px-5
              "
            >
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3"
              >
                <span
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-[#B8893D]/30
                    font-serif text-xl
                    text-[#9A6C28]
                  "
                >
                  ॐ
                </span>

                <span
                  className="
                    font-serif
                    text-[15px]
                    font-semibold
                  "
                >
                  {t.name}
                </span>
              </Link>

              <motion.button
                whileTap={{ scale: 0.94 }}
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label={t.close}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-[#E7DED1]
                  text-[#5D5148]
                "
              >
                <X
                  size={19}
                  strokeWidth={1.7}
                />
              </motion.button>
            </div>

            {/* MOBILE CONTENT */}
            <div className="mx-auto max-w-xl px-6 pb-10 pt-8">
              {/* Intro */}
              <div className="mb-8">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#A78355]
                  "
                >
                  Vedic Astrology
                </p>

                <h2
                  className="
                    mt-3
                    max-w-md
                    font-serif
                    text-2xl
                    leading-tight
                    text-[#2E241D]
                  "
                >
                  {language === "hi"
                    ? "पूजा, ज्योतिष और आध्यात्मिक मार्गदर्शन"
                    : "Puja, astrology & spiritual guidance"}
                </h2>
              </div>

              {/* Mobile language */}
              <div className="mb-7 flex items-center gap-2">
                <span className="text-xs text-[#8B7C6D]">
                  Language
                </span>

                <div
                  className="
                    flex rounded-full
                    border border-[#E7DED1]
                    bg-white
                    p-1
                  "
                >
                  <button
                    type="button"
                    onClick={() => setLanguage("hi")}
                    className={`
                      rounded-full
                      px-3 py-1.5
                      text-[10px]
                      font-semibold
                      ${
                        language === "hi"
                          ? "bg-[#2E241D] text-white"
                          : "text-[#74665A]"
                      }
                    `}
                  >
                    हिंदी
                  </button>

                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`
                      rounded-full
                      px-3 py-1.5
                      text-[10px]
                      font-semibold
                      ${
                        language === "en"
                          ? "bg-[#2E241D] text-white"
                          : "text-[#74665A]"
                      }
                    `}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Links */}
              <div className="border-t border-[#E9E0D5]">
                {links.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-[#E9E0D5]
                          py-5
                        "
                      >
                        <span
                          className={`
                            font-serif
                            text-xl
                            transition-colors
                            ${
                              active
                                ? "text-[#9A6C28]"
                                : "text-[#2E241D] group-hover:text-[#9A6C28]"
                            }
                          `}
                        >
                          {link.label}
                        </span>

                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.5}
                          className="
                            text-[#B7AA9B]
                            transition-all duration-200
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-[#9A6C28]
                          "
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.28,
                  duration: 0.3,
                }}
                className="mt-8"
              >
                <Link
                  href={bookHref}
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    h-13
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#9A6C28]
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_8px_25px_rgba(154,108,40,0.16)]
                  "
                >
                  <CalendarDays
                    size={16}
                    strokeWidth={1.8}
                  />

                  {t.book}

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                  />
                </Link>
              </motion.div>

              {/* Footer identity */}
              <div
                className="
                  mt-10
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[#E9E0D5]
                  pt-5
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-[#A99A8A]
                    "
                  >
                    Vedic Astrology
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-[#A99A8A]
                    "
                  >
                    Puja Anushthan
                  </p>
                </div>

                <span
                  className="
                    font-serif
                    text-3xl
                    text-[#B8893D]/30
                  "
                >
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