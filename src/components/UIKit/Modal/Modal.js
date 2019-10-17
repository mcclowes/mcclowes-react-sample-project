import PropTypes from "prop-types";
import React from "react";
import ReactModal from "react-modal";

import Actions from "./Actions";
import Close from "./Close";
import Content from "./Content";
import Header from "./Header";
import Inner from "./Inner";

const defaultStyles = {
  overlay: {
    alignItems: "center",
    backgroundColor: "rgba(50,50,50,.75)",
    display: "flex",
    justifyContent: "center",
    transition: "opacity 200ms ease-in-out",
    zIndex: 1000 // must be equal to semantics modal
  },
  content: {
    background: "none",
    border: "none",
    borderRadius: "3px",
    bottom: "auto",
    left: "auto",
    maxHeight: "90vh",
    maxWidth: "90vw",
    overflow: "hidden",
    padding: "0",
    position: "relative",
    right: "auto",
    top: "auto",
    display: "flex",
    alignItems: "center"
  }
};

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

const Modal = props => {
  const { children, doClose, open, closeIcon, modalStyles, trigger } = props;

  //const { overlay, content } = modalStyles;

  const style = {
    overlay: {
      ...defaultStyles.overlay
      //...overlay
    },
    content: {
      ...defaultStyles.content
      //...content
    }
  };

  return (
    <>
      {trigger && trigger}

      <div onClick={e => e.stopPropagation()}>
        <ReactModal
          isOpen={open}
          closeTimeoutMS={400}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={doClose}
          style={style}
        >
          {closeIcon && doClose && <Close onClick={doClose} />}

          {children}
        </ReactModal>
      </div>
    </>
  );
};

Modal.Actions = Actions;
Modal.Close = Close;
Modal.Content = Content;
Modal.Header = Header;
Modal.Inner = Inner;

Modal.propTypes = {
  children: PropTypes.node,
  doClose: PropTypes.func,
  trigger: PropTypes.any
};

export default Modal;
