export type NavyInfoCardData = {
  icon?: string;
  title: string;
  description: string;
};

export default function NavyInfoCard({ icon, title, description }: NavyInfoCardData) {
  return (
    <div className="rounded-xl border border-paper-border bg-navy px-8 py-8 sm:px-10 sm:py-9">
      {icon && <span className="mb-2 block text-4xl sm:text-5xl">{icon}</span>}
      <h3 className="font-['Instrument_Sans'] text-2xl font-semibold text-gold sm:text-4xl">
        {title}
      </h3>
      <p className="mt-4 text-lg text-gold sm:mt-6 sm:text-[28px]">{description}</p>
    </div>
  );
}
