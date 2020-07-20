import Button from "../Button";
import Icon from "../../Icon";
import React from "react";

import { TestScreenshots } from "../../../utils/testing/testScreenshots";

TestScreenshots({
  name: "Button",
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
