import React from "react";
import { PlaceholderWrapper } from "./csx";

const Placeholder = props => {
  const { lines = 1 } = props;
  return (
    <>
      {Array(lines)
        .fill(0)
        .map(x => (
          <PlaceholderWrapper />
        ))}
    </>
  );
};

export default Placeholder;
