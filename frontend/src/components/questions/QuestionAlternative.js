import React, { Component } from "react";

class QuestionAlternative extends Component {
  render() {
    return <li onClick={this.props.onSelectAlternative}>{this.props.letter}) {this.props.text}</li>;
  }
}
export default QuestionAlternative;
