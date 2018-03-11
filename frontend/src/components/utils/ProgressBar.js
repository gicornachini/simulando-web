import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        const max = 100
        const position = this.props.actualIndex + 1
        const value = position/this.props.maxIndex * max

        return (
            <section class="hero">
                <div class="hero-body">
                    <progress className="progress is-link" value={value} max={max}>{value}%</progress>
                </div>
            </section>
        );
    }
}

export default ProgressBar;