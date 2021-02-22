import Padded from "../Padded";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = (newProps) => {
  const props = {
    ...defaultProps,
    ...newProps,
  };

  return shallow(<Padded {...props} />);
};

let wrapper;

describe("Padded", () => {
  it("renders default component", () => {
    expect(renderComponent()).toMatchSnapshot();
  });

  it("renders correct padding", () => {
    expect(renderComponent({ space: "p0" })).toMatchSnapshot();
    expect(renderComponent({ space: "pr1" })).toMatchSnapshot();
    expect(renderComponent({ space: "p2" })).toMatchSnapshot();
    expect(renderComponent({ space: "pt3" })).toMatchSnapshot();
    expect(renderComponent({ space: "pb4" })).toMatchSnapshot();
    expect(renderComponent({ space: "pl5" })).toMatchSnapshot();
  });

  it("renders correct margin", () => {
    expect(renderComponent({ space: "m0" })).toMatchSnapshot();
    expect(renderComponent({ space: "mr1" })).toMatchSnapshot();
    expect(renderComponent({ space: "m2" })).toMatchSnapshot();
    expect(renderComponent({ space: "mt3" })).toMatchSnapshot();
    expect(renderComponent({ space: "mb4" })).toMatchSnapshot();
    expect(renderComponent({ space: "ml5" })).toMatchSnapshot();
  });
});
