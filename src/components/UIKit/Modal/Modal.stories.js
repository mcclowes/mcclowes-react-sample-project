import React from "react";
import Modal from "./Modal";
import Button from "../Button";

export default { title: "Modal" };

export const simple = () => {
  return (
    <Modal open>
      <Modal.Inner>Hello world</Modal.Inner>
    </Modal>
  );
};

export const structured = () => {
  return (
    <Modal open closeIcon doClose={() => {}}>
      <Modal.Inner>
        <Modal.Header>Header</Modal.Header>

        <Modal.Content>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Nulla vitae elit libero, a pharetra augue. Duis mollis,
          est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
          sem nec elit. Cras mattis consectetur purus sit amet fermentum.
          Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </Modal.Content>

        <Modal.Actions>
          <Button>Close</Button>
          <Button>Submit</Button>
        </Modal.Actions>
      </Modal.Inner>
    </Modal>
  );
};

export const controlled = () => {
  return (
    <Modal open>
      <Modal.Inner>
        <Modal.Header>Header</Modal.Header>

        <Modal.Content>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Nulla vitae elit libero, a pharetra augue. Duis mollis,
          est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
          sem nec elit. Cras mattis consectetur purus sit amet fermentum.
          Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </Modal.Content>

        <Modal.Actions>Hello world</Modal.Actions>
      </Modal.Inner>
    </Modal>
  );
};
