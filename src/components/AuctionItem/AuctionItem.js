import React from "react";
import { Field, Form } from "react-final-form";
import ImagePicker from "./ImagePicker";
import JobCategoriesDropDown from "../JobCateogriesDropdown";

class PostJob extends React.Component {
  state = { selectedFile: null, selectedCurrecy: "IQD" };

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
    if (!values.email) {
      errors.email = "You must enter your email";
    }
    if (!values.password) {
      errors.password = "You must enter a password";
    }

    return errors;
  };

  renderInput = (placeholder, name, isTextArea, isPriceInput) => {
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
                {isTextArea ? (
                  <div className="form-group">
                    <textarea
                      class="form-control rounded-0"
                      rows="10"
                      placeholder={placeholder}
                    ></textarea>
                  </div>
                ) : (
                  <div className="input-group mb-4">
                    {isPriceInput ? (
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          {this.state.selectedCurrecy}
                        </span>
                      </div>
                    ) : null}
                    <input
                      type={isPriceInput ? "number" : "text"}
                      placeholder={placeholder}
                      className="form-control"
                      {...input}
                    ></input>
                    {isPriceInput ? (
                      <div class="input-group-append">
                        <button
                          class="btn btn-outline-secondary dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Currency
                        </button>
                        <div class="dropdown-menu">
                          <label
                            class="dropdown-item"
                            onClick={() =>
                              this.setState({ selectedCurrecy: "IQD" })
                            }
                          >
                            IQD
                          </label>
                          <label
                            class="dropdown-item"
                            onClick={() =>
                              this.setState({ selectedCurrecy: "$" })
                            }
                          >
                            USD
                          </label>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}
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
        <div className="col-xs-4 p-2">
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
                <div style={{ textAlign: "center" }}>
                  <h2 style={{ color: "green" }}>
                    Tell us about the item to auction
                  </h2>
                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <p>
                    Auction your item to get bids on it by different users ,
                    where you can select the heighest bid and help you make your
                    best profit.
                  </p>
                </div>
                {this.renderInput("Item Title", "title", false)}
                {this.renderInput(
                  `Item price in ${
                    this.state.selectedCurrecy === "$" ? "USD" : "IQD"
                  }`,
                  "price",
                  false,
                  true
                )}
                {this.renderInput("Item Dscirption", "descirption", true)}
                <ImagePicker />
                <div className="mt-5" style={{ textAlign: "center" }}>
                  <JobCategoriesDropDown
                    dropdownStrings={this.jobCategories}
                    dropdownHint="Job Categories"
                    buttonLength="100%"
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                  <button className="btn btn-outline-success">Post Job</button>
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

export default PostJob;
