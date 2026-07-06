import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-16"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          emphasis={
            hoveredId === null ? "neutral" : hoveredId === project.id ? "hovered" : "dimmed"
          }
          onHoverStart={() => setHoveredId(project.id)}
          onHoverEnd={() => setHoveredId(null)}
        />
      ))}
    </motion.div>
  );
}
