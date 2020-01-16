import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render () {
    console.log(this.props)
    const {authedUser, users} = this.props
    const userName = users[authedUser].name
    const avatarURL = users[authedUser].avatarURL
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
            <div>Logout</div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav