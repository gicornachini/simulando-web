import React, { Component } from "react";

class QuestionAlternative extends Component {
  render() {
    return <li>A) {this.props.text}</li>;
  }
}
export default QuestionAlternative;
