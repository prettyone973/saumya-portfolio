import Navbar from "../components/Navbar";
import ProjectsGrid from "../components/ProjectsGrid";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <h1 className="mb-14 font-['Instrument_Sans'] text-[31px] font-semibold text-navy sm:text-[41px]">
          My Work
        </h1>
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
