"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "The services provided were absolutely outstanding. Many of our long-standing claims were resolved quickly. Tamara was always prepared and displayed the utmost professionalism.",
    name: "Terry Barrett, NHS, LCPC, CADC",
    title: "Director, Managed Care & Revenue Services",
    org: "Lutheran Social Services of Illinois",
  },
  {
    quote:
      "Tamara has this amazing gift for helping you make sense of what is in your head and translating it into a plan. She takes your business as seriously as she takes her own. It has truly been her sincere care for me and my business that has blown me away. She is a safe place and a professional at what she does.",
    name: "Brittany Barber, MNML",
    title: "Chief Executive Officer",
    org: "Brittany Barber Speaks, LLC",
  },
  {
    quote:
      "I have worked with Tamara for over 5 years and one word embodies who she is: excellence. She is inspirational yet professional, meticulous, and dependable, with a heart and a desire to help people succeed. Tamara does everything in excellence or not at all.",
    name: "Sheniece Jones",
    title: "Executive Assistant",
    org: "Tamson Healthcare Consulting Firm, Inc.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go]);

  const current = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative min-h-[260px] overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-navy/5 ring-1 ring-navy/5 sm:p-12">
        <svg
          className="absolute right-8 top-8 h-12 w-12 text-accent/15"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M9.13 8.5c-.83 0-1.5.67-1.5 1.5v.5h2v3h-3v-3.5c0-2.21 1.79-4 4-4v2c-.55 0-1 .45-1 1 .17 0-.5 0-.5 0zm-6 0c-.83 0-1.5.67-1.5 1.5v.5h2v3h-3v-3.5c0-2.21 1.79-4 4-4v2c-.55 0-1 .45-1 1z" />
          <path d="M21 7v6a2 2 0 0 1-2 2h-4l-3 3v-3h-1V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z" opacity="0" />
        </svg>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.blockquote
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="text-lg leading-relaxed text-navy sm:text-xl">
              “{current.quote}”
            </p>
            <footer className="mt-6">
              <div className="font-semibold text-navy">{current.name}</div>
              <div className="text-sm text-slate-500">{current.title}</div>
              <div className="text-sm text-slate-500">{current.org}</div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow ring-1 ring-navy/10 transition hover:bg-navy hover:text-white"
        >
          ‹
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-2.5 bg-navy/20 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>

        <button
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow ring-1 ring-navy/10 transition hover:bg-navy hover:text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
