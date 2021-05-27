import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { openLoginModal, closeLoginModal } from "../../../actions";
import Login from "../Login";

class LoginModal extends React.Component {
  toggle = () => {
    if (this.props.loginModal.isModalOpen) {
      this.props.closeLoginModal();
    } else {
      this.props.openLoginModal();
    }
  };
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.loginModal.isModalOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Login cardClass={false} showHeader={false} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { loginModal: state.loginModal };
};
export default connect(mapStateToProps, {
  openLoginModal,
  closeLoginModal,
})(LoginModal);
