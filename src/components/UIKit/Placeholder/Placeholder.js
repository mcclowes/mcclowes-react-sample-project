import PropTypes from "prop-types";
import React from "react";
import { PlaceholderWrapper } from "./csx";

const Placeholder = (props) => {
  const { lines = 1 } = props;

  return (
    <>
      {Array(lines)
        .fill(0)
        .map((_, i) => (
          <PlaceholderWrapper key={i} />
        ))}
    </>
  );
};

Placeholder.propTypes = {
  lines: PropTypes.number,
};

export default Placeholder;
