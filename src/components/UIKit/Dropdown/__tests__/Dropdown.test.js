import Dropdown from "../DropdownContainer";
import React from "react";
import { mount } from "enzyme";

describe("Dropdown", () => {
  it("renders component", () => {
    const wrapper = mount(<Dropdown placeholder="Default Dropdown" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders component with options", () => {
    const wrapper = mount(
      <Dropdown placeholder="Default Dropdown" options={[1, 2, 3, 4, 5]} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("open", () => {
    const wrapper = mount(<Dropdown placeholder="Default Dropdown" />);

    wrapper.simulate("click");

    expect(wrapper).toMatchSnapshot();
  });
});
