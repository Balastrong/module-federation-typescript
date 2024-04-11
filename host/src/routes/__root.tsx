import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  beforeLoad: () => {
    console.log("Root Before Load");
  },
  component: () => (
    <div>
      <div>Header</div>
      <div>
        <Link to="/app01">App01</Link> | <Link to="/app02">App02</Link> |{" "}
        <Link to="/app02/bar">App02-Bar</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  ),
});
