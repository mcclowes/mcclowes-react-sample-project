import GlobalStyle from "../styles/GlobalStyle";
import PropTypes from "prop-types";
import React from "react";
import { ReactScreenshotTest } from "react-screenshot-test";
import { ThemeProvider } from "styled-components/macro";

const deviceConfig = {
  desktop: {
    width: 1024,
    height: 750,
    deviceScaleFactor: 2,
  },
  mobile: {
    width: 375,
    height: 750,
    deviceScaleFactor: 3,
    isMobile: true,
  },
};

export const TestScreenshots = (props) => {
  const {
    name,
    components,
    desktopOverrides = {},
    mobileOverrides = {},
  } = props;

  const testSetup = ReactScreenshotTest.create(name);

  if (desktopOverrides && !desktopOverrides.disabled) {
    testSetup.viewport("Desktop", {
      ...deviceConfig.desktop,
      ...desktopOverrides,
    });
  }

  if (desktopOverrides && !mobileOverrides.disabled) {
    testSetup.viewport("Mobile", {
      ...deviceConfig.mobile,
      ...mobileOverrides,
    });
  }

  components.forEach((component) => {
    testSetup.shoot(
      component.name,
      <div>
        <GlobalStyle />

        {component.component}
      </div>
    );
  });

  testSetup.run();
};

TestScreenshots.propTypes = {
  name: PropTypes.string,
  components: PropTypes.shape({
    name: PropTypes.string,
    component: PropTypes.any,
  }),
  desktopOverrides: {
    width: PropTypes.number,
    height: PropTypes.number,
    deviceScaleFactor: PropTypes.number,
    isMobile: PropTypes.bool,
  },
  mobileOverrides: {
    width: PropTypes.number,
    height: PropTypes.number,
    deviceScaleFactor: PropTypes.number,
    isMobile: PropTypes.bool,
  },
};
