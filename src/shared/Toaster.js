import React, { Component } from 'react';

import { Toast } from 'react-bootstrap';

export default class Toaster extends Component {

    constructor(props) {
        super(props)
    }

    handleClose = () => {
        this.props.setToaster({
            show: false,
            message: "",
            type: ""
        })
    }

    render() {
        return (
            <Toast onClose={() => this.handleClose()} show={this.props.show} delay={500000000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">{this.props.type}</strong>
                </Toast.Header>
                <Toast.Body>{this.props.message}</Toast.Body>
            </Toast>
        )

    }
}
