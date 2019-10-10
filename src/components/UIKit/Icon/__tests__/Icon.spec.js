import React from "react";
import Icon from "../Icon";
import Icons from "../Icons";
import { shallow } from "enzyme";

const defaultProps = {
  path: Icons.TICK
};

const renderComponent = newProps => {
  const props = {
    ...defaultProps,
    ...newProps
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
