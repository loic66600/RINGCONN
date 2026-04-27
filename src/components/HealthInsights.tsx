import { Activity, Gauge, Moon, Timer } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { assets } from "../lib/assets";
import { useTranslation } from "../lib/i18n";

export function HealthInsights() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const sleepBars = [48, 86, 62, 94, 72, 58, 82];

  return (
    <section className="relative bg-[#010101] px-5 py-24 sm:px-6 lg:px-8" aria-labelledby="insights-title">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
            {t.insights.eyebrow}
          </p>
          <h2 id="insights-title" className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            {t.insights.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
            {t.insights.description}
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white">
            <img
              src={assets.autonomy}
              alt=""
              className="h-full min-h-[520px] w-full object-cover"
              loading="lazy"
            />
          </article>

          <article className="glass-panel overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/56">{t.insights.readiness}</p>
                  <Gauge className="h-5 w-5 text-[#FA93FA]" />
                </div>
                <motion.div
                  className="relative mx-auto mt-8 grid h-44 w-44 place-items-center rounded-full bg-[conic-gradient(#FA93FA_0deg,#C967E8_292deg,rgba(255,255,255,0.08)_292deg)]"
                  animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                >
                  <div className="grid h-36 w-36 place-items-center rounded-full bg-[#060209]">
                    <motion.div
                      className="text-center"
                      animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    >
                      <p className="text-5xl font-semibold">81</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{t.insights.ready}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/56">{t.insights.sleep}</p>
                  <Moon className="h-5 w-5 text-[#FA93FA]" />
                </div>
                <div className="mt-9 flex h-36 items-end gap-3">
                  {sleepBars.map((height, index) => (
                    <motion.div
                      key={index}
                      className="flex-1 rounded-full bg-gradient-to-t from-[#983AD6] via-[#C967E8] to-[#FA93FA]"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              height: [`${height}%`, `${Math.max(34, height - 18)}%`, `${Math.min(100, height + 10)}%`, `${height}%`],
                            }
                      }
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.07,
                        duration: shouldReduceMotion ? 0.7 : 2.8 + index * 0.12,
                        repeat: shouldReduceMotion ? 0 : Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                <p className="mt-5 text-sm text-white/50">{t.insights.sleepTracked}</p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/56">{t.insights.bodySignals}</p>
                  <Activity className="h-5 w-5 text-[#FA93FA]" />
                </div>
                <div className="mt-7 space-y-5">
                  {t.insights.bars.map((bar) => (
                    <div key={bar.label}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/70">{bar.label}</span>
                        <span className="text-white">{bar.value}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.value}%` }}
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  width: [`${Math.max(8, bar.value - 14)}%`, `${bar.value}%`, `${Math.min(100, bar.value + 6)}%`, `${bar.value}%`],
                                }
                          }
                          viewport={{ once: true }}
                          transition={{
                            duration: shouldReduceMotion ? 0.8 : 3.2,
                            repeat: shouldReduceMotion ? 0 : Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/56">{t.insights.recoveryWindow}</p>
                  <Timer className="h-5 w-5 text-[#FA93FA]" />
                </div>
                <motion.p
                  className="mt-7 text-4xl font-semibold"
                  animate={shouldReduceMotion ? undefined : { opacity: [0.72, 1, 0.72], y: [0, -2, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  2:40 PM
                </motion.p>
                <p className="mt-3 text-sm leading-6 text-white/54">
                  {t.insights.recoveryCopy}
                </p>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
