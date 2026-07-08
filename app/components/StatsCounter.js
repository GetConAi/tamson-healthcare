"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, TrendingUp } from "lucide-react";

function Counter({ value, duration = 2000 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Award },
  { value: 8, suffix: "+", label: "Years of Experience", icon: Clock },
  { value: 6, suffix: "-Figure", label: "Business", icon: TrendingUp },
];

export default function StatsCounter() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <stat.icon
                  className="h-6 w-6 text-accent-light"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-accent-light sm:text-5xl">
                {stat.prefix}
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
