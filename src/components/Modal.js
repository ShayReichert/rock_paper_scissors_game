import React from "react";
import ReactDOM from "react-dom";
import modalImage from "../images/image-rules.svg";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, close }) =>
  isOpen
    ? ReactDOM.createPortal(
        <>
          <div className="main-modal" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <span className="rules">Rules</span>
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                  className="close-modal-btn"
                >
                  <span aria-hidden="true">
                    <IoMdClose />
                  </span>
                </button>
              </div>
              <img src={modalImage} alt="rules" />
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
