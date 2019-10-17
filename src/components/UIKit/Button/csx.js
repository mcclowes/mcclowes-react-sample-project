import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: red;
  border-radius: 3px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 0.5em 1em;
  border: 2px solid red;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border: 2px solid teal;
  }

  ${props => (props.fill ? "width: 100%;" : "")};

  ${props => (props.large ? `padding: 0.75em 1.5em;` : "")};
`;
