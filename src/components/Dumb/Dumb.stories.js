import React from "react";
import Dumb from "./Dumb";

export default { title: "Dumb" };

export const withText = () => {
  return <Dumb>Hello Dumb</Dumb>;
};

export const withEmoji = () => {
  return (
    <Dumb>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Dumb>
  );
};
