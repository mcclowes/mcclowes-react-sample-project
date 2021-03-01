import React from "react";
import Text from "./Text";

export default { title: "Text" };

export const text = () => {
  return <Text>Paragraph</Text>;
};

export const header = () => {
  return <Text.Header>Header</Text.Header>;
};

export const paragraph = () => {
  return <Text.Paragraph>Paragraph</Text.Paragraph>;
};

export const meta = () => {
  return <Text.Meta>Meta</Text.Meta>;
};
