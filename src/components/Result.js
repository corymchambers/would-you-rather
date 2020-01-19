import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    const { question, author, authedUser } = this.props
    const authorName = author.name
    const avatarURL = author.avatarURL
    const opt1 = question.optionOne
    const opt2 = question.optionTwo
    const q1 = opt1.text
    const q2 = opt2.text
    const q1Count = opt1.votes.length
    const q2Count = opt2.votes.length
    const total = q1Count + q2Count
    const q1Percentage = (q1Count / total) * 100
    const q2Percentage = (q2Count / total) * 100
    const q1Voted = opt1.votes.includes(authedUser)
    const q2Voted = opt2.votes.includes(authedUser)

    return (
      <div className='content-container'>
        <div className='container-header'>Asked by {authorName}</div>
        <div className='container-bottom-container'>
          <div className='result-avatar-container'>
            <img
              src={avatarURL}
              alt={`Avatar of ${author}`}
              className='avatar'
            />
          </div>
          <div className='container-question-link-container'>
            <h3 className='results-header'>Results:</h3>
            <div className='result-container'>
              {q1Voted && (
                <div className='your-vote'>Your Vote</div>
              )}
              <div className='results-text'>Would you rather {q1}?</div>
              <div className='progress-container'>
                <progress max='100' value={`${q1Percentage}`} data-label={`${q1Percentage}%`}></progress>
              </div>
              <div className='results-text'>{q1Count} out of {total} votes</div>
            </div>
            <div className='result-container'>
            {q2Voted && (
                <div className='your-vote'>Your Vote</div>
              )}
              <div className='results-text'>Would you rather {q2}?</div>
              <div className='progress-container'>
                <progress max='100' value={`${q2Percentage}`} data-label={`${q2Percentage}%`}></progress>
              </div>
              <div className='results-text'>{q2Count} out of {total} votes</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//Will need questions, authedUser, users
function mapStateToProps ({authedUser, users, questions}, props) {
  const { id } = props
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Result)
