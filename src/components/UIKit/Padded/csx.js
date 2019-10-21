import styled from "styled-components/macro";

export const PaddedWrapper = styled.div`
  ${props => (props.space === "p1" ? "padding: 0.125em;" : "")};
  ${props => (props.space === "p2" ? "padding: 0.25em;" : "")};
  ${props => (props.space === "p3" ? "padding: 0.5em;" : "")};
  ${props => (props.space === "p4" ? "padding: 0.75em;" : "")};
  ${props => (props.space === "p5" ? "padding: 1em;" : "")};
`;
