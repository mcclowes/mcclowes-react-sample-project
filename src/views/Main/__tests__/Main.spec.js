import Main from "../Main";
import React from "react";
import { shallow } from "enzyme";

it("renders component", () => {
  const wrapper = shallow(<Main />);

  expect(wrapper).toMatchSnapshot();
});
