import phaseArrow from "../../assets/case-studies/sizzle/phase-arrow.svg";

export type Phase = {
  number: string;
  title: string;
  description: string;
};

export default function PhaseCard({
  phase,
  onClick,
}: {
  phase: Phase;
  onClick?: () => void;
}) {
  const interactive = Boolean(onClick);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!interactive}
      className={`group flex w-full items-stretch border-0 bg-transparent p-0 text-left transition-transform duration-150 ease-out ${
        interactive ? "cursor-pointer hover:scale-[1.025]" : "cursor-default"
      }`}
    >
      <div
        className={`flex w-[100px] shrink-0 items-center justify-center rounded-l-xl border border-r-0 border-paper-border bg-paper px-6 py-9 shadow-[0_4px_18px_-6px_rgba(46,42,31,0.08)] transition-shadow duration-150 ease-out sm:w-[130px] sm:px-10 ${
          interactive ? "group-hover:shadow-[0_8px_24px_-8px_rgba(46,42,31,0.18)]" : ""
        }`}
      >
        <span className="font-['Instrument_Sans'] text-2xl font-medium text-ink sm:text-[33px]">
          {phase.number}
        </span>
      </div>
      <div
        className={`flex flex-1 items-center gap-6 rounded-r-xl border border-paper-border bg-paper px-6 py-6 shadow-[0_4px_18px_-6px_rgba(46,42,31,0.08)] transition-shadow duration-150 ease-out sm:gap-16 sm:px-12 sm:py-7 ${
          interactive ? "group-hover:shadow-[0_8px_24px_-8px_rgba(46,42,31,0.18)]" : ""
        }`}
      >
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="font-['Instrument_Sans'] text-xl font-medium text-ink sm:text-2xl">
            {phase.title}
          </h3>
          <p className="text-base text-clay sm:text-xl">{phase.description}</p>
        </div>
        <img
          src={phaseArrow}
          alt=""
          className={`h-6 w-9 shrink-0 -scale-x-100 transition-transform duration-150 ease-out sm:h-9 sm:w-14 ${
            interactive ? "group-hover:translate-x-1.5" : ""
          }`}
        />
      </div>
    </button>
  );
}
