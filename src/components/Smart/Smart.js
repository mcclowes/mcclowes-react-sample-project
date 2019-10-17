import React from "react";
import { SmartWrapper } from "./csx";
import { Button, Text } from "../UIKit";

const Smart = props => {
  const { children, active, setActive } = props;

  return (
    <SmartWrapper>
      <Text.Meta>{active ? "Active" : "Not active"}</Text.Meta>

      <Button
        doClick={() => {
          setActive(!active);
        }}
        text="Click me"
      />

      {children}
    </SmartWrapper>
  );
};

export default Smart;
