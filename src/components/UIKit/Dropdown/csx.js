import styled from "styled-components";

export const DropdownPlaceholder = styled.div`
  padding: 0.25em 0.5em;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  ${props => (props.value ? "" : "color: #aaa;")};

  svg {
    fill: #aaa;
  }
`;

export const DropdownOptions = styled.div`
  ${props => (props.open ? "" : "display:none;")};
`;

export const DropdownOption = styled.div`
  padding: 0.25em 0.5em;
`;

export const DropdownWrapper = styled.div`
  border: 1px solid #aaa;
  border-radius: 3px;
  cursor: pointer;
`;