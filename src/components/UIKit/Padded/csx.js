import styled from "styled-components/macro";

export const PaddedWrapper = styled.div`
  ${props => (props.space === "p1" ? "padding: 0.125em;" : "")};
  ${props => (props.space === "p2" ? "padding: 0.25em;" : "")};
  ${props => (props.space === "p3" ? "padding: 0.5em;" : "")};
  ${props => (props.space === "p4" ? "padding: 0.75em;" : "")};
  ${props => (props.space === "p5" ? "padding: 1em;" : "")};

  ${props =>
    props.space === "py1"
      ? "padding-top: 0.125em; padding-bottom: 0.125em;"
      : ""};
  ${props =>
    props.space === "py2"
      ? "padding-top: 0.25em; padding-bottom: 0.25em;"
      : ""};
  ${props =>
    props.space === "py3" ? "padding-top: 0.5em; padding-bottom: 0.5em;" : ""};
  ${props =>
    props.space === "py4"
      ? "padding-top: 0.75em; padding-bottom: 0.75em;"
      : ""};
  ${props =>
    props.space === "py5" ? "padding-top: 1em; padding-bottom: 1em;" : ""};

  ${props =>
    props.space === "px1"
      ? "padding-left: 0.125em; padding-right: 0.125em;"
      : ""};
  ${props =>
    props.space === "px2"
      ? "padding-left: 0.25em; padding-right: 0.25em;"
      : ""};
  ${props =>
    props.space === "px3" ? "padding-left: 0.5em; padding-right: 0.5em;" : ""};
  ${props =>
    props.space === "px4"
      ? "padding-left: 0.75em; padding-right: 0.75em;"
      : ""};
  ${props =>
    props.space === "px5" ? "padding-left: 1em; padding-right: 1em;" : ""};
`;
