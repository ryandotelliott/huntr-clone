import React, { Component } from 'react'

export default class AddComponentModal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: props.activeBoard
        }
    }

    handleChange = (e) => {
        this.setState({selected: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    addModalOptions = () => (
        this.props.boards.map((board) => (
            <option value={board.id} key={board.id}>{board.name}</option>
        ))
    )

    render() {
        return (
            <div className="add-job-modal">
                <label htmlFor="company-input">Company</label>
                <input type="text" id="company-input" name="company-input" />

                <label htmlFor="position-input">Position</label>
                <input type="text" id="position-input" name="position-input" />

                <form onSubmit={this.handleSubmit}>
                    <select name="board_name" id="board-selection" value={this.state.selected} onChange={this.handleChange}>
                        {this.addModalOptions()}
                    </select>
                    <input type="submit" value="Add" />
                </form>

            </div>
        )
    }
}
