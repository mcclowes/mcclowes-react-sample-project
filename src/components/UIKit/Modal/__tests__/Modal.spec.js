import Modal from "../Modal";
import React from "react";
import ReactModal from "react-modal";
import { shallow } from "enzyme";

const ContentMock = () => {
  return <div>This is in a portal</div>;
};

describe.skip("Modal", () => {
  const shallowComponent = (props = {}) => {
    return shallow(
      <Modal isOpen={true} doClose={jest.fn()} {...props}>
        <ContentMock />
      </Modal>
    );
  };

  const shallowAndFind = props => {
    return shallowComponent(props).find(ReactModal);
  };

  it("renders as expected", () => {
    const wrapper = shallowComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
