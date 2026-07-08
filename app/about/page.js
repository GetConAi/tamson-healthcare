import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "About — TAMSON Healthcare Consulting & Staffing Firm",
  description:
    "Our mission, story, and the leadership behind TAMSON Healthcare Consulting & Staffing Firm.",
};

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80";

const story = [
  "TAMSON Healthcare Consulting & Staffing Firm was built on a simple belief: that healthcare organizations do their best work when they have the right people and the right systems behind them. What began as a consulting practice has grown into a trusted partner for skilled nursing facilities and community programs, providing credentialed nursing staff, compliance and policy support, and hands-on training.",
  "We specialize in contingent staffing, business implementation, and healthcare compliance, with a particular strength in supporting Early Head Start and Head Start programs. At every step, our focus stays the same: strengthening operations, ensuring compliance, and empowering the organizations and communities we serve.",
];

const ceo = {
  name: "Tamara Campbell",
  title: "Chief Executive Officer (CEO)",
  img: "/tamara.jpg",
  bio: "Tamara Campbell is the founder and CEO of TAMSON Healthcare Consulting & Staffing Firm. With deep expertise in healthcare staffing, compliance, and operations, she has built the firm on a foundation of excellence, dependability, and genuine care for the organizations and communities it serves.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-light ring-1 ring-accent/30">
              About Us
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              About TAMSON
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Founded in 2018, TAMSON Healthcare Consulting Firm specializes in
              contingent staffing, business implementation, and branding for
              healthcare and organizational entities. We are dedicated to
              ensuring compliance, strengthening operations, and supporting
              partners with qualified nursing staff and consulting expertise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl shadow-navy/10 sm:h-96 lg:h-[440px]">
              <Image
                src={ABOUT_IMG}
                alt="Healthcare team meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="left">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our mission
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              To strengthen the organizations that care for our communities. We
              believe financially healthy, well-run providers deliver better
              care — and we exist to make that possible.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Every recommendation we make is grounded in data, tested against
              real-world constraints, and owned through to results. We&apos;re
              not here to hand over a report and leave; we&apos;re here to change
              the trajectory of your organization.
            </p>
          </Reveal>
        </div>
      </section>

      {/* History timeline */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our story
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="leading-relaxed text-slate-700">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Meet the leadership
          </h2>
          <p className="mt-4 text-slate-600">
            Founder-led and hands-on from kickoff to results.
          </p>
        </Reveal>
        <Reveal className="mx-auto mt-14 max-w-sm">
          <div className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-navy/5 ring-1 ring-navy/5 transition-shadow hover:shadow-xl">
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={ceo.img}
                alt={`${ceo.name}, ${ceo.title} of TAMSON Healthcare Consulting & Staffing Firm`}
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-navy">{ceo.name}</h3>
              <p className="text-sm font-medium text-accent-dark">{ceo.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {ceo.bio}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something healthier together
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-semibold text-navy transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
