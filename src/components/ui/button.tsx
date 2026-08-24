import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { SiteLink } from "@/components/ui/site-link";

type ButtonVariant = "primary" | "quiet" | "dark";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClass: Record<ButtonVariant, string> = {
  primary: "button button--primary",
  quiet: "button button--quiet",
  dark: "button button--dark",
};

export function ButtonLink({
  children,
  className = "",
  href,
  variant = "quiet",
  ...props
}: ButtonLinkProps) {
  const classes = `${variantClass[variant]} ${className}`.trim();

  return (
    <SiteLink className={classes} href={href} {...props}>
      {children}
    </SiteLink>
  );
}

export function Button({
  children,
  className = "",
  variant = "quiet",
  ...props
}: ButtonProps) {
  return (
    <button className={`${variantClass[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
