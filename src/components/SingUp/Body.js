import React from "react";
import { Form, Field } from "react-final-form";
import JobCategoriesDropDown from "../JobCateogriesDropdown";
import JobSeekerCheckBox from "./JobSeekerCheckBox";

class Body extends React.Component {
  jobCategories = [
    { name: "Category No X.", id: 1 },
    { name: "Category No X.", id: 2 },
    { name: "Category No X.", id: 3 },
    { name: "Category No X.", id: 4 },
    { name: "Category No X.", id: 5 },
    { name: "Category No X.", id: 6 },
  ];

  onSubmit = () => {};
  validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "You must enter your full name";
    }
    if (!values.email) {
      errors.email = "You must enter your working email";
    }
    if (!values.password) {
      errors.password = "You must enter a password of 6 letters or more";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Your passwords don't match";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "You must confirm your password";
    }

    return errors;
  };

  renderInput = (placeholder, name) => {
    return (
      <div>
        <Field
          name={name}
          placeholder={placeholder}
          render={({ input, meta }) => {
            return (
              <div style={{ textAlign: "center" }}>
                {meta.touched && meta.error ? (
                  <span style={{ color: "red" }}>{meta.error}</span>
                ) : null}
                <div className="input-group mb-4">
                  <input className="form-control" {...input}></input>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="card col-xs-4 p-2">
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
                <div style={{ textAlign: "center" }}>
                  <h2 style={{ color: "green" }}>
                    Get in-demand talent on demand.
                  </h2>
                  <p>You’re on your way to connecting with great talent!</p>
                  <button className="btn btn-success">
                    <span className="fa fa-google pr-2"></span>
                    Continue With Google
                  </button>
                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <p>or Sign up with email</p>
                </div>
                {this.renderInput("Full Name", "fullName")}
                {this.renderInput("Email", "email")}
                {this.renderInput("Password", "password")}
                {this.renderInput("Confirm Password", "confirmPassword")}
                <div className="d-flex align-items-center justify-content-between mb-5">
                  <div className="p-2">
                    <JobSeekerCheckBox />
                  </div>
                  <div className="p-2">
                    <JobCategoriesDropDown
                      dropdownStrings={this.jobCategories}
                      dropdownHint="Job Categories"
                    />
                  </div>
                </div>
                <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                  <button className="btn btn-outline-success">
                    Create My Account
                  </button>
                </div>
              </form>
            )}
          />

          <form></form>
        </div>
      </div>
    );
  }
}

export default Body;
