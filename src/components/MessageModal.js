import React, { useState } from 'react';
import reactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import { toggleMessageModal, toggleChatBox } from '../actions';

const MessageModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(props.toggleMessageModal(null));

  return reactDOM.createPortal(
    <div>
      <Modal isOpen={props.isModalOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>An Error Occured</ModalHeader>
        <ModalBody>{props.message}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>,
    document.querySelector('#modal-route')
  );
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.messageModal.isModalOpen,
    message: state.messageModal.payload,
  };
};

export default connect(mapStateToProps, { toggleMessageModal })(MessageModal);
