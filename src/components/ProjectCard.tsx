import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import SparkleTrail, { type SparklePoint } from "./SparkleTrail";
import CardShineSweep from "./CardShineSweep";

export type ProjectTag = {
  icon: string;
  label: string;
};

export type Project = {
  id: string;
  href: string;
  badge: string;
  title: string;
  description: string;
  mockup: string;
  tagRows: ProjectTag[][];
  meta: { icon: string; label: string };
  timeline: string;
  team: string;
  role: string;
  tools: string;
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type Props = {
  project: Project;
  emphasis: "hovered" | "dimmed" | "neutral";
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

const TILT_RANGE = 5;

const SPARKLE_MIN_INTERVAL = 75;
const SPARKLE_LIFETIME = 550;

const faceBackfaceStyle: React.CSSProperties = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

function BackFaceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-ink/60">
        {label}
      </dt>
      <dd className="text-sm font-medium text-ink sm:text-base">{value}</dd>
    </div>
  );
}

function FlipIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 3v4h-4M7 21v-4h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectCard({ project, emphasis, onHoverStart, onHoverEnd }: Props) {
  // Measured from the untransformed perspective wrapper, not the tilted card
  // itself — reading rect off a 3D-rotated element returns its post-transform
  // (visually skewed) box, which drifts away from the pre-transform coordinate
  // space that absolutely-positioned children (sparkles) are placed in.
  const outerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [sparkles, setSparkles] = useState<SparklePoint[]>([]);
  const lastSparkleAt = useRef(0);
  const sparkleId = useRef(0);
  // 0 = never hovered yet, so the shine sweep doesn't play on initial mount.
  // Bumped on every hover-in so the sweep remounts (and replays) once per hover.
  const [sweepKey, setSweepKey] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const scale = emphasis === "hovered" ? 1.05 : emphasis === "dimmed" ? 0.97 : 1;

  function handleMouseEnter() {
    setSweepKey((k) => k + 1);
    onHoverStart();
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = outerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateX: -py * TILT_RANGE, rotateY: px * TILT_RANGE });

    const now = performance.now();
    if (now - lastSparkleAt.current > SPARKLE_MIN_INTERVAL) {
      lastSparkleAt.current = now;
      const id = sparkleId.current++;
      setSparkles((prev) => [
        ...prev.slice(-5),
        {
          id,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          size: 16 + Math.random() * 10,
          rotate: Math.random() * 60 - 30,
        },
      ]);
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, SPARKLE_LIFETIME);
    }
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
    setSparkles([]);
    onHoverEnd();
  }

  function flipToBack(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setFlipped(true);
  }

  function flipToFront() {
    setFlipped(false);
  }

  function handleBackKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flipToFront();
    }
  }

  return (
    <motion.div
      ref={outerRef}
      variants={cardVariants}
      className="relative"
      style={{ perspective: 1800 }}
    >
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          scale,
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          boxShadow:
            emphasis === "hovered"
              ? "0 24px 40px -12px rgba(46,42,31,0.18)"
              : "0 4px 18px -4px rgba(46,42,31,0.1)",
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT FACE */}
          <div
            className="paper-texture relative w-full overflow-hidden rounded-3xl border border-paper-border bg-paper"
            style={faceBackfaceStyle}
          >
            {/* Single wrapper so the flip button (a sibling of the Link) isn't
                caught by the `.paper-texture > *` rule, which would force it
                back to `position: relative` and break its corner placement. */}
            <div className="relative">
              <Link
                to={project.href}
                aria-label={`View ${project.title} case study`}
                className="block"
              >
                <div className="flex items-center gap-6 p-8 sm:gap-10 sm:p-10">
                  <img
                    src={project.mockup}
                    alt=""
                    className="h-52 w-28 shrink-0 object-contain sm:h-64 sm:w-32"
                  />
                  <div className="flex min-w-0 flex-1 flex-col items-start justify-start gap-3">
                    <div className="flex flex-col items-start gap-3">
                      <span className="rounded-full bg-navy px-3 py-1.5 text-sm font-medium text-gold whitespace-nowrap">
                        {project.badge}
                      </span>
                      <h3 className="font-display text-xl text-navy sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    <p className="line-clamp-2 text-sm text-ink sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-col items-start gap-3">
                      {project.tagRows.map((row, i) => (
                        <div key={i} className="flex flex-wrap items-center gap-x-8 gap-y-3">
                          {row.map((tag) => (
                            <span key={tag.label} className="flex items-center gap-3">
                              <img src={tag.icon} alt="" className="size-6" />
                              <span className="whitespace-nowrap text-sm font-medium text-ink">
                                {tag.label}
                              </span>
                            </span>
                          ))}
                        </div>
                      ))}
                      <span className="flex items-center gap-3">
                        <img src={project.meta.icon} alt="" className="size-6" />
                        <span className="text-sm font-medium text-ink">
                          {project.meta.label}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                onClick={flipToBack}
                aria-label={`Flip card for ${project.title} details`}
                className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-navy/10 text-navy transition-colors hover:bg-navy/20 sm:right-5 sm:top-5"
              >
                <FlipIcon className="size-4" />
              </button>
            </div>
          </div>

          {/* BACK FACE */}
          <div
            role="button"
            tabIndex={0}
            onClick={flipToFront}
            onKeyDown={handleBackKeyDown}
            aria-label={`Flip back to ${project.title} card`}
            className="gold-metallic absolute inset-0 cursor-pointer overflow-hidden rounded-3xl border-2 border-gold-trim"
            style={{ ...faceBackfaceStyle, transform: "rotateY(180deg)" }}
          >
            <FlipIcon className="absolute right-4 top-4 size-4 text-ink/50 sm:right-5 sm:top-5" />
            <div className="relative flex h-full flex-col justify-center gap-5 p-8 sm:p-10">
              <h3 className="font-display text-2xl text-ink sm:text-3xl">{project.title}</h3>
              <dl className="flex flex-col gap-3">
                <BackFaceRow label="Timeline" value={project.timeline} />
                <BackFaceRow label="Team" value={project.team} />
                <BackFaceRow label="Role" value={project.role} />
                <BackFaceRow label="Tools" value={project.tools} />
              </dl>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {sweepKey > 0 && <CardShineSweep key={sweepKey} />}
      <SparkleTrail sparkles={sparkles} />
    </motion.div>
  );
}
