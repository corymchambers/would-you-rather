import React, { Component } from 'react'

class NoMatch extends Component {
  render() {
    return (
      <div className='summary-container'>
        <div className='summary-author'>404</div>
        <div className='summary-bottom-container'>I'm sorry but this page does not exist. Please click a link above.</div>
      </div>
    )
  }
}

export default NoMatch