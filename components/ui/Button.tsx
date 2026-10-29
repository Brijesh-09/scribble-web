import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "glass";
  children: ReactNode;
  className?: string;
};

// feedback lives on the press, and it's instant
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[17px] font-semibold transition-transform duration-100 ease-out active:scale-[0.97]";

export function Button({ href, variant = "primary", children, className = "" }: Props) {
  const look = variant === "primary" ? "bg-chalk text-ink" : "glass text-chalk";
  return (
    <a href={href} className={`${base} ${look} ${className}`}>
      {children}
    </a>
  );
}
