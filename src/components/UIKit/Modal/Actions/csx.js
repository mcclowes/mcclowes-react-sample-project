import styled from "styled-components/macro";
import { styles } from "../../../utils";

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
  border-top: 1px solid ${props => props.theme.colors.lightgray};

  ${styles.breakpoints.breakpoint(
    "small",
    "max",
    `
    flex-direction: column;
    flex-flow: column-reverse;

    > div {
      width: 100%;

      > button {
        width: 100%;
        display: inline-block;
        text-align: center;
      }
    }
  `
  )}
`;

ActionsWrapper.defaultProps = {
  theme: {
    colors: {
      lightgray: "#eeeeee"
    }
  }
};
