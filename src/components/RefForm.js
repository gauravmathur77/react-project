import React, { Component } from 'react'

export default class RefForm extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }

    onChangeText = () => {
        console.log('asdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        this.inputRef.current.focus()
    }

    focusChild = () => {
        console.log('asdasd')
    }
    
    render() {
        return (
            <div>
                <form action="#">
                   Normal Way :  <input ref={this.inputRef} ></input>
                   <button onClick={this.onChangeText}>Click</button>
                </form>
            </div>
        )
    }
}
