import { motion, useReducedMotion } from "motion/react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
  logos: {
    src: string;
    alt: string;
  }[];
};

export function InfiniteSlider({ logos }: InfiniteSliderProps) {
  const [ref, bounds] = useMeasure();
  const shouldReduceMotion = useReducedMotion();
  const items = [...logos, ...logos, ...logos];
  const distance = bounds.width / 3;

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        ref={ref}
        className="flex w-max items-center gap-12 py-2"
        animate={shouldReduceMotion ? undefined : { x: distance ? -distance : -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((logo, index) => (
          <img
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="h-7 w-auto shrink-0 brightness-0 invert opacity-70 grayscale transition duration-300 hover:opacity-100"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
}
