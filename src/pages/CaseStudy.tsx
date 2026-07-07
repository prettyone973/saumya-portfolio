import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <Link to="/work" className="text-sm font-medium text-clay">
          ← Back to work
        </Link>
        <h1 className="mt-6 font-display text-[28px] text-navy sm:text-[38px]">
          {project ? project.title : "Case study not found"}
        </h1>
        <p className="mt-6 max-w-[760px] text-base text-ink sm:text-lg">
          Full case study coming soon.
        </p>
      </div>
    </div>
  );
}
