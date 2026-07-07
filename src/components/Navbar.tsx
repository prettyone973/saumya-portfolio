import { NavLink } from "react-router-dom";
import dot from "../assets/icons/dot.svg";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "MY WORK", to: "/work" },
  { label: "CONTACT", to: "/contact" },
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
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 pb-6 pt-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center gap-3">
          <span className={`font-display text-2xl ${nameText}`}>Saumya Mehta</span>
          <img src={dot} alt="" className="size-5" />
          <span className={`font-display text-2xl ${nameText}`}>Product Designer</span>
        </div>
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `border-b-[2.5px] px-2 py-2 text-xl font-normal tracking-wide transition-colors duration-150 ${
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
