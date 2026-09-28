import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{children}</p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mb-10 max-w-2xl sm:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-pretty text-muted-foreground">{intro}</p>}
    </header>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-card px-3 py-1 text-sm text-foreground/80">
      {children}
    </span>
  );
}

/** Section wrapper with progressive reveal. */
export function Section({
  id,
  labelledBy,
  children,
  className,
}: {
  id?: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-20 py-20 sm:py-28", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
