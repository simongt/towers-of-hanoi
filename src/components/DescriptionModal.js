import React from 'react';
import ReactModal from 'react-modal';

import Description from "./Description";

const DescriptionModal = props => (
  <ReactModal
    contentLabel="Towers of Hanoi - Game Objective"
    isOpen={props.showModal}
    onAfterOpen={props.afterOpenModal}
    onRequestClose={props.requestCloseModal}
    style={{
      overlay: {
        background: "rgba(0, 0, 0, 0.75)"
      },
      content: {
        margin: "0",
        padding: "0",
        background: "none",
        outline: "none",
        border: "none",
        display: "flex",
        alignItems: "center"
      }
    }}
    shouldFocusAfterRender={true}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    shouldReturnFocusAfterClose={true}
    ariaHideApp={false}
  >
    <Description toggleModal={props.toggleModal} />
  </ReactModal>
);

export default DescriptionModal;