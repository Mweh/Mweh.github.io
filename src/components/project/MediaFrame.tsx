import type { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

/** Shows a real project image, or a clean title tile until one exists. Never fake screenshots. */
export function MediaFrame({
  image,
  label,
  caption,
  className,
  priority = false,
}: {
  image?: ProjectImage | undefined;
  label: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg border bg-surface", image ? "aspect-[4/3]" : "min-h-28", className)}>
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
        <div aria-hidden className="flex h-full flex-col justify-end p-6">
          <p className="text-2xl font-semibold text-foreground/90">{label}</p>
          {caption && <p className="mt-2 font-mono text-xs text-muted-foreground">{caption}</p>}
        </div>
      )}
    </div>
  );
}
