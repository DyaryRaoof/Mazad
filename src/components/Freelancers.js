import React from 'react';
import SingleFreelancer from './Home/SingleFreelancer';
import personPlaceholderImage from '../images/person-placeholder.jpg';

class Freelancers extends React.Component {
  mockTopFreelancers = [
    { name: 'Dyary Raoof', jobTitle: 'Programmer', id: '1' },
    { name: 'Ahmad Ali', jobTitle: 'Doctor', id: '2' },
    { name: 'Mohammad Mustafa', jobTitle: 'Lawyer', id: '3' },
    { name: 'Rezhyn Nasradin', jobTitle: 'Designer', id: '4' },
    { name: 'Dina asdfsd Bayz', jobTitle: 'Photographer', id: '5' },
    { name: 'Karokh Najmadin', jobTitle: 'Plumber', id: '6' },
    { name: 'Dyary Raoof', jobTitle: 'Programmer', id: '7' },
    { name: 'Ahmad  asdf a afasfd  Ali', jobTitle: 'Doctor', id: '8' },
    { name: 'Mohammad asdfsa Mustafa', jobTitle: 'Lawyer', id: '9' },
    { name: 'Rezhyn Nasradin', jobTitle: 'asfdsaf Designer', id: '10' },
    { name: 'Dina Bayz', jobTitle: 'Photographer', id: '11' },
    { name: 'Karokh safsdf Najmadin', jobTitle: 'Plumber', id: '12' },
    { name: 'Dyary Raoof', jobTitle: 'Programmer', id: '13' },
    { name: 'Ahmad Ali', jobTitle: 'Doctor', id: '14' },
    { name: 'Mohammad Mustafa', jobTitle: 'Lawyer', id: '15' },
    { name: 'Rezhyn Nasradin', jobTitle: 'Designer', id: '16' },
    { name: 'Dina Bayz', jobTitle: 'Photographer', id: '17' },
    { name: 'Karokh Najmadin', jobTitle: 'Plumber', id: '18' },
    { name: 'Dyary Raoof', jobTitle: 'Programmer', id: '19' },
    { name: 'Ahmad Ali', jobTitle: 'Doctor', id: '20' },
    { name: 'Mohammad Mustafa', jobTitle: 'Lawyer', id: '21' },
    { name: 'Rezhyn Nasradin', jobTitle: 'Designer', id: '22' },
    { name: 'Dina Bayz', jobTitle: 'Photographer', id: '23' },
    { name: 'Karokh Najmadin', jobTitle: 'Plumber', id: '24' },
  ];

  renderFreelancers(mockTopFreelancers) {
    return mockTopFreelancers.map((freelenacer) => {
      return (
        <SingleFreelancer
          key={freelenacer.id}
          freelancer={freelenacer}
          image={personPlaceholderImage}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ color: 'green' }}>Top Freelancers In This Category</h1>
        <div className="row">
          {this.renderFreelancers(this.mockTopFreelancers)}
        </div>
      </div>
    );
  }
}

export default Freelancers;
