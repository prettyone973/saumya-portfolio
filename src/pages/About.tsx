import Navbar from "../components/Navbar";
import aboutPortrait from "../assets/images/about-portrait.jpg";
import sketchCarLegs from "../assets/images/sketch-car-legs.jpg";
import sketchRose from "../assets/images/sketch-rose.jpg";

const hobbyArtworks = [sketchCarLegs, sketchRose];

const skillRows = [
  ["Figma", "Miro", "Framer"],
  ["Prototyping", "Wireframing", "Interaction design"],
  ["User research", "Heuristics evaluation"],
  ["Affinity mapping", "AB testing"],
  ["AI assisted Dev / Vibe coding"],
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Instrument_Sans'] text-[28px] font-semibold text-gold sm:text-[38px]">
      {children}
    </h2>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-navy-deep">
      <Navbar tone="dark" />
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <img
            src={aboutPortrait}
            alt="Saumya Mehta"
            className="aspect-square w-full max-w-[447px] shrink-0 rounded-2xl object-cover"
          />
          <div className="flex max-w-[680px] flex-col gap-6">
            <h1 className="font-display text-[40px] text-cream-text sm:text-[52px]">About Me</h1>
            <p className="max-w-[600px] text-lg text-gold-muted sm:text-xl">
              Product designer with an interdisciplinary, research-driven approach to design.
            </p>
          </div>
        </div>

        <section className="mt-20 sm:mt-28">
          <SectionHeading>My journey</SectionHeading>
          <div className="mt-8 flex flex-col gap-6 sm:mt-10">
            <p className="max-w-[720px] text-base text-cream-text sm:text-xl">
              Hi, I am Saumya Mehta. My journey started from Sanskrit and led me to pursue HCI.
              Learning Sanskrit wasn't just linguistics, but it was an immersion into a world of
              literature, philosophy and rigid grammatical logic. This background helped me
              develop an interdisciplinary mindset — to look at every aspect of a system, be it
              computer systems or societal systems. It challenged me to look deeper and ask
              "why"? It developed a research-driven, problem solving mindset in me. Even though
              my love for Sanskrit and literature has never lessened, I strongly felt that there
              must be a field where I can combine my problem solving skills and creativity, and I
              came across HCI — which seemed a perfect fit for me.
            </p>
            <p className="max-w-[720px] text-base text-cream-text sm:text-xl">
              After my undergraduate studies I dedicated a year to learn fundamentals of UI/UX
              and did a specialized Diploma in UI/UX. This path led me to work at two valuable
              internships, where I got a chance to apply my problem solving skills to the real
              world.
            </p>
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <SectionHeading>My goals</SectionHeading>
          <div className="mt-8 sm:mt-10">
            <p className="max-w-[720px] text-base text-cream-text sm:text-xl">
              I am currently pursuing a master's degree in Human-Computer Interaction at Drexel
              University. I aspire to gain more experience in UX design and product design. My
              goal is to eventually move to managerial and leadership roles, where I can lead my
              team to design human-centred and sustainable solutions.
            </p>
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <SectionHeading>Skills</SectionHeading>
          <div className="mt-8 flex flex-col gap-4 sm:mt-10">
            {skillRows.map((row, i) => (
              <div key={i} className="flex flex-wrap gap-4">
                {row.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gold/30 bg-navy px-6 py-3 text-base text-gold sm:text-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <SectionHeading>My hobbies: Sketching, reading, hiking, travelling</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-8">
            {hobbyArtworks.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="aspect-[4/5] w-full max-w-[280px] flex-1 rounded-2xl border border-paper-border object-cover transition-transform duration-150 ease-out hover:scale-[1.03] sm:max-w-[320px]"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
