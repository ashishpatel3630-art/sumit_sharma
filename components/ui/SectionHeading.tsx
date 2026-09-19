import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={`
        w-full max-w-4xl
        ${isCenter ? "mx-auto text-center" : ""}
      `}
    >
      {/* Eyebrow */}
      <div
        className={`
          inline-flex items-center gap-3
          text-[10px]
          font-medium
          uppercase
          tracking-[0.28em]
          ${
            light
              ? "text-[#C69A42]"
              : "text-[#A52A16]"
          }
        `}
      >
        <span
          aria-hidden="true"
          className={`
            h-px w-8
            ${
              light
                ? "bg-[#C69A42]/70"
                : "bg-[#A52A16]/60"
            }
          `}
        />

        <span>{eyebrow}</span>

        {isCenter && (
          <span
            aria-hidden="true"
            className={`
              h-px w-8
              ${
                light
                  ? "bg-[#C69A42]/70"
                  : "bg-[#A52A16]/60"
              }
            `}
          />
        )}
      </div>

      {/* Heading */}
      <h2
        className={`
          mt-5
          max-w-4xl
          font-serif
          text-[clamp(2.6rem,5vw,5rem)]
          font-medium
          leading-[0.98]
          tracking-[-0.025em]
          ${
            light
              ? "text-white"
              : "text-[#18120F]"
          }
          ${
            isCenter
              ? "mx-auto"
              : ""
          }
        `}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`
            mt-6
            max-w-2xl
            text-[15px]
            leading-7
            sm:text-base
            sm:leading-8
            ${
              light
                ? "text-white/50"
                : "text-[#18120F]/55"
            }
            ${
              isCenter
                ? "mx-auto"
                : ""
            }
          `}
        >
          {description}
        </p>
      )}

      {/* Editorial gold rule */}
      <div
        aria-hidden="true"
        className={`
          mt-8
          h-px
          ${
            isCenter
              ? "mx-auto"
              : ""
          }
          w-16
          ${
            light
              ? "bg-[#C69A42]/60"
              : "bg-[#C69A42]/70"
          }
        `}
      />
    </Reveal>
  );
}