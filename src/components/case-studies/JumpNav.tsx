const scrollLinks = [
  { id: "competitor-analysis", label: "Competitor Analysis" },
  { id: "empathize", label: "Empathize" },
  { id: "define", label: "Define" },
  { id: "ideate", label: "Ideate" },
  { id: "wireframes", label: "Wireframes" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function JumpNav({ onOpenPrototype }: { onOpenPrototype: () => void }) {
  return (
    <div className="sticky top-0 z-30 border-b border-paper-border bg-beige/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-6 gap-y-2 overflow-x-auto px-6 py-3 sm:px-10 lg:px-16 xl:px-20">
        {scrollLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollToSection(link.id)}
            className="shrink-0 whitespace-nowrap text-sm font-medium text-clay transition-colors hover:text-navy sm:text-base"
          >
            {link.label}
          </button>
        ))}
        <button
          type="button"
          onClick={onOpenPrototype}
          className="shrink-0 whitespace-nowrap text-sm font-medium text-clay transition-colors hover:text-navy sm:text-base"
        >
          Prototype
        </button>
      </div>
    </div>
  );
}
