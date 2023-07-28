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
const quizArea = document.getElementById('quiz')
const questionArea = document.getElementById('question')
const answerArea = document.getElementById('answer')

// Create variable to store question index and score
let currentQuestionIndex = 0
let score = 0

// This function starts the quiz
function startQuiz () {
  currentQuestionIndex = 0 // starts quiz at first question
  score = 0 // starts score at 0
  // calls function showQuestion
  showQuestion()
}

// This function displays the questions
function showQuestion () {
  resetQuestions()
  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1 // add 1 to the question index so that the next question shows
  questionArea.innerHTML = questionNo + '. ' + currentQuestion.question // updates the question element with questions

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add('btn')
    answerArea.appendChild(button)
    if (answer.isCorrect) {
      button.dataset.correct = 'true'
    }
    button.addEventListener('click', selectAnswer)
  })
}

// This function removes the html Answers 1-4 from the quiz
function resetQuestions () {
  while (answerArea.firstChild) {
    answerArea.removeChild(answerArea.firstChild)
  }
}

// Display whether answer is correct or not
function selectAnswer (e) {
  const selectedBtn = e.target
  const isCorrect = selectedBtn.dataset.correct === 'true'

  Array.from(answerArea.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct')
    } else if (button === selectedBtn) {
      button.classList.add('incorrect')
    }
    button.disabled = true
  })

  if (isCorrect) {
    score++ // Increment score if the answer is correct
  }

  // Update the score display
  document.getElementById('score').innerHTML = score

  // Automatically go to next question after 1 second
  setTimeout(() => {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
      showQuestion()
    } else {
      showResultForm()
    }
  }, 1000)
}

//Show email form when quiz has finished
function showResultForm () {
  quizArea.style.display = 'none'
  document.getElementById('resultForm').style.display = 'block'
}

// Start the quiz!
startQuiz()
