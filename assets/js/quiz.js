// Create questions
const questions = [
  {
    question: 'abcd',
    answers: [
      { text: 'shark', isCorrect: false },
      { text: 'shark', isCorrect: false },
      { text: 'shark', isCorrect: false },
      { text: 'not shark', isCorrect: true }
    ]
  },
  {
    question: 'abcd1',
    answers: [
      { text: 'shark', isCorrect: false },
      { text: 'shark', isCorrect: false },
      { text: 'shark', isCorrect: false },
      { text: 'not shark', isCorrect: true }
    ]
  }
]

// Create variables for the questions, answers and next question button
const questionArea = document.getElementById('question')
const answerArea = document.getElementById('answer')
const nextButton = document.getElementById('next-question')
