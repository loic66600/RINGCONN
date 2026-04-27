import { useState } from "react";
import { CreditCard, LockKeyhole, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "../lib/i18n";

export function CheckoutSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const handleCheckout = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Create this backend endpoint separately. It should create a Stripe Checkout
      // Session server-side and return JSON shaped like: { url: "https://checkout.stripe.com/..." }.
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: "RingConn Gen 2 Air",
          priceId: "price_replace_with_stripe_price_id",
          quantity: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(t.checkout.createError);
      }

      const data = (await response.json()) as { url?: string };

      if (!data.url) {
        throw new Error(t.checkout.missingUrl);
      }

      window.location.href = data.url;
    } catch (checkoutError) {
      const message = checkoutError instanceof Error ? checkoutError.message : t.checkout.fallbackError;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="checkout" className="relative bg-[#010101] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="checkout-title">
      <motion.div
        className="glass-panel mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] p-5 text-center sm:rounded-[2rem] sm:p-10 lg:p-14"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] shadow-[0_0_50px_rgba(201,103,232,0.45)]">
          <LockKeyhole className="h-7 w-7 text-white" />
        </div>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-[#FA93FA]">
          {t.checkout.eyebrow}
        </p>
        <h2 id="checkout-title" className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-normal text-white sm:text-5xl">
          {t.checkout.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/62 sm:mt-6 sm:text-lg">
          {t.checkout.description}
        </p>

        <button
          type="button"
          onClick={handleCheckout}
          disabled={isLoading}
          className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:mt-9 sm:w-auto"
        >
          <CreditCard className="h-5 w-5" />
          {isLoading ? t.checkout.loading : t.checkout.button}
        </button>

        {error && (
          <p className="mt-4 text-sm text-[#FA93FA]" role="alert">
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-white/52 sm:mt-8 sm:flex-row">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#FA93FA]" />
            {t.checkout.encrypted}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
          <span>{t.checkout.stripeReady}</span>
        </div>
      </motion.div>
    </section>
  );
}
