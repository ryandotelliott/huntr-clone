import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="job-card">
                <p className="job-company">{this.props.name}</p>
                <p className="job-position">{this.props.position}</p>
            </div>
        )
    }
}
