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

// Create variable to store question index and score
let currentQuestionIndex = 0
let score = 0

// This function starts the quiz
function startQuiz () {
  currentQuestionIndex = 0 // starts quiz at first question
  score = 0 // starts score at 0
  nextButton.innerHTML = 'Next'
  // calls function showQuestion
  showQuestion()
}
