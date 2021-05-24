import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

import { Spinner } from 'react-bootstrap';


import { AlertContext } from '../shared/AlertContext';
import { ToasterConsumer } from '../shared/ToasterContext';
import Toaster from '../shared/Toaster';
import { getValues, deleteValues } from '../services/form.service';


export default class Listing extends Component {

    static contextType = AlertContext

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            response: [],
            error: ""
        }

        this.responseHtml = '';
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        this.getData();
    }


    async getData() {
        await getValues().then((res) => {
            if (res && res.length > 0) {
                this.responseHtml = res.map((item) => <tr key={item.id}>
                    <td>
                        {item.id}
                    </td>
                    <td>
                        {item.userId}
                    </td>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        {item.body}
                    </td>
                    <td>
                        <Link to={{
                            pathname: "/view/" + item.id,
                            state: { values: item }
                        }} >
                            <button type="button" >
                                View
                            </button>
                        </Link>
                        <Link to={{
                            pathname: "/edit/" + item.id,
                            state: { values: item }
                        }} >
                            <button type="button" >
                                Edit
                            </button>
                        </Link>
                        <button onClick={() => this.delete(item.id)}>Delete</button>
                    </td>
                </tr>)
                this.setState({
                    response: res,
                    loading: false
                })
            } else {
                this.setState({
                    loading: false
                })
            }
        }).catch((error) => {
            this.setState({
                loading: false
            })
            this.context.setError({ 'show': true, 'message': "Some error has Occurred", "showOk": false })
        })
    }

    async delete(id) {
        this.setState({
            loading: true
        })
        await deleteValues(id).then((response) => {
            if (response) {
                this.getData()
            }
        })
    }



    render() {
        const { ok } = this.context
        return (
            <div>

                {this.state.loading && (
                    <Spinner animation="border" role="status" />
                )}
                <div>
                    <Link to="/add">Add</Link>
                </div>
                <ToasterConsumer>
                    {value => (
                        <div>
                            {
                                value.show && (
                                    <Toaster message={value.message} setToaster = {value.setToaster}  type={value.type}></Toaster>
                                )
                            }
                        </div>

                    )}
                </ToasterConsumer>

                <table className="table table-responsive table-bordered">
                    <thead>
                        <tr>
                            <td>
                                Id
                        </td>
                            <td>
                                User Id
                        </td>
                            <td>
                                Title
                        </td>
                            <td>
                                Body
                        </td>
                            <td>
                                Actions
                        </td>
                        </tr>
                    </thead>
                    {this.responseHtml.length > 0 && (<tbody id="my-cart-body">
                        {this.responseHtml}
                    </tbody>)}
                </table>
                {
                    ok && (
                        this.handleOk()
                    )
                }
            </div>
        )
    }
}
