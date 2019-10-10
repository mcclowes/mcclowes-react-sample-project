import Dumb from "../Dumb";
import React from "react";
import { shallow } from "enzyme";

describe("Dumb", () => {
  it("renders component", () => {
    const wrapper = shallow(<Dumb />);

    expect(wrapper).toMatchSnapshot();
  });
});
