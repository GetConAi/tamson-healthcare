import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy.html", label: "Privacy Policy" },
  { href: "/terms-of-service.html", label: "Terms of Service" },
  { href: "/privacy-policy.html#cookies", label: "Cookie Policy" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/TAMSON48/" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
              <Image
                src="/th_recolored.png"
                alt="Tamson Healthcare Consulting & Staffing"
                width={38}
                height={35}
                className="h-9 w-auto"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-white">
                TAMSON HEALTHCARE
              </span>
              <span className="block text-xs font-medium tracking-wider text-slate-300">
                Consulting &amp; Staffing
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Strategic healthcare consulting that strengthens financial
            performance, compliance, and operations.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-accent-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Connect
          </h3>
          <ul className="mt-4 space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-accent-light"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-400">
            <a
              href="mailto:tamara@tamsonhealthcareconsulting.com"
              className="break-all transition-colors hover:text-accent-light"
            >
              tamara@tamsonhealthcareconsulting.com
            </a>
            <br />
            <a
              href="tel:+18159955272"
              className="transition-colors hover:text-accent-light"
            >
              (815) 995-5272
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Tamson Healthcare. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="underline underline-offset-2 transition-colors hover:text-accent-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p>Healthcare Consulting · Nationwide</p>
        </div>
      </div>
    </footer>
  );
}
