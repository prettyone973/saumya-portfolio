import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";
import PrototypePanel from "../../../components/case-studies/panels/PrototypePanel";

export default function Prototype() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-8 py-16 sm:px-14">
        <PhaseCard
          phase={{
            number: "06",
            title: "Prototype",
            description: "An interactive walkthrough of the final high-fidelity prototype",
          }}
        />

        <div className="rounded-xl border border-paper-border bg-paper p-6 sm:p-10">
          <PrototypePanel />
        </div>
      </div>
    </div>
  );
}
