import { ArrowRight, Radio } from "lucide-react";
import { motion } from "motion/react";
import { assets } from "../lib/assets";
import { useTranslation } from "../lib/i18n";

export function EmotionSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#010101] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="emotion-title">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] backdrop-blur-xl sm:min-h-[520px] sm:rounded-[2rem]"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={assets.course}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,1,1,0.12),rgba(1,1,1,0.42)),radial-gradient(circle_at_72%_30%,rgba(250,147,250,0.2),transparent_38%)]" />
          <div className="relative flex h-full min-h-[320px] items-end justify-start p-5 sm:min-h-[520px] sm:p-8">
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/45 px-5 py-3 text-sm font-semibold text-white/86 backdrop-blur-xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.86, 1, 0.86] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6]">
                <Radio className="h-5 w-5 text-white" />
              </span>
              {t.emotion.eyebrow}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
            {t.emotion.eyebrow}
          </p>
          <h2 id="emotion-title" className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            {t.emotion.title}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-white/64 sm:mt-7 sm:space-y-5 sm:text-lg">
            <p>{t.emotion.paragraph1}</p>
            <p>{t.emotion.paragraph2}</p>
          </div>
          <a
            href="#details"
            className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:border-[#FA93FA]/50 hover:bg-white/[0.08] sm:mt-9 sm:w-auto"
          >
            {t.emotion.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
