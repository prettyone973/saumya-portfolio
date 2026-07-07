import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TILT_RANGE = 5;

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export default function TiltImage({ src, alt, className = "", imgClassName = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

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
  }

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-full rounded-2xl border border-paper-border object-cover transition-transform duration-150 ease-out hover:scale-[1.03] ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}
