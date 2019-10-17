import Button from "../Button";
import React from "react";
import { shallow } from "enzyme";

describe("Button", () => {
  it("renders component", () => {
    const wrapper = shallow(<Button text="Default Button" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("hovers", () => {
    const wrapper = shallow(<Button text="Default Button" />);

    wrapper.simulate("hover");

    expect(wrapper).toMatchSnapshot();
  });

  describe.skip("to", () => {
    it("default", () => {
      const wrapper = shallow(<Button text="Default Button" />);

      expect(wrapper.find("ButtonWrapper").prop("to")).toBe("/");
    });

    it("passed", () => {
      const wrapper = shallow(<Button text="Default Button" to="/some/url" />);

      expect(wrapper.find("ButtonWrapper").prop("to")).toBe("/some/url");
    });
  });
});
