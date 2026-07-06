type Row = {
  parameter: string;
  yuumly: string;
  paprika: string;
};

const rows: Row[] = [
  { parameter: "Target audience", yuumly: "16-45", paprika: "16-45" },
  {
    parameter: "Description",
    yuumly: "Find & manage food recipes",
    paprika: "Find, manage & create recipes",
  },
  {
    parameter: "Unique Features",
    yuumly: "Smart thermometer, meal planning",
    paprika: "Menu feature, offline recipe download",
  },
  { parameter: "Look & Feel", yuumly: "Good, simple UI", paprika: "Below average UI" },
  {
    parameter: "Usability",
    yuumly: "Can be overwhelming",
    paprika: "Complicated navigation",
  },
];

export default function CompetitorAnalysisTable() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-navy">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="w-1/3 px-6 py-6 text-left text-xl font-bold text-[#e9c98a] sm:px-10 sm:py-7 sm:text-[28px]">
              Parameter
            </th>
            <th className="w-1/3 border-l border-white/10 px-6 py-6 text-left text-xl font-bold text-[#e9c98a] sm:px-10 sm:py-7 sm:text-[28px]">
              Yuumly
            </th>
            <th className="w-1/3 border-l border-white/10 px-6 py-6 text-left text-xl font-bold text-[#e9c98a] sm:px-10 sm:py-7 sm:text-[28px]">
              Paprika
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.parameter} className={i > 0 ? "border-t border-white/10" : undefined}>
              <td className="px-6 py-6 align-top text-base font-bold text-[#e9c98a] sm:px-10 sm:py-7 sm:text-xl">
                {row.parameter}
              </td>
              <td className="border-l border-white/10 px-6 py-6 align-top text-base font-bold text-[#e9c98a] sm:px-10 sm:py-7 sm:text-xl">
                {row.yuumly}
              </td>
              <td className="border-l border-white/10 px-6 py-6 align-top text-base font-bold text-[#e9c98a] sm:px-10 sm:py-7 sm:text-xl">
                {row.paprika}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
