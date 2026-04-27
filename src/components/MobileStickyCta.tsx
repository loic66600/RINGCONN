import { ArrowRight } from "lucide-react";
import { useTranslation } from "../lib/i18n";

export function MobileStickyCta() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#050208]/92 px-4 py-3 backdrop-blur-xl sm:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">RingConn Gen 2 Air</p>
          <p className="text-lg font-semibold text-white">249 EUR</p>
        </div>
        <a
          href="#order"
          className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#050505] shadow-[0_12px_35px_rgba(255,255,255,0.16)]"
        >
          {t.nav.preorder}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
