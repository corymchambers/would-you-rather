import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from '../actions/users'
import { receiveQuestions, answerQuestion, newQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = null

export function handleInitialData () {
  //uses redux thunk pattern because this makes async request inside of this function
  return (dispatch) => {
    //before we get initial data, dispatch showLoading to show the loading bar
    dispatch(showLoading())
    return getInitialData()
      .then(({questions, users}) => {
        //now we want to take the questions and add them to the state of the redux store
        // to do that you will need to dispatch a few different actions
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleAnswerQuestion ({id, answer, authedUser}) {
  return (dispatch) => {
    dispatch(answerQuestion({id, answer, authedUser}))
    dispatch(updateUserAnswers({id, answer, authedUser}))

    return saveQuestionAnswer({
      qid: id,
      answer,
      authedUser
    })
    .catch((e) => {
      console.warn('Error in handleAnswerQuestion:', e)
      alert('There was an error saving the answer.')
    })
  }
}


export function handleNewQuestion ({qOne, qTwo}) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      author: authedUser,
      optionOneText: qOne,
      optionTwoText: qTwo
    })
      .then((question) => {
        dispatch(newQuestion(question))
        dispatch(updateUserQuestions({question, authedUser}))
      })
  }
}