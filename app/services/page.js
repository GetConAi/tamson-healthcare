import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import ServiceCards from "../components/ServiceCards";

export const metadata = {
  title: "Services, Tamson Healthcare",
  description:
    "Revenue Cycle Management, Regulatory Compliance, Operational Efficiency, and Strategic Planning for healthcare providers.",
};

const PROCESS = [
  {
    step: "01",
    title: "Assess",
    body: "We start with a data-driven diagnostic of your finances, operations, and compliance posture.",
  },
  {
    step: "02",
    title: "Design",
    body: "We build a prioritized roadmap with clear owners, timelines, and measurable targets.",
  },
  {
    step: "03",
    title: "Implement",
    body: "We work alongside your teams to put changes into practice, not just recommend them.",
  },
  {
    step: "04",
    title: "Sustain",
    body: "We hardwire improvements with training, dashboards, and governance that outlast the engagement.",
  },
];

const HEADER_IMG =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80";

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src={HEADER_IMG}
          alt="Medical professional at work"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Services built around your goals
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Four interconnected practice areas that work together to improve
              financial health, compliance, and day-to-day performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Interactive cards */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Our practice areas
          </h2>
          <p className="mt-3 text-slate-600">
            Hover to highlight, click any card to reveal what each engagement
            includes.
          </p>
        </Reveal>
        <ServiceCards />
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-slate-600">
              A proven four-step approach that turns analysis into lasting change.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-md shadow-navy/5 ring-1 ring-navy/5">
                  <div className="text-4xl font-extrabold text-accent/30">
                    {p.step}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Tell us about your biggest challenge and we&apos;ll point you to the
              right place.
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
