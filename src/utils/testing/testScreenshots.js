import React from "react";
import PropTypes from "prop-types";
import { ReactScreenshotTest } from "react-screenshot-test";

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
  const { name, components, desktopOverrides, mobileOverrides } = props;

  const testSetup = ReactScreenshotTest.create(name)
    .viewport("Desktop", {
      ...deviceConfig.desktop,
      ...desktopOverrides,
    })
    .viewport("Mobile", {
      ...deviceConfig.mobile,
      ...mobileOverrides,
    });

  components.forEach((component) => {
    testSetup.shoot(component.name, <div>{component.component}</div>);
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
