import styled from "styled-components/macro";

export const ButtonWrapper = styled.button`
  border-radius: ${props => props.theme.sizes.border.radius};
  cursor: pointer;
  font-size: 14px;
  padding: 0.5em 1em;
  display: flex;
  justify-items: center;
  align-items: center;
  border: 2px solid ${props => props.theme.colors.primary};

  ${props =>
    props.subtle
      ? `
      background: ${props.theme.colors.white};
      color: ${props.theme.colors.primary};
    `
      : `
      background: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};
    `}

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
      primary: "#aaaaaa",
      alt: "#888888",
      white: "#ffffff"
    },
    sizes: {
      border: {
        radius: "3px"
      }
    }
  },
  subtle: false
};
