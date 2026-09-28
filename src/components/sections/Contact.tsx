import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/socialLinks";
import { Section } from "@/components/common/Primitives";
import { TextValue } from "@/components/common/TextValue";
import { isPlaceholder } from "@/lib/placeholder";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" className="border-t">
      <h2
        id="contact-title"
        className="max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-6xl"
      >
        Have an iOS project in mind?
      </h2>
      <ul className="mt-12 divide-y border-y">
        {socialLinks.map((l) => (
          <li key={l.id}>
            {isPlaceholder(l.href) ? (
              <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-lg font-medium">{l.label}</span>
                <TextValue value={l.href} />
              </div>
            ) : (
              <a
                href={l.href}
                className="group flex items-center justify-between py-5"
                {...(/^https?:/.test(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="text-lg font-medium">{l.label}</span>
                <span className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground">
                  <TextValue value={l.handle} />
                  <ArrowUpRight aria-hidden className="size-4" />
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
