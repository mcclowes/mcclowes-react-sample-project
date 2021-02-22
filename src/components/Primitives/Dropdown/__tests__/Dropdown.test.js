import Dropdown from "../DropdownContainer";
import React from "react";
import { mount } from "enzyme";

describe("Dropdown", () => {
  it("interaction", () => {
    const wrapper = mount(<Dropdown placeholder="Default Dropdown" />);

    expect(wrapper.find("csx__DropdownPlaceholder").prop("open")).toBe(false);

    wrapper.simulate("click");

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("csx__DropdownPlaceholder").prop("open")).toBe(true);
  });
});
