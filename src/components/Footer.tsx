import { Sparkles } from "lucide-react";
import { useTranslation } from "../lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-[#010101] px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#" className="text-base font-semibold tracking-[0.18em] text-white">
            RINGCONN
          </a>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/48">
            {t.footer.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/52">
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
    </footer>
  );
}
