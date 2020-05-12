import styled from "styled-components/macro";
import { styles } from "../../utils";

const breakpointSizes = ["xSmall", "small", "medium", "large", "xLarge"];

export const BreakpointWrapper = styled.div`
  display: none;

  ${(props) =>
    props.sizes &&
    props.sizes.map(
      (size, i) =>
        !!size &&
        styles.breakpoints.breakpoint(
          breakpointSizes[i],
          "only",
          `
                  display: initial;
                `
        )
    )};
`;
