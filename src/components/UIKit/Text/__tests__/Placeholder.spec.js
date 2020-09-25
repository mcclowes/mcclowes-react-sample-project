import Text from "../Text";
import React from "react";
import { shallow } from "enzyme";

const defaultProps = {};

const renderComponent = (newProps, textType = "Paragraph") => {
  const props = {
    ...defaultProps,
    ...newProps,
  };

  const Component = Text[textType];

  return shallow(<Component {...props}>Some text goes here</Component>);
};

let wrapper;

describe("Text", () => {
  it("renders default component", () => {
    wrapper = renderComponent();

    expect(wrapper).toMatchSnapshot();
  });

  describe("Header", () => {
    it("renders default component", () => {
      wrapper = renderComponent();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Text", () => {
    it("renders default component", () => {
      wrapper = renderComponent();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Text", () => {
    it("renders default component", () => {
      wrapper = renderComponent();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
