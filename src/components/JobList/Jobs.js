import React from "react";
import Stars from "../Stars";

class Jobs extends React.Component {
  jobs = [
    {
      id: "1",
      name: "this is job name no x.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida eu ligula porta pharetra. Morbi elementum aliquet ligula in luctus. Sed placerat vulputate ligula a rhoncus. Vestibulum tempor sollicitudin neque a fermentum. Etiam efficitur ante nec purus lacinia iaculis. Sed libero metus, feugiat vel posuere quis, bibendum imperdiet nulla. Pellentesque elit nunc, auctor pretium vulputate in, suscipit et nibh. Fusce elementum tristique augue eu pretium. Integer at augue et velit consequat auctor in vitae dolor. Vestibulum arcu purus, tempor non dignissim ut, aliquam in magna. Donec quis turpis vel est rutrum feugiat sit amet at risus. Pellentesque eget sem a velit vestibulum fringilla quis rhoncus odio. Proin bibendum molestie augue eu laoreet.",
      skills: ["skill no 11", "skill no 2", "skill no 3", "skill no 4"],
    },

    {
      id: "2",
      name: "this is job name no x.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida eu ligula porta pharetra. Morbi elementum aliquet ligula in luctus. Sed placerat vulputate ligula a rhoncus. Vestibulum tempor sollicitudin neque a fermentum. Etiam efficitur ante nec purus lacinia iaculis. Sed libero metus, feugiat vel posuere quis, bibendum imperdiet nulla. Pellentesque elit nunc, auctor pretium vulputate in, suscipit et nibh. Fusce elementum tristique augue eu pretium. Integer at augue et velit consequat auctor in vitae dolor. Vestibulum arcu purus, tempor non dignissim ut, aliquam in magna. Donec quis turpis vel est rutrum feugiat sit amet at risus. Pellentesque eget sem a velit vestibulum fringilla quis rhoncus odio. Proin bibendum molestie augue eu laoreet.",
      skills: ["skill no 11", "skill no 2", "skill no 3", "skill no 4"],
    },

    {
      id: "3",
      name: "this is job name no x.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida eu ligula porta pharetra. Morbi elementum aliquet ligula in luctus. Sed placerat vulputate ligula a rhoncus. Vestibulum tempor sollicitudin neque a fermentum. Etiam efficitur ante nec purus lacinia iaculis. Sed libero metus, feugiat vel posuere quis, bibendum imperdiet nulla. Pellentesque elit nunc, auctor pretium vulputate in, suscipit et nibh. Fusce elementum tristique augue eu pretium. Integer at augue et velit consequat auctor in vitae dolor. Vestibulum arcu purus, tempor non dignissim ut, aliquam in magna. Donec quis turpis vel est rutrum feugiat sit amet at risus. Pellentesque eget sem a velit vestibulum fringilla quis rhoncus odio. Proin bibendum molestie augue eu laoreet.",
      skills: ["skill no 11", "skill no 2", "skill no 3", "skill no 4"],
    },

    {
      id: "4",
      name: "this is job name no x.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida eu ligula porta pharetra. Morbi elementum aliquet ligula in luctus. Sed placerat vulputate ligula a rhoncus. Vestibulum tempor sollicitudin neque a fermentum. Etiam efficitur ante nec purus lacinia iaculis. Sed libero metus, feugiat vel posuere quis, bibendum imperdiet nulla. Pellentesque elit nunc, auctor pretium vulputate in, suscipit et nibh. Fusce elementum tristique augue eu pretium. Integer at augue et velit consequat auctor in vitae dolor. Vestibulum arcu purus, tempor non dignissim ut, aliquam in magna. Donec quis turpis vel est rutrum feugiat sit amet at risus. Pellentesque eget sem a velit vestibulum fringilla quis rhoncus odio. Proin bibendum molestie augue eu laoreet.",
      skills: ["skill no 11", "skill no 2", "skill no 3", "skill no 4"],
    },

    {
      id: "5",
      name: "this is job name no x.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida eu ligula porta pharetra. Morbi elementum aliquet ligula in luctus. Sed placerat vulputate ligula a rhoncus. Vestibulum tempor sollicitudin neque a fermentum. Etiam efficitur ante nec purus lacinia iaculis. Sed libero metus, feugiat vel posuere quis, bibendum imperdiet nulla. Pellentesque elit nunc, auctor pretium vulputate in, suscipit et nibh. Fusce elementum tristique augue eu pretium. Integer at augue et velit consequat auctor in vitae dolor. Vestibulum arcu purus, tempor non dignissim ut, aliquam in magna. Donec quis turpis vel est rutrum feugiat sit amet at risus. Pellentesque eget sem a velit vestibulum fringilla quis rhoncus odio. Proin bibendum molestie augue eu laoreet.",
      skills: ["skill no 11", "skill no 2", "skill no 3", "skill no 4"],
    },
  ];

  renderSkills(skills) {
    return skills.map((skill) => {
      return (
        <button key={skill} className="btn btn-outline-secondary m-1">
          {skill}
        </button>
      );
    });
  }

  renderPaginationItems() {
    return (
      <div>
        <li class="page-item">
          <a class="page-link" href="/#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">
            3
          </a>
        </li>
      </div>
    );
  }

  renderPagination() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="/#">
              Previous
            </a>
          </li>

          <li class="page-item">
            <a class="page-link" href="/#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  renderJobs() {
    return this.jobs.map((job, index) => {
      if (index < 6) {
        return (
          <div key={job.id}>
            <label style={{ color: "green", fontWeight: "bold" }}>
              {job.name}
            </label>
            <p>{job.description}</p>
            <div>
              <label style={{ color: "green" }}>skills </label>:{" "}
              {this.renderSkills(job.skills)}
            </div>

            <div>
              <i className="fa fa-user mr-1 mb-2"></i>
              <Stars number={4} users={213} />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div className="card m-2 p-2">
        <div>
          <h3 style={{ display: "inline" }}>Top Results</h3>
          <p
            style={{
              display: "inline",
              paddingLeft: "10px",
            }}
          >
            Showing 1-20 of 5555 results
          </p>
          <hr />
        </div>
        <div>{this.renderJobs()}</div>
        <div></div>
      </div>
    );
  }
}

export default Jobs;
