import Modal from "../Modal";
import React from "react";
import ReactModal from "react-modal";
import { shallow } from "enzyme";

const ContentMock = () => {
  return <div>This is in a portal</div>;
};

const shallowComponent = (props = {}) => {
  const { open = true, handleClose = () => {}, closeIcon = true } = props;

  return shallow(
    <Modal open={open} doClose={handleClose} closeIcon={closeIcon}>
      <ContentMock />
    </Modal>
  );
};

describe("Modal", () => {
  it("renders open", () => {
    const wrapper = shallowComponent();

    expect(wrapper).toMatchSnapshot();
  });

  it("renders closed", () => {
    const wrapper = shallowComponent({ open: false });

    expect(wrapper).toMatchSnapshot();
  });

  it("no icon", () => {
    const wrapper = shallowComponent({ closeIcon: false });

    expect(wrapper).toMatchSnapshot();
  });
});
