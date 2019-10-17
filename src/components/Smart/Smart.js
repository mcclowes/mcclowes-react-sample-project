import React from "react";
import { SmartWrapper } from "./csx";
import { Button, Text } from "../UIKit";

const Smart = props => {
  const { children, active, setActive } = props;

  return (
    <SmartWrapper>
      {children}

      <Button
        doClick={() => {
          setActive(!active);
        }}
        text="Click me"
      />

      <Text.Meta>{active ? "Active" : "Not active"}</Text.Meta>
    </SmartWrapper>
  );
};

export default Smart;
