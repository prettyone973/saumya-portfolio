import NavyInfoCard, { type NavyInfoCardData } from "../../NavyInfoCard";

const cards: NavyInfoCardData[] = [
  {
    title: "Visual & Motor Accessibility",
    description:
      "Input tolerance with minimum target size of 2 finger widths; limited gestures with emphasis on single-tap interactions; high-contrast, adjustable text sizes that don't break the screen layout; clear signage with paired text and icons.",
  },
  {
    title: "Cognitive & Social Accessibility",
    description:
      "Simplified flow with a limited number of primary options per screen; reframed mental models using everyday terms instead of technical jargon (e.g., 'Gardening' instead of 'Cardio'); error forgiveness with confirmation states and 'Cancel' options; positive reinforcement; multi-modal support via text-to-speech and voice command accessibility.",
  },
];

function ScreenExamplePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[9/19.5] w-full max-w-[240px] shrink-0 flex-col items-center justify-center gap-2 rounded-[2rem] border border-dashed border-paper-border bg-paper/60 p-6 text-center">
      <span className="text-sm font-medium text-clay">{label}</span>
      <span className="text-xs text-clay/70">Screenshot coming soon</span>
    </div>
  );
}

export default function FunctionalRequirementsPanel() {
  return (
    <div>
      <h2 className="font-['Instrument_Sans'] text-xl font-semibold text-clay sm:text-[33px]">
        Functional Requirements
      </h2>

      <div className="mt-6 flex flex-col gap-6 sm:mt-8">
        {cards.map((card) => (
          <NavyInfoCard key={card.title} {...card} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8 sm:mt-12 sm:flex-nowrap sm:gap-10">
        <ScreenExamplePlaceholder label="Shopping / Gardening activity selection" />
        <ScreenExamplePlaceholder label="Community Gardening — join activity" />
      </div>
    </div>
  );
}
