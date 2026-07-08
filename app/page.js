import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./components/Reveal";
import StatsCounter from "./components/StatsCounter";
import ServiceCards from "./components/ServiceCards";
import Testimonials from "./components/Testimonials";

const HERO_IMG =
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1920&q=80";
const WHY_IMG =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80";

const whyPoints = [
  {
    title: "Healthcare-only focus",
    body: "We work exclusively with hospitals, clinics, and health systems, no generic playbooks.",
  },
  {
    title: "Outcomes, not slide decks",
    body: "Every engagement is measured against financial and operational results you can verify.",
  },
  {
    title: "Senior-led teams",
    body: "You work directly with experienced consultants, not a rotating cast of junior analysts.",
  },
  {
    title: "Compliance-first mindset",
    body: "Improvements are designed to keep you audit-ready and aligned with CMS and HIPAA.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src={HERO_IMG}
          alt="Healthcare professionals collaborating in a modern hospital"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/70" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-light ring-1 ring-accent/30">
              Healthcare Consulting · Nationwide
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stronger margins. Smarter operations.{" "}
              <span className="text-accent-light">Healthier organizations.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Tamson Healthcare partners with providers to optimize revenue,
              navigate compliance, and run more efficient operations, so your
              teams can focus on what matters most: patient care.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-7 py-3.5 text-center font-semibold text-navy transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
              >
                Start the Conversation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/25 px-7 py-3.5 text-center font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            How we help
          </h2>
          <p className="mt-4 text-slate-600">
            Four core practice areas, one goal: a more sustainable, higher-performing
            organization. Click any card to dig deeper.
          </p>
        </Reveal>
        <div className="mt-12">
          <ServiceCards />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark hover:text-accent"
          >
            See full service details
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl shadow-navy/10 sm:h-96 lg:h-[460px]">
              <Image
                src={WHY_IMG}
                alt="A clinician reviewing data with a colleague"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="left">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Why organizations choose Tamson
            </h2>
            <p className="mt-4 text-slate-600">
              We combine deep clinical-operational expertise with rigorous
              financial discipline. The result is change that lasts.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {whyPoints.map((p) => (
                <div key={p.title}>
                  <h3 className="flex items-center gap-2 font-semibold text-navy">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-accent"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Trusted by leaders across the industry
            </h2>
            <p className="mt-4 text-slate-600">
              Hear from the executives who&apos;ve partnered with us.
            </p>
          </Reveal>
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to strengthen your organization?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Let&apos;s talk about where you are today and where you want to be.
              The first conversation is always on us.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-navy transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
