"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { services } from "../lib/services";

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onClick={() => setOpen((v) => !v)}
      className="group cursor-pointer rounded-2xl bg-white p-7 shadow-md shadow-navy/5 ring-1 ring-navy/5 transition-shadow hover:shadow-2xl hover:shadow-navy/15"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
          <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-accent"
          aria-hidden="true"
        >
          <Plus className="h-6 w-6" strokeWidth={1.75} />
        </motion.span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-navy">{service.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent-dark">
        {service.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {service.summary}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-5 space-y-2 border-t border-navy/10 pt-5">
              {service.details.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
        {open ? "Click to collapse" : "Click to learn more"}
      </p>
    </motion.div>
  );
}

export default function ServiceCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {services.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} />
      ))}
    </div>
  );
}
