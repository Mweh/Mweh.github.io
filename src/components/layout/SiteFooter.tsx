import { Container } from "@/components/common/Primitives";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="no-print border-t py-10">
      <Container className="text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
      </Container>
    </footer>
  );
}
