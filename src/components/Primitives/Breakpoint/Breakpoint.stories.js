import React from "react";
import Breakpoint from "./index";

export default { title: "Breakpoint" };

export const alwaysHidden = () => {
  return (
    <div>
      Should never render
      <br />
      <Breakpoint>Some text</Breakpoint>
    </div>
  );
};

export const mobile = () => {
  return (
    <div>
      Should render at mobile sizes
      <br />
      <Breakpoint sizes={[true, true, false, false, false]}>
        Some text
      </Breakpoint>
    </div>
  );
};

export const desktop = () => {
  return (
    <div>
      Should render at desktop sizes
      <br />
      <Breakpoint sizes={[false, false]}>Some text</Breakpoint>
    </div>
  );
};

export const alwaysShowing = () => {
  return (
    <div>
      Should render always
      <br />
      <Breakpoint>Some text</Breakpoint>
    </div>
  );
};
