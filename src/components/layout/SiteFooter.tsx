import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { Container } from "@/components/common/Primitives";
import { isPlaceholder } from "@/lib/placeholder";

export function SiteFooter() {
  const links = socialLinks.filter((l) => !isPlaceholder(l.href));
  return (
    <footer className="no-print border-t py-10">
      <Container className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
        {links.length > 0 && (
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.id}>
                <a href={l.href as string} className="hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </footer>
  );
}
