import styled from "styled-components/macro";

export const IconWrapper = styled.svg`
  fill: ${props => props.theme.colors.black};
  width: ${props => (props.width ? props.width : "16px")};
  height: ${props => (props.height ? props.height : "16px")};
`;

IconWrapper.defaultProps = {
  theme: {
    colors: {
      black: "#333"
    }
  }
};
