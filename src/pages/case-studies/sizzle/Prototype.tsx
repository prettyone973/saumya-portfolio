import Navbar from "../../../components/Navbar";
import PhaseCard from "../../../components/case-studies/PhaseCard";

export default function Prototype() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />

      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-8 py-16 sm:px-14">
        <PhaseCard
          phase={{
            number: "06",
            title: "Prototype",
            description: "An interactive walkthrough of the final high-fidelity prototype",
          }}
        />

        <div className="rounded-xl border border-paper-border bg-paper p-6 sm:p-10">
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
      </div>
    </div>
  );
}
