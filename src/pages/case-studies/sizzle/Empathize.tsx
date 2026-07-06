import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";
import EmpathizePanel from "../../../components/case-studies/panels/EmpathizePanel";

export default function Empathize() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-8 py-16 sm:px-14">
        <PhaseCard
          phase={{
            number: "02",
            title: "Empathize",
            description: "User surveys, stakeholder interviews, and in-person user interviews",
          }}
        />

        <div className="rounded-xl border border-paper-border bg-paper p-8 sm:p-11">
          <EmpathizePanel />
        </div>
      </div>
    </div>
  );
}
