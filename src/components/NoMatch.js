import React, { Component } from 'react'

class NoMatch extends Component {
  render() {
    return (
      <div className='content-container'>
        <div className='container-header'>404</div>
        <div className='container-bottom-container'>I'm sorry but this page does not exist. Please click a link above.</div>
      </div>
    )
  }
}

export default NoMatch