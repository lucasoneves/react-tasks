import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import Courses from "../Courses/Courses";

class Course extends Component {
  state = {
    id: "",
    title: "",
  };
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    const paramsTitle = this.props.match.params.title;
    this.setState({
      id: paramsId,
      title: paramsTitle,
    });
  }

  render() {
    const createContent = () => {
      console.log("hello");
    };
    return (
      <Fragment>
        {/* <Courses /> */}
        <div>
          <h1>{this.state.title}</h1>
          <p>You selected the Course with ID: {this.state.id}</p>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Course);
