import { skillGroups } from "@/data/skills";
import { Chip, Section, SectionHeading } from "@/components/common/Primitives";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" className="border-t">
      <SectionHeading id="skills-title" eyebrow="Skills" title="Native-first, end to end." />
      <div className="grid gap-10 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-semibold">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s}>
                  <Chip>{s}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
