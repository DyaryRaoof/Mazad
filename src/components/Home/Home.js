import React from "react";
// import Header from "./Header";
import HeroPlusTopFreelancers from "./HeroPlusTopFreelancers";
import CategoriesList from "./CategoriesList";
import LoggedInHeader from "./LoggedInHeader";

class Home extends React.Component {
  render() {
    return (
      <div>
        <LoggedInHeader />
        <HeroPlusTopFreelancers />,
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
