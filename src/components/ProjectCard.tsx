import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import SparkleTrail, { type SparklePoint } from "./SparkleTrail";

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

  const scale = emphasis === "hovered" ? 1.05 : emphasis === "dimmed" ? 0.97 : 1;

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
          size: 6 + Math.random() * 5,
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

  return (
    <motion.div
      ref={outerRef}
      variants={cardVariants}
      className="relative"
      style={{ perspective: 1000 }}
    >
      <Link to={project.href} className="block">
        <motion.div
          onMouseEnter={onHoverStart}
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
          className="paper-texture relative aspect-[766/448] w-full overflow-hidden rounded-3xl border border-paper-border bg-paper"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex h-full items-center gap-6 overflow-hidden p-8 sm:gap-10 sm:p-10">
            <img
              src={project.mockup}
              alt=""
              className="h-full w-28 shrink-0 object-contain sm:w-32"
            />
            <div className="flex h-full min-w-0 flex-1 flex-col items-start justify-start gap-3 overflow-hidden">
              <div className="flex flex-col items-start gap-3">
                <span className="rounded-full bg-navy px-3 py-1.5 text-sm font-medium text-gold whitespace-nowrap">
                  {project.badge}
                </span>
                <h3 className="font-display text-xl text-navy sm:text-2xl">
                  {project.title}
                </h3>
              </div>
              <p className="line-clamp-2 text-sm text-ink sm:text-base">{project.description}</p>
              <div className="flex flex-col items-start gap-2">
                {project.tagRows.map((row, i) => (
                  <div key={i} className="flex flex-wrap items-center gap-8">
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
                  <span className="text-sm font-medium text-ink">{project.meta.label}</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
      <SparkleTrail sparkles={sparkles} />
    </motion.div>
  );
}
