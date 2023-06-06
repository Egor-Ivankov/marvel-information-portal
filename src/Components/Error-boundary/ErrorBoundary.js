import { Component } from 'react';
import ErrorMessage from '../Error-message/Error-message';
export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        console.log(error, info)
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        return this.props.children;
    }
}