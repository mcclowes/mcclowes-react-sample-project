import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const DesktopWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.lightgray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  align-items: center;
`;

DesktopWrapper.defaultProps = {
  theme: {
    colors: {
      primary: "#DD3437",
      lightgray: "#eeeeee",
    },
  },
};

const LogoWrapper = styled.div``;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkWrapper = styled(Link)`
  padding: 0 1em;
`;

export { DesktopWrapper, LogoWrapper, LinksWrapper, LinkWrapper };
