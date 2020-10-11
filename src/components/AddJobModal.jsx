import React, { Component } from 'react';
import styles from './styles/AddJobModal.module.css';

export default class AddComponentModal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            'boardId': props.activeBoard
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addJob(this.state);
    }

    addModalOptions = () => (
        this.props.boards.map((board) => (
            <option value={board.id} key={board.id}>{board.name}</option>
        ))
    )

    render() {
        return (
            <div className={styles.container}>
                <form className={styles.modal} onSubmit={this.handleSubmit}>
                        <input
                            name="company"
                            type="text"
                            className={styles.company}
                            placeholder="Company"
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                        <input
                            name="position"
                            type="text"
                            className={styles.position}
                            placeholder="Position"
                            onChange={this.handleChange}
                            autoComplete="off"
                        />
                        <select
                            name="boardId"
                            className={styles.boardId}
                            value={this.state['boardId']}
                            onChange={this.handleChange}
                        >
                            {this.addModalOptions()}
                        </select>
                        <input type="submit" value="Add" className="add-button" />
                </form>
            </div>
        );
    }
}
