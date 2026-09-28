import { Link } from "@tanstack/react-router";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { Container } from "@/components/common/Primitives";
import { ExternalLink } from "@/components/common/ExternalLink";
import { isPlaceholder } from "@/lib/placeholder";
import { Button } from "@/components/ui/button";

export function Hero() {
  const cvReady = !isPlaceholder(profile.cvUrl);
  return (
    <section aria-labelledby="hero-title" className="pt-16 pb-20 sm:pt-28 sm:pb-28">
      <Container>
        <div className="animate-enter max-w-4xl">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{profile.name}</span>
            <span aria-hidden className="h-3 w-px bg-border" />
            <span>
              {profile.title} · {profile.experienceYears} years
            </span>
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl"
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
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link to="/" hash="work">
                View Selected Work <ArrowDown aria-hidden />
              </Link>
            </Button>
            {cvReady ? (
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6">
                <a href={profile.cvUrl as string} download>
                  Download CV <Download aria-hidden />
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6">
                <Link to="/resume">
                  Download CV <Download aria-hidden />
                </Link>
              </Button>
            )}
          </div>
          <ul aria-label="Profiles" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {socialLinks.map((l) =>
              isPlaceholder(l.href) ? null : (
                <li key={l.id}>
                  <ExternalLink href={l.href} className="text-muted-foreground hover:text-foreground">
                    {l.label}
                  </ExternalLink>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
}
