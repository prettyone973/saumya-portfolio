import { AnimatePresence, motion } from "framer-motion";

export type SparklePoint = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
};

// Elongated 4-point sparkle (concave diamond-cross), viewBox 0 0 20 28.
const SPARKLE_PATH =
  "M10,0 C10.8,10 11.2,13.2 20,14 C11.2,14.8 10.8,18 10,28 C9.2,18 8.8,14.8 0,14 C8.8,13.2 9.2,10 10,0 Z";
const SPARKLE_RIDGE_PATH = "M10,1 C10.4,9 10.6,12 10,14 C9.4,12 9.6,9 10,1 Z";
const SPARKLE_ASPECT = 20 / 28;

export default function SparkleTrail({ sparkles }: { sparkles: SparklePoint[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-3xl">
      <AnimatePresence>
        {sparkles.map((s) => {
          const width = s.size * SPARKLE_ASPECT;
          return (
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
                width,
                height: s.size,
                marginLeft: -width / 2,
                marginTop: -s.size / 2,
                filter: "drop-shadow(0 0 4px rgba(184,134,11,0.6))",
              }}
            >
              <svg viewBox="0 0 20 28" width="100%" height="100%" fill="none">
                <defs>
                  <linearGradient id={`sp-base-${s.id}`} x1="5%" y1="0%" x2="90%" y2="90%">
                    <stop offset="0%" stopColor="#fff8e0" />
                    <stop offset="35%" stopColor="#f3ce7c" />
                    <stop offset="60%" stopColor="#c9922f" />
                    <stop offset="100%" stopColor="#8a5b1c" />
                  </linearGradient>
                  <linearGradient id={`sp-facet-${s.id}`} x1="0%" y1="0%" x2="100%" y2="90%">
                    <stop offset="0%" stopColor="#fffdf2" stopOpacity="0.75" />
                    <stop offset="46%" stopColor="#fff3d0" stopOpacity="0.2" />
                    <stop offset="54%" stopColor="#5b3c12" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3c260a" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <path d={SPARKLE_PATH} fill={`url(#sp-base-${s.id})`} />
                <path
                  d={SPARKLE_PATH}
                  fill={`url(#sp-facet-${s.id})`}
                  style={{ mixBlendMode: "overlay" }}
                />
                <path d={SPARKLE_RIDGE_PATH} fill="#fffdf5" opacity="0.55" />
              </svg>
            </motion.span>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
