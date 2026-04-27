import { useState } from "react";
import { CreditCard, LockKeyhole } from "lucide-react";
import { useTranslation } from "../lib/i18n";

export function CompactCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const handleCheckout = async () => {
    setIsLoading(true);
    setError("");

    try {
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
        throw new Error("Erreur lors de la création de la session");
      }

      const data = (await response.json()) as { url?: string };

      if (!data.url) {
        throw new Error("URL de paiement non trouvée");
      }

      window.location.href = data.url;
    } catch (checkoutError) {
      const message = checkoutError instanceof Error ? checkoutError.message : "Erreur de paiement";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={isLoading}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[#FA93FA]/30 bg-[#FA93FA]/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#FA93FA]/60 hover:bg-[#FA93FA]/15 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <CreditCard className="h-4 w-4" />
        {isLoading ? "Préparation..." : "Payer avec Stripe"}
      </button>
      <div className="flex items-center gap-1 text-xs text-white/48">
        <LockKeyhole className="h-3 w-3" />
        Paiement sécurisé chiffré
      </div>
      {error && <p className="text-xs text-[#FA93FA]">{error}</p>}
    </div>
  );
}
