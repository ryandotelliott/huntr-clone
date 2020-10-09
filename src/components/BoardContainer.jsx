import React, { Component } from 'react'
import Board from './Board'
import AddJobModal from './AddJobModal'

export default class BoardContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: {
                isShown: false,
                activeBoard: -1,
            }
        }
    }

    renderModal = (board_id) => {
        if (this.state.showModal.isShown) {
            this.setState({showModal: { // Turn the modal off
                isShown: false,
                activeBoard: -1,
            }});
        } else {
            this.setState({showModal: { // Turn the modal on
                isShown: true,
                activeBoard: board_id,
            }});
        }
    }

    loadBoards = () => {
        return (
            this.props.boards.map((board) => (
                <Board key={board.id} id={board.id} name={board.name} jobs={board.jobs} renderModal={this.renderModal} />
            ))); 
        }

    render() {
        return (
            <div className="board-container">
                {this.state.showModal.isShown ? <AddJobModal boards={this.props.boards} activeBoard={this.state.showModal.activeBoard} /> : null}
                {this.loadBoards()}
            </div>
        )
    }
}
