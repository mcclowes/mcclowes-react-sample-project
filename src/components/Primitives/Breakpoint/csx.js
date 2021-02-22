import styled from "styled-components/macro";
import { breakpoint, breakpointSizes } from "../../../utils/styles/breakpoints";
import PropTypes from "prop-types";

const createBreakpointRule = (size, i) => {
  if (size) return "";

  return `
    ${breakpoint(breakpointSizes[i], "only")} {
      display: none;
    }
  `;
};

export const Breakpoint = styled.div`
  ${({ sizes }) =>
    sizes && sizes.map((size, i) => createBreakpointRule(size, i))};
`;

Breakpoint.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.bool),
};
