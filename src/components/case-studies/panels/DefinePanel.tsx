import NavyInfoCard, { type NavyInfoCardData } from "../NavyInfoCard";
import PersonaCard, { type PersonaCardData } from "../PersonaCard";
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

const personas: PersonaCardData[] = [
  {
    name: "Priya",
    role: "College Student",
    avatarInitial: "P",
    demographics: [
      "Age: 21",
      "Location: Ahmedabad",
      "Education: B.Com",
      "Status: Single",
      "Occupation: Student",
    ],
    about:
      "Priya is a college student who stays in an apartment with roommates. Between classes, extra coaching for her MBA, and assignments, her schedule is packed. She loves eating out and exploring new cuisines, but as a student on a tight budget she cooks in her apartment several times a week — looking for something new, quick, and mess-free.",
    goals: [
      "Staying under budget",
      "Managing her schedule effectively",
      "Avoiding unhealthy food where possible",
      "Performing well academically",
    ],
    motivators: [
      "Loves experimenting with recipes",
      "Exploring different cuisines",
      "Staying in good shape",
      "Keeping focus while studying",
      "Building better cooking skills",
    ],
    frustrations: [
      "Limited budget",
      "Stress from college exams",
      "Not enough time to shop for groceries",
      "Exhaustion after classes",
      "Limited cooking appliances",
    ],
    traits: ["Charismatic", "Topper", "Ambivert", "Helpful"],
    brands: ["Westside", "McDonald's", "Maybelline"],
  },
  {
    name: "Vivek",
    role: "Junior Software Engineer",
    avatarInitial: "V",
    demographics: [
      "Age: 23",
      "Location: Mumbai",
      "Education: B.Sc. Computer Science",
      "Status: Single",
      "Occupation: Junior Software Engineer at an IT company",
    ],
    about:
      "Vivek works as a junior software engineer at an IT company in Mumbai. He lives alone, commutes by public transport, and — having started his job recently — tries to save money wherever he can. He has to cook for himself but has little time or skill to work with.",
    goals: [
      "Working efficiently toward a raise",
      "Saving money",
      "Building a strong career",
      "Becoming financially stable within a few years",
    ],
    motivators: [
      "Cooking at home to save money",
      "Avoiding eating out to stay healthy",
      "Making quick meals",
      "Wanting a kitchen with better appliances",
    ],
    frustrations: [
      "Limited cooking skills",
      "Little free time due to work",
      "No personal vehicle, so grocery runs are a hassle",
      "Tight budget as someone new to the workforce",
    ],
    traits: ["Driven", "Hard working", "Extrovert", "Outgoing"],
    brands: ["Adidas", "Adobe", "Spotify", "Netflix"],
  },
];

export default function DefinePanel() {
  return (
    <div>
      <div className="flex flex-col items-start gap-10 lg:flex-row-reverse lg:items-start lg:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="font-['Instrument_Sans'] text-xl font-semibold text-clay sm:text-[33px]">
            Defining the Problem Space
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

      <h2 className="mt-8 font-['Instrument_Sans'] text-xl font-semibold text-clay sm:mt-10 sm:text-[33px]">
        Research Findings
      </h2>

      <div className="mt-6 flex flex-col gap-6 sm:mt-8">
        {cards.map((card) => (
          <NavyInfoCard key={card.title} {...card} />
        ))}
      </div>

      <h2 className="mt-10 font-['Instrument_Sans'] text-xl font-semibold text-clay sm:mt-14 sm:text-[33px]">
        User Personas
      </h2>
      <p className="mt-3 max-w-[760px] text-base text-clay sm:text-xl">
        Two personas grounded in the research — a budget-conscious student and a
        time-poor young professional — shaped every decision from here on.
      </p>

      <div className="mt-6 flex flex-col gap-6 sm:mt-8 lg:flex-row">
        {personas.map((persona) => (
          <PersonaCard key={persona.name} {...persona} />
        ))}
      </div>
    </div>
  );
}
