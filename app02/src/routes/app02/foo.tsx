import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app02/foo")({
  component: () => <div>Foo Page!</div>,
});
