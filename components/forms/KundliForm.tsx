"use client";

import {
  FormEvent,
  useState,
} from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Loader2,
  RotateCcw,
  Send,
  Sparkles,
} from "lucide-react";

type KundliFormData = {
  name: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  consultationType: string;
  message: string;
};

const initialForm: KundliFormData = {
  name: "",
  phone: "",
  email: "",
  dateOfBirth: "",
  timeOfBirth: "",
  placeOfBirth: "",
  consultationType: "",
  message: "",
};

const consultationOptions = [
  "Kundli Analysis",
  "Marriage Kundli",
  "Career & Business",
  "Dosh Analysis",
  "Family & Personal Guidance",
  "General Vedic Astrology",
];

export default function KundliForm() {
  const [form, setForm] =
    useState<KundliFormData>(initialForm);

  const [submitted, setSubmitted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errors, setErrors] = useState<
    Partial<Record<keyof KundliFormData, string>>
  >({});

  function updateField(
    field: keyof KundliFormData,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }
  }

  function validateForm() {
    const nextErrors: Partial<
      Record<keyof KundliFormData, string>
    > = {};

    if (form.name.trim().length < 2) {
      nextErrors.name =
        "Please enter your full name.";
    }

    const phoneDigits =
      form.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      nextErrors.phone =
        "Please enter a valid phone number.";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email.trim(),
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!form.dateOfBirth) {
      nextErrors.dateOfBirth =
        "Date of birth is required.";
    }

    if (!form.timeOfBirth) {
      nextErrors.timeOfBirth =
        "Time of birth is required.";
    }

    if (!form.placeOfBirth.trim()) {
      nextErrors.placeOfBirth =
        "Place of birth is required.";
    }

    if (!form.consultationType) {
      nextErrors.consultationType =
        "Please select a consultation type.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    /*
     * Frontend-only flow for now.
     *
     * Later this can be connected to:
     * - API
     * - Database
     * - WhatsApp
     * - Email
     * - Actual Kundli calculation service
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 700),
    );

    setIsSubmitting(false);
    setSubmitted(true);
  }

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-[#18120F]/10 bg-[#FFF9EF] px-6 py-12 text-center sm:px-10 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full border border-[#C69A42]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full border border-[#A52A16]/10"
        />

        <div className="relative z-10 mx-auto max-w-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#A52A16]/15 bg-[#A52A16]/5">
            <CheckCircle2
              size={42}
              strokeWidth={1.4}
              className="text-[#A52A16]"
            />
          </div>

          <p className="mt-8 text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
            KUNDLI ENQUIRY RECEIVED
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
            धन्यवाद, {form.name.split(" ")[0]}।
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#18120F]/55">
            आपकी जन्म विवरण enquiry successfully submit हुई है।
            Consultation और आगे की प्रक्रिया के लिए final
            confirmation direct communication के बाद की जाएगी।
          </p>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            <SummaryCard
              label="CONSULTATION"
              value={form.consultationType}
            />

            <SummaryCard
              label="DATE OF BIRTH"
              value={form.dateOfBirth}
            />

            <SummaryCard
              label="TIME OF BIRTH"
              value={form.timeOfBirth}
            />

            <SummaryCard
              label="PLACE OF BIRTH"
              value={form.placeOfBirth}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-[#C69A42]/20 bg-[#F3E4C7]/45 p-5 text-left">
            <div className="flex items-start gap-3">
              <Sparkles
                size={16}
                className="mt-0.5 shrink-0 text-[#A52A16]"
              />

              <p className="text-xs leading-6 text-[#18120F]/55">
                Kundli guidance जन्म विवरण की accuracy पर निर्भर
                कर सकती है। विशेष रूप से birth time में accuracy
                महत्वपूर्ण हो सकती है।
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="mx-auto mt-7 flex items-center gap-2 text-xs text-[#18120F]/40 transition-colors hover:text-[#18120F]"
          >
            <RotateCcw size={13} />
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-[#18120F]/10 bg-[#FFF9EF] p-5 sm:p-8 lg:p-10"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="mb-9 border-b border-[#18120F]/10 pb-7">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7A1717] text-[#C69A42]">
            <Sparkles
              size={17}
              strokeWidth={1.5}
            />
          </div>

          <div>
            <p className="text-[9px] font-medium tracking-[0.25em] text-[#A52A16]">
              KUNDLI CONSULTATION
            </p>

            <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
              जन्म विवरण साझा करें
            </h2>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-[#18120F]/45">
          आपकी जन्म तारीख, समय और जन्म स्थान consultation के
          लिए आवश्यक basic details हैं।
        </p>
      </div>

      {/* =====================================================
          PERSONAL DETAILS
      ===================================================== */}
      <FormSection
        number="01"
        title="PERSONAL DETAILS"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Full Name"
          required
          error={errors.name}
        >
          <input
            required
            value={form.name}
            onChange={(event) =>
              updateField(
                "name",
                event.target.value,
              )
            }
            placeholder="Your full name"
            autoComplete="name"
            className="booking-input"
          />
        </Field>

        <Field
          label="Phone Number"
          required
          error={errors.phone}
        >
          <input
            required
            value={form.phone}
            onChange={(event) =>
              updateField(
                "phone",
                event.target.value,
              )
            }
            placeholder="10-digit phone number"
            inputMode="tel"
            autoComplete="tel"
            className="booking-input"
          />
        </Field>

        <Field
          label="Email Address"
          optional
          error={errors.email}
        >
          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              updateField(
                "email",
                event.target.value,
              )
            }
            placeholder="you@example.com"
            autoComplete="email"
            className="booking-input"
          />
        </Field>

        <Field
          label="Consultation Type"
          required
          error={errors.consultationType}
        >
          <select
            required
            value={form.consultationType}
            onChange={(event) =>
              updateField(
                "consultationType",
                event.target.value,
              )
            }
            className={`booking-input ${
              !form.consultationType
                ? "text-[#18120F]/40"
                : ""
            }`}
          >
            <option value="" disabled>
              Select consultation
            </option>

            {consultationOptions.map(
              (option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ),
            )}
          </select>
        </Field>
      </div>

      {/* =====================================================
          BIRTH DETAILS
      ===================================================== */}
      <FormSection
        number="02"
        title="BIRTH DETAILS"
        className="mt-10"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Date of Birth"
          required
          error={errors.dateOfBirth}
        >
          <input
            required
            type="date"
            value={form.dateOfBirth}
            onChange={(event) =>
              updateField(
                "dateOfBirth",
                event.target.value,
              )
            }
            className="booking-input"
          />
        </Field>

        <Field
          label="Exact / Approx. Time of Birth"
          required
          error={errors.timeOfBirth}
        >
          <div className="relative">
            <input
              required
              type="time"
              value={form.timeOfBirth}
              onChange={(event) =>
                updateField(
                  "timeOfBirth",
                  event.target.value,
                )
              }
              className="booking-input pr-12"
            />

            <Clock3
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#18120F]/25"
            />
          </div>
        </Field>

        <div className="md:col-span-2">
          <Field
            label="Place of Birth"
            required
            error={errors.placeOfBirth}
          >
            <input
              required
              value={form.placeOfBirth}
              onChange={(event) =>
                updateField(
                  "placeOfBirth",
                  event.target.value,
                )
              }
              placeholder="City, State, Country"
              autoComplete="off"
              className="booking-input"
            />
          </Field>
        </div>
      </div>

      {/* =====================================================
          MESSAGE
      ===================================================== */}
      <FormSection
        number="03"
        title="YOUR REQUIREMENT"
        className="mt-10"
      />

      <Field
        label="What would you like guidance on?"
        optional
      >
        <textarea
          rows={6}
          maxLength={1000}
          value={form.message}
          onChange={(event) =>
            updateField(
              "message",
              event.target.value,
            )
          }
          placeholder="Briefly describe your question or area where you need guidance..."
          className="booking-input min-h-[150px] resize-y"
        />

        <div className="mt-2 text-right text-[10px] text-[#18120F]/25">
          {form.message.length}/1000
        </div>
      </Field>

      {/* =====================================================
          NOTE
      ===================================================== */}
      <div className="mt-7 rounded-2xl border border-[#18120F]/10 bg-[#F3E4C7]/35 p-5">
        <div className="flex items-start gap-3">
          <Check
            size={15}
            className="mt-0.5 shrink-0 text-[#A52A16]"
          />

          <p className="text-xs leading-6 text-[#18120F]/50">
            कृपया birth details यथासंभव सही भरें। यह form
            consultation enquiry के लिए है; इससे कोई automatic
            Kundli prediction या appointment confirmation generate
            नहीं होता।
          </p>
        </div>
      </div>

      {/* =====================================================
          SUBMIT
      ===================================================== */}
      <div className="mt-8 border-t border-[#18120F]/10 pt-7">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 rounded-full bg-[#7A1717] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A52A16] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <>
              <Loader2
                size={17}
                className="animate-spin"
              />
              Sending enquiry...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Kundli Enquiry

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </>
          )}
        </button>

        <p className="mt-5 text-[11px] leading-5 text-[#18120F]/40">
          आपकी information केवल इस enquiry experience के
          context में उपयोग करने के लिए है। Production deployment
          से पहले actual privacy policy और data handling process
          के अनुसार इसे update करें।
        </p>
      </div>
    </form>
  );
}

/* ============================================================
   FORM SECTION
============================================================ */

function FormSection({
  number,
  title,
  className = "",
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 ${className}`}
    >
      <span className="font-mono text-[9px] tracking-[0.2em] text-[#A52A16]">
        {number}
      </span>

      <span className="text-[10px] font-medium tracking-[0.2em] text-[#18120F]/35">
        {title}
      </span>
    </div>
  );
}

/* ============================================================
   FIELD
============================================================ */

function Field({
  label,
  required = false,
  optional = false,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label className="text-xs font-medium text-[#18120F]/65">
          {label}

          {required && (
            <span className="ml-1 text-[#A52A16]">
              *
            </span>
          )}
        </label>

        {optional && !error && (
          <span className="text-[9px] tracking-[0.12em] text-[#18120F]/25">
            OPTIONAL
          </span>
        )}
      </div>

      {children}

      {error && (
        <p className="mt-2 text-[10px] text-[#A52A16]">
          {error}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   SUCCESS SUMMARY
============================================================ */

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#18120F]/10 bg-white p-5">
      <p className="text-[9px] tracking-[0.2em] text-[#18120F]/35">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-medium text-[#18120F]">
        {value || "Not specified"}
      </p>
    </div>
  );
}