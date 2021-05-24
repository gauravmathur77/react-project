import React, {Component} from 'react';
import Toaster from './Toaster';

const ToasterContext = React.createContext();

const ToasterConsumer = ToasterContext.Consumer;

class ToasterProvider extends Component {


    constructor(props) {
        super(props)

        this.state = {
            show: false,
            message: "",
            type: ""
        }

    }


    setToaster = (values) => {
        this.setState({
            show: values.show,
            message: values.message,
            type: values.type
        })
    }



    render() {
        const { setToaster, state: { show, message, type } } = this

        return (
            <ToasterContext.Provider value={{
                show,
                message,
                type,
                setToaster
            }}>
                {this.props.children}
            </ToasterContext.Provider>
        )

    }


}


export { ToasterProvider, ToasterConsumer, ToasterContext };
