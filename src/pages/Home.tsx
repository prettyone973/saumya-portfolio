import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ProjectsGrid from "../components/ProjectsGrid";
import { projects } from "../data/projects";
import heroPortrait from "../assets/images/hero-portrait.png";

export default function Home() {
  return (
    <div>
      <section className="bg-navy-deep">
        <Navbar tone="dark" />
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 xl:px-20">
          <div className="flex max-w-[680px] flex-col gap-6">
            <h1 className="font-display text-[40px] leading-[1.08] text-cream-text sm:text-[52px] lg:text-[74px]">
              Designs that <em className="font-display italic text-gold">actually work.</em>
            </h1>
            <p className="max-w-[600px] text-lg text-gold-muted sm:text-xl">
              Designing solutions that actually work, with an interdisciplinary mindset and
              human-centred approach.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-7">
              <Button variant="primary" to="/work">
                View my work
              </Button>
              <Button variant="secondary" to="/contact">
                Contact me
              </Button>
            </div>
          </div>
          <img
            src={heroPortrait}
            alt="Saumya Mehta"
            className="aspect-square w-full max-w-[447px] shrink-0 rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="paper-texture bg-beige px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-14 font-['Instrument_Sans'] text-[28px] font-semibold text-navy sm:text-[38px]">
            My projects
          </h2>
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </div>
  );
}
