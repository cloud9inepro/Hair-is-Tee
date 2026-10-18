import { useEffect } from "react";

export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null;
  const total = items.length;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % total);
      if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, total, onClose, onChange]);

  if (!open) return null;
  const item = items[index];

  const stop = (e) => e.stopPropagation();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 text-4xl leading-none text-white"
      >
        ×
      </button>

      {total > 1 && (
        <button
          onClick={(e) => {
            stop(e);
            onChange((index - 1 + total) % total);
          }}
          aria-label="Previous"
          className="absolute left-3 rounded-full bg-white/15 px-4 py-2 text-3xl text-white hover:bg-white/30"
        >
          ‹
        </button>
      )}

      <img
        src={item.src}
        alt={item.alt}
        onClick={stop}
        className="max-h-[88vh] max-w-full rounded-lg object-contain"
      />

      {total > 1 && (
        <button
          onClick={(e) => {
            stop(e);
            onChange((index + 1) % total);
          }}
          aria-label="Next"
          className="absolute right-3 rounded-full bg-white/15 px-4 py-2 text-3xl text-white hover:bg-white/30"
        >
          ›
        </button>
      )}
    </div>
  );
}