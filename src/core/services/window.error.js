import React, { Component } from 'react';
import { error } from './logger.service'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state to trigger fallback UI
        return { hasError: true };
    }

    componentDidCatch(err, fullStack) {
        // Log error or send logging data to log management tool
        let request = {
            trace : err.stack,
            componentStack :  fullStack
        }
        error(request);
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}