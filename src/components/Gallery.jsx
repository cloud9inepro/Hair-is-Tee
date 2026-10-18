import { useState } from "react";
import { gallery } from "../data/gallery";
import Lightbox from "./Lightbox";

const PAGE_SIZE = 9;
const categories = ["All", ...new Set(gallery.map((g) => g.category))];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);
  const shown = filtered.slice(0, visible);

  const pick = (cat) => {
    setActive(cat);
    setVisible(PAGE_SIZE);
  };

  return (
    <section id="gallery" className="scroll-mt-16 bg-blush-100 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="font-script text-3xl text-rose-gold">Our work</p>
          <h2 className="mt-1 text-4xl font-semibold text-rose-gold-dark md:text-5xl">
            Gallery
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-rose-gold-light" />
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => pick(cat)}
              className={`rounded-full border px-5 py-2 text-lg transition ${
                active === cat
                  ? "border-rose-gold bg-rose-gold text-white"
                  : "border-rose-gold-light text-rose-gold-dark hover:bg-blush-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shown.map((item, i) => (
           <figure
  key={item.src}
  className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-rose-gold-light/50 bg-white"
>
  <button
    onClick={() => setSelected(i)}
    className="block w-full cursor-zoom-in"
    aria-label={`Enlarge: ${item.alt}`}
  >
    <img
      src={item.src}
      alt={item.alt}
      loading="lazy"
      className="h-auto w-full transition duration-500 hover:scale-105"
    />
  </button>
</figure>
          ))}
        </div>

        {visible < filtered.length && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setVisible(visible + PAGE_SIZE)}
              className="rounded-full border border-rose-gold px-8 py-3 text-lg text-rose-gold-dark transition hover:bg-blush-200"
            >
              Load more
            </button>
          </div>
        )}
      </div>
      <Lightbox
  items={shown}
  index={selected}
  onClose={() => setSelected(null)}
  onChange={setSelected}
/>
    </section>
  );
}