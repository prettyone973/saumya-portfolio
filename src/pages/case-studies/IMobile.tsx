import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PhaseCard, { type Phase } from "../../components/case-studies/PhaseCard";
import PhaseOverlay from "../../components/case-studies/PhaseOverlay";
import BeforeAfterPanel from "../../components/case-studies/panels/BeforeAfterPanel";
import HeuristicEvaluationPanel from "../../components/case-studies/panels/HeuristicEvaluationPanel";
import DesignSystemPanel from "../../components/case-studies/panels/DesignSystemPanel";
import IMobilePrototypePanel from "../../components/case-studies/panels/IMobilePrototypePanel";
import backArrow from "../../assets/case-studies/sizzle/back-arrow.svg";

type PhaseId = "before-after" | "heuristic-evaluation" | "design-system" | "prototype";

const phases: (Phase & { id: PhaseId })[] = [
  {
    id: "heuristic-evaluation",
    number: "01",
    title: "Heuristic Evaluation",
    description:
      "Evaluating usability issues in the original design against established heuristics",
  },
  {
    id: "design-system",
    number: "02",
    title: "Design System",
    description: "Colors, typography, and style guide used in the redesign",
  },
  {
    id: "before-after",
    number: "03",
    title: "Before & After",
    description:
      "Comparing the cluttered original screens to the redesigned, simplified experience",
  },
  {
    id: "prototype",
    number: "04",
    title: "Prototype",
    description: "A linear prototype flow demonstrating onboarding and security PIN changes",
  },
];

const panelComponents: Record<PhaseId, React.ComponentType> = {
  "before-after": BeforeAfterPanel,
  "heuristic-evaluation": HeuristicEvaluationPanel,
  "design-system": DesignSystemPanel,
  prototype: IMobilePrototypePanel,
};

export default function IMobile() {
  const [openPanelId, setOpenPanelId] = useState<PhaseId | null>(null);

  const ActivePanel = openPanelId ? panelComponents[openPanelId] : null;

  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto max-w-[1280px] px-8 py-16 sm:px-14">
        <div className="flex items-center gap-6 sm:gap-11">
          <Link
            to="/work"
            aria-label="Back to my work"
            className="shrink-0 transition-opacity hover:opacity-70"
          >
            <img src={backArrow} alt="" className="h-6 w-9 sm:h-9 sm:w-14" />
          </Link>
          <h1 className="font-display text-3xl text-navy sm:text-4xl">iMobile App Redesign</h1>
        </div>
        <h2 className="mt-8 font-['Instrument_Sans'] text-4xl font-medium text-ink sm:text-6xl">
          Project Overview
        </h2>

        <div className="mt-16 flex flex-col gap-14 sm:mt-24 sm:gap-20">
          <div className="flex flex-col items-start gap-5 text-clay sm:gap-7">
            <p className="font-['Instrument_Sans'] text-xl font-medium sm:text-[28px]">
              THE PROBLEM
            </p>
            <p className="max-w-[900px] text-lg sm:text-[28px]">
              The app's screen is cluttered, with excessive use of icons and inconsistent colour.
              The navigation seems complicated and confusing, with the same icons used for several
              features. Overusing icons for the same feature in multiple places becomes
              overwhelming for users. A cluttered screen, too many icons, and inconsistent colours
              prevent users from having a seamless experience.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 text-clay sm:gap-7">
            <p className="font-['Instrument_Sans'] text-xl font-medium sm:text-[28px]">
              THE SOLUTION
            </p>
            <p className="max-w-[900px] text-lg sm:text-[28px]">
              Rearranging the home screen to remove clutter and lessen cognitive load. Making the
              navigation simple and easy to understand by removing unnecessary steps. Creating
              consistency in colours and icons. Building a seamless and easy-to-understand user
              experience.
            </p>
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <h2 className="font-['Instrument_Sans'] text-4xl font-medium text-ink sm:text-6xl">
            How I got there
          </h2>

          <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:gap-8">
            {phases.map((phase) => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                onClick={() => setOpenPanelId(phase.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <PhaseOverlay isOpen={openPanelId !== null} onClose={() => setOpenPanelId(null)}>
        {ActivePanel && <ActivePanel />}
      </PhaseOverlay>
    </div>
  );
}
