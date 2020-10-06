import React, { Component } from 'react'
import './BoardStyles.css'

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <input className="board-title" placeholder="List Name" defaultValue={this.props.name} />
                <p className="board-card-count">
                    {this.props.jobs.length} JOBS
                </p>

                <div className="add-card-button">
                    +
                </div>
            </div>
        )
    }
}
