import CompetitorAnalysisTable from "../CompetitorAnalysisTable";

export default function CompetitorAnalysisPanel() {
  return (
    <div>
      <h2 className="mb-6 font-['Instrument_Sans'] text-2xl font-bold text-navy sm:mb-8 sm:text-4xl">
        Competitor analysis
      </h2>
      <CompetitorAnalysisTable />
    </div>
  );
}
