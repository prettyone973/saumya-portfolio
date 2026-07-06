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

function TreeConnector() {
  return (
    <div className="relative h-10 w-full sm:h-12" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-navy/25" />
      <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-navy/25" />
      <div className="absolute left-1/4 top-1/2 h-1/2 w-px bg-navy/25" />
      <div className="absolute right-1/4 top-1/2 h-1/2 w-px bg-navy/25" />
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

function SitemapBox({ title, items }: SitemapBoxData) {
  return (
    <div className="w-full rounded-xl bg-navy px-6 py-6 sm:px-7 sm:py-7">
      <h3 className="font-['Instrument_Sans'] text-lg font-bold text-[#e9c98a] sm:text-xl">
        {title}
      </h3>
      <ul className="mt-3 flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-[#e3d2b8] sm:text-base">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const columns: SitemapBoxData[][] = [
  [
    { title: "Recipe Page", items: ["Search & Scan", "Filter", "Pantry Staples", "Reviews", "Voice Guide"] },
    { title: "Cabinet", items: ["Grocery List", "Pantry", "Cart", "Add / Scan", "Make something"] },
  ],
  [
    { title: "Planner", items: ["Breakfast", "Lunch", "Dinner", "Daily/Weekly", "Calorie Goals"] },
    { title: "My Recipes", items: ["Saved / Liked", "Uploaded", "Drafts", "AI Assist", "Templates"] },
  ],
];

const profilePage: SitemapBoxData = {
  title: "Profile Page",
  items: ["Preferences", "Points & Rewards", "Settings", "Privacy", "Logout"],
};

export default function Sitemap() {
  return (
    <div className="flex flex-col items-center">
      <SitemapPill label="Login/Sign up" />
      <SingleConnector />
      <SitemapPill label="Home" />
      <TreeConnector />

      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        {columns.map((column, i) => (
          <div key={i} className="flex flex-col gap-6">
            {column.map((box) => (
              <SitemapBox key={box.title} {...box} />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-6 w-full sm:w-[calc(50%-1.25rem)] sm:self-start">
        <SitemapBox {...profilePage} />
      </div>
    </div>
  );
}
