import { NavLink } from "react-router-dom";
import dot from "../assets/icons/dot.svg";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "MY WORK", to: "/work" },
];

export default function Navbar({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const mutedText = tone === "dark" ? "text-gold-muted" : "text-navy/60";
  const activeText = tone === "dark" ? "text-gold-muted border-gold-muted" : "text-navy border-navy";
  const hoverBorder = tone === "dark" ? "hover:border-gold-muted" : "hover:border-navy";
  const nameText = tone === "dark" ? "text-gold" : "text-navy";

  return (
    <nav
      className={`w-full border-b ${tone === "dark" ? "border-white/10" : "border-navy/10"}`}
    >
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 pb-6 pt-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className={`font-display text-lg sm:text-2xl ${nameText}`}>Saumya Mehta</span>
          <img src={dot} alt="" className="size-4 sm:size-5" />
          <span className={`font-display text-lg sm:text-2xl ${nameText}`}>Product Designer</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 sm:gap-x-12 lg:gap-x-16">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `inline-block border-b-[2.5px] px-2 py-2 text-base font-normal tracking-wide transition-[color,border-color,transform] duration-200 ease-out hover:scale-110 active:scale-[1.15] sm:text-lg lg:text-xl ${
                  isActive ? activeText : `border-transparent ${mutedText} ${hoverBorder}`
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
