import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { assets } from "../lib/assets";
import { useTranslation } from "../lib/i18n";

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = assets.video;
    video.load();
    void video.play().catch(() => undefined);
  }, []);

  return (
    <div className="relative z-10 hidden -mt-20 w-full overflow-hidden sm:block sm:-mt-28 lg:-mt-36">
      <video
        ref={videoRef}
        className="mix-blend-screen max-h-[52vh] w-full object-cover sm:max-h-[58vh] lg:max-h-none"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={t.hero.videoLabel}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#010101] via-transparent to-[#010101]" />
    </div>
  );
}

function RingVisual() {
  const [imageReady, setImageReady] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation();

  return (
    <motion.div
      className="product-reflection relative mx-auto mt-4 flex h-[min(42vh,360px)] w-full max-w-[720px] items-center justify-center sm:mt-10 sm:h-[min(56vh,620px)] lg:mt-8 lg:h-[min(54vh,660px)]"
      initial={{ opacity: 0, y: 36, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {imageReady && (
        <motion.img
          src={assets.ring}
          alt={t.hero.ringAlt}
          className="relative z-10 max-h-full w-[116%] max-w-[720px] object-contain drop-shadow-[0_24px_70px_rgba(201,103,232,0.24)] sm:w-[108%] lg:w-full"
          loading="eager"
          onError={() => setImageReady(false)}
          animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      {!imageReady && (
        <motion.div
          className="relative z-10 h-[48%] w-[72%] rounded-full border-[18px] border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.26),rgba(255,255,255,0.05)_35%,rgba(152,58,214,0.36)_70%,rgba(250,147,250,0.16))] shadow-[inset_0_0_28px_rgba(255,255,255,0.18),0_36px_120px_rgba(201,103,232,0.42)]"
          animate={shouldReduceMotion ? undefined : { y: [0, -14, 0], rotateX: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          aria-label={t.hero.fallbackLabel}
        />
      )}
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/75 backdrop-blur-xl sm:flex lg:bottom-12">
        <Sparkles className="h-4 w-4 text-[#FA93FA]" />
        {t.hero.floating}
      </div>
    </motion.div>
  );
}

function BenefitsMarquee() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const items = [...t.hero.benefits, ...t.hero.benefits, ...t.hero.benefits];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex w-max items-center gap-3 py-2"
        animate={shouldReduceMotion ? undefined : { x: "-33.333%" }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((benefit, index) => (
          <span
            key={`${benefit}-${index}`}
            className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/72 backdrop-blur-xl"
          >
            {benefit}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <header className="relative isolate overflow-hidden bg-[#010101]">
      <div className="luxury-grid pointer-events-none absolute inset-0 opacity-50" />
      <section className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-5 pb-4 pt-5 text-center sm:min-h-screen sm:px-6 sm:pb-0 sm:pt-8 lg:px-8">
        <nav className="flex w-full flex-wrap items-center justify-between gap-3" aria-label="Main navigation">
          <a href="#" className="text-base font-semibold tracking-[0.18em] text-white">
            RINGCONN
          </a>
          <div className="flex items-center gap-3">
            <div
              className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-semibold text-white/70 backdrop-blur-xl"
              aria-label={t.nav.languageLabel}
            >
              {(["fr", "en"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={`focus-ring rounded-full px-3 py-1.5 transition ${
                    language === option ? "bg-white text-black" : "hover:text-white"
                  }`}
                  aria-pressed={language === option}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#checkout"
              className="focus-ring rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/20 hover:text-white"
            >
              {t.nav.preorder}
            </a>
          </div>
        </nav>

        <motion.div
          className="mt-7 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-[rgba(28,27,36,0.15)] px-4 py-2 backdrop-blur-xl sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] shadow-[0_0_28px_rgba(201,103,232,0.58)]">
            <Zap className="h-4 w-4 text-white" />
          </span>
          <span className="text-sm font-medium text-white/80">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.div
          className="mt-5 max-w-5xl sm:mt-9"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="gradient-text text-[clamp(2.35rem,10vw,5rem)] font-semibold leading-[0.94] tracking-normal lg:text-[80px]">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/68 sm:mt-7 sm:text-lg sm:leading-8">
            {t.hero.description}
          </p>
        </motion.div>

        <motion.div
          className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.7 }}
        >
          <a
            href="#checkout"
            className="focus-ring group inline-flex w-full min-w-[230px] items-center justify-between gap-4 rounded-full bg-white px-6 py-4 text-sm font-semibold shadow-[0_18px_50px_rgba(255,255,255,0.15)] transition hover:scale-[1.02] sm:w-auto"
            style={{ color: "#050505" }}
          >
            <span className="whitespace-nowrap text-[#050505]">{t.hero.primaryCta}</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] text-white transition group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="#features"
            className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-[#FA93FA]/50 hover:shadow-[0_0_38px_rgba(201,103,232,0.24)] sm:w-auto"
          >
            {t.hero.secondaryCta}
          </a>
        </motion.div>

        <RingVisual />
      </section>

      <HeroVideo />

      <section className="relative z-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:gap-6 sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:px-8">
          <p className="shrink-0 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            {t.hero.trusted}
          </p>
          <div className="hidden h-10 w-px shrink-0 bg-white/10 lg:block" />
          <BenefitsMarquee />
        </div>
      </section>
    </header>
  );
}
