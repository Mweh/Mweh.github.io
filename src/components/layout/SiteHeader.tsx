import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/common/Primitives";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

/** Home sections scroll in place; Resume is its own page. */
const nav = [
  { label: "Work", hash: "work" },
  { label: "Experience", hash: "experience" },
  { label: "About", hash: "about" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", hash: "contact" },
] as const;

const NavLink = ({ item, className, onClick }: { item: (typeof nav)[number]; className: string; onClick?: () => void }) =>
  "to" in item ? (
    <Link to={item.to} className={className} onClick={onClick}>{item.label}</Link>
  ) : (
    <Link to="/" hash={item.hash} className={className} onClick={onClick}>{item.label}</Link>
  );

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="text-[0.95rem] font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 sm:flex">
          {nav.map((item) => (
            <NavLink key={item.label} item={item} className={linkClass} />
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-md sm:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[82vw] max-w-sm">
            <SheetTitle className="text-left">Menu</SheetTitle>
            <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
              <Link to="/" onClick={() => setOpen(false)} className="py-3 text-2xl font-semibold">
                Home
              </Link>
              {nav.map((item) => (
                <NavLink key={item.label} item={item} onClick={() => setOpen(false)} className="py-3 text-2xl font-semibold" />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
