import { useEffect, useRef } from "react";

/**
 * Progressive reveal. Content stays visible without JS; on the client the element is
 * marked "pending" only if it is below the fold, then "done" when it scrolls into view.
 * Reduced motion is handled in CSS.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset["reveal"] = "pending";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset["reveal"] = "done";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
