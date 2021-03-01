import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import Breakpoint from "../../Breakpoint";

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
  padding: 0.5em 1em;
  font-size: 1.2em;
`;

const DesktopWrapper = styled(Breakpoint)`
  align-items: center;
  color: ${(props) => props.theme.nav.text};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  position: absolute;
  width: 100%;

  ${(props) => props.theme.nav.background && `${props.theme.nav.background}`};

  ${LinkWrapper},
  ${LogoWrapper} {
    font-family: "Cantarell", sans-serif;
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
    nav: {
      background: "#DD3437",
      text: "#eeeeee",
    },
  },
};

export { DesktopWrapper, LogoWrapper, LinksWrapper, LinkWrapper };
