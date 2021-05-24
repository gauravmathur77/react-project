import React, {Component} from 'react';
import Alert from './Alert';

const AlertContext = React.createContext();

const AlertConsumer = AlertContext.Consumer;

class AlertProvider extends Component {


    constructor(props) {
        super(props)

        this.state = {
            error: false,
            message: "",
            ok : false,
            showOk : false
        }

    }


    setError = (values) => {
        this.setState({
            error: values.show,
            message: values.message,
            ok : values.ok,
            showOk : values.showOk
        })
    }



    render() {
        const { setError, state: { error, message, ok, showOk } } = this

        return (
            <AlertContext.Provider value={{
                error,
                message,
                ok,
                showOk,
                setError
            }}>
                {this.props.children}
                {error && (
                    <Alert message={message} setError = {setError}  showOk={showOk}></Alert>
                )}
            </AlertContext.Provider>
        )

    }


}


export { AlertProvider, AlertConsumer, AlertContext };
