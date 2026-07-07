type Heuristic = {
  title: string;
  description: string;
  observations: string[];
  recommendations: string[];
  severity: 0 | 1 | 2 | 3 | 4;
};

const severityColors: Record<number, string> = {
  0: "bg-[#99e876]",
  1: "bg-[#65aff8]",
  2: "bg-[#f7c284]",
  3: "bg-[#f4f75e]",
  4: "bg-[#ff7c70]",
};

const severityLegend = [
  { value: 0, label: "I don't agree that this is a usability problem at all" },
  { value: 1, label: "Cosmetic problem only: fix if time is available" },
  { value: 2, label: "Minor usability problem: fixing this should be given low priority" },
  { value: 3, label: "Major usability problem: important to fix, given high priority" },
  { value: 4, label: "Usability catastrophe: fix this before product can be released" },
];

const heuristics: Heuristic[] = [
  {
    title: "1. Visibility of system status",
    description:
      "Always keep users informed about what is going on, through appropriate feedback within reasonable time.",
    observations: [
      "The app keeps user informed about what is going on during a task or an action through an appropriate and timely feedback.",
    ],
    recommendations: ["Can make it look a bit smoother"],
    severity: 0,
  },
  {
    title: "2. Match between system and the real world",
    description: "Follow real-world conventions, making information appear in a natural and logical order.",
    observations: [
      "Overall the language is a bit unfamiliar to the user.",
      "Icons are doing better job in explaining the feature.",
    ],
    recommendations: ["Use more familiar and easy, simple words."],
    severity: 2,
  },
  {
    title: "3. User control and freedom",
    description:
      "Users should leave the unwanted state without having to go through an extended dialogue. Undo and redo.",
    observations: [
      "User are in control of the task they do.",
      "They can exit app or any task at any time.",
      "Since it is a banking app, some actions such as transactions cannot be undone easily or immediately.",
    ],
    recommendations: [
      "Login process can be smoother. The session timeout duration can be longer so the user doesn't have to login again and again.",
    ],
    severity: 3,
  },
  {
    title: "4. Consistency and standards",
    description:
      "Users should not have to wonder whether different words, situations, or actions mean the same thing.",
    observations: ["Icons are not very consistent", "Confusing words", "Same kind of words for different features"],
    recommendations: [
      "Remove unnecessary features with same names",
      "Have features under their designated category in one place",
    ],
    severity: 4,
  },
  {
    title: "5. Error prevention",
    description:
      "Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.",
    observations: [
      "Basic actions are designed in a simple way that leaves little to no room for errors",
      "When user does an error, the system gives appropriate feedback.",
    ],
    recommendations: [],
    severity: 0,
  },
  {
    title: "6. Recognition rather than recall",
    description: "Minimize the user's memory load by making objects, actions, and options visible.",
    observations: [
      "The options and features are visible to users.",
      "They do not have to remember any previous information while doing a task.",
    ],
    recommendations: ["The options and features can be organized in a better way."],
    severity: 3,
  },
  {
    title: "7. Flexibility and efficiency of use",
    description: "Accelerators. Allow users to tailor frequent actions.",
    observations: [
      "Basic actions such as financial transactions can be done by person with medium technical literacy.",
      "They can access some features quickly before logging in",
    ],
    recommendations: ["Making every feature and action easy to understand by a tip or a description."],
    severity: 1,
  },
  {
    title: "8. Aesthetic and minimalist design",
    description: "Dialogues should not contain information which is irrelevant or rarely needed.",
    observations: [
      "There are too many icons and features that are unnecessary on the same screen.",
      "Colors and too many icons are overwhelming",
      "Bottom navigation is distracting",
    ],
    recommendations: ["Declutter the home screen", "Use of limited icons", "Consistent colors"],
    severity: 4,
  },
  {
    title: "9. Help users recognize, diagnose, and recover from errors",
    description:
      "Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.",
    observations: [
      "Error messages are explained in a simple way.",
      "Messages contain exactly what user needs to do to prevent errors",
    ],
    recommendations: [],
    severity: 0,
  },
  {
    title: "10. Help and documentation",
    description:
      "Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation.",
    observations: [
      "The app has a good help and support system",
      "The information in these documents is easy to search and focuses on the task",
    ],
    recommendations: [
      "The access to the help and support is confusing in the system. To make it easy, it can be given a specific place in the system rather than having it in multiple places.",
    ],
    severity: 2,
  },
];

function SeverityBadge({ value }: { value: number }) {
  return (
    <div
      className={`flex size-9 shrink-0 items-center justify-center rounded-lg border border-black/30 font-['Instrument_Sans'] text-base font-bold text-ink ${severityColors[value]}`}
    >
      {value}
    </div>
  );
}

export default function HeuristicEvaluationPanel() {
  return (
    <div>
      <h2 className="font-['Instrument_Sans'] text-xl font-bold text-navy sm:text-[30px]">
        Heuristic Evaluation
      </h2>
      <p className="mt-2 text-sm text-clay sm:text-base">
        Device: Android device &middot; Evaluated against: iMobile app by ICICI Bank
      </p>

      <div className="mt-6 flex flex-col gap-2 rounded-xl border border-paper-border bg-paper p-4 sm:p-5">
        <p className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-wide text-navy">
          Severity rating
        </p>
        {severityLegend.map((item) => (
          <div key={item.value} className="flex items-start gap-3">
            <div
              className={`mt-0.5 size-4 shrink-0 rounded border border-black/30 ${severityColors[item.value]}`}
            />
            <p className="text-sm text-ink">
              <span className="font-bold">{item.value}</span> &mdash; {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {heuristics.map((h) => (
          <div
            key={h.title}
            className="rounded-xl border border-paper-border bg-paper p-5 sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-['Instrument_Sans'] text-lg font-bold text-navy sm:text-xl">
                  {h.title}
                </h3>
                <p className="mt-1 text-sm italic text-clay">{h.description}</p>
              </div>
              <SeverityBadge value={h.severity} />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-navy">
                  Observations
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-ink">
                  {h.observations.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-navy">
                  Recommendation
                </p>
                {h.recommendations.length > 0 ? (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-ink">
                    {h.recommendations.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-ink">&mdash;</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
