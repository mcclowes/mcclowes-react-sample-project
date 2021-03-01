import Placeholder from "../Placeholder";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = (newProps) => {
  const props = {
    ...defaultProps,
    ...newProps,
  };

  return shallow(<Placeholder {...props} />);
};

let wrapper;

describe("Placeholder", () => {
  it("renders default component", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
