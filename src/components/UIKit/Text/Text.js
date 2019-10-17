import React from "react";
import { Header, Paragraph, Meta } from "./csx";

const Text = props => {
  const { children } = props;

  return <Paragraph>{children}</Paragraph>;
};

Text.Header = Header;
Text.Paragraph = Paragraph;
Text.Meta = Meta;

export default Text;
