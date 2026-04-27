import { ArrowRight } from "lucide-react";
import { useTranslation } from "../lib/i18n";

export function MobileStickyCta() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[linear-gradient(180deg,rgba(6,4,10,0.96),rgba(10,7,16,0.98))] px-4 py-3 shadow-[0_-14px_36px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/62">RingConn Gen 2 Air</p>
          <p className="text-lg font-semibold text-white">249 EUR</p>
        </div>
        <a
          href="#details"
          className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)]"
        >
          {t.nav.preorder}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
