import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class QuestionSummary extends Component {
  render() {
    const { id, question, users } = this.props
    const author = question.author
    const authorName = users[author].name
    const avatarURL = users[author].avatarURL
    const text = question.optionOne.text.substring(0, 15)
    return (
      <div className='summary-container'>
        <div className='summary-author'>{authorName} asks:</div>
        <div className='summary-bottom-container'>
          <div className='summary-avatar-container'>
            <img
              src={avatarURL}
              alt={`Avatar of ${author}`}
              className='avatar avatar-small'
            />
          </div>
          <div className='summary-question-link-container'>
            <div className='would-you-rather'>Would you rather</div>
            <div className='wyr-question-partial'>...{text}...</div>
            <Link to={`/questions/${id}`} className='link'>
              <button className='btn view-full-btn'>View Full Link</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

// What state does this component actually need from our redux store?
// The id comes from list component that passes id as a prop to the Question Summary component
function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]

  // Now we pass the QuestionSummary component any data it wants
  return {
    users,
    question: question
  }
}

export default withRouter(connect(mapStateToProps)(QuestionSummary))