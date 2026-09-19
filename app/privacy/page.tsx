"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const privacySections = [
  {
    number: "01",
    title: "Information We Collect",
    hindiTitle: "हम कौन-सी जानकारी लेते हैं",
    content:
      "जब आप booking enquiry, consultation request या contact form submit करते हैं, तो आपका नाम, phone number, email address, preferred service, preferred date और आपके द्वारा voluntarily साझा की गई अन्य जानकारी collect की जा सकती है।",
  },
  {
    number: "02",
    title: "Birth Information",
    hindiTitle: "जन्म संबंधी जानकारी",
    content:
      "यदि आप astrology या kundli consultation लेते हैं, तो जन्म तिथि, जन्म समय और जन्म स्थान जैसी जानकारी voluntarily साझा की जा सकती है। ऐसी जानकारी का उपयोग संबंधित consultation को समझने और उपलब्ध कराने के उद्देश्य से किया जाता है।",
  },
  {
    number: "03",
    title: "How We Use Information",
    hindiTitle: "जानकारी का उपयोग",
    content:
      "आपके द्वारा साझा की गई जानकारी का उपयोग enquiry का जवाब देने, consultation या puja service से संबंधित communication करने, booking details coordinate करने और requested service उपलब्ध कराने के लिए किया जा सकता है।",
  },
  {
    number: "04",
    title: "Communication",
    hindiTitle: "आपसे संपर्क",
    content:
      "आपके contact details का उपयोग आपकी enquiry के संबंध में आवश्यक communication के लिए किया जा सकता है। इसमें phone call, email या WhatsApp जैसे communication channels शामिल हो सकते हैं, यदि आपने संबंधित जानकारी साझा की है।",
  },
  {
    number: "05",
    title: "Data Sharing",
    hindiTitle: "जानकारी साझा करना",
    content:
      "आपकी व्यक्तिगत जानकारी को सामान्यतः बिना उचित आवश्यकता के third parties के साथ share करने का उद्देश्य नहीं है। यदि किसी service के लिए किसी external service provider की आवश्यकता हो, तो applicable circumstances के अनुसार information processing हो सकती है।",
  },
  {
    number: "06",
    title: "External Services",
    hindiTitle: "बाहरी सेवाएं",
    content:
      "Website पर WhatsApp, email services, hosting, analytics या अन्य third-party tools जैसे external services के links या integrations हो सकते हैं। इन platforms की अपनी privacy policies और terms हो सकती हैं।",
  },
  {
    number: "07",
    title: "Data Security",
    hindiTitle: "डेटा की सुरक्षा",
    content:
      "व्यक्तिगत जानकारी को unauthorized access, misuse या disclosure से बचाने के लिए reasonable safeguards अपनाने का प्रयास किया जाता है। हालांकि internet पर data transmission या storage की पूर्ण security की guarantee नहीं दी जा सकती।",
  },
  {
    number: "08",
    title: "Data Retention",
    hindiTitle: "डेटा कितने समय तक रखा जाता है",
    content:
      "जानकारी को आवश्यकता, communication, booking records या applicable business requirements के अनुसार रखा जा सकता है। जब information की आवश्यकता नहीं रहती, तो उसे उचित प्रक्रिया के अनुसार हटाया या retain करना बंद किया जा सकता है।",
  },
  {
    number: "09",
    title: "Your Choices",
    hindiTitle: "आपके विकल्प",
    content:
      "आप अपनी personal information साझा करने से पहले यह तय कर सकते हैं कि कौन-सी जानकारी देना आपके लिए उचित है। हालांकि कुछ information आवश्यक होने पर संबंधित enquiry या service को process करना संभव नहीं हो सकता।",
  },
  {
    number: "10",
    title: "Policy Updates",
    hindiTitle: "Privacy Policy में बदलाव",
    content:
      "Website, services या applicable requirements में बदलाव के अनुसार इस Privacy Policy को समय-समय पर update किया जा सकता है। Updated version इसी page पर उपलब्ध कराया जाएगा।",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9EF] text-[#18120F]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#18120F] px-6 pb-24 pt-36 text-[#FFF9EF] sm:px-10 lg:px-16 lg:pb-32">
        {/* Sacred geometry */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-14%] top-[-28%] h-[680px] w-[680px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-6%] top-[-17%] h-[530px] w-[530px] rounded-full border border-[#FFF9EF]/[0.05]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[7%] top-[-6%] h-[360px] w-[360px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute right-[13%] top-[12%] font-serif text-[12rem] leading-none text-[#C69A42]/[0.06] sm:text-[17rem]"
        >
          ॐ
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">
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

          <motion.div
            initial={{ opacity: 0, y: 28 }}
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
                LEGAL / PRIVACY
              </p>
            </div>

            <h1 className="mt-8 max-w-5xl font-serif text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.045em]">
              Privacy
              <br />
              <span className="text-[#C69A42]">Policy</span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-7 text-[#FFF9EF]/50 sm:text-base">
              आपकी personal information और privacy के प्रति हमारी
              approach को स्पष्ट करने के लिए यह policy प्रस्तुत की गई है।
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs text-[#FFF9EF]/35">
              <LockKeyhole size={15} className="text-[#C69A42]" />
              <span>PRIVACY • TRANSPARENCY • RESPONSIBLE USE</span>
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
                YOUR PRIVACY MATTERS
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                आपकी जानकारी का उपयोग
                <span className="text-[#A52A16]">
                  {" "}
                  उद्देश्य के साथ
                </span>{" "}
                किया जाता है।
              </h2>

              <p className="mt-7 max-w-3xl text-sm leading-7 text-[#18120F]/55 sm:text-base">
                जब आप Sumit Sharma की website के माध्यम से enquiry,
                consultation या puja service के लिए संपर्क करते हैं, तो
                कुछ personal information voluntarily साझा कर सकते हैं।
                यह policy बताती है कि ऐसी information किस प्रकार
                collect, use और protect की जा सकती है।
              </p>

              <div className="mt-8 rounded-2xl border border-[#18120F]/10 bg-[#F3E4C7]/45 p-6">
                <p className="text-xs leading-6 text-[#18120F]/55">
                  <strong className="font-semibold text-[#18120F]/75">
                    Important:
                  </strong>{" "}
                  यह एक general privacy policy template है। Website को
                  production में publish करने से पहले actual data
                  collection methods, hosting, analytics, forms,
                  payment providers और applicable Indian legal
                  requirements के अनुसार इसे review और customize करें।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POLICY SECTIONS
      ========================================================= */}
      <section className="border-y border-[#18120F]/10 bg-[#F3E4C7]/45 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14">
            <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
              PRIVACY DETAILS
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl">
              आपकी जानकारी के बारे में
              <br />
              <span className="text-[#A52A16]">स्पष्ट जानकारी।</span>
            </h2>
          </div>

          <div className="divide-y divide-[#18120F]/10 border-y border-[#18120F]/10">
            {privacySections.map((section, index) => (
              <motion.article
                key={section.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.035, 0.25),
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
          DATA PRINCIPLES
      ========================================================= */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Purpose",
                hindi: "उद्देश्य",
                text: "जानकारी का उपयोग मुख्यतः requested enquiry, communication और service coordination के लिए।",
              },
              {
                title: "Transparency",
                hindi: "पारदर्शिता",
                text: "आपको यह समझने का अधिकार है कि कौन-सी जानकारी voluntarily साझा की जा रही है और उसका सामान्य उद्देश्य क्या है।",
              },
              {
                title: "Security",
                hindi: "सुरक्षा",
                text: "Personal information को reasonable safeguards के माध्यम से सुरक्षित रखने का प्रयास किया जाता है।",
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
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#A52A16]">
                  0{index + 1}
                </span>

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
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#18120F] px-6 py-20 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#C69A42]">
                QUESTIONS ABOUT PRIVACY?
              </p>

              <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl">
                किसी जानकारी को लेकर
                <br />
                <span className="text-[#C69A42]">सवाल है?</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#FFF9EF]/45">
                Privacy या information handling से संबंधित किसी सवाल के
                लिए contact page के माध्यम से enquiry भेजी जा सकती है।
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#C69A42] px-7 py-4 text-sm font-semibold text-[#18120F] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
              href="/"
              className="transition-colors hover:text-[#FFF9EF]"
            >
              Home
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-[#FFF9EF]"
            >
              Contact
            </Link>

            <Link
              href="/disclaimer"
              className="transition-colors hover:text-[#FFF9EF]"
            >
              Disclaimer
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