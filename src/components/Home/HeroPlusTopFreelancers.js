import React from "react";
import "./Home.css";
import Hero from "./Hero";
import TopFreelancersList from "./TopFreelancersList";

class HeroPlusTopFreelancers extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Hero />
          <TopFreelancersList />
        </div>
        <hr />
      </div>
    );
  }
}

export default HeroPlusTopFreelancers;
