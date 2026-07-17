export type PersonaCardData = {
  name: string;
  role: string;
  avatarInitial: string;
  demographics: string[];
  about: string;
  goals: string[];
  motivators: string[];
  frustrations: string[];
  traits: string[];
  brands: string[];
};

function PersonaList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-wide text-[#e9c98a] sm:text-base">
        {title}
      </h4>
      <ul className="mt-2 flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-[#e3d2b8] sm:text-base">
            <span className="text-[#e9c98a]">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PersonaCard({
  name,
  role,
  avatarInitial,
  demographics,
  about,
  goals,
  motivators,
  frustrations,
  traits,
  brands,
}: PersonaCardData) {
  return (
    <div className="flex-1 rounded-xl border border-paper-border bg-navy px-8 py-8 sm:px-10 sm:py-9">
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-navy-deep sm:size-16">
          <span className="font-display text-2xl text-[#e9c98a] sm:text-3xl">
            {avatarInitial}
          </span>
        </div>
        <div>
          <h3 className="font-['Instrument_Sans'] text-xl font-bold text-[#e9c98a] sm:text-2xl">
            {name}
          </h3>
          <p className="text-sm text-[#e3d2b8] sm:text-base">{role}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {traits.map((trait) => (
          <span
            key={trait}
            className="rounded-full border border-white/10 bg-navy-deep px-3 py-1 text-xs font-medium text-gold sm:text-sm"
          >
            {trait}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-wide text-[#e9c98a] sm:text-base">
          Demographics
        </h4>
        <ul className="mt-2 flex flex-col gap-1.5">
          {demographics.map((item) => (
            <li key={item} className="text-sm text-[#e3d2b8] sm:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-wide text-[#e9c98a] sm:text-base">
          About
        </h4>
        <p className="mt-2 text-sm text-[#e3d2b8] sm:text-base">{about}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <PersonaList title="Goals" items={goals} />
        <PersonaList title="Motivators" items={motivators} />
        <PersonaList title="Frustrations" items={frustrations} />
        <div>
          <h4 className="font-['Instrument_Sans'] text-sm font-bold uppercase tracking-wide text-[#e9c98a] sm:text-base">
            Brands
          </h4>
          <p className="mt-2 text-sm text-[#e3d2b8] sm:text-base">{brands.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}
