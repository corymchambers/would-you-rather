// this will be the action type when we recieve and dispatch all of the questions to update our store
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const NEW_QUESTION = 'NEW_QUESTION'

// receive questions action creator
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function answerQuestion ({id, authedUser, answer}) {
  return {
    type: ANSWER_QUESTION,
    id,
    authedUser,
    answer
  }
}

export function newQuestion (question) {
  return {
    type: NEW_QUESTION,
    question
  }
}