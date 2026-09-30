import { freelance, freelanceStrengths } from "@/data/freelance";
import { profile } from "@/data/profile";
import { Chip } from "@/components/common/Primitives";
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

/** International freelance block, rendered inside the Experience section. */
export function FreelanceBlock() {
  return (
    <div id="freelance" className="mt-16 scroll-mt-24">
      <h3 className="text-2xl font-semibold tracking-tight">International freelance · Netherlands · United States</h3>
      <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">{profile.freelanceStatement}</p>
      <ul aria-label="Ways of working" className="mt-6 mb-10 flex flex-wrap gap-2">
        {freelanceStrengths.map((s) => (
          <li key={s}>
            <Chip>{s}</Chip>
          </li>
        ))}
      </ul>
      <div className="grid gap-6 md:grid-cols-2">
        {freelance.map((f) => (
          <article key={f.id} className="rounded-2xl border bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {f.country}
            </p>
            <h4 className="mt-2 text-xl font-semibold tracking-tight">
              <TextValue value={f.client} />
            </h4>
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
    </div>
  );
}
