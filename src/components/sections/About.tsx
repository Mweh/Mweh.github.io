import { profile } from "@/data/profile";
import { siteContent } from "@/data/site";
import { Section, SectionHeading } from "@/components/common/Primitives";

export function About() {
  return (
    <Section id="about" labelledBy="about-title" className="border-t">
      <div className="grid gap-12 md:grid-cols-[1fr_18rem] md:gap-16">
        <div className="order-2 md:order-1">
          <SectionHeading id="about-title" eyebrow="About" title={siteContent.aboutTitle} />
          <div className="max-w-2xl space-y-5 text-lg text-pretty text-foreground/85">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="order-1 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg border bg-surface md:order-2">
          {profile.portrait ? (
            <img
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              width={profile.portrait.width}
              height={profile.portrait.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center font-mono text-xs text-muted-foreground">
              Portrait to be added
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
