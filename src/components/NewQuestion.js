import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    qOne: false,
    qTwo: false,
    toHome: false
  }
  textEntered = (e) => {
    if (e.target.name === 'question-input-one') {
      if (e.target.value !== '') {
        this.setState({qOne: e.target.value})
      } else {
        this.setState({qOne: false})
      }
    }
    if (e.target.name === 'question-input-two') {
      if (e.target.value !== '') {
        this.setState({qTwo: e.target.value})
      } else {
        this.setState({qTwo: false})
      }
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { qOne, qTwo } = this.state
    const { dispatch, authedUser } = this.props
    dispatch(handleNewQuestion({
      qOne,
      qTwo,
      authedUser
    }))
    this.setState({toHome: true})
  }
  render() {
    const { toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='content-container'>
        <div className='container-header'>Create New Question</div>
        <div className=''>
          <div className='complete-question'>Complete the question:</div>
          <div className='question-wyr'>Would you rather...</div>
          <form onSubmit={this.handleSubmit}>
            <div className='question-inputs-container'>
              <div className='question-input-container'>
                <input
                  type='text'
                  name='question-input-one'
                  className='question-input'
                  placeholder='Enter Question One Text Here'
                  onInput={this.textEntered}
                  />
              </div>
              <div className='or-text'>OR</div>
              <div className='question-input-container'>
                <input
                  type='text'
                  name='question-input-two'
                  className='question-input'
                  placeholder='Enter Question Two Text Here'
                  onInput={this.textEntered}
                  />
              </div>
              <button
                type='submit'
                className='submit-btn'
                disabled={this.state.qOne === false || this.state.qTwo === false}
                >Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)
