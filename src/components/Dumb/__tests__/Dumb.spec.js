import Dumb from "../Dumb";
import React from "react";
import { shallow } from "enzyme";

const DEFAULT_PROPS = {};

const renderComponent = (newProps) => {
  const props = {
    ...DEFAULT_PROPS,
    ...newProps,
  };

  return shallow(<Dumb {...props} />);
};

let wrapper;

describe("Dumb", () => {
  it("renders component", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
