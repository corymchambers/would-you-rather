import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class QuestionSummary extends Component {
  render() {
    const { id, question, users } = this.props
    const author = question.author
    const avatarURL = users[author].avatarURL
    const text = question.optionOne.text.substring(0, 15) + '...'
    // console.log()
    return (
      <div className='summary-container'>
        <div>{author} asks:</div>
        <img
          src={avatarURL}
          alt={`Avatar of ${author}`}
          className='avatar'
        />
        <div>Would you rather</div>
        <div>{text}</div>
        <button>View Full Link</button>

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