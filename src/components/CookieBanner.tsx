import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("ringconn-cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ringconn-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("ringconn-cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[linear-gradient(180deg,rgba(6,4,10,0.96),rgba(10,7,16,0.98))] px-4 py-6 shadow-[0_-14px_36px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Nous utilisons des cookies</p>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et vous proposer du contenu personnalisé. 
              En acceptant, vous consentez à notre utilisation des cookies.{" "}
              <a href="#privacy" className="inline text-[#FA93FA] transition hover:text-white/80">
                En savoir plus
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:whitespace-nowrap">
            <button
              onClick={handleReject}
              className="focus-ring rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="focus-ring rounded-full border border-[#FA93FA]/30 bg-[#FA93FA]/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#FA93FA]/50 hover:bg-[#FA93FA]/15"
            >
              Accepter
            </button>
          </div>
          <button
            onClick={handleReject}
            className="focus-ring absolute right-4 top-4 text-white/50 transition hover:text-white sm:hidden"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
