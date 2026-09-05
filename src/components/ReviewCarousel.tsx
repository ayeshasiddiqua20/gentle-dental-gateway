import { useState } from "react";

const REVIEWS = [
  {
    quote:
      "I'm terrified of dentists and Dr. Sarah explained every single step before starting. I didn't feel a thing.",
    name: "Maya R.",
    detail: "Cleaning & exam",
  },
  {
    quote:
      "They gave me an exact price before we touched a tooth. No surprises on the bill—huge relief.",
    name: "Devon P.",
    detail: "Crown restoration",
  },
  {
    quote:
      "Cracked a molar on a Saturday morning and they saw me the same day. Gentle, quick, and totally painless.",
    name: "Priya N.",
    detail: "Emergency visit",
  },
  {
    quote:
      "The digital scan took two minutes and there was no awful putty tray. My kids actually like coming here.",
    name: "Tom H.",
    detail: "Family checkup",
  },
];

export function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const visible = [index, (index + 1) % REVIEWS.length].map((i) => REVIEWS[i]!);

  return (
    <div>
      <div className="space-y-4">
        {visible.map((review) => (
          <figure
            key={review.name}
            className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-teal/5"
          >
            <div className="text-sm text-gold">★★★★★</div>
            <blockquote className="mt-2 leading-relaxed text-teal-dark/80">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-3 text-xs font-medium text-teal/50">
              — {review.name}, {review.detail}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
          aria-label="Previous reviews"
          className="grid size-10 place-items-center rounded-full border border-teal/20 text-teal transition hover:bg-sand"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % REVIEWS.length)}
          aria-label="Next reviews"
          className="grid size-10 place-items-center rounded-full border border-teal/20 text-teal transition hover:bg-sand"
        >
          →
        </button>
        <span className="text-xs text-teal/50">Live from Google · 450+ reviews</span>
      </div>
    </div>
  );
}
