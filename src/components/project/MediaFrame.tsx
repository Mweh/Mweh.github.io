import type { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

/** Shows a real project image, or a clearly labeled empty frame. Never fake screenshots. */
export function MediaFrame({
  image,
  label,
  className,
  priority = false,
}: {
  image?: ProjectImage | undefined;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-xl border bg-surface",
        className,
      )}
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
          <div
            aria-hidden
            className="h-24 w-12 rounded-[0.9rem] border-2 border-dashed border-muted-foreground/30"
          />
          <p className="font-mono text-xs text-muted-foreground">
            {label} — screenshot to be added
          </p>
        </div>
      )}
    </div>
  );
}
