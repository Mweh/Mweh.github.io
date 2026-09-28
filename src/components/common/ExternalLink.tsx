import type { ReactNode } from "react";
import { isPlaceholder, type Text } from "@/lib/placeholder";
import { TextValue } from "./TextValue";

/** Link whose href may still be a placeholder; renders the placeholder label instead of a dead link. */
export function ExternalLink({
  href,
  children,
  className,
}: {
  href: Text;
  children: ReactNode;
  className?: string;
}) {
  if (isPlaceholder(href)) return <TextValue value={href} />;
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
