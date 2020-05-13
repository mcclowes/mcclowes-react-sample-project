import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

const BackWrapper = styled(NavLink)`
  width: 26px;
  padding: 1em;
  color: white;
  text-decoration: none;
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
  margin-top: 100px;
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
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;

const MobileWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.lightgray};
  display: flex;
  flex-direction: row;
  padding: 1em 2em;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  position: relative;

  ${BackWrapper},
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

MobileWrapper.defaultProps = {
  theme: {
    colors: {
      primary: "#DD3437",
      lightgray: "#eeeeee",
    },
  },
};

export {
  BackWrapper,
  LinkWrapper,
  LinksWrapper,
  LogoWrapper,
  MobileWrapper,
  Overlay,
};
