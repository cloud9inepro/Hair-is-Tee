import React, { useState } from "react";
import { site } from "../data/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rose-gold-light/30 bg-blush-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-rose-gold text-lg font-semibold text-rose-gold">
            T
          </span>
          <span className="text-xl font-semibold tracking-wide text-rose-gold-dark">
            {site.name}
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-lg hover:text-rose-gold">
                {l.label}
              </a>
            </li>
          ))}
          {site.instagram && (
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:text-rose-gold"
              >
                Instagram
              </a>
            </li>
          )}
          <li>
            <a
              href={site.phoneHref}
              className="rounded-full bg-rose-gold px-5 py-2 text-white transition hover:bg-rose-gold-dark"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
<div
  className={`grid transition-all duration-300 ease-out md:hidden ${
    open ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
  }`}
>
  <div className="overflow-hidden">
    <ul className="flex flex-col gap-4 border-t border-rose-gold-light/30 bg-blush-50 px-5 py-5">
      {links.map((l) => (
        <li key={l.href}>
          <a href={l.href} onClick={() => setOpen(false)} className="text-xl">
            {l.label}
          </a>
        </li>
      ))}
      {site.instagram && (
        <li>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="text-xl">
            Instagram
          </a>
        </li>
      )}
      <li>
        <a
          href={site.phoneHref}
          className="inline-block rounded-full bg-rose-gold px-5 py-2 text-white"
        >
          Book Now
        </a>
      </li>
    </ul>
  </div>
</div>
    </header>
  );
}