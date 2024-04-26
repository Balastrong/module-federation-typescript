import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/app02/")({
  beforeLoad: () => {
    throw redirect({
      to: "/app02/foo",
    });
  },
});
