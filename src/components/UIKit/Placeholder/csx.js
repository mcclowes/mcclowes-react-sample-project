import styled from "styled-components/macro";

export const PlaceholderWrapper = styled.div`
  width: 100%;
  height: 1em;
  opacity: 0.1;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 2px;
  margin: 0.125em 0;

  &:last-of-type:not(:first-of-type) {
    max-width: 70%;
  }
`;

PlaceholderWrapper.defaultProps = {
  theme: {
    colors: {
      black: "#333333",
    },
  },
};
