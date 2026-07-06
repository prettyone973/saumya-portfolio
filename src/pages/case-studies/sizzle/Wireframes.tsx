import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";
import WireframeRow from "../../../components/case-studies/WireframeRow";
import row1 from "../../../assets/case-studies/sizzle/wireframes-row-1.png";
import row2 from "../../../assets/case-studies/sizzle/wireframes-row-2.png";
import row3 from "../../../assets/case-studies/sizzle/wireframes-row-3.png";

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
          <h2 className="mb-6 font-['Instrument_Sans'] text-2xl font-bold text-navy sm:mb-8 sm:text-4xl">
            Wireframes
          </h2>

          <div className="flex flex-col gap-7">
            <WireframeRow
              src={row1}
              aspect={826 / 638.608}
              crop={{ widthPct: 100, heightPct: 124.89, leftPct: 0, topPct: 0 }}
            />
            <WireframeRow
              src={row2}
              aspect={826 / 659.363}
              crop={{ widthPct: 112, heightPct: 106.32, leftPct: -3.48, topPct: -2.4 }}
            />
            <WireframeRow
              src={row3}
              aspect={826 / 367.371}
              crop={{ widthPct: 111.05, heightPct: 209.57, leftPct: -3.68, topPct: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
