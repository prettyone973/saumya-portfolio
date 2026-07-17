import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CartIllustration from "../../components/case-studies/CartIllustration";
import PhaseCard from "../../components/case-studies/PhaseCard";
import PhaseOverlay from "../../components/case-studies/PhaseOverlay";
import JumpNav from "../../components/case-studies/JumpNav";
import CompetitorAnalysisPanel from "../../components/case-studies/panels/CompetitorAnalysisPanel";
import EmpathizePanel from "../../components/case-studies/panels/EmpathizePanel";
import DefinePanel from "../../components/case-studies/panels/DefinePanel";
import IdeatePanel from "../../components/case-studies/panels/IdeatePanel";
import UserFlowPanel from "../../components/case-studies/panels/UserFlowPanel";
import WireframesPanel from "../../components/case-studies/panels/WireframesPanel";
import PrototypePanel from "../../components/case-studies/panels/PrototypePanel";
import backArrow from "../../assets/case-studies/sizzle/back-arrow.svg";
import onlineGroceries from "../../assets/case-studies/sizzle/online-groceries.svg";

type OverlayId = "sitemap" | "user-flow" | "wireframes" | "prototype";

const panelComponents: Record<OverlayId, React.ComponentType> = {
  sitemap: IdeatePanel,
  "user-flow": UserFlowPanel,
  wireframes: WireframesPanel,
  prototype: PrototypePanel,
};

export default function Sizzle() {
  const [openPanelId, setOpenPanelId] = useState<OverlayId | null>(null);

  const ActivePanel = openPanelId ? panelComponents[openPanelId] : null;

  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />
      <JumpNav onOpenPrototype={() => setOpenPanelId("prototype")} />

      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center gap-6 sm:gap-11">
          <Link to="/work" aria-label="Back to my work" className="shrink-0 transition-opacity hover:opacity-70">
            <img src={backArrow} alt="" className="h-6 w-9 sm:h-9 sm:w-14" />
          </Link>
          <h1 className="font-display text-2xl text-navy sm:text-[35px]">Sizzle- a cooking buddy</h1>
        </div>
        <h2 className="mt-8 font-['Instrument_Sans'] text-[31px] font-medium text-ink sm:text-[41px]">
          Project Overview
        </h2>

        <div className="mt-16 flex flex-col gap-20 sm:mt-24 sm:gap-28">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:gap-20">
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
          <h2 className="font-['Instrument_Sans'] text-[31px] font-medium text-ink sm:text-[41px]">
            How I got there
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-clay sm:mt-6">
            <p className="font-['Instrument_Sans'] text-base font-semibold sm:text-xl">
              THE DESIGN PROCESS
            </p>
            <p className="max-w-[760px] text-base sm:text-xl">
              A human-centered design process from stakeholder interviews to low-fidelity
              wireframes. Scroll through to explore the work, or jump to a section above.
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-32">
            <section id="competitor-analysis" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                01
              </p>
              <CompetitorAnalysisPanel />
            </section>

            <section id="empathize" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                02
              </p>
              <EmpathizePanel />
            </section>

            <section id="define" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                03
              </p>
              <DefinePanel />
            </section>

            <section id="ideate" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                04
              </p>
              <h2 className="font-['Instrument_Sans'] text-xl font-semibold text-clay sm:text-[33px]">
                Structuring the Experience
              </h2>
              <p className="mt-3 max-w-[760px] text-base text-clay sm:text-xl">
                After defining user needs, I mapped out the app's information architecture and
                core user flows to structure the experience before moving into wireframes.
              </p>

              <div className="mt-8 flex flex-col gap-6 sm:mt-10">
                <PhaseCard
                  phase={{
                    number: "A",
                    title: "Sitemap",
                    description: "The full information architecture, from sign-up to every core section.",
                  }}
                  onClick={() => setOpenPanelId("sitemap")}
                />
                <PhaseCard
                  phase={{
                    number: "B",
                    title: "User Flow",
                    description: "Step-by-step flow for uploading a recipe, manually or with AI assistance.",
                  }}
                  onClick={() => setOpenPanelId("user-flow")}
                />
              </div>
            </section>

            <section id="wireframes" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                05
              </p>
              <h2 className="font-['Instrument_Sans'] text-xl font-semibold text-clay sm:text-[33px]">
                From Flows to Frames
              </h2>
              <p className="mt-3 max-w-[760px] text-base text-clay sm:text-xl">
                Low-fidelity wireframes were used to quickly validate layout decisions and flow
                logic across onboarding, the home feed, recipe detail, meal planner, pantry
                cabinet, and both the manual and AI-assisted recipe upload paths — before
                investing in high-fidelity design.
              </p>

              <div className="mt-8 sm:mt-10">
                <PhaseCard
                  phase={{
                    number: "05",
                    title: "Wireframes",
                    description: "Low-fidelity wireframes across all key screens and user flows",
                  }}
                  onClick={() => setOpenPanelId("wireframes")}
                />
              </div>
            </section>

            <section id="prototype" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                06
              </p>
              <PhaseCard
                phase={{
                  number: "06",
                  title: "Prototype",
                  description: "An interactive walkthrough of the final high-fidelity prototype",
                }}
                onClick={() => setOpenPanelId("prototype")}
              />
            </section>
          </div>
        </div>
      </div>

      <PhaseOverlay isOpen={openPanelId !== null} onClose={() => setOpenPanelId(null)}>
        {ActivePanel && <ActivePanel />}
      </PhaseOverlay>
    </div>
  );
}
