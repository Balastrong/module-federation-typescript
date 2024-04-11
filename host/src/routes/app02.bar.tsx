import { createFileRoute } from "@tanstack/react-router";
import Bar from "app02/Bar";

export const Route = createFileRoute("/app02/bar")({
  component: Bar,
});
