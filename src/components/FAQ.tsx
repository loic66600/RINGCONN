import { CircleHelp } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";

export function FAQ() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#010101] px-5 py-24 sm:px-6 lg:px-8" aria-labelledby="faq-title">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
            {t.faq.eyebrow}
          </p>
          <h2 id="faq-title" className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            {t.faq.title}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4">
          {t.faq.items.map((faq, index) => (
            <motion.details
              key={faq.question}
              className="group glass-panel rounded-3xl p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.03, duration: 0.5 }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                <span className="flex items-center gap-3">
                  <CircleHelp className="h-5 w-5 shrink-0 text-[#FA93FA]" />
                  {faq.question}
                </span>
                <span className="text-xl text-white/40 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 pl-8 text-sm leading-7 text-white/60">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
