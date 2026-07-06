import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function ProjectCard({ project, emphasis, onHoverStart, onHoverEnd }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const scale = emphasis === "hovered" ? 1.05 : emphasis === "dimmed" ? 0.97 : 1;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateX: -py * TILT_RANGE, rotateY: px * TILT_RANGE });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
    onHoverEnd();
  }

  return (
    <motion.div variants={cardVariants} style={{ perspective: 1000 }}>
      <Link to={project.href} className="block">
        <motion.div
          ref={ref}
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
          className="paper-texture relative w-full overflow-hidden rounded-3xl border border-paper-border bg-paper"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-8 p-9 sm:gap-12 sm:p-12">
            <img
              src={project.mockup}
              alt=""
              className="h-[280px] w-auto shrink-0 object-contain sm:h-[340px]"
            />
            <div className="flex min-w-0 flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-5">
                <span className="rounded-full bg-navy px-3 py-1.5 text-sm font-medium text-gold whitespace-nowrap">
                  {project.badge}
                </span>
                <h3 className="font-display text-2xl text-navy sm:text-[28px]">
                  {project.title}
                </h3>
              </div>
              <p className="text-base text-ink sm:text-lg">{project.description}</p>
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
    </motion.div>
  );
}
