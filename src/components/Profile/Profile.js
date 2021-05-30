import React from 'react';
import LoggedInHeader from '../Home/LoggedInHeader';
import personImage from '../../images/person-placeholder.jpg';
import * as Icons from 'react-bootstrap-icons';
import EditProfile from './EditProfile';
import Stars from '../Stars';

class Profile extends React.Component {
  state = { showEdit: false };

  user = {
    name: 'Dyary Raoof',
    at: '@Dyary',
    jobTitleSelf: 'Thi is the person Self job description tilte',
    stars: 3,
    jobDescriptionSelf:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    minimumMonthlyWage: '700 000 iQD',
    city: 'Sulaimany',
    joined: '22-11-2015',
    isOnline: true,
    comments: [
      {
        userName: 'Dyayr',
        userId: 1,
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        userName: 'Ary',
        userId: 2,
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        userName: 'Ahmad Ali',
        userId: 3,
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
  };

  renderComments = () => {
    return this.user.comments.map((comment) => {
      return (
        <div key={comment.userId}>
          <label style={{ color: 'green' }}>By : {comment.userName}</label>
          <p>{comment.content}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <LoggedInHeader />
        <div
          style={{
            backgroundColor: 'lightSkyBlue',
            position: 'absolute',
            height: '60vh',
            width: '100%',
          }}
        >
          <div
            className="container mt-5 card"
            style={{ backgroundColor: 'white', height: '100vh' }}
          >
            <div className="ml-auto mt-1">
              <button
                className="btn btn-success"
                onClick={() =>
                  this.setState({ showEdit: !this.state.showEdit })
                }
              >
                {!this.state.showEdit ? 'Edit Profile' : 'Save'}
              </button>
            </div>
            {!this.state.showEdit ? (
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={personImage}
                    className="img-fluid"
                    alt="user"
                    style={{ width: '300px', marginTop: '20px' }}
                  />
                  <div>
                    <div
                      style={{
                        color: this.user.isOnline ? 'darkGreen' : 'red',
                      }}
                    >
                      <label>
                        {this.user.isOnline ? 'I am Online' : 'I am Offline'}
                      </label>
                      <Icons.Dot size={50}></Icons.Dot>
                      <div>City: {this.user.city}</div>
                      <div>Monthly Wage: {this.user.minimumMonthlyWage}</div>
                    </div>
                  </div>
                </div>

                <div className="col-md-8 mt-2">
                  <div className="d-flex justify-content-between">
                    <h2 style={{ color: 'green' }}>
                      {`${this.user.name} ${this.user.at}`}
                    </h2>
                  </div>

                  <h5>{this.user.jobTitleSelf}</h5>
                  <div>
                    Rating : <Stars number={this.user.stars} users={2} />
                  </div>
                  <div>{this.user.jobDescriptionSelf}</div>
                  <div className="card p-2 mt-5">
                    Comments :{this.renderComments()}
                  </div>
                </div>
              </div>
            ) : (
              <EditProfile user={this.user} image={personImage} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
