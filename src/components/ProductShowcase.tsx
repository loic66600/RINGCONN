import { Activity, Footprints, HeartPulse, Moon, Thermometer, Waves } from "lucide-react";
import { motion } from "motion/react";
import { assets } from "../lib/assets";
import { useTranslation } from "../lib/i18n";

const metrics = [
  { icon: Moon, position: "lg:left-0 lg:top-[330px]" },
  { icon: HeartPulse, position: "lg:right-0 lg:top-[330px]" },
  { icon: Waves, position: "lg:left-0 lg:top-[190px]" },
  { icon: Footprints, position: "lg:right-0 lg:top-[190px]" },
  { icon: Activity, position: "lg:left-0 lg:top-[470px]" },
  { icon: Thermometer, position: "lg:right-0 lg:top-[470px]" },
];

export function ProductShowcase() {
  const { t } = useTranslation();

  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-[#010101] px-5 py-24 sm:px-6 lg:px-8"
      aria-labelledby="showcase-title"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
            {t.showcase.eyebrow}
          </p>
          <h2 id="showcase-title" className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            {t.showcase.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
            {t.showcase.description}
          </p>
        </motion.div>

        <div className="relative mx-auto mt-10 max-w-5xl pb-8 lg:mt-12 lg:min-h-[660px] lg:pb-0">
          <div className="absolute inset-x-0 top-16 h-[560px] rounded-[2rem] bg-[radial-gradient(circle_at_50%_45%,rgba(201,103,232,0.22),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)] blur-3xl lg:inset-0 lg:h-auto" />
          <motion.div
            className="relative z-10 mx-auto mt-8 flex aspect-square w-[86%] max-w-[480px] items-center justify-center rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-xl sm:w-[70%] lg:absolute lg:left-1/2 lg:top-[47%] lg:mt-0 lg:w-[72%] lg:max-w-[520px] lg:-translate-x-1/2 lg:-translate-y-1/2"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={assets.ring2}
              alt={t.showcase.imageAlt}
              className="relative z-10 w-[86%] drop-shadow-[0_28px_90px_rgba(201,103,232,0.34)]"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute z-0 h-[38%] w-[58%] rounded-full border-[16px] border-white/5 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(250,147,250,0.1),rgba(152,58,214,0.16))] opacity-45" />
          </motion.div>

          <div className="relative z-20 mt-6 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:block">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const copy = t.showcase.metrics[index];

              return (
                <motion.article
                  key={copy.label}
                  className={`glass-panel rounded-3xl p-5 lg:absolute lg:w-56 ${metric.position}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  whileHover={{ y: -6, borderColor: "rgba(250,147,250,0.35)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] shadow-[0_0_30px_rgba(201,103,232,0.35)]">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <p className="text-sm text-white/54">{copy.label}</p>
                      <p className="text-xl font-semibold text-white">{copy.value}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
