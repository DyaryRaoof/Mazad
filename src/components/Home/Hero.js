import React from "react";
import { Link } from "react-router-dom";

import workImage from "../../images/work.jpg";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-8">
          <h1 className="header">
            Join the world's
            <br />
            work marketplace
          </h1>
          <h3 className="secondHeader">
            Find great talent. Build your business. Take your career to the next
            level.
          </h3>
          <div className="row">
            <Link to="/post-job" className="btn btn-success m-1">
              Find Talent
            </Link>
            <Link to="/job-list" className="btn btn-outline-success m-1">
              Find Work
            </Link>
            <button className="btn btn-outline-success m-1">
              Auction Item
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <img src={workImage} className="heroImage" alt="user" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
