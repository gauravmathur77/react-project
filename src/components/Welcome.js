import React, { Component } from 'react';

class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            message: 'hello',
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} - {this.state.message}</h1>
                <h1>count - {this.state.count}</h1>
                <button onClick={this.changeMessage}>Click</button>
                <button onClick={this.increment}>Increment by 1</button>
                <button onClick={this.incrementFive}>Increment by 5</button>
            </div>
        )
    }

    changeMessage = () => {
        this.setState({
            message: 'wow'
        })
    }

    increment = (bool = false) => {
        if (bool) {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }), () => {
                console.log(this)
            })
        } else {
            this.setState({
                count: this.state.count + 1
            })
        }
    }


    incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            this.increment(true);
        }
    }
}

export default Welcome;