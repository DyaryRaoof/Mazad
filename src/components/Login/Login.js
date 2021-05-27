import React from "react";
import Header from "./Header";
import Body from "./Body";

class Login extends React.Component {
  render() {
    return (
      <div>
        {this.props.showHeader === undefined ? <Header /> : null}
        <Body cardClass={this.props.cardClass} />
      </div>
    );
  }
}

export default Login;
