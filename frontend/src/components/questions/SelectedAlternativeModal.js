import React, { Component } from 'react';

class SelectedAlternativeModal extends Component {

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        const isCorrect = this.props.isCorrect
        let confirmBtns = null

        if (isCorrect) {
            confirmBtns = (
                    <button className="button is-success" onClick={this.props.showNextQuestion}>Próxima pergunta</button>
                )

        } else {
            confirmBtns = (
                    <div>
                        <button className="button is-success" onClick={this.props.hideModal}>Tentar novamente</button>
                        <button className="button is-danger" onClick={this.props.showNextQuestion}>Próxima pergunta</button>
                    </div>
                )
        }

        return (
            <div className={`${this.props.show ? 'is-active': null} modal`}>
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">{isCorrect ? 'Resposta correta': 'Resposta incorreta' }</p>
                  <button className="delete" aria-label="close" onClick={this.props.hideModal}></button>
                </header>
                <footer className="modal-card-foot">
                    {confirmBtns}
                </footer>
              </div>
            </div>
        );
    }
}

export default SelectedAlternativeModal;