import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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
`;

MobileWrapper.defaultProps = {
  theme: {
    colors: {
      primary: "#DD3437",
      lightgray: "#eeeeee",
    },
  },
};

const BackWrapper = styled(Link)`
  width: 26px;
  padding: 1em;
  color: white;
  text-decoration: none;
`;

const LogoWrapper = styled.div``;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 100px;
`;

const LinkWrapper = styled(Link)`
  padding: 0.5em 1em;
  text-decoration: none;
  color: black;
`;

const Overlay = styled.div`
  background-color: #00000044;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
`;

export {
  BackWrapper,
  LinkWrapper,
  LinksWrapper,
  LogoWrapper,
  MobileWrapper,
  Overlay,
};
