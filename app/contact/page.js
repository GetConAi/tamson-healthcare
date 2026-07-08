import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact, Tamson Healthcare",
  description:
    "Get in touch with Tamson Healthcare to discuss revenue, compliance, operations, or strategy.",
};

const contactInfo = [
  {
    label: "Email",
    value: "tamara@tamsonhealthcareconsulting.com",
    href: "mailto:tamara@tamsonhealthcareconsulting.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "(815) 995-5272",
    href: "tel:+18159955272",
    icon: Phone,
  },
  {
    label: "Office",
    value: "429 N. Weber Road\nSte B - 185\nRomeoville, IL 60446",
    icon: MapPin,
  },
  {
    label: "Hours",
    value: "Mon-Fri · 8:00am-6:00pm ET",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent-light ring-1 ring-accent/30">
              Contact
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let&apos;s start the conversation
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Tell us a little about your organization and your goals. We&apos;ll
              get back to you within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-7 shadow-xl shadow-navy/5 ring-1 ring-navy/5 sm:p-10">
              <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-500">
                Fill out the form below and we&apos;ll get back to you within
                one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-navy p-7 text-white sm:p-10">
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <p className="mt-2 text-sm text-slate-300">
                Prefer to reach out directly? Here&apos;s how to find us.
              </p>
              <ul className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-light">
                      <item.icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                        {item.label}
                      </div>
                      <div className="mt-0.5 whitespace-pre-line text-sm text-slate-200">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="break-all transition-colors hover:text-accent-light"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
