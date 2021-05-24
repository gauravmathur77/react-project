import React, { Component } from 'react';
import RefForm from './RefForm';
import RefFuncChild from './RefFuncChild';

export default class RefParentForm extends Component {
    constructor(props) {
        super(props)
    
        this.childRef = React.createRef()
        
        this.fowardRef = React.createRef()
    }

    onClick = () => {
        this.childRef.current.focusChild()
    }
    
    onFowardRef = () => {
        this.fowardRef.current.focus()
    }

    render() {
        return (
            <div>
                <RefForm ref={this.childRef}></RefForm>   
                
                <RefFuncChild ref={this.fowardRef}></RefFuncChild>   
                
                <button onClick={this.onClick}>Parent Click</button>       

                
                <button onClick={this.onFowardRef}>Parent Function Component Foward Ref Click</button>       
            </div>
        )
    }
}
