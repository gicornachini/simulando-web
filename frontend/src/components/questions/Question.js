import React, { Component } from "react";

import QuestionAlternative from "./QuestionAlternative";
import SelectedAlternativeModal from "./SelectedAlternativeModal";

import { createMarkup } from "../../utils/utils";

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSelectedAnswerModal: false,
            isCorrect: false,
        }
    }

    hideModal() {
        this.setState({ showSelectedAnswerModal: false });
    };

    checkSelectedAlternativeIsCorrect(alternative) {
        let isCorrect = false;
        if (this.props.correctChoiceId === alternative.id) {
            isCorrect = true;
        }

        this.setState({
            showSelectedAnswerModal: true,
            isCorrect: isCorrect
        })
    }

    getFullText() {
        return createMarkup(this.props.index+") "+this.props.text)
    }

    render() {
        const questionAlternatives = this.props.questionAlternatives.map(
            alternative => (
            <QuestionAlternative key={alternative.id}
                                 onSelectAlternative={this.checkSelectedAlternativeIsCorrect.bind(this, alternative)}
                                 {...alternative} />
        )
    );

    return (
        <section className="questions">
            <SelectedAlternativeModal show={this.state.showSelectedAnswerModal}
                                      isLast={false}
                                      isCorrect={this.state.isCorrect}
                                      showNextQuestion={this.props.showNextQuestion}
                                      hideModal={this.hideModal.bind(this)}/>
            <div className="column is-8 is-offset-2">
                <div className="card question">
                    <div className="card-content">
                        <div className="content">
                            <div className="question-body">
                                <p dangerouslySetInnerHTML={this.getFullText()} />
                            </div>
                            <div className="question-alternatives">
                                <ul>{questionAlternatives}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Question;
