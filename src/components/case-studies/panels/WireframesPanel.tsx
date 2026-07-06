import WireframeRow from "../WireframeRow";
import row1 from "../../../assets/case-studies/sizzle/wireframes-row-1.png";
import row2 from "../../../assets/case-studies/sizzle/wireframes-row-2.png";
import row3 from "../../../assets/case-studies/sizzle/wireframes-row-3.png";

export default function WireframesPanel() {
  return (
    <div>
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
  );
}
