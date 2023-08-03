import React, { Component } from "react";
import ErrorMessage from "../error-message";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };
    static getDerivedStateFromError(error) {
        return { hasError: true };
    };

    componentDidCatch(error, info){
        console.log(error, info);
        return(
            <div>
                <ErrorMessage />
            </div>
        );
    }
    render() {
        const { hasError } = this.state;

        if (hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    };
};

