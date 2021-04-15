import React, { Component } from 'react';
import Child from './Child'

export default class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message : 'dad waiting',
            gift : ['scooter', 'ps5']
        }

        this.parentHandler = this.parentHandler.bind(this)
    }

    parentHandler(event) {
        this.setState({
            message : event.message
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Child gift={this.state.gift} childEvent={this.parentHandler}></Child>
            </div>
        )
    }
}
