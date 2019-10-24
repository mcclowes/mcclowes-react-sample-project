import styled from "styled-components/macro";

export const HeaderWrapper = styled.div`
  padding: 1em;
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
`;

HeaderWrapper.defaultProps = {
  theme: {
    colors: {
      lightgray: "#eeeeee"
    }
  }
};
