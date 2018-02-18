import React, { Component } from "react";
import QuestionAlternative from "./QuestionAlternative";
import { createMarkup } from "../utils/utils";

class Question extends Component {
  render() {
    const questionAlternatives = this.props.questionAlternatives.map(
      alternative => (
        <QuestionAlternative key={alternative.id} text={alternative.text} />
      )
    );
    return (
      <div>
        <h2>{this.props.index})</h2>
        <div dangerouslySetInnerHTML={createMarkup(this.props.text)} />
        <ul>{questionAlternatives}</ul>
      </div>
    );
  }
}
export default Question;
