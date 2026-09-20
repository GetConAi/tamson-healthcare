"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "tamson-cookie-notice";
const listeners = new Set();
let dismissedInMemory = false;

function subscribe(callback) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  if (dismissedInMemory) return true;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "dismissed";
  } catch {
    return false;
  }
}

// On the server nothing has been dismissed yet, so the notice is part of the
// page HTML and visitors who already dismissed it just see it disappear.
function getServerSnapshot() {
  return false;
}

function dismiss() {
  dismissedInMemory = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, "dismissed");
  } catch {
    // Storage is blocked; the notice stays hidden for this visit only.
  }
  listeners.forEach((callback) => callback());
}

export default function CookieNotice() {
  const dismissed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-navy px-4 py-4 text-white shadow-[0_-8px_24px_rgba(10,31,68,0.25)] sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-slate-200">
          <strong className="font-semibold text-white">Cookie notice:</strong>{" "}
          this site does not use advertising, analytics, or tracking cookies.
          It only remembers that you dismissed this notice, on your own device.
          Read our{" "}
          <a
            href="/privacy-policy.html#cookies"
            className="font-medium text-accent-light underline underline-offset-2 hover:text-white"
          >
            Cookie Policy
          </a>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-accent-light focus:outline-2 focus:outline-offset-2 focus:outline-white"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
