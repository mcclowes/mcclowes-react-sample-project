import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import Breakpoint from "../../Breakpoint";

const BackWrapper = styled.div`
  width: 26px;
  padding: 1em;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const LogoWrapper = styled(NavLink)`
  padding: 0 1em;
  font-size: 1.2em;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

const LinkWrapper = styled(NavLink)`
  padding: 0.5em 1em;
  text-decoration: none;
  color: black;

  &.active {
    border-bottom: 1px solid black;
  }
`;

const Overlay = styled.div`
  background-color: #ffffffdd;
  height: calc(100vh - 4em);
  position: absolute;
  width: 100%;
`;

const NavBar = styled.div`
  align-items: center;
  color: ${(props) => props.theme.nav.text};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  position: relative;
  z-index: 1;

  ${(props) => props.theme.nav.background && `${props.theme.nav.background}`};

  ${BackWrapper},
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

NavBar.defaultProps = {
  theme: {
    nav: {
      background: "#DD3437",
      text: "#eeeeee",
    },
  },
};

const MobileWrapper = styled(Breakpoint)`
  position: absolute;
  width: 100%;
`;

export {
  BackWrapper,
  LinkWrapper,
  LinksWrapper,
  LogoWrapper,
  NavBar,
  Overlay,
  MobileWrapper,
};
