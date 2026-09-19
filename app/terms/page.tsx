"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  FileText,
  ShieldCheck,
} from "lucide-react";

const termsSections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    hindiTitle: "शर्तों की स्वीकृति",
    content:
      "इस website को access या use करके आप इन Terms & Conditions को पढ़ने और इनका पालन करने के लिए सहमत होते हैं। यदि आप इन terms से सहमत नहीं हैं, तो कृपया website या संबंधित services का उपयोग न करें।",
  },
  {
    number: "02",
    title: "Nature of Services",
    hindiTitle: "सेवाओं का स्वरूप",
    content:
      "Website पर Vedic Astrology, Kundli guidance, Puja Anushthan, Dosh Nivaran और संबंधित spiritual services के बारे में information दी जाती है। उपलब्ध services, process और requirements आवश्यकता के अनुसार अलग हो सकते हैं।",
  },
  {
    number: "03",
    title: "Astrology & Spiritual Guidance",
    hindiTitle: "ज्योतिषीय एवं आध्यात्मिक मार्गदर्शन",
    content:
      "Astrology और spiritual guidance traditional तथा interpretive practices पर आधारित हो सकती है। इन्हें निश्चित भविष्यवाणी, guarantee या किसी परिणाम का आश्वासन नहीं माना जाना चाहिए।",
  },
  {
    number: "04",
    title: "Bookings & Enquiries",
    hindiTitle: "बुकिंग एवं enquiry",
    content:
      "Website पर enquiry submit करना अपने आप में service confirmation नहीं माना जाता। Booking की final confirmation availability, discussion और mutually agreed details के आधार पर की जा सकती है।",
  },
  {
    number: "05",
    title: "Information Provided by You",
    hindiTitle: "आपके द्वारा दी गई जानकारी",
    content:
      "Enquiry या consultation के दौरान दी गई information आपकी जानकारी के अनुसार accurate और complete होनी चाहिए। गलत या incomplete information के कारण consultation या service में limitations हो सकती हैं।",
  },
  {
    number: "06",
    title: "Payments & Charges",
    hindiTitle: "भुगतान एवं शुल्क",
    content:
      "यदि किसी service के लिए applicable charges हों, तो payment amount, method और अन्य applicable conditions booking से पहले communicate की जानी चाहिए। किसी भी payment को service confirmation मानने से पहले संबंधित terms स्पष्ट होना आवश्यक है।",
  },
  {
    number: "07",
    title: "Cancellations & Changes",
    hindiTitle: "रद्दीकरण एवं बदलाव",
    content:
      "Booking date, service details या अन्य arrangements में बदलाव availability और mutually agreed conditions के अनुसार किए जा सकते हैं। यदि कोई specific cancellation या refund policy लागू होती है, तो उसे booking के समय स्पष्ट किया जाना चाहिए।",
  },
  {
    number: "08",
    title: "Website Content",
    hindiTitle: "वेबसाइट की सामग्री",
    content:
      "Website पर उपलब्ध text, images, graphics, descriptions और अन्य materials सामान्य informational purposes के लिए हो सकते हैं। Content को बिना अनुमति reproduce, copy या commercially reuse नहीं किया जाना चाहिए।",
  },
  {
    number: "09",
    title: "Third-Party Services",
    hindiTitle: "Third-party services",
    content:
      "Website में WhatsApp, email, maps या अन्य external platforms के links अथवा integrations हो सकते हैं। इन third-party platforms का उपयोग उनके अपने terms और privacy policies के अधीन हो सकता है।",
  },
  {
    number: "10",
    title: "Limitation of Responsibility",
    hindiTitle: "जिम्मेदारी की सीमा",
    content:
      "Website पर उपलब्ध spiritual या astrology-related information को professional medical, legal या financial advice का replacement नहीं माना जाना चाहिए। महत्वपूर्ण personal decisions के लिए संबंधित qualified professional से उचित सलाह लेना आवश्यक है।",
  },
  {
    number: "11",
    title: "Intellectual Property",
    hindiTitle: "बौद्धिक संपदा",
    content:
      "Website का original branding, design, written content, graphics और अन्य creative material applicable intellectual property protections के अधीन हो सकते हैं। बिना permission इनके reproduction या commercial use की अनुमति नहीं है।",
  },
  {
    number: "12",
    title: "Changes to These Terms",
    hindiTitle: "Terms में बदलाव",
    content:
      "Website, services या applicable requirements में बदलाव के अनुसार इन Terms & Conditions को समय-समय पर update किया जा सकता है। Updated version इसी page पर प्रकाशित किया जाएगा।",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#18120F] px-6 pb-24 pt-36 text-[#FFF9EF] sm:px-10 lg:px-16 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-14%] top-[-30%] h-[700px] w-[700px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-7%] top-[-18%] h-[550px] w-[550px] rounded-full border border-[#FFF9EF]/[0.05]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[7%] top-[-5%] h-[380px] w-[380px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute right-[13%] top-[8%] font-serif text-[13rem] leading-none text-[#C69A42]/[0.055] sm:text-[18rem]"
        >
          ॐ
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs text-[#FFF9EF]/35 transition-colors hover:text-[#FFF9EF]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#C69A42]" />

              <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
                LEGAL / TERMS
              </p>
            </div>

            <h1 className="mt-8 max-w-5xl font-serif text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.045em]">
              Terms &
              <br />
              <span className="text-[#C69A42]">Conditions</span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-7 text-[#FFF9EF]/50 sm:text-base">
              Website, enquiries, consultations और services के उपयोग से
              संबंधित सामान्य terms और conditions।
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs text-[#FFF9EF]/35">
              <FileText
                size={15}
                className="text-[#C69A42]"
                strokeWidth={1.5}
              />
              <span>CLARITY • RESPONSIBILITY • TRANSPARENCY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#A52A16]/15 bg-[#A52A16]/5 text-[#A52A16]">
                <ShieldCheck size={19} strokeWidth={1.6} />
              </div>

              <p className="mt-7 text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                PLEASE READ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
            >
              <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                स्पष्ट terms के साथ
                <span className="text-[#A52A16]">
                  {" "}
                  बेहतर understanding।
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-sm leading-7 text-[#18120F]/55 sm:text-base">
                यह page website के उपयोग, enquiries, consultations और
                services से जुड़े सामान्य नियमों को समझाने के लिए है।
                किसी specific service के लिए अलग terms communicate की
                जा सकती हैं।
              </p>

              <div className="mt-8 rounded-2xl border border-[#18120F]/10 bg-[#F3E4C7]/45 p-6">
                <p className="text-xs leading-6 text-[#18120F]/55">
                  <strong className="font-semibold text-[#18120F]/75">
                    Important:
                  </strong>{" "}
                  Production website पर publish करने से पहले actual
                  booking process, payment/refund policy, business
                  structure और applicable Indian legal requirements के
                  अनुसार इस document की legal review कराएं।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TERMS
      ========================================================= */}
      <section className="border-y border-[#18120F]/10 bg-[#F3E4C7]/45 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14">
            <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
              TERMS OF USE
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl">
              Website और services के
              <br />
              <span className="text-[#A52A16]">
                उपयोग की शर्तें।
              </span>
            </h2>
          </div>

          <div className="divide-y divide-[#18120F]/10 border-y border-[#18120F]/10">
            {termsSections.map((section, index) => (
              <motion.article
                key={section.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.035, 0.3),
                }}
                className="grid gap-7 py-9 md:grid-cols-[80px_0.7fr_1.3fr] md:gap-10 md:py-11"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#A52A16]">
                  {section.number}
                </span>

                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] text-[#18120F]/40">
                    {section.title.toUpperCase()}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
                    {section.hindiTitle}
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-[#18120F]/60">
                  {section.content}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Clarity",
                hindi: "स्पष्टता",
                text: "Service, enquiry और communication से जुड़े महत्वपूर्ण details को स्पष्ट रखना।",
              },
              {
                title: "Respect",
                hindi: "सम्मान",
                text: "हर consultation और interaction को व्यक्तिगत परिस्थिति और privacy के सम्मान के साथ handle करना।",
              },
              {
                title: "Responsibility",
                hindi: "जिम्मेदारी",
                text: "Spiritual और astrology-related information को उचित context के साथ समझना और उपयोग करना।",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="rounded-[1.75rem] border border-[#18120F]/10 bg-white p-7 sm:p-9"
              >
                <div className="flex items-center gap-3">
                  <Check
                    size={16}
                    className="text-[#A52A16]"
                    strokeWidth={2}
                  />

                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#18120F]/35">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-3xl">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs tracking-[0.1em] text-[#A52A16]/70">
                  {item.hindi}
                </p>

                <p className="mt-5 text-sm leading-7 text-[#18120F]/50">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#7A1717] px-6 py-20 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12%] top-[-65%] h-[780px] w-[780px] rounded-full border border-[#C69A42]/10"
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#C69A42]">
                NEED CLARIFICATION?
              </p>

              <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl">
                किसी service या
                <br />
                <span className="text-[#C69A42]">
                  booking को लेकर सवाल?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#FFF9EF]/45">
                किसी specific service या booking requirement के बारे में
                जानकारी के लिए contact करें।
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#C69A42] px-7 py-4 text-sm font-semibold text-[#18120F] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Contact Us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEGAL NAV
      ========================================================= */}
      <section className="bg-[#18120F] px-6 pb-10 text-[#FFF9EF] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 border-t border-[#FFF9EF]/10 pt-7 text-xs text-[#FFF9EF]/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Sumit Sharma</p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#FFF9EF]"
            >
              Privacy
            </Link>

            <Link
              href="/disclaimer"
              className="transition-colors hover:text-[#FFF9EF]"
            >
              Disclaimer
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-[#FFF9EF]"
            >
              Contact
            </Link>

            <Link
              href="/book-puja"
              className="transition-colors hover:text-[#FFF9EF]"
            >
              Booking
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}