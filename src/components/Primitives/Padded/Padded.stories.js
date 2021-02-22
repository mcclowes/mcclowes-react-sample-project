import React from "react";
import Padded from "./Padded";

export default { title: "Padded" };

export const simple = () => {
  return <Padded>Some padded text</Padded>;
};

export const nested = () => {
  return (
    <Padded>
      <Padded>
        <Padded>Super nested</Padded>
      </Padded>
    </Padded>
  );
};

export const p1 = () => {
  return <Padded space="p1">Some padded text</Padded>;
};
export const p2 = () => {
  return <Padded space="p2">Some padded text</Padded>;
};
export const p3 = () => {
  return <Padded space="p3">Some padded text</Padded>;
};
export const p4 = () => {
  return <Padded space="p4">Some padded text</Padded>;
};
export const p5 = () => {
  return <Padded space="p5">Some padded text</Padded>;
};
