import { motion } from "framer-motion";

export default function ShineSweep() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ y: "-70%", opacity: 0 }}
        animate={{ y: "140%", opacity: [0, 0.55, 0] }}
        transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1] }}
        style={{
          position: "absolute",
          left: "-30%",
          top: "-45%",
          width: "160%",
          height: "50%",
          rotate: -12,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,241,213,0.22) 42%, rgba(255,241,213,0.4) 50%, rgba(255,241,213,0.22) 58%, transparent 100%)",
          filter: "blur(6px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
