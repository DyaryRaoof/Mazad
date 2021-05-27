import React from "react";
import Header from "./Header";
import Body from "./Body";
import LoginModal from "../Login/Modal/LoginModal";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <LoginModal />
        <Header />
        <Body />
      </div>
    );
  }
}

export default SignUp;
