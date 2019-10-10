import MainContainer from "../MainContainer";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<MainContainer />);

  expect(wrapper).toMatchSnapshot();
});
