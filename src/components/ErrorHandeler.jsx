import React from 'react';
class ErrorHandeler extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    // initialize the error state
    this.state = { hasError: false };
  }

  // if an error happened, set the state to true
  static getDerivedStateFromError(error) {
    console.log('catch-error', error);
    return { hasError: true };
  }

  render() {
    // if error happened, return a fallback component
    if (this.state.hasError) {
      return <>Oh no! Epic fail! Try after sometime.</>;
    }

    return this.props.children;
  }
}

export default ErrorHandeler;
