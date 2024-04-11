import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app02/bar")({
  component: () => <div>Bar Page!</div>,
});
