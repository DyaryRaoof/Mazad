import React from "react";
import { Form, Field } from "react-final-form";

class Body extends React.Component {
  onSubmit = () => {};
  validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "You must enter your email";
    }
    if (!values.password) {
      errors.password = "You must enter a password";
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
        <div
          className={`${
            this.props.cardClass === undefined ? "card" : ""
          } col-xs-4 p-2`}
        >
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
                <div style={{ textAlign: "center" }}>
                  <h2 style={{ color: "green" }}>Login</h2>
                  <button className="btn btn-success" type="button">
                    <span className="fa fa-google pr-2"></span>
                    Continue With Google
                  </button>
                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <p>or Login with email</p>
                </div>
                {this.renderInput("Email", "email")}
                {this.renderInput("Password", "password")}
                <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                  <button className="btn btn-outline-success">Login</button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Body;
