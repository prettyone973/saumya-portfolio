export default function ElderMotionPrototypePanel() {
  return (
    <div>
      <h2 className="font-['Instrument_Sans'] text-xl font-bold text-navy sm:text-[33px]">
        Prototype
      </h2>
      <p className="mt-2 text-sm text-clay sm:text-base">
        Explore the interactive prototype below.
      </p>

      <div
        className="relative mt-8 w-full overflow-hidden rounded-xl border border-paper-border"
        style={{ aspectRatio: "800 / 450" }}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://embed.figma.com/proto/iueHfNiwsepLHyAKEnrH3h/Elder-Fitness-App?node-id=315-820&page-id=0%3A1&starting-point-node-id=315%3A820&scaling=scale-down&content-scaling=fixed&embed-host=share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
