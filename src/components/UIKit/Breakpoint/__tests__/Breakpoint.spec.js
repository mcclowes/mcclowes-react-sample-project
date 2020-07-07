import Breakpoint from "../index";
import React from "react";
import { shallow } from "enzyme";

let wrapper;

describe("Breakpoint", () => {
  it("renders component", () => {
    wrapper = shallow(<Breakpoint>Some text</Breakpoint>);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders component with sizes", () => {
    wrapper = shallow(
      <Breakpoint sizes={[true, true, false, false, false]}>
        Some text
      </Breakpoint>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
