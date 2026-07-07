export default function PrototypePanel() {
  return (
    <div>
      <h2 className="font-['Instrument_Sans'] text-xl font-bold text-navy sm:text-[30px]">
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
          src="https://embed.figma.com/proto/5hfMEy6fnQC31Nq930BiJv/Sizzle-screens?node-id=46-1870&viewport=-114%2C209%2C0.02&scaling=scale-down&content-scaling=fixed&page-id=29%3A161&embed-host=share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
