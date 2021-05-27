import React from "react";
import { Link } from "react-router-dom";

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
      </nav>
    );
  }
}

export default Header;
