import React from "react";
import LoggedInHeader from "../Home/LoggedInHeader";
import SideBar from "./Sidebar";
import Jobs from "./Jobs";

class JobList extends React.Component {
  renderInput(placeholder, name) {
    return (
      <div className="input-group align-self-center">
        <input
          className="form-control m-2"
          type="text"
          placeholder={placeholder}
          name={name}
        ></input>
      </div>
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: "rgb(248,248,248)", height: "100%" }}>
        <LoggedInHeader />
        <div
          style={{
            backgroundColor: "lightSkyBlue",
            width: "100%",
            height: "30vh",
            display: "flex",
          }}
        >
          <h3 className="align-self-center ml-5" style={{ color: "white" }}>
            Browse
          </h3>
          {this.renderInput("Search Jobs", "jobs")}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <SideBar />
            </div>
            <div className="col-md-8">
              <Jobs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobList;
