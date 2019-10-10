import Padded from "../Padded";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = newProps => {
  const props = {
    ...defaultProps,
    ...newProps
  };

  return shallow(<Padded {...props} />);
};

let wrapper;

describe("Padded", () => {
  it("renders default component", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
