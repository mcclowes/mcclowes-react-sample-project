import Dropdown from "../DropdownContainer";
import React from "react";
import { shallow } from "enzyme";

describe("Dropdown", () => {
  it("renders component", () => {
    const wrapper = shallow(<Dropdown placeholder="Default Dropdown" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders component with options", () => {
    const wrapper = shallow(
      <Dropdown placeholder="Default Dropdown" options={[1, 2, 3, 4, 5]} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
