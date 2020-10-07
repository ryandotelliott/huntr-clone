import React, { Component } from 'react'
import Board from './Board'

export default class BoardContainer extends Component {
    mapBoards = () => {
        return (
            this.props.boards.map((board) => (
                <Board key={board.id} name={board.name} jobs={board.jobs} />
            )));
        }

    render() {
        return (
            <div className="board-container">
                {this.mapBoards()}
            </div>
        )
    }
}
