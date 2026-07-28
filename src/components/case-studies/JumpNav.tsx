function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Props = {
  links: { id: string; label: string }[];
  actions: { label: string; onClick: () => void }[];
};

export default function JumpNav({ links, actions }: Props) {
  return (
    <div className="sticky top-0 z-30 border-b border-paper-border bg-beige/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-6 gap-y-2 overflow-x-auto px-6 py-3 sm:px-10 lg:px-16 xl:px-20">
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollToSection(link.id)}
            className="shrink-0 whitespace-nowrap text-sm font-medium text-clay transition-colors hover:text-navy sm:text-base"
          >
            {link.label}
          </button>
        ))}
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.onClick}
            className="shrink-0 whitespace-nowrap text-sm font-medium text-clay transition-colors hover:text-navy sm:text-base"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
