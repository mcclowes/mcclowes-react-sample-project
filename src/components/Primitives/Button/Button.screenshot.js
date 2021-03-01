import Button from "./index";
import Icon from "../Icon";
import React from "react";

import { TestScreenshots } from "../../../utils/testing/testScreenshots";

TestScreenshots({
  name: "Button",
  desktopOverrides: { disabled: true },
  components: [
    {
      name: "default",
      component: (
        <Button>
          <Icon icon="TICK" />
          Hello World
        </Button>
      ),
    },
  ],
});
