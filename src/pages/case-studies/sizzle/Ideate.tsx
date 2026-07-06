import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";
import IdeatePanel from "../../../components/case-studies/panels/IdeatePanel";

export default function Ideate() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-8 py-16 sm:px-14">
        <PhaseCard
          phase={{
            number: "04",
            title: "Ideate",
            description: "Information architecture, user flows, and feature prioritization",
          }}
        />

        <div className="rounded-xl border border-paper-border bg-paper p-8 sm:p-14">
          <IdeatePanel />
        </div>
      </div>
    </div>
  );
}
