"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Info,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "General Information",
    hindiTitle: "सामान्य जानकारी",
    content:
      "इस वेबसाइट पर उपलब्ध ज्योतिष, कुंडली, पूजा अनुष्ठान, दोष निवारण और अन्य आध्यात्मिक विषयों से संबंधित जानकारी केवल सामान्य एवं शैक्षणिक उद्देश्य के लिए प्रदान की जाती है। इसे व्यक्तिगत, कानूनी, चिकित्सकीय, वित्तीय या अन्य पेशेवर सलाह का विकल्प नहीं माना जाना चाहिए।",
  },
  {
    number: "02",
    title: "Astrology Guidance",
    hindiTitle: "ज्योतिषीय मार्गदर्शन",
    content:
      "वैदिक ज्योतिष से संबंधित consultation पारंपरिक ज्योतिषीय सिद्धांतों और उपलब्ध जन्म विवरण के आधार पर चर्चा एवं मार्गदर्शन के उद्देश्य से होती है। किसी भी ज्योतिषीय interpretation को निश्चित या अपरिवर्तनीय भविष्यवाणी के रूप में नहीं समझा जाना चाहिए।",
  },
  {
    number: "03",
    title: "Puja & Anushthan",
    hindiTitle: "पूजा एवं अनुष्ठान",
    content:
      "पूजा, जप, अनुष्ठान और धार्मिक प्रक्रियाएं पारंपरिक आध्यात्मिक मान्यताओं एवं प्रथाओं पर आधारित हैं। इनके परिणाम व्यक्ति की परिस्थितियों, आस्था, कर्म, प्रक्रिया और अन्य अनेक कारकों के अनुसार अलग-अलग हो सकते हैं। किसी विशेष परिणाम की गारंटी नहीं दी जाती।",
  },
  {
    number: "04",
    title: "Dosh Nivaran",
    hindiTitle: "दोष निवारण",
    content:
      "Kaal Sarp Dosh, Mangal Dosh, Pitru Dosh, Navgrah संबंधी शांति तथा अन्य दोष निवारण प्रक्रियाओं की जानकारी पारंपरिक ज्योतिषीय एवं धार्मिक मान्यताओं के संदर्भ में प्रस्तुत की जाती है। इन प्रक्रियाओं से किसी निश्चित व्यक्तिगत, स्वास्थ्य, वैवाहिक, आर्थिक या अन्य परिणाम की गारंटी नहीं दी जाती।",
  },
  {
    number: "05",
    title: "Personal Decisions",
    hindiTitle: "व्यक्तिगत निर्णय",
    content:
      "वेबसाइट पर उपलब्ध किसी भी जानकारी के आधार पर महत्वपूर्ण व्यक्तिगत, स्वास्थ्य, वित्तीय, कानूनी, व्यवसायिक या वैवाहिक निर्णय लेने से पहले संबंधित qualified professional से उचित सलाह लेना आपकी जिम्मेदारी है। अंतिम निर्णय हमेशा उपयोगकर्ता का अपना होना चाहिए।",
  },
  {
    number: "06",
    title: "Information Accuracy",
    hindiTitle: "जानकारी की शुद्धता",
    content:
      "वेबसाइट पर दी गई जानकारी को यथासंभव उपयोगी और अद्यतन रखने का प्रयास किया जाता है। फिर भी किसी भी जानकारी के पूर्ण, त्रुटिरहित या हर परिस्थिति में लागू होने की गारंटी नहीं दी जाती। Services, availability, process और अन्य details समय के साथ बदल सकती हैं।",
  },
  {
    number: "07",
    title: "Third-Party Links",
    hindiTitle: "बाहरी वेबसाइट एवं लिंक",
    content:
      "यदि इस वेबसाइट पर किसी third-party website, platform या external resource का link उपलब्ध कराया जाता है, तो उस external platform की सामग्री, privacy practices, availability या policies के लिए संबंधित third party जिम्मेदार होगी।",
  },
  {
    number: "08",
    title: "Consent & Responsibility",
    hindiTitle: "सहमति एवं जिम्मेदारी",
    content:
      "इस वेबसाइट का उपयोग करके आप समझते हैं कि यहां उपलब्ध ज्योतिषीय एवं आध्यात्मिक सामग्री सामान्य informational guidance के रूप में प्रस्तुत की जाती है। किसी भी service को लेने से पहले उसकी प्रकृति, प्रक्रिया और applicable terms को समझना आपकी जिम्मेदारी है।",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9EF]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#18120F] px-6 pb-24 pt-36 text-[#FFF9EF] sm:px-10 lg:px-16 lg:pb-32">
        {/* Sacred geometry */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12%] top-[-25%] h-[650px] w-[650px] rounded-full border border-[#C69A42]/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-4%] top-[-17%] h-[500px] w-[500px] rounded-full border border-[#FFF9EF]/[0.06]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[7%] top-[-8%] h-[340px] w-[340px] rounded-full border border-[#C69A42]/10"
        />

        <div
          aria-hidden="true"
          className="absolute right-[13%] top-[15%] font-serif text-[11rem] leading-none text-[#C69A42]/[0.07] sm:text-[16rem]"
        >
          ॐ
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-xs text-[#FFF9EF]/45 transition-colors hover:text-[#FFF9EF]"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to home
            </Link>

            <div className="mt-16 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C69A42]" />
              <p className="text-[10px] font-medium tracking-[0.35em] text-[#C69A42]">
                LEGAL / DISCLAIMER
              </p>
            </div>

            <h1 className="mt-8 max-w-5xl font-serif text-[clamp(4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.045em]">
              Disclaimer
              <br />
              <span className="text-[#C69A42]">अस्वीकरण</span>
            </h1>

            <p className="mt-9 max-w-2xl text-sm leading-7 text-[#FFF9EF]/55 sm:text-base">
              इस वेबसाइट पर उपलब्ध ज्योतिषीय, आध्यात्मिक और पूजा संबंधी
              जानकारी की प्रकृति, सीमाओं और उपयोग की जिम्मेदारी को स्पष्ट
              करने के लिए यह disclaimer प्रस्तुत किया गया है।
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#A52A16]/15 bg-[#A52A16]/5 text-[#A52A16]">
                <Info size={19} strokeWidth={1.6} />
              </div>

              <p className="mt-7 text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                PLEASE READ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] sm:text-5xl">
                ज्योतिष और आध्यात्मिक मार्गदर्शन को
                <span className="text-[#A52A16]">
                  {" "}
                  सही संदर्भ में समझना
                </span>
                महत्वपूर्ण है।
              </h2>

              <p className="mt-7 max-w-3xl text-sm leading-7 text-[#18120F]/55 sm:text-base">
                Sumit Sharma की website का उद्देश्य पारंपरिक वैदिक ज्योतिष,
                पूजा अनुष्ठान और संबंधित आध्यात्मिक विषयों के बारे में
                जानकारी एवं consultation उपलब्ध कराना है। यहां प्रस्तुत
                सामग्री को निश्चित भविष्यवाणी या guaranteed outcome के रूप
                में प्रस्तुत नहीं किया जाता।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER CONTENT */}
      <section className="border-y border-[#18120F]/10 bg-[#F3E4C7]/45 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
                IMPORTANT INFORMATION
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[0.95] sm:text-5xl">
                उपयोग से पहले
                <br />
                <span className="text-[#A52A16]">इन बातों को समझें।</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#18120F]/45">
              यह page सामान्य informational purpose के लिए है और website
              की services को समझने में सहायता करता है।
            </p>
          </div>

          <div className="divide-y divide-[#18120F]/10 border-y border-[#18120F]/10">
            {sections.map((section, index) => (
              <motion.article
                key={section.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.04, 0.25),
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

      {/* CORE PRINCIPLES */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "No Guaranteed Outcomes",
                text: "किसी भी ज्योतिषीय या धार्मिक प्रक्रिया के निश्चित परिणाम की गारंटी नहीं दी जाती।",
              },
              {
                icon: Info,
                title: "Informed Understanding",
                text: "किसी service को लेने से पहले उसकी प्रकृति और सीमाओं को समझना आवश्यक है।",
              },
              {
                icon: Check,
                title: "Personal Responsibility",
                text: "महत्वपूर्ण जीवन निर्णयों के लिए उचित professional advice लेना उपयोगकर्ता की जिम्मेदारी है।",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
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
                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#A52A16]"
                  />

                  <h3 className="mt-9 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#18120F]/50">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL NOTICE */}
      <section className="bg-[#18120F] px-6 py-20 text-[#FFF9EF] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-[10px] tracking-[0.3em] text-[#C69A42]">
            FINAL NOTE
          </p>

          <h2 className="mx-auto mt-7 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl">
            मार्गदर्शन लें,
            <br />
            <span className="text-[#C69A42]">निर्णय स्वयं लें।</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#FFF9EF]/45">
            ज्योतिषीय consultation और धार्मिक सेवाएं व्यक्तिगत guidance
            प्रदान कर सकती हैं, लेकिन आपके जीवन से जुड़े महत्वपूर्ण
            निर्णय आपकी अपनी समझ और उचित professional advice पर आधारित
            होने चाहिए।
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book-puja"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C69A42] px-7 py-4 text-sm font-semibold text-[#18120F] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book Consultation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-[#FFF9EF]/15 px-7 py-4 text-sm text-[#FFF9EF]/75 transition-colors hover:border-[#C69A42]/50 hover:text-[#FFF9EF]"
            >
              Contact Us
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER LEGAL LINKS */}
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