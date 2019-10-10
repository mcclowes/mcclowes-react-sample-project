import Smart from "../Smart";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = newProps => {
  const props = {
    ...defaultProps,
    ...newProps
  };

  return shallow(<Smart {...props} />);
};

let wrapper;

describe("Smart", () => {
  it("renders default component", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
