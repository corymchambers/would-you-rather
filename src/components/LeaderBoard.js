import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {
    const { users } = this.props
    return (
      <div>
        {Object.keys(users).map((user) => (
          <div key={users[user].id} className='content-container leaderboard-container'>
            <div className='lb-avatar-container'>
            <img
                src={users[user].avatarURL}
                alt={`Avatar of ${users[user].name}`}
                className='lb-avatar'
              />
            </div>
            <div className='lb-user-data-container'>
              <div className='lb-user-name'>{users[user].name}</div>
              <div className='lb-aq-container'>
                <div className='lb-text-score'>Answered Questions</div>
                <div className='lb-text-score'>{Object.values(users[user].answers).length}</div>
              </div>
              <div className='lb-aq-container'>
                <div className='lb-text-score'>Created Questions</div>
                <div className='lb-text-score'>{Object.values(users[user].questions).length}</div>
              </div>
            </div>
            <div className='lb-score-container'>
              <div className='lb-score-text-container'>
                <div className='lb-score-text'>Score</div>
              </div>
              <div className='lb-score-number-container'>
                <div className='lb-score-number'>{Object.values(users[user].answers).length + users[user].questions.length}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  const sorted = {};

  Object
    .keys(users).sort(function(a, b){
      const aCount = Object.values(users[a].answers).length + Object.values(users[a].questions).length
      const bCount = Object.values(users[b].answers).length + Object.values(users[b].questions).length

      return aCount > bCount ? -1 : 1
    })
    .forEach(function(key) {
        sorted[key] = users[key];
    });

  return {
    users: sorted
  }
}

export default connect(mapStateToProps)(LeaderBoard)