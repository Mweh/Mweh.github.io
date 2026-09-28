/**
 * Placeholder convention.
 *
 * Any content that has not been provided yet is written as `ph("what is missing")`.
 * It renders on the page as a dashed "To be added" label, so gaps are always visible.
 * Search the codebase for `ph(` to list everything still to fill in.
 */
export interface Placeholder {
  readonly __placeholder: true;
  readonly label: string;
}

/** Text that is either real content or a visible placeholder. */
export type Text = string | Placeholder;

export const ph = (label: string): Placeholder => ({ __placeholder: true, label });

export const isPlaceholder = (value: unknown): value is Placeholder =>
  typeof value === "object" && value !== null && "__placeholder" in value;

/** Plain-string version for places that cannot render UI (meta tags, JSON-LD). */
export const textOr = (value: Text | undefined, fallback = ""): string =>
  value === undefined || isPlaceholder(value) ? fallback : value;
