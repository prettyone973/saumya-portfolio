import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";
import NavyInfoCard, {
  type NavyInfoCardData,
} from "../../../components/case-studies/NavyInfoCard";
import interviewIllustration from "../../../assets/case-studies/sizzle/interview-illustration.svg";

const cards: NavyInfoCardData[] = [
  {
    title: "User Interviews",
    description:
      "in-person interviews to deeply understand motivators, frustrations, and goals. Uncovered nuanced behaviors that surveys couldn't capture.",
  },
  {
    title: "User surveys",
    description:
      "Distributed through Google Forms to gather broad quantitative insights on cooking habits, pain points, and app preferences across different demographics.",
  },
  {
    title: "Affinity Mapping",
    description:
      "Survey responses were captured, grouped, and labeled to surface patterns and common themes across user responses.",
  },
];

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
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-['Instrument_Sans'] text-2xl font-semibold text-clay sm:text-[36px]">
                Understanding the User
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

          <div className="mt-8 flex flex-col gap-6 sm:mt-10">
            {cards.map((card) => (
              <NavyInfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
