import styled from "styled-components";
import * as colors from "../../../helpers/colors";

export const ButtonWrapper = styled("button")`
  background: ${colors.button.background};
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${colors.button.hover};
  }

  &:active {
    background: ${colors.button.active};
  }

  &:focus {
    outline: none;
    border: 2px solid ${colors.button.border};
  }
`;
