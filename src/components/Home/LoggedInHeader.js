import React from "react";
import { Link } from "react-router-dom";
import AccountPopover from "./AccountPopover";
import MessagePopover from "./MessagePopover";

class LoggedInHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          style={{ color: "green", fontWeight: "bold" }}
          href="/#"
        >
          Mazad
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/post-job" className="nav-link" href="/#">
                Post A Job
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/auction-item" className="nav-link" href="/#">
                Auction Item
              </Link>
            </li>
          </ul>
          <div className="ml-auto">
            <MessagePopover
              buttonId="jobNotificationPopover"
              iconClass="fa fa-envelope-o"
            />
            <MessagePopover
              buttonId="messagePopover"
              iconClass="fa fa-bell-o"
            />
            <Link to="/post-job" className="btn btn-outline-success mr-5">
              Post A Job
            </Link>
            <AccountPopover />
          </div>
        </div>
      </nav>
    );
  }
}

export default LoggedInHeader;
