import styled from "styled-components/macro";

const spaces = {
  0: "0",
  1: "0.125em",
  2: "0.25em",
  3: "0.5em",
  4: "0.75em",
  5: "1em",
};

const getDirection = (direction) => {
  if (direction === "t") return "-top";
  if (direction === "b") return "-bottom";
  if (direction === "l") return "-left";
  if (direction === "r") return "-right";
  return "";
};

const getSpacing = (space) => {
  const [padding, amount] = space.match(/[a-z]+|[^a-z]+/gi);

  const spaceType = padding.split("")[0] === "p" ? "padding" : "margin";
  const direction = getDirection(padding.split("")[1]);

  return spaceType + direction + ": " + spaces[amount];
};

export const PaddedWrapper = styled.div`
  ${(props) => props.space && getSpacing(props.space)};
`;
