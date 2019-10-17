import React from "react";
import { SmartWrapper } from "./csx";

const Smart = props => {
  const { children, clicked, setClicked } = props;

  return (
    <SmartWrapper>
      <div>{clicked ? "Active" : "Not active"}</div>

      <button
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        Click me
      </button>

      {children}
    </SmartWrapper>
  );
};

export default Smart;
