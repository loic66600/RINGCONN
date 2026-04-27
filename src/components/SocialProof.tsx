import { motion } from "motion/react";
import { assets } from "../lib/assets";
import { useTranslation } from "../lib/i18n";

const testimonialImages = [assets.testimonialSleep, assets.personSport, assets.testimonialCraft, assets.personLifestyle];

export function SocialProof() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-[#010101] px-5 py-24 sm:px-6 lg:px-8" aria-labelledby="proof-title">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
            {t.proof.eyebrow}
          </p>
          <h2 id="proof-title" className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            {t.proof.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.proof.testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              className="glass-panel overflow-hidden rounded-3xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
            >
              <img
                src={testimonialImages[index]}
                alt=""
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <blockquote className="text-sm leading-7 text-white/68">"{testimonial.quote}"</blockquote>
                <figcaption className="mt-8">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-white/45">{testimonial.role}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
