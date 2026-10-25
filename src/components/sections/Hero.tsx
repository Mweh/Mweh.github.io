import { Link } from "@tanstack/react-router";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { Container } from "@/components/common/Primitives";
import { ExternalLink } from "@/components/common/ExternalLink";
import { SocialIcon } from "@/components/common/SocialIcon";
import { isPlaceholder } from "@/lib/placeholder";
import { Button } from "@/components/ui/button";

const iconLink =
  "inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20">
      <Container>
        <div className="animate-enter max-w-4xl">
          <div className="flex items-center gap-4">
            {profile.avatar && (
              <img src={profile.avatar.src} alt={profile.avatar.alt} width={profile.avatar.width} height={profile.avatar.height} decoding="async" className="size-16 shrink-0 rounded-lg border object-cover sm:size-20" />
            )}
          <p className="min-w-0 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{profile.name}</span>
            <span className="mt-1 block">
              {profile.title} · {profile.experienceYears} years
            </span>
          </p>
          </div>
          <h1
            id="hero-title"
            className="mt-6 text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl lg:text-6xl"
          >
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">
            {profile.supportingStatement}
          </p>
          <ul aria-label="Core technologies" className="mt-6 flex flex-wrap gap-x-3 font-mono text-sm text-accent">
            {profile.technologyLine.map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-muted-foreground/50">·</span>}
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/" hash="work">
                  View Selected Work <ArrowDown aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6">
                <a href={profile.cvUrl} download>
                  Download CV <Download aria-hidden />
                </a>
              </Button>
            </div>
            <ul aria-label="Profiles" className="flex items-center gap-2 sm:pl-1">
              {socialLinks.map((l) =>
                isPlaceholder(l.href) ? null : (
                  <li key={l.id}>
                    <ExternalLink href={l.href} className={iconLink}>
                      <SocialIcon id={l.id} className="size-[18px]" />
                      <span className="sr-only">{l.label}</span>
                    </ExternalLink>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
