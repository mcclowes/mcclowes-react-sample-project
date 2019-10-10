import Smart from "../Smart";
import React from "react";
import { shallow } from "enzyme";

describe("Smart", () => {
  it("renders default component", () => {
    const wrapper = shallow(<Smart />);

    expect(wrapper).toMatchSnapshot();
  });
});
