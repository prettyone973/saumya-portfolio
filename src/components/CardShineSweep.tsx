import { motion } from "framer-motion";

// Remounted via a changing `key` prop on each hover-in, so the initial→animate
// transition replays once per hover and never loops while the cursor stays put.
export default function CardShineSweep() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-3xl">
      <motion.div
        aria-hidden
        initial={{ y: "-130%", opacity: 0 }}
        animate={{ y: "230%", opacity: [0, 0.55, 0] }}
        transition={{ duration: 0.55, ease: "easeInOut", times: [0, 0.5, 1] }}
        style={{
          position: "absolute",
          left: "-30%",
          top: "-55%",
          width: "160%",
          height: "55%",
          rotate: -12,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.55) 42%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.55) 58%, transparent 100%)",
        }}
      />
    </div>
  );
}
