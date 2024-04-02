import { createFileRoute } from "@tanstack/react-router";
import App01 from "app01/App01";

export const Route = createFileRoute("/app01")({
  component: App01,
});
