import Modal from "../Modal";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { mount } from "enzyme";

const ContentMock = () => {
  return <div>This is in a portal</div>;
};

const ModalWrapper = props => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Trigger</button>

      <Modal
        isOpen={open}
        doClose={() => setOpen(false)}
        closeIcon={true}
        {...props}
      >
        <ContentMock />
      </Modal>
    </div>
  );
};

const mountComponent = (props = {}) => {
  return mount(<ModalWrapper {...props} />);
};

describe("Modal", () => {
  it("interaction", () => {
    const wrapper = mountComponent();

    expect(
      wrapper
        .find("Modal")
        .at(0)
        .prop("isOpen")
    ).toBe(false);

    wrapper.find("button").simulate("click");

    expect(
      wrapper
        .find("Modal")
        .at(0)
        .prop("isOpen")
    ).toBe(true);

    expect(wrapper).toMatchSnapshot();
  });
});
