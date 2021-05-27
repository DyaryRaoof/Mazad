import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class JobCategoriesDropDown extends React.Component {
  state = { dropdownOpen: false, selectedDropdown: null };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  renderDropdown() {
    return this.props.dropdownStrings.map((dropdown) => (
      <DropdownItem
        key={dropdown.id}
        id={dropdown.id}
        onClick={() => this.setState({ selectedDropdown: dropdown.name })}
      >
        {dropdown.name}
      </DropdownItem>
    ));
  }
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          caret
          style={{
            width:
              this.props.buttonLength !== undefined
                ? this.props.buttonLength
                : null,
          }}
        >
          {this.state.selectedDropdown
            ? this.state.selectedDropdown
            : this.props.dropdownHint}
        </DropdownToggle>
        <DropdownMenu>{this.renderDropdown()}</DropdownMenu>
      </Dropdown>
    );
  }
}

export default JobCategoriesDropDown;
