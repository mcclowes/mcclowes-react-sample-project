import styled from "styled-components/macro";

export const ButtonWrapper = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.sizes.border.radius};
  border: none;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 14px;
  padding: 0.5em 1em;
  border: 2px solid ${props => props.theme.colors.primary};
  display: flex;
  justify-items: center;
  align-items: center;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.alt};
  }

  ${props => (props.fill ? "width: 100%;" : "")};

  ${props => (props.large ? `padding: 0.75em 1.5em;` : "")};

  svg {
    margin-right: 0.5em;
    fill: ${props => props.theme.colors.white};
  }
`;

ButtonWrapper.defaultProps = {
  theme: {
    colors: {
      primary: "#aaa",
      alt: "#888"
    },
    sizes: {
      border: {
        radius: "3px"
      }
    }
  }
};
