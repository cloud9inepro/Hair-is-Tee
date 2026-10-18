const services = [
  "Braids",
  "Cornrows",
  "Wigs & Wig Installation",
  "Weaves",
  "Natural Hair Styling",
  "Silk Press",
  "Crochet",
  "Natural Twist",
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-blush-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="font-script text-3xl text-rose-gold">What we do</p>
          <h2 className="mt-1 text-4xl font-semibold text-rose-gold-dark md:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-rose-gold-light" />
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((name) => (
            <li
              key={name}
              className="flex items-center gap-3 rounded-xl border border-rose-gold-light/50 bg-white/60 px-5 py-5 transition hover:-translate-y-1 hover:border-rose-gold hover:shadow-md"
            >
              <span className="text-rose-gold">✦</span>
              <span className="text-xl">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}