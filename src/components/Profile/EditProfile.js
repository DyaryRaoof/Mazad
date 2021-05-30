import React from 'react';
import { Form, Field } from 'react-final-form';
import { useFilePicker } from 'use-file-picker';
import personImage from '../../images/person-placeholder.jpg';
import './EditProfile.css';

const EditProfile = (props) => {
  user = props.user;
  openFileSelector = useFilePicker({
    accept: '.txt',
  });
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: '.jpg, .jpeg, .png, .webm',
    multiple: false,
  });

  const onSubmit = () => {};
  const validate = (values) => {
    const errors = {};
    if (!values.jobTitle) {
      errors.jobTitle = 'You must enter a job title';
    }
    if (!values.jobDescription) {
      errors.jobDescription = 'You must enter a job description';
    }

    if (!values.minimumMonthlyWage) {
      errors.minimumMonthlyWage = 'You must enter your minimum monthly wage';
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
            <div style={{ textAlign: 'center' }}>
              {meta.touched && meta.error ? (
                <span style={{ color: 'red' }}>{meta.error}</span>
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

  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
          jobTitle: user.jobTitleSelf,
          jobDescription: user.jobDescriptionSelf,
          minimumMonthlyWage: user.minimumMonthlyWage,
        }}
        render={(handleSubmit) => (
          <form handleSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <div className="imagePlusEditButton">
                  <img
                    className="userImage"
                    src={personImage}
                    className="img-fluid"
                    alt="user"
                    style={{ width: '300px', marginTop: '20px' }}
                  />

                  <button
                    className="btn btn-success imageEditButton"
                    type="button"
                    onClick={() => {
                      openFile();
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <label>Minimum Monthly Wage</label>
                  {renderInput(
                    'Minimum Monthly Wage',
                    'minimumMonthlyWage',
                    false
                  )}
                </div>
              </div>

              <div className="col-md-8 mt-2">
                <div className="d-flex justify-content-between">
                  <h2 style={{ color: 'green' }}>
                    {`${user.name} ${this.user.at}`}
                  </h2>
                </div>
                <label>Job Title</label>
                {enderInput('Job Title', 'jobTitle', false)}
                <label>Job Description</label>
                {enderInput('Job Description', 'jobDescription', true)}
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default EditProfile;
