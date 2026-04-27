import {
  BatteryCharging,
  BrainCircuit,
  Footprints,
  Gem,
  HeartPulse,
  Moon,
  Thermometer,
  Waves,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";

const features = [
  { icon: Moon },
  { icon: Waves },
  { icon: HeartPulse },
  { icon: Footprints },
  { icon: Thermometer },
  { icon: BrainCircuit },
  { icon: Gem },
  { icon: BatteryCharging },
];

export function FeatureGrid() {
  const { t } = useTranslation();

  return (
    <section id="features" className="relative bg-[#010101] px-5 py-24 sm:px-6 lg:px-8" aria-labelledby="features-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
              {t.features.eyebrow}
            </p>
            <h2 id="features-title" className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              {t.features.title}
            </h2>
          </motion.div>
          <p className="text-base leading-8 text-white/62 sm:text-lg">
            {t.features.description}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const copy = t.features.items[index];
            return (
              <motion.article
                key={copy.title}
                className="group glass-panel relative overflow-hidden rounded-3xl p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.55 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#FA93FA]/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#FA93FA]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-7 text-lg font-semibold text-white">{copy.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{copy.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
