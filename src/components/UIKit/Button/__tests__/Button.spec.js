import Button from "../Button";
import React from "react";
import { shallow } from "enzyme";

let wrapper;

describe("Button", () => {
  beforeEach(() => {
    wrapper = shallow(<Button text="Default Button" />);
  });

  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("to", () => {
    it("default", () => {
      wrapper = shallow(<Button text="Default Button" />);

      expect(wrapper.dive().prop("to")).toBe("/");
    });

    it("passed", () => {
      wrapper = shallow(<Button text="Default Button" to="/some/url" />);

      expect(wrapper.dive().prop("to")).toBe("/some/url");
    });
  });
});
