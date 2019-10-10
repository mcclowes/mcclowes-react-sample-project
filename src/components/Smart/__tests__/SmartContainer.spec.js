import SmartContainer from "../SmartContainer";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<SmartContainer />);

  expect(wrapper).toMatchSnapshot();
});
