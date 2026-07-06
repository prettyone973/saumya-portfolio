import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />
      <div className="mx-auto max-w-[1280px] px-10 py-16">
        <Link to="/work" className="text-sm font-medium text-clay">
          ← Back to work
        </Link>
        <h1 className="mt-6 font-display text-4xl text-navy sm:text-5xl">
          {project ? project.title : "Case study not found"}
        </h1>
        <p className="mt-6 max-w-[712px] text-lg text-ink">Full case study coming soon.</p>
      </div>
    </div>
  );
}
