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
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-10 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-[728px] flex-col gap-6">
            <h1 className="font-display text-5xl leading-[1.05] text-cream-text sm:text-6xl lg:text-[88px]">
              Designs that <em className="font-display italic text-gold">actually work.</em>
            </h1>
            <p className="max-w-[712px] text-2xl text-gold-muted sm:text-[28px]">
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

      <section className="paper-texture bg-beige px-10 py-16">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-14 font-['Instrument_Sans'] text-4xl font-semibold text-navy sm:text-5xl">
            My projects
          </h2>
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </div>
  );
}
