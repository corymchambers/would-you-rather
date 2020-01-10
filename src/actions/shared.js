import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { authedUser, setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  //uses redux thunk pattern because this makes async request inside of this function
  return (dispatch) => {
    return (getInitialData())
      .then((questions) => {
        //now we want to take the questions and add them to the state of the redux store
        // to do that you will need to dispatch a few different actions
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }

}