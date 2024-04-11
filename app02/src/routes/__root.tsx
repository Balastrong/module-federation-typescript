import {
  Link,
  Outlet,
  createRootRoute,
  useNavigate,
} from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: window.location.pathname });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return (
    <div>
      <Link to="/app02/foo">Foo</Link> - <Link to="/app02/bar">Bar</Link>
      <Outlet />
    </div>
  );
}
