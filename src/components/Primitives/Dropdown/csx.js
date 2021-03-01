import styled from "styled-components/macro";

export const DropdownPlaceholder = styled.div`
  padding: 0.25em 0.5em;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.value === undefined ? `color: ${props.theme.colors.gray};` : ""};
`;

DropdownPlaceholder.defaultProps = {
  theme: {
    colors: {
      gray: "#aaaaaa",
    },
  },
};

export const DropdownOptions = styled.div`
  ${(props) =>
    props.open
      ? `border-top: 1px solid ${props.theme.colors.gray};`
      : "display:none;"};
`;

DropdownOptions.defaultProps = {
  theme: {
    colors: {
      gray: "#aaaaaa",
    },
  },
};

export const DropdownOption = styled.div``;

export const DropdownWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.sizes.border.radius};
  cursor: pointer;
  background: ${(props) => props.theme.colors.white};

  ${DropdownPlaceholder} {
    svg {
      fill: ${(props) => props.theme.colors.gray};
      transform: ${(props) => (props.open ? "rotate(180deg);" : "")};
    }
  }

  ${DropdownOption} {
    padding: 0.25em 0.5em;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightgray};
    }

    &:active {
      background-color: ${(props) => props.theme.colors.gray};
    }
  }
`;

DropdownWrapper.defaultProps = {
  theme: {
    colors: {
      white: "#ffffff",
      gray: "#aaaaaa",
      lightgray: "#eeeeee",
    },
    sizes: {
      border: {
        radius: "3px",
      },
    },
  },
};
