import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class QuestionSummary extends Component {
  render() {
    const { id, question, users } = this.props
    const author = question.author
    const authorName = users[author].name
    const avatarURL = users[author].avatarURL
    const text = question.optionOne.text.substring(0, 15)
    // console.log()
    return (
      <div className='summary-container'>
        <div className='summary-author'>{authorName} asks:</div>
        <div className='summary-bottom-container'>
          <div className='summary-avatar-container'>
            <img
              src={avatarURL}
              alt={`Avatar of ${author}`}
              className='avatar'
            />
          </div>
          <div className='summary-question-link-container'>
            <div className='would-you-rather'>Would you rather</div>
            <div className='wyr-question-partial'>...{text}...</div>
            <button className='btn view-full-btn'>View Full Link</button>
          </div>
        </div>
      </div>
    )
  }
}

// What state does this component actually need from our redux store?
// The id comes from list component that passes id as a prop to the Question Summary component
function mapStateToProps({users, questions}, {id}) {
  const question = questions[id]

  // Now we pass the QuestionSummary component any data it wants
  return {
    users,
    question: question
  }
}

export default connect(mapStateToProps)(QuestionSummary)