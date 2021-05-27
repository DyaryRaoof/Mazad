import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openLoginModal } from "../../actions";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          className="navbar-brand"
          style={{ color: "green", fontWeight: "bold" }}
          to="/"
        >
          Mazad
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item disabled">
            <span className="nav-link">
              already have an acount? <span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="nav-item">
            <span
              style={{ color: "green", cursor: "pointer" }}
              className="nav-link"
              onClick={this.props.openLoginModal}
            >
              Login
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(null, { openLoginModal })(Header);
