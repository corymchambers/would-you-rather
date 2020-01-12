import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionSummary from './QuestionSummary'
import { getState } from 'expect/build/jestMatchersObject'

class QuestionSummaryList extends Component {
  state = {
    tab: 'unanswered'
  }

  handleTabClick = (e) => {
    const currentTab = this.state.tab
    const newTab = (currentTab === 'unanswered') ? 'answered' : 'unanswered'

    this.setState({
      tab: newTab
    })
  }

  render() {
    const { answered, unanswered } = this.props
    const { tab } = this.state

    return (
      <div className='summary-list-container'>
        <button className={(tab === 'unanswered' ? 'active-list-toggle-btn' : '')} onClick={this.handleTabClick}>Unaswered Questions</button>
        <button className={(tab === 'answered' ? 'active-list-toggle-btn' : '')} onClick={this.handleTabClick}>Answered Questions</button>
        {tab === 'unanswered' &&
          unanswered.map((id) => (
            <QuestionSummary key={id} id={id} />
          ))
        }
        {tab === 'answered' &&
          answered.map((id) => (
            <QuestionSummary key={id} id={id} />
          ))
        }
      </div>
    )
  }
}

// What data does this component need from the state of our redux store
function mapStateToProps({ questions, users, authedUser }) {
  const questionIds = Object.keys(questions)
  const userAnswers = Object.keys(users[authedUser].answers)
  const answered = questionIds.filter((id) => userAnswers.includes(id))
  const unanswered = questionIds.filter((id) => !userAnswers.includes(id))
  return {
    answered,
    unanswered
  }
}

export default connect(mapStateToProps)(QuestionSummaryList)