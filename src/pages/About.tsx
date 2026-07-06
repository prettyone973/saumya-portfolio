import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-navy-deep">
      <Navbar tone="dark" />
      <div className="mx-auto max-w-[1280px] px-10 py-16">
        <h1 className="font-display text-5xl text-cream-text sm:text-6xl">About Me</h1>
        <p className="mt-6 max-w-[712px] text-2xl text-gold-muted">
          Page content coming soon.
        </p>
      </div>
    </div>
  );
}
