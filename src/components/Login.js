import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/authedUser'

class Login extends Component {
  state = {
    userChosen: 'default'
  }
  handleSelect = (e) => {
    const userChosen = e.target.value
    this.setState({userChosen})
  }
  handleSubmit = () => {
    const user = this.state.userChosen
    const { dispatch } = this.props
    dispatch(handleLogin({
      user
    }))
  }
  render() {
    const { users } = this.props
    const { userChosen } = this.state
    return (
      <div className='summary-container'>
        <div className='summary-author'>
          <div className='tac'>Welcome to the Would You Rather App!</div>
          <div className='sm-header-text tac'>Please sign in to continue</div>
        </div>
        <div className='login-body'>
          <img
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
            alt='ReactJS Logo'
            className='react-img'/>
          <div className='signin-text'>Sign in</div>
          <select
            value={userChosen}
            className='user-select'
            onChange={this.handleSelect}
          >
            <option value='default' disabled>Select User</option>
            {Object.values(users).map((user) => (
              <option
                key={user.id}
                value={user.id}
              >
                {user.name}
              </option>
            ))}
          </select>
          <button
            className='login-btn'
            disabled={userChosen === 'default'}
            onClick={this.handleSubmit}
          >Sign in</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)