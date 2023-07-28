// Create questions
const questions = [
  {
    question: 'What is craft beer?',
    answers: [
      { text: 'A beer made in a factory', isCorrect: false },
      { text: 'Any beer that is not a lager', isCorrect: false },
      {
        text: 'A beer brewed in a traditional or non-mechanized way by a small brewery',
        isCorrect: true
      },
      { text: 'A beer that contains crafts', isCorrect: false }
    ]
  },
  {
    question: 'Which country has the most craft breweries per capita?',
    answers: [
      { text: 'Germany', isCorrect: false },
      { text: 'United States', isCorrect: false },
      { text: 'Belgium', isCorrect: false },
      { text: 'United Kingdom', isCorrect: true }
    ]
  },
  {
    question: 'What is the main ingredient in beer?',
    answers: [
      { text: 'Hops', isCorrect: false },
      { text: 'Barley', isCorrect: true },
      { text: 'Yeast', isCorrect: false },
      { text: 'Water', isCorrect: false }
    ]
  },
  {
    question: 'What is a "session" beer?',
    answers: [
      {
        text: 'A beer that is brewed for a special occasion',
        isCorrect: false
      },
      { text: 'A beer that has a low alcohol content', isCorrect: true },
      {
        text: 'A beer that is brewed during a particular season',
        isCorrect: false
      },
      { text: 'A beer that is used for tasting sessions', isCorrect: false }
    ]
  },
  {
    question: 'What does IPA stand for?',
    answers: [
      { text: 'Intensely Potent Ale', isCorrect: false },
      { text: 'International Pale Ale', isCorrect: false },
      { text: 'Indian Pale Ale', isCorrect: true },
      { text: 'Instantly Perfect Ale', isCorrect: false }
    ]
  },
  {
    question: 'What is the process of making beer called?',
    answers: [
      { text: 'Brewing', isCorrect: true },
      { text: 'Fermenting', isCorrect: false },
      { text: 'Distilling', isCorrect: false },
      { text: 'Vinting', isCorrect: false }
    ]
  },
  {
    question: 'Which ingredient adds bitterness to beer?',
    answers: [
      { text: 'Hops', isCorrect: true },
      { text: 'Yeast', isCorrect: false },
      { text: 'Barley', isCorrect: false },
      { text: 'Water', isCorrect: false }
    ]
  },
  {
    question: 'What type of beer is typically dark and sweet?',
    answers: [
      { text: 'Pilsner', isCorrect: false },
      { text: 'Stout', isCorrect: true },
      { text: 'IPA', isCorrect: false },
      { text: 'Sour', isCorrect: false }
    ]
  },
  {
    question: 'What is a lager?',
    answers: [
      {
        text: 'A beer that is brewed with bottom-fermenting yeast',
        isCorrect: true
      },
      {
        text: 'A beer that is brewed with top-fermenting yeast',
        isCorrect: false
      },
      { text: 'A beer that is brewed with wild yeast', isCorrect: false },
      { text: 'A beer that is brewed without yeast', isCorrect: false }
    ]
  },
  {
    question:
      'What is the name of the Belgian beer that is fermented in the bottle?',
    answers: [
      { text: 'Gueuze', isCorrect: false },
      { text: 'Trappist', isCorrect: false },
      { text: 'Lambic', isCorrect: false },
      { text: 'Champagne Beer', isCorrect: true }
    ]
  },
  {
    question: 'What does ABV stand for in the context of beer?',
    answers: [
      { text: 'Average Barley Volume', isCorrect: false },
      { text: 'Alcohol By Volume', isCorrect: true },
      { text: 'Advanced Brewing Variable', isCorrect: false },
      { text: 'Alternative Beer Variety', isCorrect: false }
    ]
  },
  {
    question: 'What is a "dry-hopped" beer?',
    answers: [
      {
        text: 'A beer that has had hops added during fermentation',
        isCorrect: true
      },
      {
        text: 'A beer that has been brewed without any water',
        isCorrect: false
      },
      {
        text: 'A beer that has had hops removed after brewing',
        isCorrect: false
      },
      {
        text: 'A beer that has not been brewed with any hops',
        isCorrect: false
      }
    ]
  },
  {
    question: 'Which beer style is known for its banana and clove flavors?',
    answers: [
      { text: 'American Pale Ale', isCorrect: false },
      { text: 'Irish Stout', isCorrect: false },
      { text: 'German Hefeweizen', isCorrect: true },
      { text: 'English Bitter', isCorrect: false }
    ]
  },
  {
    question: 'What does it mean when a beer is "skunked"?',
    answers: [
      { text: 'It has gone bad due to light exposure', isCorrect: true },
      { text: 'It has a high alcohol content', isCorrect: false },
      { text: 'It has been brewed with skunk hops', isCorrect: false },
      { text: 'It has a unique, musky flavor', isCorrect: false }
    ]
  }
];

// Create variables for the questions, answers, and next question button
const quizArea = document.getElementById('quiz');
const questionArea = document.getElementById('question');
const answerArea = document.getElementById('answer');

// Create a variable to store question index and score
let currentQuestionIndex = 0;
let score = 0;

// This function starts the quiz
function startQuiz() {
  currentQuestionIndex = 0; // Starts the quiz at the first question
  score = 0; // Starts the score at 0
  showQuestion(); // Calls the function showQuestion
}

// This function displays the questions
function showQuestion() {
  resetQuestions();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1; // Adds 1 to the question index so that the next question shows
  questionArea.innerHTML = questionNo + '. ' + currentQuestion.question; // Updates the question element with questions

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerArea.appendChild(button);
    if (answer.isCorrect) {
      button.dataset.correct = 'true';
    }
    button.addEventListener('click', selectAnswer);
  });

  // Calculate the progress
  let progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Update the progress bar
  let progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = progress + '%';
  progressBar.setAttribute('aria-valuenow', progress);
}

// This function removes the HTML Answers 1-4 from the quiz
function resetQuestions() {
  while (answerArea.firstChild) {
    answerArea.removeChild(answerArea.firstChild);
  }
}

// Display whether answer is correct or not
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';

  Array.from(answerArea.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    } else if (button === selectedBtn) {
      button.classList.add('incorrect');
    }
    button.disabled = true;
  });

  if (isCorrect) {
    score++; // Increment score if the answer is correct
  }

  // Update the score display
  document.getElementById('score').innerHTML = score;

  // Automatically go to the next question after 1 second
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResultForm();
    }
  }, 1000);
}

// Show email form when quiz has finished
function showResultForm() {
  quizArea.style.display = 'none';
  document.getElementById('resultForm').style.display = 'block';
}

// Start the quiz!
startQuiz();
