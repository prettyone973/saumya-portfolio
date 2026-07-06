import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="paper-texture min-h-screen bg-beige">
      <Navbar tone="light" />
      <div className="mx-auto max-w-[1280px] px-10 py-16">
        <h1 className="font-['Instrument_Sans'] text-4xl font-semibold text-navy sm:text-5xl">
          Contact
        </h1>
        <p className="mt-6 max-w-[712px] text-lg text-ink">Page content coming soon.</p>
      </div>
    </div>
  );
}
