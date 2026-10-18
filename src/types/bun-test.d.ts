// Minimal types for Bun's built-in test runner (avoids adding @types/bun).
declare module "bun:test" {
  export const describe: (name: string, fn: () => void) => void;
  export const test: (name: string, fn: () => void) => void;
  export const expect: (value: unknown) => any;
}
