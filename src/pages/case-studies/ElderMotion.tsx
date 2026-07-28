import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PhaseCard from "../../components/case-studies/PhaseCard";
import PhaseOverlay from "../../components/case-studies/PhaseOverlay";
import JumpNav from "../../components/case-studies/JumpNav";
import MethodsPanel from "../../components/case-studies/panels/eldermotion/MethodsPanel";
import FunctionalRequirementsPanel from "../../components/case-studies/panels/eldermotion/FunctionalRequirementsPanel";
import KeyFindingsPanel from "../../components/case-studies/panels/eldermotion/KeyFindingsPanel";
import LimitationsPanel from "../../components/case-studies/panels/eldermotion/LimitationsPanel";
import ConclusionPanel from "../../components/case-studies/panels/eldermotion/ConclusionPanel";
import InformationArchitecturePanel from "../../components/case-studies/panels/eldermotion/InformationArchitecturePanel";
import ElderMotionPrototypePanel from "../../components/case-studies/panels/eldermotion/ElderMotionPrototypePanel";
import backArrow from "../../assets/case-studies/sizzle/back-arrow.svg";
import problemIllustration from "../../assets/case-studies/eldermotion/problem-illustration.png";
import solutionIllustration from "../../assets/case-studies/eldermotion/solution-illustration.png";

type OverlayId = "information-architecture" | "prototype";

const panelComponents: Record<OverlayId, React.ComponentType> = {
  "information-architecture": InformationArchitecturePanel,
  prototype: ElderMotionPrototypePanel,
};

export default function ElderMotion() {
  const [openPanelId, setOpenPanelId] = useState<OverlayId | null>(null);

  const ActivePanel = openPanelId ? panelComponents[openPanelId] : null;

  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />
      <JumpNav
        links={[
          { id: "methods", label: "Methods" },
          { id: "functional-requirements", label: "Functional Requirements" },
          { id: "key-findings", label: "Key Findings" },
          { id: "limitations", label: "Limitations" },
          { id: "conclusion", label: "Conclusion" },
        ]}
        actions={[
          {
            label: "Information Architecture",
            onClick: () => setOpenPanelId("information-architecture"),
          },
          { label: "Prototype", onClick: () => setOpenPanelId("prototype") },
        ]}
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
          <h1 className="font-display text-2xl text-navy sm:text-[35px]">
            ElderMotion — An accessible approach to the senior lifestyle
          </h1>
        </div>
        <h2 className="mt-8 font-['Instrument_Sans'] text-[31px] font-medium text-ink sm:text-[41px]">
          Project Overview
        </h2>

        <div className="mt-16 flex flex-col gap-20 sm:mt-24 sm:gap-28">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-20">
            <div className="flex flex-col items-start gap-5 text-clay sm:gap-7">
              <p className="font-['Instrument_Sans'] text-base font-medium sm:text-xl">
                THE PROBLEM
              </p>
              <p className="max-w-[760px] text-base sm:text-xl">
                Older adults (65+) engaging with mobile health technology face a double burden:
                age-related physical impairments (like hand tremors and low vision) and low
                digital literacy. Existing solutions prioritize complex data visualization and
                fitness culture, which alienates users who see activity as daily living rather
                than structured exercise.
              </p>
            </div>
            <img
              src={problemIllustration}
              alt=""
              className="aspect-[586/980] w-full max-w-[220px] shrink-0 object-contain sm:max-w-[260px]"
            />
          </div>

          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
            <img
              src={solutionIllustration}
              alt=""
              className="aspect-[713/980] w-full max-w-[220px] shrink-0 object-contain sm:max-w-[260px]"
            />
            <div className="flex flex-col items-start gap-5 text-clay sm:gap-7">
              <p className="font-['Instrument_Sans'] text-base font-medium sm:text-xl">
                THE SOLUTION
              </p>
              <p className="max-w-[760px] text-base sm:text-xl">
                ElderMotion is a mobile app designed specially for senior citizens, with fun
                activities that fit into everyday life, encouraging goal-setting instead of
                intimidating targets, shared community activities, and a fully customizable
                interface — including large text, dark mode, and accessibility-first options.
              </p>
            </div>
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
            <section id="methods" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                01
              </p>
              <MethodsPanel />
            </section>

            <section id="functional-requirements" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                02
              </p>
              <FunctionalRequirementsPanel />
            </section>

            <section id="key-findings" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                03
              </p>
              <KeyFindingsPanel />
            </section>

            <section id="limitations" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                04
              </p>
              <LimitationsPanel />
            </section>

            <section id="conclusion" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                05
              </p>
              <ConclusionPanel />
            </section>

            <section id="information-architecture" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                06
              </p>
              <p className="max-w-[760px] text-base text-clay sm:text-xl">
                After defining functional requirements, I mapped out the app's information
                architecture to structure navigation around simplicity — minimizing options per
                screen and prioritizing the most frequently used features.
              </p>

              <div className="mt-6 sm:mt-8">
                <PhaseCard
                  phase={{
                    number: "06",
                    title: "Information Architecture",
                    description:
                      "The app's structural hierarchy, from the home screen to every core section.",
                  }}
                  onClick={() => setOpenPanelId("information-architecture")}
                />
              </div>
            </section>

            <section id="prototype" className="scroll-mt-20">
              <p className="mb-4 font-['Instrument_Sans'] text-sm font-semibold text-clay sm:mb-6 sm:text-lg">
                07
              </p>
              <PhaseCard
                phase={{
                  number: "07",
                  title: "Prototype",
                  description: "An interactive walkthrough of the ElderMotion prototype.",
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
