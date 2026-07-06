function UpArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0" aria-hidden="true">
      <path
        d="M12 19V5M12 5 7 10M12 5l5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BeforeAfterCallout({ label }: { label: string }) {
  return (
    <div className="mt-2 flex flex-col items-center gap-1 text-clay sm:mt-3">
      <UpArrow />
      <span className="max-w-[9rem] text-center text-xs font-semibold sm:text-sm">{label}</span>
    </div>
  );
}
