import { profile } from "@/data/profile";
import { Section, SectionHeading } from "@/components/common/Primitives";

export function About() {
  return (
    <Section id="about" labelledBy="about-title" className="border-t">
      {profile.banner && (
        <img
          src={profile.banner.src}
          alt={profile.banner.alt}
          width={profile.banner.width}
          height={profile.banner.height}
          loading="lazy"
          className="mb-12 h-auto w-full rounded-2xl border"
        />
      )}
      <div className="grid gap-12 md:grid-cols-[1fr_18rem] md:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow="About" title="Product-minded, native-first." />
          <div className="max-w-2xl space-y-5 text-lg text-pretty text-foreground/85">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border bg-surface">
          {profile.portrait ? (
            <img
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              loading="lazy"
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
