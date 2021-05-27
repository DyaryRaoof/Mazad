import React from "react";
import "./SingleFreelancer.css";

const SingleFreelancer = ({ freelancer, image }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={image} alt={freelancer.name} className="avatar" />
      </div>
      <div style={{ textAlign: "center" }}>
        <label>{freelancer.name}</label>
      </div>
      <div style={{ textAlign: "center" }}>
        <label>{freelancer.jobTitle}</label>
      </div>
    </div>
  );
};

export default SingleFreelancer;
