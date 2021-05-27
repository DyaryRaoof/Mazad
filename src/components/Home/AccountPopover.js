import React from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { Link } from "react-router-dom";
import personImage from "../../images/person-placeholder.jpg";

class AccountPopover extends React.Component {
  state = { open: false };

  componentWillUnmount() {
    this.setState({ open: false });
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <React.Fragment>
        <span style={{ cursor: "pointer" }} id="accountPopover">
          <img src={personImage} alt="user" style={{ width: "50px" }} />
          <label className="pl-1">@dyary</label>
        </span>
        <Popover
          placement="bottom"
          isOpen={this.state.open}
          target="accountPopover"
          toggle={this.toggle}
        >
          <PopoverHeader>Account</PopoverHeader>
          <PopoverBody style={{ width: "500px" }}>
            <div>
              <Link to="/profile" style={{ cursor: "pointer", color: "black" }}>
                Profile
              </Link>
            </div>
            <div>
              <Link to="/" style={{ cursor: "pointer", color: "black" }}>
                Log out
              </Link>
            </div>
            <div>
              <span style={{ cursor: "pointer", color: "black" }}>
                Settings
              </span>
            </div>
          </PopoverBody>
        </Popover>
      </React.Fragment>
    );
  }
}

export default AccountPopover;
