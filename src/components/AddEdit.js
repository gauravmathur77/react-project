import React, { Component } from 'react';
import { postValues } from '../services/form.service';

export default class AddEdit extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            salary: '',
            age: '',
            errors: {

            },
            loading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.location.pathname.indexOf('edit') > -1) {
            if (Object.keys(this.props.location.state.values).length > 0) {
                this.setState({
                    name: this.props.location.state.values.title,
                    salary: 23,
                    age: 12,
                })
            }
        }

    }

    render() {
        return (
            <div >
                {this.state?.loading && (
                    <h1>Loading...</h1>
                )}
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>Name</label>
                            <input className="form-control" type='text' value={this.state.name} name='name' onChange={this.onChangeEvent}></input>
                            {this.state?.errors?.name?.length > 0 && (
                                <div className='error' >{this.state.errors?.name}</div>
                            )}
                        </div>
                        <div className="form-group col-md-3">
                            <label>Salary</label>
                            <input className="form-control" type='text' value={this.state.salary} name='salary' onChange={this.onChangeEvent}></input>
                            {this.state?.errors?.salary?.length > 0 && (
                                <div >{this.state.errors?.salary}</div>
                            )}
                        </div>
                        <div className="form-group col-md-3">
                            <label>Age</label>
                            <input className="form-control" type='text' value={this.state.age} name='age' onChange={this.onChangeEvent}></input>
                            {this.state?.errors?.age?.length > 0 && (
                                <div >{this.state.errors?.age}</div>
                            )}
                        </div>
                    </div>
                    <input type='submit' name='submit' ></input>
                </form>
            </div>
        )
    }

    onSubmit(event) {
        event.preventDefault();
        let valid = true;
        let errors = {}
        if (!this.state.name) {
            errors['name'] = 'Name is required';
            valid = false;
        }
        if (!this.state.salary) {
            errors['salary'] = 'Salary is required';
            valid = false;
        }
        if (!this.state.age) {
            errors['age'] = 'Age is required';
            valid = false;
        }
        this.setState({
            errors: errors
        })
        if (valid) {
            this.setState({
                loading: true
            })
            delete this.state.errors
            this.postData();
        }
    }

    onChangeEvent = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async postData() {
        await postValues(this.state).then((response) => {
            if (response) {
                this.props.history.push('/list')
            }
        })
    }
}
