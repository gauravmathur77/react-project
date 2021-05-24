import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

export default class Alert extends Component {

    constructor(props) {
        super(props)
    }

    handleClose = () => {
        this.props.setError({
            show : false,
            message : ""
        })
    }

    
    handleOk = () => {
        this.props.setError({
            show : false,
            message : "",
            ok : true
        })
    }
    
    render() {
        return (
            <Modal
                show={true}
                backdrop="static"
                onHide={this.handleClose}
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    {
                        this.props.showOk && (
                            <Button variant="primary"  onClick={this.handleOk}>Ok</Button>
                        )
                    }
                
                </Modal.Footer>
            </Modal>
        )
        
    }
}
