import React, { Component } from 'react'
import Board from './Board'
import AddJobModal from './AddJobModal'
import styles from './styles/BoardContainer.module.css'

export default class BoardContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            boards: this.props.boards,
            showModal: {
                isShown: false,
                activeBoard: -1,
            }
        }
    }

    addJob = (new_job_state) => {
        let formatted_job = {
            company: new_job_state.company,
            position: new_job_state.position,
            boardId: new_job_state.boardId,
            id: -1
        }


        this.setState(
            this.state.boards.map((board) => {
                // Check if the current board is the same one we're adding too
                if (board.id === parseInt(formatted_job.boardId)) {
                    // If so, add the new card to the jobs
                    const jobs_length = board.jobs.length
                    formatted_job.id = jobs_length ? board.jobs[jobs_length - 1].id + 1 : 0;
                    return board.jobs.push(formatted_job);
                }
                return board;
            })
        );

        this.renderModal();
    }

    renderModal = (board_id = -1) => {
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
            this.state.boards.map((board) => (
                <Board key={board.id} id={board.id} name={board.name} jobs={board.jobs} renderModal={this.renderModal} />
            ))); 
        }

    render() {
        const modal = <AddJobModal 
                        boards={this.state.boards}
                        activeBoard={this.state.showModal.activeBoard}
                        addJob={this.addJob}
                    />
        return (
            <div className={styles.container}>
                {this.state.showModal.isShown ? modal : null}
                {this.loadBoards()}
            </div>
        )
    }
}
