import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
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
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </div>
          <div>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </div>
        </div>
        { authedUser !== null &&
          (
            <div className='nav-links'>
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
                <NavLink to='/logout' activeClassName='active'>
                  Logout
                </NavLink>
              </div>
            </div>
          )
        }
      </nav>
    )
  }
}

export default Nav