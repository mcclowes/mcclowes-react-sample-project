import React from "react";
import Icon from "../Icon";
import icons from "../icons";
import { shallow } from "enzyme";

const defaultProps = {
  path: icons.TICK,
};

const renderComponent = (newProps) => {
  const props = {
    ...defaultProps,
    ...newProps,
  };

  return shallow(<Icon {...props} />);
};

let wrapper;

describe("Icon", () => {
  it("renders as expected", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
