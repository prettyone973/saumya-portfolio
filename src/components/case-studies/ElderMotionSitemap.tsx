type SitemapBoxData = {
  title: string;
  items: string[];
};

function SitemapPill({ label }: { label: string }) {
  return (
    <div className="w-full rounded-xl bg-navy px-8 py-5 text-center">
      <span className="font-['Instrument_Sans'] text-xl font-bold text-[#e9c98a] sm:text-2xl">
        {label}
      </span>
    </div>
  );
}

function SingleConnector() {
  return (
    <div className="flex h-10 w-full justify-center sm:h-12" aria-hidden="true">
      <div className="w-px bg-navy/25" />
    </div>
  );
}

function BranchConnector({ count }: { count: number }) {
  const half = 50 / count;
  return (
    <div className="relative hidden h-12 w-full lg:block" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-navy/25" />
      <div
        className="absolute top-1/2 h-px bg-navy/25"
        style={{ left: `${half}%`, right: `${half}%` }}
      />
      <div className="grid h-1/2 w-full" style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex justify-center">
            <div className="h-full w-px bg-navy/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SitemapBox({ title, items }: SitemapBoxData) {
  return (
    <div className="flex h-full w-full flex-col rounded-xl bg-navy px-6 py-6 sm:px-7 sm:py-7">
      <h3 className="font-['Instrument_Sans'] text-lg font-bold text-[#e9c98a] sm:text-xl">
        {title}
      </h3>
      {items.length > 0 && (
        <ul className="mt-3 flex flex-col gap-1.5">
          {items.map((item) => (
            <li key={item} className="text-sm text-[#e3d2b8] sm:text-base">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const branches: SitemapBoxData[] = [
  { title: "Bottom Navigation", items: ["Accessibility", "Home button", "Settings"] },
  { title: "Search bar", items: [] },
  { title: "Profile name and avatar icon", items: [] },
  {
    title: "Cards",
    items: [
      "Daily goals",
      "Your activities",
      "Measure sugar/blood pressure etc.",
      "Join friends",
      "Reports",
    ],
  },
];

export default function ElderMotionSitemap() {
  return (
    <div className="flex flex-col items-center">
      <SitemapPill label="Home screen" />
      <SingleConnector />
      <BranchConnector count={branches.length} />

      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {branches.map((branch) => (
          <SitemapBox key={branch.title} {...branch} />
        ))}
      </div>
    </div>
  );
}
