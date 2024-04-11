import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app02/")({
  component: () => <div>Hello /app02/!</div>,
});
