let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'data:image/jpeg;base64,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',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'data:image/jpeg;base64,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',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDeNI0pK1Shn6ZOzb8oxX3GycggZOoD7msUxvbTuu_7U1P6Nik',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
