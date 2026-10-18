import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blush-100 to-blush-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
        <div className="text-center md:text-left">
          <p className="font-script text-3xl text-rose-gold md:text-4xl">
            {site.tagline}
          </p>
          <h1 className="mt-2 text-5xl font-semibold leading-tight text-rose-gold-dark sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-2 text-base uppercase tracking-[0.3em] text-rose-gold">
            Premium Hair Services
          </p>
          <p className="mx-auto mt-6 max-w-md text-xl text-ink/80 md:mx-0">
            No need to worry, Hair Is Tee got your hair covered!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href={site.phoneHref}
              className="rounded-full bg-rose-gold px-8 py-3 text-lg text-white transition hover:bg-rose-gold-dark"
            >
              Book Now
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-rose-gold px-8 py-3 text-lg text-rose-gold-dark transition hover:bg-blush-200"
            >
              View Gallery
            </a>
          </div>

          <p className="mt-6 text-base text-ink/60">
            {site.location} · By Appointment Only
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="aspect-[3/4] overflow-hidden rounded-t-full rounded-b-2xl border border-rose-gold-light bg-blush-200 shadow-xl">
            <img
              src="/gallery/silk-press.jpg"
              alt="Wavy silk press curls by Hair Is Tee"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}