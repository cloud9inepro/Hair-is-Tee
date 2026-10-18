import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-center text-blush-100">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-rose-gold-light text-2xl text-rose-gold-light">
          T
        </div>
        <p className="mt-3 text-2xl tracking-wide text-rose-gold-light">
          {site.name}
        </p>
        <p className="mt-1 text-sm uppercase tracking-[0.3em] text-blush-300">
          Premium Hair Services
        </p>

        <p className="mt-6 text-lg">
          <a href={site.phoneHref} className="hover:text-rose-gold-light">
            {site.phone}
          </a>
          {" · "}
          <a href={`mailto:${site.email}`} className="hover:text-rose-gold-light">
            {site.email}
          </a>
        </p>
        <p className="mt-1 text-base text-blush-300">
          {site.location} · {site.hours}
        </p>

        {site.instagram && (
          <p className="mt-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-lg hover:text-rose-gold-light"
            >
              Follow us on Instagram
            </a>
          </p>
        )}

        <p className="mt-8 text-sm text-blush-300/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}