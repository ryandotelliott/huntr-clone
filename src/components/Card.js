import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="job-card">
                <p className="job-title">{this.props.title}</p>
            </div>
        )
    }
}
