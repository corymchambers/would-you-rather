import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class QuestionSummary extends Component {
  render() {
    console.log(this.props)
    const { id } = this.props
    return (
      <div>Question Summary {id}</div>
    )
  }
}

// What state does this component actually need from our redux store?
function mapStateToProps({authedUser, questions}, {id}) {
  const question = questions[id]

  // Now we pass the QuestionSummary component any data it wants
  return {
    authedUser,
    question: formatQuestion( question.optionOne.text, question.optionTwo.text, question.author)
  }
}

export default connect(mapStateToProps)(QuestionSummary)