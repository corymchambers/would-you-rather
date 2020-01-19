import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogout } from '../actions/authedUser'
import { Redirect} from 'react-router-dom'

class Logout extends Component {
  render() {
    const user = null
    const { dispatch } = this.props
    dispatch(handleLogout({
      user
    }))

    return (
      <Redirect to='/' />
    )

    // return (<div>logout</div>)
  }
}

export default connect()(Logout)