import styled from "styled-components/macro";

const DEFAULT_PROPS = {
  borderRadius: 0,
  layerHeight: 5,
  layerSpacing: 2,
  layerWidth: 10,
  transitionDuration: 0.5,
  highlightColor: {
    xs: "white",
  },
  padding: {
    xs: 3,
  },
};

const BurgerWrapper = styled.div`
  width: ${(props) => props.layerWidth + 2 * props.padding.xs}px;
  height: ${(props) =>
    3 * props.layerHeight + 2 * props.layerSpacing + 2 * props.padding.xs}px;
  position: relative;
  cursor: pointer;
`;

BurgerWrapper.defaultProps = {
  ...DEFAULT_PROPS,
};

const Bar = styled.div`
  width: ${(props) => props.layerWidth}px;
  height: ${(props) => props.layerHeight}px;
  background-color: ${(props) => props.highlightColor.xs};
  border-radius: ${(props) => props.borderRadius}px;
  position: absolute;
  transition-property: transform;
  transition-duration: ${(props) => 0.15 * 2 * props.transitionDuration}s;
  transition-timing-function: ease;
`;

Bar.defaultProps = {
  ...DEFAULT_PROPS,
};

const BottomBar = styled(Bar)`
  margin-top: ${(props) => props.layerHeight / -2}px;
  bottom: ${(props) => props.padding.xs}px;
  left: ${(props) => props.padding.xs}px;
  ${(props) =>
    props.open
      ? `transform: translate3d(0, ${
          (props.layerSpacing + props.layerHeight) * -1
        }px, 0) rotate(-45deg);`
      : ""} transition-duration: ${(props) =>
    0.15 * 2 * props.transitionDuration}s;
  transition-delay: ${(props) =>
    props.open
      ? 0.32 * 2 * props.transitionDuration
      : 0.15 * 2 * props.transitionDuration}s;
  transition-timing-function: ${(props) =>
    props.open
      ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
      : "cubic-bezier(0.55, 0.055, 0.675, 0.19)"};
`;

BottomBar.defaultProps = {
  ...DEFAULT_PROPS,
};

const MiddleBar = styled(Bar)`
  top: ${(props) =>
    props.open ? 0 : (props.layerSpacing + props.layerHeight) * -1}px;
  ${(props) => (props.open ? "transform: rotate(-90deg);" : "")} ${(
    props
  ) => `transition:
    top
    ${0.12 * 2 * props.transitionDuration}s
    ${(props.open ? 0.18 : 0.3) * 2 * props.transitionDuration}s
    cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    transform
    ${0.15 * 2 * props.transitionDuration}s
    ${props.open ? `${0.42 * 2 * props.transitionDuration}s` : ""}
    ${
      props.open
        ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
        : "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    };
  `};
`;

MiddleBar.defaultProps = {
  ...DEFAULT_PROPS,
};

const TopBar = styled(Bar)`
  opacity: ${(props) => (props.open ? 0 : 1)};
  bottom: ${(props) => (props.layerSpacing + props.layerHeight) * -1}px;
  top: ${(props) =>
    props.open ? 0 : (2 * props.layerSpacing + 2 * props.layerHeight) * -1}px;
  ${(props) => `transition:
    top 
    ${0.3 * 2 * props.transitionDuration}s
    ${!props.open ? `${0.3 * 2 * props.transitionDuration}s` : ""}
    cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    opacity
    ${0.1 * 2 * props.transitionDuration}s
    ${props.open ? `${0.27 * 2 * props.transitionDuration}s` : ""}
    linear;
  `};
`;

TopBar.defaultProps = {
  ...DEFAULT_PROPS,
};

export { BottomBar, BurgerWrapper, MiddleBar, TopBar };
