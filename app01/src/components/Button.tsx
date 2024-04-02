import "./Button.css";

import { useState } from "react";

export const Button = () => {
  const [state, setState] = useState<number>(0);
  return (
    <div>
      <button
        id="click-btn"
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
      >
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
