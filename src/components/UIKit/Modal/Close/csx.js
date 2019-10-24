import styled from "styled-components/macro";

export const CloseWrapper = styled.div`
  position: absolute;
  right: 13px;
  top: 13px;
  outline: none;
  z-index: 5;

  &,
  * {
    cursor: pointer;
  }
`;

export const CloseButton = styled.button`
  align-items: center;
  border-radius: ${props => props.theme.sizes.border.radius};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 0.5em;

  &:hover {
    background: #eee;
  }
`;

CloseButton.defaultProps = {
  theme: {
    sizes: {
      border: {
        radius: "3px"
      }
    }
  }
};
