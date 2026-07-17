import NavyInfoCard, { type NavyInfoCardData } from "../NavyInfoCard";
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

export default function EmpathizePanel() {
  return (
    <div>
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="font-['Instrument_Sans'] text-xl font-semibold text-clay sm:text-[33px]">
            Understanding the User
          </h2>
          <p className="max-w-[760px] text-base text-clay sm:text-xl">
            To understand users' real needs, goals, and constraints, I conducted a mixed-methods
            research approach combining quantitative and qualitative methods.
          </p>
        </div>
        <img
          src={interviewIllustration}
          alt=""
          className="aspect-[112/85] w-full max-w-[220px] shrink-0 object-contain sm:max-w-[240px]"
        />
      </div>

      <div className="mt-8 flex flex-col gap-6 sm:mt-10">
        {cards.map((card) => (
          <NavyInfoCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
