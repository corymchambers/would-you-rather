import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'
import Result from './Result'
import { Redirect } from 'react-router-dom'

class Question extends Component {
  state = {
    answerSelected: false,
    toResult: false
  }
  handleAnswerSelect = (e) => {
    this.setState({answerSelected:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { answerSelected } = this.state
    const { dispatch, question, authedUser } = this.props

    this.setState({toResult: true})

    dispatch(handleAnswerQuestion({
      id: question.id,
      answer: answerSelected,
      authedUser
    }))
  }

  render() {
    if (this.props.redirect === true) {
      return <Redirect to='/' />
    }
    const { question, author, users, alreadyAnswered } = this.props
    const id = question.id
    const authorName = users[author.id].name
    const avatarURL = users[author.id].avatarURL
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    const { answerSelected, toResult } = this.state

    // Is question already answered? Instead call in Result component
    if (toResult === true || alreadyAnswered === true) {
      return <Result id={id} />
    }

    return (
      <div className='summary-container'>
        <div className='summary-author'>{authorName} asks:</div>
        <div className='summary-bottom-container'>
          <div className='summary-avatar-container'>
            <div className='image-container'>
              <img
                src={avatarURL}
                alt={`Avatar of ${author}`}
                className='lb-avatar'
              />
            </div>
          </div>
          <div className='summary-question-link-container'>
            <div className='would-you-rather-big'>Would you rather...</div>
            <form className='' onSubmit={this.handleSubmit}>
              <div>
                <input type='radio' id='option-one' name='answer' value='optionOne' onClick={this.handleAnswerSelect} />
                <label htmlFor='option-one'>{optionOne}</label>
              </div>
              <div>
                <input type='radio' id='option-two' name='answer' value='optionTwo' onClick={this.handleAnswerSelect} />
                <label htmlFor='option-two'>{optionTwo}</label>
              </div>
              <button
                className='btn'
                type='submit'
                disabled={answerSelected === false}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

//Will need questions, authedUser, users
function mapStateToProps ({authedUser, users, questions}, props) {
  const { id } = props.match.params
  const question = questions[id]
  let redirect = false
  let author = ''
  let alreadyAnswered = ''
  if (typeof question === 'undefined') {
    redirect = true
    author = ''
    alreadyAnswered = ''
  } else {
    author = users[question.author]
    alreadyAnswered = Object.keys(users[authedUser].answers).includes(id)
  }

  return {
    question,
    author,
    users,
    authedUser,
    alreadyAnswered,
    redirect
  }
}

export default connect(mapStateToProps)(Question)