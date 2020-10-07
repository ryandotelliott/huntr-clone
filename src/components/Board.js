import React, { Component } from 'react'
import Card from './Card'

export default class Board extends Component {
    loadCards = () => {
        return (
            this.props.jobs.map((card) => (
                <Card key={card.id} name={card.company} position={card.position} />
            )));
        }

    render() {
        return (
            <div className="board">
                <input className="board-title" placeholder="List Name" defaultValue={this.props.name} />
                <p className="board-card-count">
                    {this.props.jobs.length} JOBS
                </p>

                <button className="add-card-button" onClick={this.createCard}>
                    +
                </button>

                {this.loadCards()}

            </div>
        )
    }
}
