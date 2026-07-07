import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CartIllustration from "../../components/case-studies/CartIllustration";
import PhaseCard, { type Phase } from "../../components/case-studies/PhaseCard";
import PhaseOverlay from "../../components/case-studies/PhaseOverlay";
import CompetitorAnalysisPanel from "../../components/case-studies/panels/CompetitorAnalysisPanel";
import EmpathizePanel from "../../components/case-studies/panels/EmpathizePanel";
import DefinePanel from "../../components/case-studies/panels/DefinePanel";
import IdeatePanel from "../../components/case-studies/panels/IdeatePanel";
import WireframesPanel from "../../components/case-studies/panels/WireframesPanel";
import PrototypePanel from "../../components/case-studies/panels/PrototypePanel";
import backArrow from "../../assets/case-studies/sizzle/back-arrow.svg";
import onlineGroceries from "../../assets/case-studies/sizzle/online-groceries.svg";

type PhaseId =
  | "competitor-analysis"
  | "empathize"
  | "define"
  | "ideate"
  | "wireframes"
  | "prototype";

const phases: (Phase & { id: PhaseId })[] = [
  {
    id: "competitor-analysis",
    number: "01",
    title: "Competitor analysis",
    description: "Yummly, Paprika, and Instagram benchmarked across usability and features",
  },
  {
    id: "empathize",
    number: "02",
    title: "Empathize",
    description: "User surveys, stakeholder interviews, and in-person user interviews",
  },
  {
    id: "define",
    number: "03",
    title: "Define",
    description: "User personas, empathy maps, problem statement, and user journey mapping",
  },
  {
    id: "ideate",
    number: "04",
    title: "Ideate",
    description: "Information architecture, user flows, and feature prioritization",
  },
  {
    id: "wireframes",
    number: "05",
    title: "Wireframes",
    description: "Low-fidelity wireframes across all key screens and user flows",
  },
  {
    id: "prototype",
    number: "06",
    title: "Prototype",
    description: "An interactive walkthrough of the final high-fidelity prototype",
  },
];

const panelComponents: Record<PhaseId, React.ComponentType> = {
  "competitor-analysis": CompetitorAnalysisPanel,
  empathize: EmpathizePanel,
  define: DefinePanel,
  ideate: IdeatePanel,
  wireframes: WireframesPanel,
  prototype: PrototypePanel,
};

export default function Sizzle() {
  const [openPanelId, setOpenPanelId] = useState<PhaseId | null>(null);

  const ActivePanel = openPanelId ? panelComponents[openPanelId] : null;

  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center gap-6 sm:gap-11">
          <Link to="/work" aria-label="Back to my work" className="shrink-0 transition-opacity hover:opacity-70">
            <img src={backArrow} alt="" className="h-6 w-9 sm:h-9 sm:w-14" />
          </Link>
          <h1 className="font-display text-2xl text-navy sm:text-[32px]">Sizzle- a cooking buddy</h1>
        </div>
        <h2 className="mt-8 font-['Instrument_Sans'] text-[28px] font-medium text-ink sm:text-[38px]">
          Project Overview
        </h2>

        <div className="mt-16 flex flex-col gap-20 sm:mt-24 sm:gap-28">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:gap-20">
            <div className="flex flex-col items-start gap-5 text-clay sm:gap-7">
              <p className="font-['Instrument_Sans'] text-base font-medium sm:text-xl">
                THE PROBLEM
              </p>
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-xl font-semibold sm:text-2xl">
                  Cooking is overwhelming without the right tools.
                </p>
                <p className="max-w-[760px] text-base sm:text-xl">
                  Users want a smart cooking app that understands their preferences and offers
                  customizable meal plans, personalized recipe recommendations, and smart shopping
                  lists —all in one place.
                </p>
              </div>
            </div>
            <CartIllustration />
          </div>

          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
            <img
              src={onlineGroceries}
              alt=""
              className="aspect-[314/296.812] w-full max-w-[314px] shrink-0 object-contain"
            />
            <div className="flex flex-col items-start gap-5 text-clay sm:gap-7">
              <p className="font-['Instrument_Sans'] text-base font-medium sm:text-xl">
                THE SOLUTION
              </p>
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-xl font-semibold sm:text-2xl">
                  A personal chef in your pocket.
                </p>
                <p className="max-w-[760px] text-base sm:text-xl">
                  Sizzle helps users find recipes by their requirements through personalized
                  recommendations. It offers voice-guided cooking, smart meal planning, pantry
                  management, and intelligent grocery lists.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <h2 className="font-['Instrument_Sans'] text-[28px] font-medium text-ink sm:text-[38px]">
            How I got there
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-clay sm:mt-6">
            <p className="font-['Instrument_Sans'] text-base font-semibold sm:text-xl">
              THE DESIGN PROCESS
            </p>
            <p className="max-w-[760px] text-base sm:text-xl">
              A human-centered design process from stakeholder interviews to low-fidelity
              wireframes. Click each phase to explore the work.
            </p>
          </div>

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
