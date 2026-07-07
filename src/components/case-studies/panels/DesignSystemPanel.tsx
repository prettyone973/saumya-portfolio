type FontColor = { hex: string };
type PrimaryColor = { hex: string };

const fontColors: FontColor[] = [
  { hex: "#2B3565" },
  { hex: "#1E1E1E" },
  { hex: "#6B6B6B" },
  { hex: "#E45E2D" },
  { hex: "#089436" },
  { hex: "#929292" },
];

const primaryColors: PrimaryColor[] = [{ hex: "#DD683D" }, { hex: "#444D73" }];

export default function DesignSystemPanel() {
  return (
    <div>
      <h2 className="font-['Instrument_Sans'] text-2xl font-bold text-navy sm:text-4xl">
        Design System
      </h2>
      <p className="mt-2 text-sm text-clay sm:text-base">
        Colors, typography, and style guide used in the redesign.
      </p>

      <h3 className="mt-8 font-['Instrument_Sans'] text-lg font-semibold text-navy sm:text-xl">
        Used Font Colors
      </h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {fontColors.map((c) => (
          <div
            key={c.hex}
            className="flex flex-col gap-4 rounded-xl border border-paper-border bg-paper p-6"
          >
            <span className="text-4xl font-medium" style={{ color: c.hex }}>
              Text
            </span>
            <span className="text-sm text-clay">{c.hex}</span>
          </div>
        ))}
      </div>

      <h3 className="mt-8 font-['Instrument_Sans'] text-lg font-semibold text-navy sm:text-xl">
        Used Primary Colours
      </h3>
      <div className="mt-4 flex flex-wrap gap-4">
        {primaryColors.map((c) => (
          <div
            key={c.hex}
            className="relative flex size-32 items-start justify-start rounded-xl p-3 sm:size-36"
            style={{ backgroundColor: c.hex }}
          >
            <span className="rounded-md bg-white px-2 py-1 text-xs font-medium text-ink">
              {c.hex}
            </span>
          </div>
        ))}
      </div>

      <h3 className="mt-8 font-['Instrument_Sans'] text-lg font-semibold text-navy sm:text-xl">
        Used Accent Colours
      </h3>
      <p className="mt-3 text-sm text-clay">None documented in this design.</p>
    </div>
  );
}
