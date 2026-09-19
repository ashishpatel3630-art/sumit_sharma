"use client";

import {
  FormEvent,
  useMemo,
  useState,
} from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Loader2,
  MessageCircle,
  RotateCcw,
  Send,
  UserRound,
} from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  city: string;
  people: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  city: "",
  people: "",
  message: "",
};

const serviceOptions = [
  "Kaal Sarp Dosh",
  "Mangal Dosh",
  "Navgrah Shanti",
  "Rudrabhishek",
  "Mahamrityunjaya Jaap",
  "Pitru Dosh",
  "Angarak Dosh",
  "Guru Chandal Dosh",
  "Grahan Dosh",
  "Vastu Shanti",
  "Kundli Analysis",
  "Vedic Astrology Consultation",
  "Marriage Kundli",
  "Online Puja",
  "Other",
];

export default function BookingForm() {
  const [form, setForm] =
    useState<FormData>(initialForm);

  const [submitted, setSubmitted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errors, setErrors] =
    useState<Partial<Record<keyof FormData, string>>>({});

  const messageLength = form.message.length;

  const minDate = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  function updateField(
    field: keyof FormData,
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
      Record<keyof FormData, string>
    > = {};

    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedEmail = form.email.trim();

    if (trimmedName.length < 2) {
      nextErrors.name =
        "Please enter your full name.";
    }

    const phoneDigits =
      trimmedPhone.replace(/\D/g, "");

    if (phoneDigits.length < 10) {
      nextErrors.phone =
        "Please enter a valid phone number.";
    }

    if (
      trimmedEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        trimmedEmail,
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!form.service) {
      nextErrors.service =
        "Please select a service.";
    }

    if (
      form.people &&
      (Number(form.people) < 1 ||
        Number(form.people) > 1000)
    ) {
      nextErrors.people =
        "Please enter a valid number.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function submit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    /*
     * Frontend-only submission for now.
     *
     * Replace this block later with:
     * - API request
     * - WhatsApp flow
     * - Email service
     * - Database submission
     *
     * when backend integration is added.
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
        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-80px] top-[-100px] h-[260px] w-[260px] rounded-full border border-[#C69A42]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full border border-[#A52A16]/10"
        />

        <div className="relative z-10 mx-auto max-w-xl">
          {/* Success icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#A52A16]/15 bg-[#A52A16]/5">
            <CheckCircle2
              size={42}
              strokeWidth={1.4}
              className="text-[#A52A16]"
            />
          </div>

          <p className="mt-8 text-[10px] font-medium tracking-[0.3em] text-[#A52A16]">
            ENQUIRY RECEIVED
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
            धन्यवाद, {form.name.split(" ")[0]}।
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#18120F]/55">
            आपकी enquiry इस page पर successfully submit हुई है।
            Final availability, timing और service details direct
            communication के बाद confirm की जाएंगी।
          </p>

          {/* Submitted details */}
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-[#18120F]/10 bg-white p-5">
              <p className="text-[9px] tracking-[0.2em] text-[#18120F]/35">
                SERVICE
              </p>

              <p className="mt-2 text-sm font-medium">
                {form.service}
              </p>
            </div>

            <div className="rounded-2xl border border-[#18120F]/10 bg-white p-5">
              <p className="text-[9px] tracking-[0.2em] text-[#18120F]/35">
                PREFERRED DATE
              </p>

              <p className="mt-2 text-sm font-medium">
                {form.date || "Not specified"}
              </p>
            </div>
          </div>

          {/* WhatsApp-ready CTA */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Namaste, I have submitted an enquiry for ${form.service}. My name is ${form.name}.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="group mx-auto mt-8 inline-flex items-center gap-3 rounded-full bg-[#7A1717] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A52A16]"
          >
            <MessageCircle size={17} />

            Continue on WhatsApp

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="mx-auto mt-5 flex items-center gap-2 text-xs text-[#18120F]/40 transition-colors hover:text-[#18120F]"
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
      onSubmit={submit}
      noValidate
      className="rounded-[2rem] border border-[#18120F]/10 bg-[#FFF9EF] p-5 sm:p-8 lg:p-10"
    >
      {/* =======================================================
          FORM HEADER
      ======================================================= */}
      <div className="mb-9 border-b border-[#18120F]/10 pb-7">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7A1717] text-[#C69A42]">
            <UserRound
              size={17}
              strokeWidth={1.5}
            />
          </div>

          <div>
            <p className="text-[9px] font-medium tracking-[0.25em] text-[#A52A16]">
              CONSULTATION ENQUIRY
            </p>

            <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
              अपनी जानकारी साझा करें
            </h2>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-[#18120F]/45">
          नीचे दी गई जानकारी के आधार पर आपकी enquiry को समझना
          आसान होगा। सभी fields का उपयोग केवल वहीं करें जहां
          information relevant हो।
        </p>
      </div>

      {/* =======================================================
          PERSONAL DETAILS
      ======================================================= */}
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#A52A16]">
          01
        </span>

        <span className="text-[10px] font-medium tracking-[0.2em] text-[#18120F]/35">
          PERSONAL DETAILS
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <Field
          label="Full Name"
          required
          error={errors.name}
        >
          <input
            required
            value={form.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
            placeholder="Your full name"
            autoComplete="name"
            className="booking-input"
          />
        </Field>

        {/* Phone */}
        <Field
          label="Phone Number"
          required
          error={errors.phone}
        >
          <input
            required
            value={form.phone}
            onChange={(event) =>
              updateField("phone", event.target.value)
            }
            placeholder="10-digit phone number"
            inputMode="tel"
            autoComplete="tel"
            className="booking-input"
          />
        </Field>

        {/* Email */}
        <Field
          label="Email Address"
          optional
          error={errors.email}
        >
          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            placeholder="you@example.com"
            autoComplete="email"
            className="booking-input"
          />
        </Field>

        {/* City */}
        <Field
          label="City"
          optional
        >
          <input
            value={form.city}
            onChange={(event) =>
              updateField("city", event.target.value)
            }
            placeholder="Your city"
            autoComplete="address-level2"
            className="booking-input"
          />
        </Field>
      </div>

      {/* =======================================================
          SERVICE
      ======================================================= */}
      <div className="mb-3 mt-10 flex items-center gap-3">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#A52A16]">
          02
        </span>

        <span className="text-[10px] font-medium tracking-[0.2em] text-[#18120F]/35">
          SERVICE DETAILS
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Select Service"
          required
          error={errors.service}
        >
          <select
            required
            value={form.service}
            onChange={(event) =>
              updateField(
                "service",
                event.target.value,
              )
            }
            className={`booking-input ${
              !form.service ? "text-[#18120F]/40" : ""
            }`}
          >
            <option value="" disabled>
              Choose a service
            </option>

            {serviceOptions.map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Number of People"
          optional
          error={errors.people}
        >
          <input
            type="number"
            min="1"
            max="1000"
            value={form.people}
            onChange={(event) =>
              updateField(
                "people",
                event.target.value,
              )
            }
            placeholder="If applicable"
            inputMode="numeric"
            className="booking-input"
          />
        </Field>
      </div>

      {/* =======================================================
          DATE / TIME
      ======================================================= */}
      <div className="mb-3 mt-10 flex items-center gap-3">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#A52A16]">
          03
        </span>

        <span className="text-[10px] font-medium tracking-[0.2em] text-[#18120F]/35">
          PREFERRED TIMING
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Preferred Date"
          optional
        >
          <div className="relative">
            <input
              type="date"
              min={minDate}
              value={form.date}
              onChange={(event) =>
                updateField(
                  "date",
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

        <Field
          label="Preferred Time"
          optional
        >
          <div className="relative">
            <input
              type="time"
              value={form.time}
              onChange={(event) =>
                updateField(
                  "time",
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
      </div>

      {/* =======================================================
          MESSAGE
      ======================================================= */}
      <div className="mb-3 mt-10 flex items-center gap-3">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#A52A16]">
          04
        </span>

        <span className="text-[10px] font-medium tracking-[0.2em] text-[#18120F]/35">
          ADDITIONAL DETAILS
        </span>
      </div>

      <Field
        label="Message"
        optional
      >
        <div className="relative">
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
            placeholder="Tell us briefly about your requirement or question..."
            className="booking-input min-h-[150px] resize-y pb-10"
          />

          <span className="absolute bottom-3 right-4 text-[10px] text-[#18120F]/25">
            {messageLength}/1000
          </span>
        </div>
      </Field>

      {/* =======================================================
          SUBMIT
      ======================================================= */}
      <div className="mt-9 border-t border-[#18120F]/10 pt-7">
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
              Send Enquiry
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </>
          )}
        </button>

        <div className="mt-5 flex items-start gap-3">
          <Check
            size={14}
            className="mt-0.5 shrink-0 text-[#A52A16]"
          />

          <p className="text-[11px] leading-5 text-[#18120F]/40">
            Form submit करने से appointment automatically confirm
            नहीं होता। Final availability, timing और service details
            direct communication के बाद confirm की जाएंगी।
          </p>
        </div>
      </div>
    </form>
  );
}

/* ============================================================
   FIELD WRAPPER
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