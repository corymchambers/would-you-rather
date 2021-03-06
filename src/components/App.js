import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionSummaryList from './QuestionSummaryList'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Question from './Question'
import Login from './Login'
import NoMatch from './NoMatch'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Logout from './Logout'

class App extends Component {
  // When this component mounts we want to dispatch the invocation of our handleInitialData action creator
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            {this.props.authedUser === null
              ? <div>
                  <Nav authedUser={this.props.authedUser} users={this.props.users} />
                  <Login />
                </div>
              : this.props.loading
                ? null
                : <div>
                    <Nav authedUser={this.props.authedUser} users={this.props.users} />
                    <Switch>
                      <Route path='/' exact component={QuestionSummaryList} />
                      <Route path='/questions/:id' exact component={Question} />
                      <Route path='/login' exact component={Login} />
                      <Route path='/logout' exact component={Logout} />
                      <Route path='/add' exact component={NewQuestion} />
                      <Route path='/leaderboard' exact component={LeaderBoard} />
                      <Route component={NoMatch} />]
                    </Switch>
                  </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({authedUser, users }) {
  return {
    loading: authedUser === null,
    authedUser,
    users
  }
}

// To get access to dispatch need to connect our App component
// Using the connect() function upgrades a component to a container. Containers can read state from the store and dispatch actions.
export default connect(mapStateToProps)(App)