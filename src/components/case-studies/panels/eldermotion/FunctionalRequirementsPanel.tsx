import NavyInfoCard, { type NavyInfoCardData } from "../../NavyInfoCard";
import shoppingGardeningSelection from "../../../../assets/case-studies/eldermotion/shopping-gardening-selection.png";
import communityGardening from "../../../../assets/case-studies/eldermotion/community-gardening.png";

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

const screens = [
  { src: shoppingGardeningSelection, label: "Shopping / Gardening activity selection" },
  { src: communityGardening, label: "Community Gardening — join activity" },
];

function ScreenExampleCard({ src, label }: { src: string; label: string }) {
  return (
    <figure className="flex w-full max-w-[240px] shrink-0 flex-col items-center gap-3 rounded-xl border border-paper-border bg-paper p-4 sm:p-5">
      <img src={src} alt={label} className="w-full object-contain" />
      <figcaption className="text-center text-sm font-medium text-clay">{label}</figcaption>
    </figure>
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
        {screens.map((screen) => (
          <ScreenExampleCard key={screen.label} {...screen} />
        ))}
      </div>
    </div>
  );
}
