import React, { Component } from 'react';
import Card from './Card';
import styles from './styles/Board.module.css'

export default class Board extends Component {
    constructor (props) {
        super(props);
        this.state = {
            jobs: props.jobs,
        };
    }

    loadCards = () => {
        return (
            this.state.jobs.map((card) => (
                <Card key={card.id} company={card.company} position={card.position} />
            ))
        );
    }

    render() {
        return (
            <div className={styles.board}>
                <input className={styles.title} placeholder="List Name" defaultValue={this.props.name} />
                <p className={styles['card-count']}>
                    {this.props.jobs.length} JOBS
                </p>

                <button className={styles['add-card-button']} onClick={() => this.props.renderModal(this.props.id)}>
                    +
                </button>

                {this.loadCards()}
            </div>
        )
    }
}
