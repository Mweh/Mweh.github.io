import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // The static prerender crawler always requests URLs with a trailing slash;
    // "preserve" stops the router from 307-redirecting /work/ -> /work, which
    // otherwise loops the crawler ("Max redirects reached") and skips the page.
    trailingSlash: "preserve",
  });

  return router;
};
