import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import TiltImage from "../components/TiltImage";
import Button from "../components/Button";
import aboutPortrait from "../assets/images/about-portrait.jpg";
import sketchCarLegs from "../assets/images/sketch-car-legs.jpg";
import sketchRose from "../assets/images/sketch-rose.jpg";

const hobbyArtworks = [sketchCarLegs, sketchRose];

const EMAIL = "saumyamehta252004@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/saumyamehta2000";

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

const skillRows = [
  ["Figma", "Miro", "Framer"],
  ["Prototyping", "Wireframing", "Interaction design"],
  ["User research", "Heuristics evaluation"],
  ["Affinity mapping", "AB testing"],
  ["AI assisted Dev / Vibe coding"],
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Instrument_Sans'] text-[31px] font-semibold text-gold sm:text-[41px]">
      {children}
    </h2>
  );
}

export default function About() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#contact") {
      document.getElementById("contact")?.scrollIntoView({ block: "start" });
    }
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard access unavailable; no-op
    }
  }

  return (
    <div className="min-h-screen bg-navy-deep">
      <Navbar tone="dark" />
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <img
            src={aboutPortrait}
            alt="Saumya Mehta"
            className="aspect-square w-full max-w-[447px] shrink-0 rounded-2xl object-cover transition-transform duration-200 ease-out hover:scale-[1.02]"
          />
          <div className="flex max-w-[680px] flex-col gap-6">
            <h1 className="font-display text-[44px] text-cream-text sm:text-[57px]">About Me</h1>
            <p className="max-w-[600px] text-lg text-gold-muted sm:text-xl">
              Product designer with an interdisciplinary, research-driven approach to design.
            </p>
          </div>
        </div>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20 sm:mt-28"
        >
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
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 sm:mt-20"
        >
          <SectionHeading>My goals</SectionHeading>
          <div className="mt-8 sm:mt-10">
            <p className="max-w-[720px] text-base text-cream-text sm:text-xl">
              I am currently pursuing a master's degree in Human-Computer Interaction at Drexel
              University. I aspire to gain more experience in UX design and product design. My
              goal is to eventually move to managerial and leadership roles, where I can lead my
              team to design human-centred and sustainable solutions.
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 sm:mt-20"
        >
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
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="scroll-mt-20 mt-16 sm:mt-20"
        >
          <SectionHeading>Contact Me</SectionHeading>
          <p className="mt-4 max-w-[600px] text-base text-gold-muted sm:mt-6 sm:text-xl">
            Have a project in mind or just want to say hi? Reach out through either of these.
          </p>
          <div className="mt-8 flex flex-col items-start gap-6 sm:mt-10">
            <div className="flex items-center gap-3 rounded-full border border-gold/30 bg-navy px-6 py-3">
              <span className="text-lg text-gold sm:text-xl">{EMAIL}</span>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy email address"
                className="flex items-center justify-center rounded-full p-2 text-gold transition-[background-color,transform] duration-150 hover:bg-gold/10 active:scale-90"
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
              {copied && <span className="text-sm font-medium text-gold-muted">Copied!</span>}
            </div>

            <Button
              variant="primary"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-3"
            >
              <LinkedInIcon />
              LinkedIn
            </Button>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 sm:mt-20"
        >
          <SectionHeading>My hobbies: Sketching, reading, hiking, travelling</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-8">
            {hobbyArtworks.map((src, i) => (
              <TiltImage
                key={i}
                src={src}
                alt=""
                className="aspect-[4/5] w-full max-w-[280px] flex-1 sm:max-w-[320px]"
              />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
