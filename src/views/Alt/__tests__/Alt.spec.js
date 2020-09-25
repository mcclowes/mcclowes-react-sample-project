import Alt from "../Alt";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = (newProps) => {
  const props = {
    ...defaultProps,
    ...newProps,
  };

  return shallow(<Alt {...props} />);
};

let wrapper;

it("renders component", () => {
  wrapper = renderComponent();

  expect(wrapper).toMatchSnapshot();
});
