import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PhaseCard from "../../components/case-studies/PhaseCard";
import PhaseOverlay from "../../components/case-studies/PhaseOverlay";
import JumpNav from "../../components/case-studies/JumpNav";
import HeuristicEvaluationPanel from "../../components/case-studies/panels/HeuristicEvaluationPanel";
import DesignSystemPanel from "../../components/case-studies/panels/DesignSystemPanel";
import BeforeAfterPanel from "../../components/case-studies/panels/BeforeAfterPanel";
import IMobilePrototypePanel from "../../components/case-studies/panels/IMobilePrototypePanel";
import backArrow from "../../assets/case-studies/sizzle/back-arrow.svg";

export default function IMobile() {
  const [prototypeOpen, setPrototypeOpen] = useState(false);

  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />
      <JumpNav
        links={[
          { id: "heuristic-evaluation", label: "Heuristic Evaluation" },
          { id: "design-system", label: "Design System" },
          { id: "before-after", label: "Before & After" },
        ]}
        actionLabel="Prototype"
        onAction={() => setPrototypeOpen(true)}
      />

      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center gap-6 sm:gap-11">
          <Link
            to="/work"
            aria-label="Back to my work"
            className="shrink-0 transition-opacity hover:opacity-70"
          >
            <img src={backArrow} alt="" className="h-6 w-9 sm:h-9 sm:w-14" />
          </Link>
          <h1 className="font-display text-2xl text-navy sm:text-[35px]">iMobile App Redesign</h1>
        </div>
        <h2 className="mt-8 font-['Instrument_Sans'] text-[31px] font-medium text-ink sm:text-[41px]">
          Project Overview
        </h2>

        <div className="mt-16 flex flex-col gap-14 sm:mt-24 sm:gap-20">
          <div className="flex flex-col items-start gap-5 text-clay sm:gap-7">
            <p className="font-['Instrument_Sans'] text-base font-medium sm:text-xl">
              THE PROBLEM
            </p>
            <p className="max-w-[760px] text-base sm:text-xl">
              The app's screen is cluttered, with excessive use of icons and inconsistent colour.
              The navigation seems complicated and confusing, with the same icons used for several
              features. Overusing icons for the same feature in multiple places becomes
              overwhelming for users. A cluttered screen, too many icons, and inconsistent colours
              prevent users from having a seamless experience.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 text-clay sm:gap-7">
            <p className="font-['Instrument_Sans'] text-base font-medium sm:text-xl">
              THE SOLUTION
            </p>
            <p className="max-w-[760px] text-base sm:text-xl">
              Rearranging the home screen to remove clutter and lessen cognitive load. Making the
              navigation simple and easy to understand by removing unnecessary steps. Creating
              consistency in colours and icons. Building a seamless and easy-to-understand user
              experience.
            </p>
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <h2 className="font-['Instrument_Sans'] text-[31px] font-medium text-ink sm:text-[41px]">
            How I got there
          </h2>
          <p className="mt-4 max-w-[760px] text-base text-clay sm:mt-6 sm:text-xl">
            Scroll through to explore the work, or jump to a section above.
          </p>

          <div className="mt-14 flex flex-col gap-14 sm:mt-16 sm:gap-20">
            <section id="heuristic-evaluation" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                01
              </p>
              <HeuristicEvaluationPanel />
            </section>

            <section id="design-system" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                02
              </p>
              <DesignSystemPanel />
            </section>

            <section id="before-after" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                03
              </p>
              <BeforeAfterPanel />
            </section>

            <section id="prototype" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                04
              </p>
              <PhaseCard
                phase={{
                  number: "04",
                  title: "Prototype",
                  description: "A linear prototype flow demonstrating onboarding and security PIN changes",
                }}
                onClick={() => setPrototypeOpen(true)}
              />
            </section>
          </div>
        </div>
      </div>

      <PhaseOverlay isOpen={prototypeOpen} onClose={() => setPrototypeOpen(false)}>
        <IMobilePrototypePanel />
      </PhaseOverlay>
    </div>
  );
}
