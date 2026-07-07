export default function IMobilePrototypePanel() {
  return (
    <div>
      <h2 className="font-['Instrument_Sans'] text-2xl font-bold text-navy sm:text-4xl">
        Prototype
      </h2>
      <p className="mt-2 text-sm text-clay sm:text-base">
        This is a linear prototype flow covering two specific interactions: onboarding and
        changing the security PIN. It is not a full end-to-end prototype of the entire app.
      </p>

      <div
        className="relative mt-8 w-full overflow-hidden rounded-xl border border-paper-border"
        style={{ aspectRatio: "800 / 450" }}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://embed.figma.com/proto/6m30aEq6SThWwSXDeh4gtd/Redesign--Copy-?node-id=32-79&viewport=184%2C408%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A3&page-id=0%3A1&show-proto-sidebar=1&embed-host=share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
