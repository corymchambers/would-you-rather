import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../actions/authedUser'

class Nav extends Component {
  handleLogoutClick = (e) => {
    const { dispatch } = this.props
    const user = null
    dispatch(handleLogout({
      user
    }))
  }
  render () {
    const {authedUser, users} = this.props
    const userName =  authedUser !== null ? users[authedUser].name : ''
    const avatarURL = authedUser !== null ? users[authedUser].avatarURL : ''
    return (
      <nav className='nav'>
        <div className='nav-links'>
          <div>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </div>
          <div>
            <NavLink to='/leader-board' activeClassName='active'>
              Leader Board
            </NavLink>
          </div>
        </div>
        { authedUser !== null &&
          (
            <div className='profile-links'>
              <div>
                <div>Hello, {userName}</div>
              </div>
              <div>
                <img
                  src={avatarURL}
                  alt={`Avatar of ${userName}`}
                  className='avatar-xs'
                />
              </div>
              <div>
                <button onClick={this.handleLogoutClick}>Logout</button>
              </div>
            </div>
          )
        }
      </nav>
    )
  }
}

// Need this to get dispatch
function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(Nav)