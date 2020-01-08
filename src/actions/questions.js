// this will be the action type when we recieve and dispatch all of the questions to update our store
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

// receive questions action creator
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}