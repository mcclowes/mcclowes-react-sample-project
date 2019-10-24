import styled from "styled-components/macro";

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
  border-top: 1px solid ${props => props.theme.colors.lightgray};
`;

ActionsWrapper.defaultProps = {
  theme: {
    colors: {
      lightgray: "#eeeeee"
    }
  }
};
