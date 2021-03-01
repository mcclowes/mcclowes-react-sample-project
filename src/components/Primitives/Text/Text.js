import React from "react";
import { Header, Paragraph, Meta } from "./csx";
import PropTypes from "prop-types";

const Text = (props) => {
  const { children } = props;

  return <Paragraph>{children}</Paragraph>;
};

Text.propTypes = {
  children: PropTypes.any,
};

Text.Header = Header;
Text.Paragraph = Paragraph;
Text.Meta = Meta;

export default Text;
