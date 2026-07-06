import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";
import CompetitorAnalysisPanel from "../../../components/case-studies/panels/CompetitorAnalysisPanel";

export default function CompetitorAnalysis() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-8 py-16 sm:px-14">
        <PhaseCard
          phase={{
            number: "01",
            title: "Competitor analysis",
            description:
              "Yummly, Paprika, and Instagram benchmarked across usability and features",
          }}
        />

        <div className="rounded-xl border border-paper-border bg-paper p-6 sm:p-10">
          <CompetitorAnalysisPanel />
        </div>
      </div>
    </div>
  );
}
