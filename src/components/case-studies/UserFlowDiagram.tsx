function FlowStep({ label }: { label: string }) {
  return (
    <div className="w-full max-w-[240px] rounded-xl bg-navy px-5 py-3 text-center">
      <span className="font-['Instrument_Sans'] text-sm font-bold text-[#e9c98a] sm:text-base">
        {label}
      </span>
    </div>
  );
}

function FlowDiamond({ label }: { label: string }) {
  return (
    <div className="relative flex h-32 w-32 shrink-0 items-center justify-center sm:h-36 sm:w-36">
      <div className="absolute inset-2 rotate-45 rounded-md bg-navy" />
      <span className="relative z-10 px-5 text-center font-['Instrument_Sans'] text-xs font-bold leading-tight text-[#e9c98a] sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex h-8 w-full justify-center sm:h-10" aria-hidden="true">
      <div className="w-px bg-navy/25" />
    </div>
  );
}

function SplitConnector() {
  return (
    <div className="relative h-10 w-full sm:h-12" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-navy/25" />
      <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-navy/25" />
      <div className="absolute left-1/4 top-1/2 h-1/2 w-px bg-navy/25" />
      <div className="absolute right-1/4 top-1/2 h-1/2 w-px bg-navy/25" />
    </div>
  );
}

function BranchLabel({ label }: { label: string }) {
  return (
    <span className="font-['Instrument_Sans'] text-xs font-bold uppercase tracking-wide text-clay sm:text-sm">
      {label}
    </span>
  );
}

function NoteCard({ children }: { children: string }) {
  return (
    <div className="rounded-lg border border-paper-border bg-paper px-6 py-5 shadow-[0_4px_14px_-6px_rgba(46,42,31,0.15)] sm:px-7 sm:py-6">
      <p className="text-sm text-clay sm:text-base">{children}</p>
    </div>
  );
}

export default function UserFlowDiagram() {
  return (
    <div className="flex flex-col items-center">
      <FlowStep label="Login / Sign up" />
      <Connector />
      <FlowDiamond label="Already have an account?" />
      <SplitConnector />

      <div className="grid w-full grid-cols-2 gap-x-6 sm:gap-x-10">
        <div className="flex flex-col items-center gap-2">
          <BranchLabel label="Yes" />
          <FlowStep label="Sign in" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <BranchLabel label="No" />
          <FlowStep label="Create account" />
        </div>
      </div>

      <SplitConnector />
      <FlowStep label="Home screen" />
      <Connector />
      <FlowStep label="My Recipes" />
      <Connector />
      <FlowStep label="Uploaded recipes" />
      <Connector />
      <FlowStep label="Upload new" />
      <Connector />
      <FlowStep label="Recipe template" />
      <Connector />
      <FlowDiamond label="Manual template or AI assistant?" />
      <SplitConnector />

      <div className="grid w-full grid-cols-2 gap-x-6 sm:gap-x-10">
        <div className="flex flex-col items-center gap-3">
          <BranchLabel label="Manual template" />
          <FlowStep label="Add title, time & ingredients" />
          <Connector />
          <FlowStep label="Add instructions & photo" />
          <Connector />
          <FlowStep label="Review the recipe" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <BranchLabel label="AI assistant" />
          <FlowStep label="Upload the video" />
          <Connector />
          <FlowStep label="AI builds the template" />
          <Connector />
          <FlowStep label="Review the recipe" />
        </div>
      </div>

      <SplitConnector />
      <FlowStep label="Upload the recipe" />

      <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
        <NoteCard>
          The process is simple, the user is given a pre-decided template and they just
          have to add the necessary details. When adding the instructions, the user is
          also given the option to voice type to make the process easier.
        </NoteCard>
        <NoteCard>
          A user with low social media presence and low technical literacy wants to
          upload a new recipe they made in a simple way.
        </NoteCard>
      </div>
    </div>
  );
}
