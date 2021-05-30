import React from 'react';
import { Field, Form } from 'react-final-form';
import JobCategoriesDropDown from '../JobCateogriesDropdown';

import JobCateogriesDropdown from '../JobCateogriesDropdown';

class PostJob extends React.Component {
  state = { selectedFile: null };

  jobCategories = [
    { name: 'Category No X.', id: 1 },
    { name: 'Category No X.', id: 2 },
    { name: 'Category No X.', id: 3 },
    { name: 'Category No X.', id: 4 },
    { name: 'Category No X.', id: 5 },
    { name: 'Category No X.', id: 6 },
  ];

  onSubmit = () => {};
  validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'You must enter your email';
    }
    if (!values.password) {
      errors.password = 'You must enter a password';
    }

    return errors;
  };

  renderInput = (placeholder, name, isTextArea) => {
    return (
      <div>
        <Field
          name={name}
          placeholder={placeholder}
          render={({ input, meta }) => {
            return (
              <div style={{ textAlign: 'center' }}>
                {meta.touched && meta.error ? (
                  <span style={{ color: 'red' }}>{meta.error}</span>
                ) : null}
                {isTextArea ? (
                  <div className="form-group">
                    <textarea
                      className="form-control rounded-0"
                      rows="10"
                      placeholder={placeholder}
                    ></textarea>
                  </div>
                ) : (
                  <div className="input-group mb-4">
                    <input
                      placeholder={placeholder}
                      className="form-control"
                      {...input}
                    ></input>
                  </div>
                )}
              </div>
            );
          }}
        />
      </div>
    );
  };

  onFileSelected = (e) => {
    const files = Array.from(e.target.files);
    this.setState({ selectedFile: files[0] });
  };

  render() {
    return (
      <div className="container">
        <div className="col-xs-4 p-2">
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} style={{ margin: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ color: 'green' }}>Tell us what you need done</h2>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <p>
                    Contact skilled freelancers within minutes. View profiles,
                    ratings, portfolios and chat with them. Pay the freelancer
                    only when you are 100% satisfied with their work.
                  </p>
                </div>
                {this.renderInput('Job Title', 'title', false)}
                {this.renderInput('Job Dscirption', 'descirption', true)}

                <div className="custom-file pb-5">
                  <input
                    onChange={this.onFileSelected}
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" for="customFile">
                    {this.state.selectedFile
                      ? this.state.selectedFile.name
                      : 'Upload A File'}
                  </label>
                </div>
                <JobCategoriesDropDown
                  dropdownStrings={this.jobCategories}
                  dropdownHint="Job Categories"
                  buttonLength={'100%'}
                />

                <div style={{ textAlign: 'center', paddingTop: '40px' }}>
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
