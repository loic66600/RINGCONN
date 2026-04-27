import { Sparkles } from "lucide-react";
import { useTranslation } from "../lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-[#010101] px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#" className="text-base font-semibold tracking-[0.18em] text-white">
              RINGCONN
            </a>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/48">
              {t.footer.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navigation</p>
            <div className="mt-3 flex flex-col gap-2.5 text-sm text-white/52">
              <a className="transition hover:text-white" href="#features">
                {t.footer.features}
              </a>
              <a className="transition hover:text-white" href="#details">
                {t.footer.product}
              </a>
              <a className="transition hover:text-white" href="#order">
                {t.footer.reserve}
              </a>
              <a className="inline-flex items-center gap-2 transition hover:text-white" href="#checkout">
                <Sparkles className="h-4 w-4 text-[#FA93FA]" />
                {t.footer.checkout}
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Légal</p>
            <div className="mt-3 flex flex-col gap-2.5 text-sm text-white/52">
              <a className="transition hover:text-white" href="#cgv">
                Conditions générales
              </a>
              <a className="transition hover:text-white" href="#privacy">
                Politique de confidentialité
              </a>
              <a className="transition hover:text-white" href="#rgpd">
                Mentions légales
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/48">
              © 2026 RingConn. Tous droits réservés.
            </p>
            <a
              href="https://lorndigitalstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/52 transition hover:text-[#FA93FA]"
            >
              Propulsé par
              <span className="font-semibold">LORN Digital Studio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
