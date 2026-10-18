import { isPlaceholder, type Text } from "@/lib/placeholder";
import { cn } from "@/lib/utils";

/**
 * Renders real text. Missing content shows as a dashed "To be added" label while
 * developing, and as a quiet "Available on request" on the published site.
 */
export function TextValue({ value, className }: { value: Text; className?: string }) {
  if (isPlaceholder(value)) {
    if (!import.meta.env.DEV) {
      return <span className={cn("text-muted-foreground", className)}>Available on request</span>;
    }
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md border border-dashed border-placeholder-foreground/40 bg-placeholder px-2 py-0.5 font-mono text-[0.8em] text-placeholder-foreground",
          className,
        )}
      >
        <span aria-hidden>+</span>
        <span>To be added: {value.label}</span>
      </span>
    );
  }
  return <span className={className}>{value}</span>;
}
