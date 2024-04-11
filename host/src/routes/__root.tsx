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
      <div>Header</div>
      <div>
        <Link to="/app01">App01</Link> | <Link to="/app02">App02</Link>
        <button onClick={() => navigate({ to: "/app02/bar", state: true })}>
          Bar
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
