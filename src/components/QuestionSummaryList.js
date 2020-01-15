import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionSummary from './QuestionSummary'

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
      <div className='summary-list-btns-container'>
        <button className={`btn btn-unanswer ${(tab === 'unanswered' ? 'active-list-toggle-btn' : '')}`} onClick={this.handleTabClick}>Unanswered Questions</button>
        <button className={`btn btn-answer${(tab === 'answered' ? 'active-list-toggle-btn' : '')}`} onClick={this.handleTabClick}>Answered Questions</button>
        <div className="summary-list-container">
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