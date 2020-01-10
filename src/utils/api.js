import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getQuestions()
  ]).then(([questions]) => ({
    questions
  }))
}

export function getUsers (users) {
  return _getUsers(users)
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer (question, answer) {
  return _saveQuestionAnswer(question, answer)
}