import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <div>Header</div>
      <div>
        <Link to="/app01">App01</Link> | <Link to="/app02">App02</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  ),
});
