import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  // When this component mounts we want to dispatch the invocation of our handleInitialData action creator
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    )
  }
}

// To get access to dispatch need to connect our App component
// Using the connect() function upgrades a component to a container. Containers can read state from the store and dispatch actions.
export default connect()(App)
