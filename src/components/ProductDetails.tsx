import { useState } from "react";
import { Check, PackageCheck, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { assets } from "../lib/assets";
import { useTranslation } from "../lib/i18n";

const sizes = ["7", "8", "9", "10", "11", "12", "13"];
const finishes = [
  {
    swatch: "bg-[linear-gradient(135deg,#050505,#222222)]",
    ring: "ring-white/35",
  },
  {
    swatch: "bg-[linear-gradient(135deg,#f8fafc,#9ca3af,#ffffff)]",
    ring: "ring-white/70",
  },
  {
    swatch: "bg-[linear-gradient(135deg,#111827,#4b5563,#030712)]",
    ring: "ring-white/45",
  },
];

export function ProductDetails() {
  const { t } = useTranslation();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("9");

  return (
    <section id="details" className="relative bg-[#010101] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="details-title">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <motion.div
          className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(250,147,250,0.12),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4 sm:min-h-[560px] sm:rounded-[2rem] sm:p-8"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
        >
          <div className="flex h-full min-h-[300px] items-center justify-center sm:min-h-[500px]">
            <img
              src={assets.ring}
              alt={t.details.imageAlt}
              className="relative z-10 w-full max-w-[560px] drop-shadow-[0_30px_100px_rgba(201,103,232,0.38)]"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FA93FA]/30 bg-[#FA93FA]/10 px-4 py-2 text-sm font-semibold text-[#FBC7FB]">
            <Sparkles className="h-4 w-4" />
            {t.details.badge}
          </span>
          <h2 id="details-title" className="mt-5 text-4xl font-semibold tracking-normal text-white sm:mt-6 sm:text-6xl">
            RingConn Gen 2 Air
          </h2>
          <p className="mt-4 text-base leading-8 text-white/62 sm:mt-5 sm:text-lg">
            {t.details.description}
          </p>

          <div className="mt-6 flex flex-wrap items-end gap-3 sm:mt-7 sm:gap-4">
            <p className="text-4xl font-semibold text-white sm:text-5xl">249 EUR</p>
            <p className="pb-2 text-xl text-white/40 line-through">329 EUR</p>
          </div>

          <div className="mt-7 space-y-6 sm:mt-9 sm:space-y-7">
            <div>
              <p className="text-sm font-semibold text-white">{t.details.finish}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {t.details.colors.map((color, index) => {
                  const isSelected = selectedColor === index;
                  const finish = finishes[index];

                  return (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(index)}
                    className={`focus-ring inline-flex min-h-11 items-center gap-3 rounded-full border px-4 py-2 text-sm transition ${
                      isSelected
                        ? "border-[#FA93FA]/60 bg-[#FA93FA]/10 text-white shadow-[0_0_28px_rgba(201,103,232,0.2)]"
                        : "border-white/10 bg-white/[0.04] text-white/75 hover:border-[#FA93FA]/50 hover:text-white"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span
                      className={`h-5 w-5 shrink-0 rounded-full border border-white/25 ${finish.swatch} ${
                        isSelected ? `ring-2 ring-offset-2 ring-offset-[#010101] ${finish.ring}` : ""
                      }`}
                      aria-hidden="true"
                    />
                    {color}
                  </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">{t.details.ringSize}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`focus-ring grid h-11 w-11 place-items-center rounded-full border text-sm transition ${
                      selectedSize === size
                        ? "border-[#FA93FA]/70 bg-white text-black shadow-[0_0_28px_rgba(201,103,232,0.2)]"
                        : "border-white/10 bg-white/[0.04] text-white/75 hover:border-[#FA93FA]/50 hover:text-white"
                    }`}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:mt-9 sm:grid-cols-2">
            {t.details.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm text-white/68">
                <Check className="h-4 w-4 text-[#FA93FA]" />
                {benefit}
              </div>
            ))}
          </div>

          <a
            href="#order"
            className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#050505] transition hover:scale-[1.01] sm:w-auto"
          >
            <ShoppingBag className="h-5 w-5" />
            {t.hero.primaryCta}
          </a>

          <div className="glass-panel mt-8 rounded-2xl p-5 sm:mt-9 sm:rounded-3xl sm:p-6">
            <div className="flex items-center gap-3">
              <PackageCheck className="h-5 w-5 text-[#FA93FA]" />
              <h3 className="font-semibold text-white">{t.details.includedTitle}</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {t.details.included.map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm text-white/62">
                  <ShieldCheck className="h-4 w-4 text-white/35" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
