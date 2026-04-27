import { FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, ShoppingBag, User } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";

const inputClass =
  "focus-ring mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 transition focus:border-[#FA93FA]/60";

export function PurchaseForm() {
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    console.info(t.form.consoleMessage, Object.fromEntries(formData.entries()));
    form.reset();
  };

  return (
    <section id="order" className="relative bg-[#010101] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="form-title">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
            {t.form.eyebrow}
          </p>
          <h2 id="form-title" className="mt-4 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
            {t.form.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/62 sm:mt-6 sm:text-lg">
            {t.form.description}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-panel rounded-[2rem] p-5 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-white/74">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#FA93FA]" />
                {t.form.name}
              </span>
              <input name="name" required className={inputClass} placeholder="Alex Morgan" />
            </label>
            <label className="text-sm font-medium text-white/74">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#FA93FA]" />
                {t.form.email}
              </span>
              <input name="email" type="email" required className={inputClass} placeholder="alex@email.com" />
            </label>
            <label className="text-sm font-medium text-white/74">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FA93FA]" />
                {t.form.phone}
              </span>
              <input name="phone" type="tel" className={inputClass} placeholder="+33 6 00 00 00 00" />
            </label>
            <label className="text-sm font-medium text-white/74">
              {t.form.color}
              <select name="color" className={inputClass} defaultValue={t.details.colors[0]}>
                {t.details.colors.map((color) => (
                  <option key={color}>{color}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-white/74">
              {t.form.size}
              <select name="size" className={inputClass} defaultValue="9">
                {["7", "8", "9", "10", "11", "12", "13"].map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-white/74">
              {t.form.quantity}
              <input name="quantity" type="number" min="1" max="5" defaultValue="1" className={inputClass} />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-white/74">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#FA93FA]" />
              {t.form.address}
            </span>
            <input name="address" className={inputClass} placeholder={t.form.addressPlaceholder} />
          </label>

          <label className="mt-5 block text-sm font-medium text-white/74">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[#FA93FA]" />
              {t.form.message}
            </span>
            <textarea
              name="message"
              rows={4}
              className={inputClass}
              placeholder={t.form.messagePlaceholder}
            />
          </label>

          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-white/62">
            <input
              name="terms"
              type="checkbox"
              required
              className="focus-ring mt-1 h-4 w-4 rounded border-white/20 bg-white/[0.04] accent-[#C967E8]"
            />
            {t.form.terms}
          </label>

          <button
            type="submit"
            className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.01]"
          >
            <ShoppingBag className="h-5 w-5" />
            {t.form.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
