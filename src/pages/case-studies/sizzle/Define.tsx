import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";
import NavyInfoCard, {
  type NavyInfoCardData,
} from "../../../components/case-studies/NavyInfoCard";
import interviewIllustration from "../../../assets/case-studies/sizzle/interview-illustration.svg";

const cards: NavyInfoCardData[] = [
  {
    icon: "🍕",
    title: "Cook with what you have",
    description:
      "Users want to find recipes based on ingredients already in their pantry — not be forced to buy a long list of new items every time.",
  },
  {
    icon: "📅",
    title: "Flexible meal planning",
    description:
      "Users want to chart out meals for the week but with flexibility — the ability to swap, adjust, and adapt plans without starting over.",
  },
  {
    icon: "🎯",
    title: "Personalized recommendations",
    description:
      "Generic recipe feeds don't work. Users expect the app to learn their preferences and surface food they'll actually want to make.",
  },
  {
    icon: "⚡",
    title: "Wide filter options",
    description:
      "Specific filters matter: under 30 minutes, no chopping required, 5 ingredients or less. Users want control over how simple their cooking experience is.",
  },
];

export default function Define() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-8 py-16 sm:px-14">
        <PhaseCard
          phase={{
            number: "03",
            title: "Define",
            description: "User personas, empathy maps, problem statement, and user journey mapping",
          }}
        />

        <div className="rounded-xl border border-paper-border bg-paper p-8 sm:p-11">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-['Instrument_Sans'] text-2xl font-semibold text-clay sm:text-[36px]">
                Defining the Problem Space
              </h2>
              <p className="max-w-[766px] text-lg text-clay sm:text-[28px]">
                To understand users' real needs, goals, and constraints, I conducted a
                mixed-methods research approach combining quantitative and qualitative methods.
              </p>
            </div>
            <img
              src={interviewIllustration}
              alt=""
              className="hidden h-[85px] w-[112px] shrink-0 sm:block"
            />
          </div>

          <h2 className="mt-8 font-['Instrument_Sans'] text-2xl font-semibold text-clay sm:mt-10 sm:text-[36px]">
            Research Findings
          </h2>

          <div className="mt-6 flex flex-col gap-6 sm:mt-8">
            {cards.map((card) => (
              <NavyInfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
