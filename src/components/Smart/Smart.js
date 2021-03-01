import React from "react";
import { SmartWrapper, SmartContent } from "./csx";
import { Button, Text, Padded } from "../Primitives";

const Smart = (props) => {
  const { children, active, setActive } = props;

  return (
    <SmartWrapper>
      {children}

      <SmartContent>
        <Button
          doClick={() => {
            setActive(!active);
          }}
          text="Click me"
        />

        <Padded space="p3">
          <Text.Meta>{active ? "Active" : "Not active"}</Text.Meta>
        </Padded>
      </SmartContent>
    </SmartWrapper>
  );
};

export default Smart;
