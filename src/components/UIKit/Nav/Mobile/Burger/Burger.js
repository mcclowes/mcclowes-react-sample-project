import React from "react";

import { BottomBar, BurgerWrapper, MiddleBar, TopBar } from "./csx";

const Burger = (props) => (
  <BurgerWrapper {...props}>
    <BottomBar {...props}>
      <TopBar {...props} />

      <MiddleBar {...props} />
    </BottomBar>
  </BurgerWrapper>
);

Burger.defaultProps = {
  borderRadius: 4,
  layerHeight: 3,
  layerSpacing: 6,
  layerWidth: 30,
  padding: {
    xs: 10,
  },
  transitionDuration: 0.4,
};

export default Burger;
