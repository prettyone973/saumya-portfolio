import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "primary" | "secondary";

const base =
  "gold-shine-ring inline-flex items-center justify-center rounded-full px-6 py-2.5 font-['Instrument_Sans'] font-medium text-base tracking-wide uppercase select-none transition-[transform,filter] duration-[180ms] ease-out hover:scale-[1.04] hover:brightness-110";

const variantStyles: Record<Variant, string> = {
  primary: "bg-gold text-navy",
  secondary: "bg-transparent text-gold border border-gold",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined };
type AsLink = CommonProps & Omit<LinkProps, "className" | "children"> & { href?: undefined };
type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { to?: undefined };

type ButtonProps = AsButton | AsLink | AsAnchor;

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if ("to" in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as AsLink;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AsAnchor;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as AsButton)}>
      {children}
    </button>
  );
}
