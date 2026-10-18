import { site } from "../data/site";

export default function Contact() {
  const items = [
    { label: "Call", value: site.phone, href: site.phoneHref },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Location", value: site.location },
    { label: "Hours", value: site.hours },
  ];

  return (
    <section id="contact" className="scroll-mt-16 bg-blush-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <p className="font-script text-3xl text-rose-gold">Let's talk hair</p>
          <h2 className="mt-1 text-4xl font-semibold text-rose-gold-dark md:text-5xl">
            Book Your Hair Tee-treatment
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-rose-gold-light" />
          <p className="mx-auto mt-6 max-w-xl text-xl text-ink/80">
            Available by appointment. Call, email, or send a DM to reserve your spot.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.label}
              className="rounded-xl border border-rose-gold-light/50 bg-white/60 px-6 py-5"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-rose-gold">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-1 block break-words text-xl hover:text-rose-gold"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-xl">{item.value}</p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={site.phoneHref}
            className="rounded-full bg-rose-gold px-8 py-3 text-lg text-white transition hover:bg-rose-gold-dark"
          >
            Call Now
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-rose-gold px-8 py-3 text-lg text-rose-gold-dark"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
