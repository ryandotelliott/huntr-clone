import React, { Component } from 'react';
import styles from './styles/Card.module.css';

export default class Card extends Component {
    render() {
        return (
            <div className={styles.card}>
                <p className={styles.company}>{this.props.company}</p>
                <p className={styles.position}>{this.props.position}</p>
            </div>
        );
    }
}
