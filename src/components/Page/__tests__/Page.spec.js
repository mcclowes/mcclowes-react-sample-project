import Page from "../Page";
import React from "react";
import { shallow } from "enzyme";

const DEFAULT_PROPS = {};

const renderComponent = (newProps) => {
  const props = {
    ...DEFAULT_PROPS,
    ...newProps,
  };

  return shallow(<Page {...props} />);
};

let wrapper;

describe("Page", () => {
  it("renders component", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
