import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { assets } from "../lib/assets";
import { useTranslation } from "../lib/i18n";
import { InfiniteSlider } from "./ui/InfiniteSlider";

const logos = [
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI logo" },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "NVIDIA logo" },
  { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub logo" },
  { src: "https://html.tailus.io/blocks/customers/vercel.svg", alt: "Vercel logo" },
  { src: "https://html.tailus.io/blocks/customers/figma.svg", alt: "Figma logo" },
];

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
    <div className="relative z-10 -mt-[150px] w-full overflow-hidden">
      <video
        ref={videoRef}
        className="mix-blend-screen w-full"
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
      className="product-reflection relative mx-auto mt-14 flex aspect-square w-full max-w-[560px] items-center justify-center"
      initial={{ opacity: 0, y: 36, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-[11%] rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_42%,rgba(250,147,250,0.24),transparent_42%),radial-gradient(circle_at_50%_60%,rgba(152,58,214,0.26),transparent_54%)] blur-2xl" />
      <motion.div
        className="absolute h-[54%] w-[54%] rounded-full border border-white/20 bg-[conic-gradient(from_140deg,rgba(255,255,255,0.04),rgba(250,147,250,0.28),rgba(255,255,255,0.08),rgba(152,58,214,0.34),rgba(255,255,255,0.04))] shadow-[0_0_90px_rgba(201,103,232,0.32)]"
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <div className="absolute h-[36%] w-[36%] rounded-full bg-[#010101]" aria-hidden="true" />
      {imageReady && (
        <motion.img
          src={assets.ring}
          alt={t.hero.ringAlt}
          className="relative z-10 w-[82%] max-w-[520px] drop-shadow-[0_30px_80px_rgba(201,103,232,0.38)]"
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
      <div className="absolute bottom-14 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/75 backdrop-blur-xl sm:flex">
        <Sparkles className="h-4 w-4 text-[#FA93FA]" />
        {t.hero.floating}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <header className="relative isolate overflow-hidden bg-[#010101]">
      <div className="luxury-grid pointer-events-none absolute inset-0 opacity-50" />
      <section className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-5 pt-8 text-center sm:px-6 lg:px-8">
        <nav className="flex w-full items-center justify-between" aria-label="Main navigation">
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
          className="mt-20 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(28,27,36,0.15)] px-4 py-2 backdrop-blur-xl"
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
          className="mt-9 max-w-5xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="gradient-text text-[48px] font-semibold leading-[0.94] tracking-normal sm:text-6xl md:text-7xl lg:text-[80px]">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            {t.hero.description}
          </p>
        </motion.div>

        <motion.div
          className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
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
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <p className="shrink-0 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            {t.hero.trusted}
          </p>
          <div className="hidden h-10 w-px shrink-0 bg-white/10 lg:block" />
          <InfiniteSlider logos={logos} />
        </div>
      </section>
    </header>
  );
}
