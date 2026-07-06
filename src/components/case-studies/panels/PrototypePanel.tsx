export default function PrototypePanel() {
  return (
    <div>
      <h2 className="mb-4 font-['Instrument_Sans'] text-2xl font-bold text-navy sm:text-4xl">
        Prototype
      </h2>
      <p className="mb-6 text-lg text-clay sm:mb-8 sm:text-[28px]">
        Explore the interactive prototype below.
      </p>

      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ aspectRatio: "800 / 450" }}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          src="https://embed.figma.com/proto/5hfMEy6fnQC31Nq930BiJv/Sizzle-screens?node-id=46-1870&viewport=-114%2C209%2C0.02&scaling=scale-down&content-scaling=fixed&page-id=29%3A161&embed-host=share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
