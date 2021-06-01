import React from 'react';
import { Form, Field } from 'react-final-form';
import ImagePicker from '../AuctionItem/ImagePicker';
import mazadapi from '../../api/mazadapi';
import { ViewList } from 'react-bootstrap-icons';

class Body extends React.Component {
  state = { isSuccessfullyRegistered: false };

  jobCategories = [
    { name: 'Category No X.', id: '5f5cf9f7c249c73af5734755' },
    { name: 'Category No X.', id: '5f5cf9f7c249c73af5734756' },
    { name: 'Category No X.', id: '5f5cf9f7c249c73af5734754' },
    { name: 'Category No X.', id: '5f5cf9f7c249c73af5734753' },
    { name: 'Category No X.', id: '5f5cf9f7c249c73af5734752' },
    { name: 'Category No X.', id: '5f5cf9f7c249c73af5734757' },
  ];

  onImageSelected = (image) => {
    this.image = image;
  };

  renderCategoryOptions = () => {
    return this.jobCategories.map((job) => {
      return <option key={job.id}>{job.name}</option>;
    });
  };

  onSubmit = (values) => {
    const user = {
      name: values.fullName,
      email: values.email,
      password: values.password,
      isJobSeeker: values.isJobSeeker,
      jobCategoryId: this.jobCategories.find((category) => {
        return category.name === values.jobCategory;
      }).id,
    };

    const form = new FormData();
    form.append('json', JSON.stringify(user));
    form.append('image', this.image);
    mazadapi
      .post('/users', form)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.setState({ isSuccessfullyRegistered: true });
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = 'You must enter your full name';
    }
    if (!values.email) {
      errors.email = 'You must enter your working email';
    }
    if (!values.password) {
      errors.password = 'You must enter a password of 6 letters or more';
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Your passwords don't match";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'You must confirm your password';
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
              <div style={{ textAlign: 'center' }}>
                {meta.touched && meta.error ? (
                  <span style={{ color: 'red' }}>{meta.error}</span>
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
              <form onSubmit={handleSubmit} style={{ margin: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ color: 'green' }}>
                    Get in-demand talent on demand.
                  </h2>
                  <p>You’re on your way to connecting with great talent!</p>
                  <button className="btn btn-success">
                    <span className="fa fa-google pr-2"></span>
                    Continue With Google
                  </button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <p>or Sign up with email</p>
                </div>
                {this.renderInput('Full Name', 'fullName')}
                {this.renderInput('Email', 'email')}
                {this.renderInput('Password', 'password')}
                {this.renderInput('Confirm Password', 'confirmPassword')}
                <div className="d-flex align-items-center justify-content-between">
                  <div className="p-2">
                    <Field
                      name="isJobSeeker"
                      component="input"
                      type="checkbox"
                      id="isJobSeeker"
                    />
                    <label className="ml-2" htmlFor="isJobSeeker">
                      Create Job Seeker Account
                    </label>
                  </div>
                  <div className="p-2">
                    <Field
                      name="jobCategory"
                      className="p-2"
                      component="select"
                    >
                      {this.renderCategoryOptions()}
                    </Field>
                  </div>
                </div>
                <div>
                  <ImagePicker onImageSelected={this.onImageSelected} />
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '60px',
                    marginBlock: '20px',
                  }}
                >
                  <button className="btn btn-outline-success">
                    Create My Account
                  </button>
                </div>

                <div
                  style={{
                    display: this.state.isSuccessfullyRegistered
                      ? 'initial'
                      : 'none',
                  }}
                  class="alert alert-success"
                  role="alert"
                >
                  <label style={{ width: '100%' }}>
                    Successfully Reigistered!
                  </label>
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
