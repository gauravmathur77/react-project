import React, { Component } from 'react'

export default class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: {}
        }
    }

    componentDidMount() {
        if (Object.keys(this.props.location.state.values).length > 0) {
            this.setState({
                details: this.props.location.state.values
            })
        }
    }

    render() {
        return (
            <div className="form-group row">
                <div className="col-md-3">
                    <span>
                        <b>Title          </b>
                    </span>
                    <span>
                        {this.state.details.title} asdadasasdas
                    </span>
                </div>
                <div className="col-md-3">
                    <span>
                        <b>Desc              </b>
                    </span>
                    <span>
                        {this.state.details.body}
                    </span>
                </div>
            </div>
        )
    }
}
