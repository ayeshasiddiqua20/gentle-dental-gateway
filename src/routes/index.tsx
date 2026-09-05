import { createFileRoute } from "@tanstack/react-router";

import heroDentist from "@/assets/hero-dentist.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamJordan from "@/assets/team-jordan.jpg";
import teamOmar from "@/assets/team-omar.jpg";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { InsuranceChecker } from "@/components/InsuranceChecker";
import { ReviewCarousel } from "@/components/ReviewCarousel";

const TITLE = "Haven Dental — Gentle, Modern Dental Care in Portland";
const DESCRIPTION =
  "Pain-free family and emergency dentistry in Portland. Same-day emergency appointments, transparent pricing, and sedation options for anxious patients.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Emergency Care", href: "#emergency" },
  { label: "About Us", href: "#team" },
  { label: "Patient Reviews", href: "#reviews" },
  { label: "Insurance & Pricing", href: "#insurance" },
];

const FILTERS = [
  { icon: "🚨", title: "Emergency Pain", sub: "Same-day care", href: "#emergency" },
  { icon: "✨", title: "Smile Enhancement", sub: "Whitening & veneers", href: "#services" },
  { icon: "🦷", title: "Missing / Damaged", sub: "Implants & crowns", href: "#services" },
  { icon: "🧹", title: "Cleaning & Checkup", sub: "Preventive care", href: "#services" },
];

const DIFFERENTIATORS = [
  {
    icon: "🌙",
    tone: "bg-teal/10",
    title: "Sedation & Pain-Free Tech",
    body: "Gentle numbing techniques and sedation options tailored for anxious patients.",
  },
  {
    icon: "💳",
    tone: "bg-coral/10",
    title: "Transparent Pricing",
    body: "No surprise bills. Clear upfront cost estimates before any procedure begins.",
  },
  {
    icon: "📷",
    tone: "bg-gold/15",
    title: "No Putty Scans",
    body: "Comfortable 3D digital impressions—no gagging or messy molds, ever.",
  },
  {
    icon: "🕗",
    tone: "bg-teal/10",
    title: "Flexible Hours",
    body: "Open early mornings, late evenings, and Saturdays to fit your schedule.",
  },
];

const TEAM = [
  {
    photo: teamSarah,
    name: "Dr. Sarah Reyes, DDS",
    role: "Lead dentist · 20 years",
    bio: "Dr. Sarah focuses on anxious patients, ensuring every step is explained before starting.",
  },
  {
    photo: teamOmar,
    name: "Dr. Omar Vance, DMD",
    role: "Restorative dentist · 16 years",
    bio: "Implants and crowns done slowly and precisely, with a plan you approve before we begin.",
  },
  {
    photo: teamJordan,
    name: "Jordan Blake, RDH",
    role: "Lead hygienist · 11 years",
    bio: "Known for an unhurried, calm approach that makes cleanings feel genuinely easy.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Book Online in 60 Seconds",
    body: "Pick your time slot instantly—no phone tag required.",
  },
  {
    n: "02",
    title: "Easy Digital Intake",
    body: "Fill out your forms on your phone before you arrive.",
  },
  {
    n: "03",
    title: "Comprehensive & Gentle Exam",
    body: "3D low-radiation scans and a calm discussion with your doctor.",
  },
  {
    n: "04",
    title: "Zero-Pressure Plan",
    body: "Walk away with a clear treatment roadmap and exact pricing.",
  },
];

function Index() {
  return (
    <div className="bg-cream text-teal-dark selection:bg-coral/20">
      {/* Notification bar */}
      <div className="bg-teal px-4 py-2.5 text-center text-[13px] font-medium tracking-wide text-cream/95 sm:text-sm">
        <span className="text-gold">●</span>&nbsp; Same-day emergency appointments available today.{" "}
        <a href="tel:5550192834" className="underline underline-offset-2">
          Call now.
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-teal/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal">
              <span className="font-display text-lg font-semibold text-cream">H</span>
            </div>
            <div className="min-w-0 leading-tight">
              <div className="font-display text-[17px] font-semibold text-teal-dark">
                Haven Dental
              </div>
              <div className="truncate text-[11px] text-teal/60">
                Gentle, Modern Dental Care in Portland
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-teal/80 lg:flex">
            {NAV.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-teal">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:5550192834"
              className="hidden text-sm font-semibold text-teal-dark transition hover:text-coral md:block"
            >
              <span className="font-normal text-teal/50">Call/Text:</span> (555) 019-2834
            </a>
            <a
              href="#book"
              className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-cream shadow-sm shadow-coral/30 transition hover:opacity-90"
            >
              Book Online
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-20 lg:pb-14"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-teal uppercase">
              Accepting New Patients
            </span>
            <h1 className="mt-6 font-display text-[2.7rem] leading-[1.05] font-medium text-teal-dark sm:text-6xl">
              Pain-Free, Gentle Dental Care You Can Trust.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-teal/70">
              From routine cleanings to same-day emergency relief. We make dental visits
              comfortable, transparent, and stress-free for your entire family.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="rounded-full bg-teal px-7 py-3.5 font-semibold text-cream transition hover:bg-teal-dark"
              >
                Book Your Appointment
              </a>
              <a
                href="#insurance"
                className="rounded-full border border-teal/25 px-7 py-3.5 font-semibold text-teal-dark transition hover:bg-sand"
              >
                View Insurance & Pricing
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-teal/60">
              <span className="text-gold">★★★★★</span> 4.9/5 Stars on Google (450+ Reviews)
              &nbsp;·&nbsp; Accepting New Patients
            </p>
          </div>
          <div>
            <img
              src={heroDentist}
              alt="Dentist in terracotta scrubs talking with a relaxed, smiling patient"
              width={1088}
              height={1184}
              className="aspect-[9/10] w-full rounded-[2rem] object-cover shadow-xl shadow-teal/10"
            />
          </div>
        </div>
      </section>

      {/* Quick filter bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-sand p-3 lg:grid-cols-4">
          {FILTERS.map((filter) => (
            <a
              key={filter.title}
              href={filter.href}
              className="flex flex-col gap-1 rounded-xl bg-cream px-4 py-4 ring-1 ring-teal/5 transition hover:bg-card"
            >
              <span className="text-2xl">{filter.icon}</span>
              <span className="text-sm font-semibold text-teal-dark">{filter.title}</span>
              <span className="text-xs text-teal/50">{filter.sub}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Why patients choose us */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium text-teal-dark">
            Why Patients Choose Us
          </h2>
          <p className="mt-3 text-teal/60">
            Comfort is a promise, not a feature. Here's how we keep every visit calm and clear.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-teal/5 transition hover:-translate-y-1"
            >
              <div className={`grid size-12 place-items-center rounded-xl text-2xl ${item.tone}`}>
                {item.icon}
              </div>
              <h3 className="mt-4 font-display text-lg text-teal-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal/60">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="bg-teal-dark text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-4xl font-medium">Check Your Coverage Instantly</h2>
            <p className="mt-3 max-w-md leading-relaxed text-cream/70">
              Select your insurance provider to see what's typically covered—no phone tag, no
              guesswork.
            </p>
            <div className="mt-6">
              <InsuranceChecker />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="text-2xl">🪙</span>
              <div>
                <div className="font-display text-lg">No Insurance?</div>
                <p className="text-sm text-cream/60">
                  Join our $29/mo Wellness Plan for full preventive care, exams, and cleaning.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "CareCredit", sub: "0% APR" },
                { name: "Sunbit", sub: "Flexible" },
                { name: "0% APR", sub: "Plans" },
              ].map((badge) => (
                <div
                  key={badge.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="font-display text-lg">{badge.name}</div>
                  <div className="mt-1 text-[11px] text-cream/50">{badge.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section
        id="reviews"
        className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24"
      >
        <div>
          <h2 className="font-display text-3xl font-medium text-teal-dark">
            Real Patients, Real Calm
          </h2>
          <div className="mt-6">
            <ReviewCarousel />
          </div>
        </div>
        <div>
          <BeforeAfterSlider label="Invisalign — 6 Month Result" />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-sand/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="font-display text-4xl font-medium text-teal-dark">
            Meet the Dentists & Team
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.name} className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-teal/5">
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  loading="lazy"
                  width={768}
                  height={880}
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 font-display text-lg text-teal-dark">{member.name}</h3>
                <p className="text-xs text-teal/50">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-teal/60">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First visit */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-4xl font-medium text-teal-dark">
          What to Expect on Your First Visit
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-teal/5">
              <span className="font-display text-3xl text-teal/25">{step.n}</span>
              <h3 className="mt-2 font-display text-lg text-teal-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal/60">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="emergency" className="bg-sand/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-3xl ring-1 ring-teal/10">
            <iframe
              title="Map showing Haven Dental at 123 Health Ave, Portland"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.6912%2C45.5100%2C-122.6512%2C45.5350&layer=mapnik&marker=45.5225%2C-122.6712"
              loading="lazy"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-teal/5">
              <p className="text-xs tracking-[0.14em] text-teal/50 uppercase">Address</p>
              <p className="mt-1.5 text-teal-dark">123 Health Ave, Suite 200, Portland, OR</p>
              <p className="text-sm text-teal/60">Free on-site parking</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-teal/5">
              <p className="text-xs tracking-[0.14em] text-teal/50 uppercase">Hours</p>
              <ul className="mt-1.5 space-y-0.5 text-sm text-teal-dark/80">
                <li>Mon–Thu · 7 AM – 7 PM</li>
                <li>Fri · 8 AM – 4 PM</li>
                <li>Sat · 9 AM – 2 PM</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-teal p-6 text-cream">
              <p className="text-xs tracking-[0.14em] text-cream/60 uppercase">Emergency line</p>
              <a href="tel:5550192834" className="mt-1.5 block font-display text-2xl">
                (555) 019-2834
              </a>
              <p className="text-sm text-cream/70">Dedicated 24/7 hotline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking anchor */}
      <section id="book" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-3xl bg-teal-dark px-6 py-12 text-center text-cream sm:px-12">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Ready when you are—book in 60 seconds.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            Pick a time that fits your day, or call and we'll find one with you.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="tel:5550192834"
              className="rounded-full bg-coral px-7 py-3.5 font-semibold text-cream transition hover:opacity-90"
            >
              Call (555) 019-2834
            </a>
            <a
              href="mailto:hello@havendental.example"
              className="rounded-full border border-cream/25 px-7 py-3.5 font-semibold text-cream transition hover:bg-white/10"
            >
              Request an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-dark text-cream/70">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-12 text-sm sm:flex-row sm:px-6 lg:px-8">
          <div>
            <div className="font-display text-lg text-cream">Haven Dental</div>
            <p className="mt-2 max-w-xs">
              123 Health Ave, Suite 200, Portland, OR · Free on-site parking · 24/7 emergency line
              (555) 019-2834
            </p>
            <p className="mt-3 max-w-xs text-xs text-cream/50">
              Information on this site is for general education and is not medical advice.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#services" className="transition hover:text-cream">
              Services
            </a>
            <a href="#insurance" className="transition hover:text-cream">
              Pricing
            </a>
            <a href="#top" className="transition hover:text-cream">
              Accessibility
            </a>
            <a href="#top" className="transition hover:text-cream">
              Compliance
            </a>
          </div>
        </div>
        <div className="pb-24 lg:pb-4" />
      </footer>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-teal/10 bg-cream/95 p-3 backdrop-blur lg:hidden">
        <a
          href="tel:5550192834"
          className="rounded-full border border-teal/20 bg-card py-3 text-center text-sm font-semibold text-teal-dark"
        >
          Call Clinic
        </a>
        <a
          href="#book"
          className="rounded-full bg-coral py-3 text-center text-sm font-semibold text-cream"
        >
          Book Online
        </a>
      </div>
    </div>
  );
}
