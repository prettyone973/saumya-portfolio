import { AnimatePresence, motion } from "framer-motion";

export type SparklePoint = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
};

export default function SparkleTrail({ sparkles }: { sparkles: SparklePoint[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-3xl">
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: 0, scale: 0.2, rotate: s.rotate }}
            animate={{ opacity: [0, 1, 0], scale: [0.2, 1, 0.5] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              marginLeft: -s.size / 2,
              marginTop: -s.size / 2,
              filter: "drop-shadow(0 0 3px rgba(184,134,11,0.65))",
            }}
          >
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
              <defs>
                <radialGradient id={`sparkle-${s.id}`} cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#fffaf0" />
                  <stop offset="45%" stopColor="#f0c869" />
                  <stop offset="100%" stopColor="#b8860b" />
                </radialGradient>
              </defs>
              <path
                d="M12 0 L14.3 9.7 L24 12 L14.3 14.3 L12 24 L9.7 14.3 L0 12 L9.7 9.7 Z"
                fill={`url(#sparkle-${s.id})`}
                stroke="rgba(120,80,10,0.35)"
                strokeWidth="0.4"
              />
            </svg>
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
