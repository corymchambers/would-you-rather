import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionSummary from './QuestionSummary'

class QuestionSummaryList extends Component {
  render() {
    return (
      <ul>Question Summary List
        {(this.props.questionIds.map((id) => (
          <ul key={id}>
            <QuestionSummary id={id} />
          </ul>
        )))}
      </ul>
    )
  }
}

// What data does this component need from the state of our redux store
function mapStateToProps({ questions }) {
  return {
    // Get question ids and sort by timestamp
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QuestionSummaryList)