import React from "react";
import JobCategoriesDropDown from "../JobCateogriesDropdown";

class Sidebar extends React.Component {
  state = { newSkill: null };

  projectCities = [
    { name: "City No X.", id: 1 },
    { name: "City No X.", id: 2 },
    { name: "City No X.", id: 3 },
    { name: "City No X.", id: 4 },
    { name: "City No X.", id: 5 },
    { name: "City No X.", id: 6 },
  ];

  skills = [];

  onSkillSubmit = (e) => {
    e.preventDefault();
    if (!this.skills.includes(e.target.skills.value)) {
      const lastSkillId =
        this.skills.length > 0 ? this.skills[this.skills.length - 1].id : 0;
      this.skills.push({
        name: e.target.skills.value,
        id: lastSkillId + 1,
      });

      this.setState({ newSkill: e.target.skills.value });
    }
  };

  renderSkills() {
    return this.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              {skill.name}
            </label>
          </div>
        </div>
      );
    });
  }
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
      <div className="card m-2 p-3" style={{ textAlign: "start" }}>
        <h3>Filters</h3>
        <div>
          <label>Price</label>
          {this.renderInput("from ...", "from")}
          {this.renderInput("To ...", "to")}
        </div>
        <div>
          <label>Skills</label>
          <form onSubmit={this.onSkillSubmit}>
            {this.renderInput("Enter Skills", "skills")}
          </form>
          <div className="p-2">
            {this.skills.length > 0 ? this.renderSkills() : null}
          </div>
        </div>
        <div>
          <label>Project City</label>
          <JobCategoriesDropDown
            dropdownStrings={this.projectCities}
            dropdownHint="SelectCity"
            buttonLength={"100%"}
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
