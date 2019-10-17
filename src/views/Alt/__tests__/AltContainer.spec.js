import AltContainer from "../AltContainer";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<AltContainer />);

  expect(wrapper).toMatchSnapshot();
});
