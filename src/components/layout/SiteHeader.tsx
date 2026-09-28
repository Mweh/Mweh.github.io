import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/common/Primitives";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { label: "Work", to: "/work" },
  { label: "Resume", to: "/resume" },
] as const;

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
            <Link key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <Link to="/" hash="contact" className={linkClass}>
            Contact
          </Link>
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
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-2xl font-semibold"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/"
                hash="contact"
                onClick={() => setOpen(false)}
                className="py-3 text-2xl font-semibold"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
