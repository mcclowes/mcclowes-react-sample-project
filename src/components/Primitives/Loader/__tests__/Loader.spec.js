import React from "react";
import { shallow } from "enzyme";

import Loader from "../Loader";

describe("Loader", () => {
  const defaultProps = {
    placeholders: 2,
  };

  const renderComponent = (newProps) => {
    const props = {
      ...defaultProps,
      ...newProps,
    };
    return shallow(<Loader {...props} />);
  };

  it("renders the component as expected", () => {
    const wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
