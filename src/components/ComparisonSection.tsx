import { Check, Smartphone, Watch, X } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";

const values = [
  [true, false],
  [true, false],
  [true, false],
  [true, false],
  [true, false],
];

export function ComparisonSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#010101] px-5 py-24 sm:px-6 lg:px-8" aria-labelledby="comparison-title">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
            {t.comparison.eyebrow}
          </p>
          <h2 id="comparison-title" className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            {t.comparison.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
            {t.comparison.description}
          </p>
        </motion.div>

        <motion.div
          className="glass-panel mt-14 overflow-hidden rounded-[2rem]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-[1.2fr_0.9fr_0.9fr] border-b border-white/10 bg-white/[0.03] text-sm font-semibold text-white sm:text-base">
            <div className="p-4 sm:p-6">{t.comparison.benefit}</div>
            <div className="flex items-center gap-2 border-l border-white/10 p-4 sm:p-6">
              <Smartphone className="h-4 w-4 text-[#FA93FA]" />
              {t.comparison.ring}
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 p-4 text-white/60 sm:p-6">
              <Watch className="h-4 w-4" />
              {t.comparison.watch}
            </div>
          </div>

          {t.comparison.rows.map((label, index) => {
            const [ring, watch] = values[index];

            return (
              <div key={label} className="grid grid-cols-[1.2fr_0.9fr_0.9fr] border-b border-white/10 last:border-b-0">
              <div className="p-4 text-sm text-white/70 sm:p-6 sm:text-base">{label}</div>
              <div className="grid place-items-center border-l border-white/10 p-4 sm:p-6">
                {ring ? (
                  <Check className="h-5 w-5 text-[#FA93FA]" />
                ) : (
                  <X className="h-5 w-5 text-white/35" />
                )}
              </div>
              <div className="grid place-items-center border-l border-white/10 p-4 sm:p-6">
                {watch ? (
                  <Check className="h-5 w-5 text-[#FA93FA]" />
                ) : (
                  <X className="h-5 w-5 text-white/35" />
                )}
              </div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
