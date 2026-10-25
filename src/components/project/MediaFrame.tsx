import type { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

/** Shows a real project image, or a clean title tile until one exists. Never fake screenshots. */
export function MediaFrame({
  image,
  images = [],
  label,
  caption,
  className,
  priority = false,
}: {
  image?: ProjectImage | undefined;
  images?: ProjectImage[];
  label: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  const screenshots = images.slice(0, 3);
  const hasScreenshots = screenshots.length > 0;
  return (
    <div className={cn("relative overflow-hidden rounded-lg border bg-surface", image || hasScreenshots ? "aspect-[16/9]" : "min-h-28", className)}>
      {hasScreenshots ? (
        <div className="grid h-full grid-cols-3 gap-2 p-2">
          {screenshots.map((screenshot) => (
            <img
              key={screenshot.src}
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="h-full min-h-0 w-full min-w-0 object-contain"
            />
          ))}
        </div>
      ) : image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-contain"
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
