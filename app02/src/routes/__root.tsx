import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Link to="/app02/foo">Foo</Link> - <Link to="/app02/bar">Bar</Link>
      <Outlet />
    </div>
  ),
});
