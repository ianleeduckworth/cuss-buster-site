import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

const StandardModal = props => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={props.onAfterOpen}
        onRequestClose={props.onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4>{props.titleText}</h4>
        <p>{props.children}</p>
        <button className="modal-button margin-10-right" onClick={props.handleOk}>
          Ok
        </button>
        <button className="modal-button" onClick={props.handleCancel}>
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default StandardModal;
