import React from "react";
import personPlaceholderImage from "../../images/person-placeholder.jpg";
import SingleFreelancer from "./SingleFreelancer";

const mockTopFreelancers = [
  { name: "Dyary Raoof", jobTitle: "Programmer", id: "1" },
  { name: "Ahmad Ali", jobTitle: "Doctor", id: "2" },
  { name: "Mohammad Mustafa", jobTitle: "Lawyer", id: "3" },
  { name: "Rezhyn Nasradin", jobTitle: "Designer", id: "4" },
  { name: "Dina Bayz", jobTitle: "Photographer", id: "5" },
  { name: "Karokh Najmadin", jobTitle: "Plumber", id: "6" },
];

class TopFreelancersList extends React.Component {
  renderFreelancerList(list) {
    return list.map((freelancer) => {
      return (
        <SingleFreelancer
          key={freelancer.id}
          freelancer={freelancer}
          image={personPlaceholderImage}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <h2 style={{ color: "green" }}>Top Freelancers</h2>
        <div
          style={{ marginTop: "50px" }}
          className=" row d-flext justify-content-between"
        >
          <div style={{ margin: "2px" }}>
            {this.renderFreelancerList([...mockTopFreelancers.slice(0, 2)])}
          </div>
          <div style={{ margin: "2px" }}>
            {this.renderFreelancerList([...mockTopFreelancers.slice(2, 4)])}
          </div>

          <div style={{ margin: "2px" }}>
            {this.renderFreelancerList([...mockTopFreelancers.slice(4, 6)])}
          </div>
        </div>
      </div>
    );
  }
}

export default TopFreelancersList;
