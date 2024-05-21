import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    };

    decrement = () => {
        this.setState({count: this.state.count - 1});
    };

    render() {
        return (
            <>
                <h1>Class-Based Component: Counter</h1>
                <p> <Spinner animation="border" variant="info" size="sm"/> Count: {this.state.count} </p>
                <Button variant="outline-info" onClick={this.increment}>Increase</Button>
                {/* <button onClick={this.increment}> Increase </button> */}
                <Button variant="outline-secondary" onClick={this.decrement}>Increase</Button>
                {/* <button onClick={this.decrement}> Decrease </button> */}
            </>
        )
    }
}
