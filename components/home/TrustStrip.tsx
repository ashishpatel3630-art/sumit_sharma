"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CircleDot } from "lucide-react";

const items = [
"वैदिक ज्योतिष",
"पूजा अनुष्ठान",
"दोष निवारण",
"कुंडली मार्गदर्शन",
"पारंपरिक विधि",
];

export default function TrustStrip() {
const trackRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const track = trackRef.current;


if (!track) return;

const ctx = gsap.context(() => {
  const animation = gsap.to(track, {
    xPercent: -50,
    duration: 28,
    ease: "none",
    repeat: -1,
  });

  const pause = () => {
    gsap.to(animation, {
      timeScale: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const resume = () => {
    gsap.to(animation, {
      timeScale: 1,
      duration: 0.7,
      ease: "power2.out",
    });
  };

  track.addEventListener("mouseenter", pause);
  track.addEventListener("mouseleave", resume);

  return () => {
    track.removeEventListener("mouseenter", pause);
    track.removeEventListener("mouseleave", resume);
  };
}, track);

return () => ctx.revert();


}, []);

return ( <section className="relative overflow-hidden border-b border-[#18120F]/10 bg-[#F3E4C7]">
{/* Top border */} <div className="absolute inset-x-0 top-0 h-px bg-[#18120F]/[0.06]" />

```
  <div className="relative overflow-hidden py-7 sm:py-8">
    {/* Left fade */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#F3E4C7] to-transparent sm:w-24"
    />

    {/* Right fade */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#F3E4C7] to-transparent sm:w-24"
    />

    {/* Infinite marquee */}
    <div
      ref={trackRef}
      className="flex w-max will-change-transform"
    >
      {/* First set */}
      <div className="flex shrink-0 items-center">
        {items.map((item) => (
          <TrustItem key={`first-${item}`} item={item} />
        ))}
      </div>

      {/* Duplicate set for seamless loop */}
      <div className="flex shrink-0 items-center">
        {items.map((item) => (
          <TrustItem key={`second-${item}`} item={item} />
        ))}
      </div>
    </div>
  </div>
</section>


);
}

function TrustItem({ item }: { item: string }) {
return ( <div className="group flex items-center"> <div className="flex min-h-11 items-center gap-3 px-8 sm:px-11 lg:px-14"> <CircleDot
       size={11}
       strokeWidth={1.4}
       className="shrink-0 text-[#A52A16]/50 transition-transform duration-500 group-hover:scale-125"
     />


    <span className="whitespace-nowrap text-xs font-medium tracking-[0.08em] text-[#18120F]/65 transition-colors duration-300 group-hover:text-[#A52A16] sm:text-sm">
      {item}
    </span>
  </div>

  {/* Separator */}
  <span
    aria-hidden="true"
    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C69A42]/55"
  />
</div>


);
}
