import { freelance, freelanceStrengths } from "@/data/freelance";
import { profile } from "@/data/profile";
import { Chip, Section, SectionHeading } from "@/components/common/Primitives";
import { TextValue } from "@/components/common/TextValue";
import type { FreelanceEntry } from "@/types/experience";

const fields: Array<[keyof FreelanceEntry, string]> = [
  ["industry", "Client / Industry"],
  ["role", "My Role"],
  ["problem", "Problem"],
  ["built", "What I Built"],
  ["technologies", "Technologies"],
  ["contribution", "My Contribution"],
  ["outcome", "Outcome"],
];

export function Freelance() {
  return (
    <Section id="freelance" labelledBy="freelance-title" className="border-t bg-surface">
      <SectionHeading
        id="freelance-title"
        eyebrow="International Freelance"
        title="Netherlands · United States"
        intro={profile.freelanceStatement}
      />
      <ul aria-label="Ways of working" className="mb-12 flex flex-wrap gap-2">
        {freelanceStrengths.map((s) => (
          <li key={s}>
            <Chip>{s}</Chip>
          </li>
        ))}
      </ul>
      <div className="grid gap-6 md:grid-cols-2">
        {freelance.map((f) => (
          <article key={f.id} className="rounded-2xl border bg-card p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {f.country}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              <TextValue value={f.client} />
            </h3>
            <dl className="mt-6 space-y-3 text-sm">
              {fields.map(([key, label]) => (
                <div key={key} className="grid gap-1 sm:grid-cols-[9rem_1fr]">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd>
                    <TextValue value={f[key]} />
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
