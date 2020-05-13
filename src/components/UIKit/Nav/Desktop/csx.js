import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkWrapper = styled(NavLink)`
  padding: 0.5em 1em;

  &.active {
    border-bottom: 1px solid white;
  }
`;

const LogoWrapper = styled(NavLink)`
  padding: 0 1em;
  font-size: 1.2em;
`;

const DesktopWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.lightgray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  align-items: center;

  ${LinkWrapper},
  ${LogoWrapper} {
    font-family: Helventica, Arial, sans-serif;
    text-decoration: none;
    color: white;

    &:hover {
      opacity: 0.75;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;

DesktopWrapper.defaultProps = {
  theme: {
    colors: {
      primary: "#DD3437",
      lightgray: "#eeeeee",
    },
  },
};

export { DesktopWrapper, LogoWrapper, LinksWrapper, LinkWrapper };
