import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";
import WireframesPanel from "../../../components/case-studies/panels/WireframesPanel";

export default function Wireframes() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-8 py-16 sm:px-14">
        <PhaseCard
          phase={{
            number: "05",
            title: "Wireframes",
            description: "Low-fidelity wireframes across all key screens and user flows",
          }}
        />

        <div className="rounded-xl border border-paper-border bg-paper p-6 sm:p-10">
          <WireframesPanel />
        </div>
      </div>
    </div>
  );
}
