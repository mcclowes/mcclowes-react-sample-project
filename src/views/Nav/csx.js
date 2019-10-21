import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  ${props =>
    props["data-active"] === true ? "border-bottom: 1px solid white;" : ""};
`;

export const NavWrapper = styled.div`
  position: absolute;
  padding: 1em 2em;

  ${NavLink} {
    color: white;
    text-decoration: none;

    &:hover {
      opacity: 0.75;
    }

    &:active {
      opacity: 0.5;
    }

    &:not(:first-child) {
      margin-left: 1em;
    }
  }
`;
