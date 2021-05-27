import React from "react";
import { Form, Field } from "react-final-form";
import personImage from "../../images/person-placeholder.jpg";

class EditProfile extends React.Component {
  user = this.props.user;

  onSubmit = () => {};
  validate = (values) => {
    const errors = {};
    if (!values.jobTitle) {
      errors.jobTitle = "You must enter a job title";
    }
    if (!values.jobDescription) {
      errors.jobDescription = "You must enter a job description";
    }

    if (!values.minimumMonthlyWage) {
      errors.minimumMonthlyWage = "You must enter your minimum monthly wage";
    }

    return errors;
  };

  renderInput = (placeholder, name, isTextArea) => {
    return (
      <Field
        name={name}
        placeholder={placeholder}
        render={({ input, meta }) => {
          return (
            <div style={{ textAlign: "center" }}>
              {meta.touched && meta.error ? (
                <span style={{ color: "red" }}>{meta.error}</span>
              ) : null}

              {!isTextArea ? (
                <div className="input-group mb-4">
                  <input className="form-control" {...input}></input>
                </div>
              ) : (
                <div className="form=group">
                  <textarea className="form-control" {...input}></textarea>
                </div>
              )}
            </div>
          );
        }}
      />
    );
  };

  render() {
    return (
      <div style={{ backgroundColor: "white", height: "100vh" }}>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          initialValues={{
            jobTitle: this.user.jobTitleSelf,
            jobDescription: this.user.jobDescriptionSelf,
            minimumMonthlyWage: this.user.minimumMonthlyWage,
          }}
          render={(handleSubmit) => (
            <form handleSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={personImage}
                    class="img-fluid"
                    alt="user"
                    style={{ width: "300px", marginTop: "20px" }}
                  />
                  <div>
                    <label>Minimum Monthly Wag</label>
                    {this.renderInput(
                      "Minimum Monthly Wage",
                      "minimumMonthlyWage",
                      false
                    )}
                  </div>
                </div>

                <div className="col-md-8 mt-2">
                  <div className="d-flex justify-content-between">
                    <h2 style={{ color: "green" }}>
                      {`${this.user.name} ${this.user.at}`}
                    </h2>
                  </div>
                  <label>Job Title</label>
                  {this.renderInput("Job Title", "jobTitle", false)}
                  <label>Job Description</label>
                  {this.renderInput("Job Description", "jobDescription", true)}
                </div>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default EditProfile;
