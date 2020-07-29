// This is an array of question//
let questions = [
  {
    "question": "What document do you use to style an index.HTML file? ",
    "correct_answer": ".css file",
    "answers": [
      ".style file",
      "style.js file",
      ".css file",
      ".js file"
    ]
  },
  {
    "question": "Arrays in JavaScript can be used to store _____.",
    "correct_answer": "all of the above",
    "answers": [
      "Ints & Strings",
      "another array",
      "booleans",
      "all of the above"
    ]
  },
  {
    "question": "What are booleans?",
    "correct_answer": "True or False",
    "answers": [
      "Strings",
      "True or False",
      "functions",
      "if / else statements"
    ]
  },
  {
    "question": "what does innerHTMl do?",
    "correct_answer": "Returns content of an Element",
    "answers": [
      "Returns content of an Element",
      "connects your .css file",
      "creates a new element",
      "Calls an Index var"
    ]
  }
]

// this is the variable for our questions index// it is globally scooped//
let Index = 0

let playerScore = 0


// takes the current index that we are at, and then should go grab the questions information for us to render//
const newQuestion = () => {

  // this is using the ID call to ??questions in array?? by using the .textContent// then setting it equal to questions array and giving it a LET of Index = 0. Then using .Notation to call for which array you want to pull from.//
  document.getElementById(`question`).textContent = questions[Index].question

  // this is calling for a LET var of answers to be calling from the questions array? using .Notation//
  let answers = questions[Index].answers

  // this is using the LET answers to be called on. the innerHTML sets or returns the HTML content of an Element** // for loop  let us start at 0 in the index and move up one at time and calling each section of **answers inside of Questions ARRAY!//
  document.getElementById('answers').innerHTML = ''
  for (let i = 0; i < answers.length; i++) {
    // this is an createElement METHOD! this lets you create clickable answer buttons//
    let answerElem = document.createElement('button')
    // included the word answer in the btn btn-info. letting me know these are possible answer btn
    answerElem.className = 'answer btn btn-info btn-lg'
    // we included this after becuase we needed to grab the answer. This renders each btn seperatily and lets us get the value from each btn. as apposed to text.Conent which only pulls the text. 
    answerElem.dataset.answer = answers[i]
    answerElem.textContent = answers[i]

    document.getElementById('answers').append(answerElem)
  }
}

const finalAnswer = answer => {
  // another condition to check if the Answer they choose ==="MATCHES"=== with the correct answer//
  if (answer === questions[Index].correct_answer) {
    playerScore++
    document.getElementById('playerScore').textContent = playerScore
    let resultsElem = document.createElement('div')
    resultsElem.className = 'alert alert-success'
    resultsElem.textContent = 'Correct Answer'
    document.getElementById('answers').append(resultsElem)
  } else {
    let resultsElem = document.createElement('div')
    resultsElem.className = 'alert alert-danger'
    resultsElem.textContent = 'Ops, that is Incorrect!'
    document.getElementById('answers').append(resultsElem)
  }

  Index++

  setTimeout(() => {
    if (Index < questions.length) {
      newQuestion()
    } else {
      gameOver()
    }
  }, 1000)
}

const gameOver = () => {
  document.getElementById('game').innerHTML = `
  <h1 class="display-4">GAME OVER!</h1>
  <p class="lead"> Your Score Was &rarr; ${playerScore}</p>
  <hr class="my-4">
  <p>Good Job you got ${playerScore} Right!</p>
  <form>
      <label for="Player's Name"> Enter Player's Intials below:</label>
      <input type="text" class="form-control" id="playerName">
      <button id="submitScore" class="btn btn-danger">Log High Score!</button>
  </form>
  `
}

const submitScore = highScoreLog => {
  console.log(highScoreLog)
  
  let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []

  leaderboard.push(highScoreLog)

  localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
  }

//THIS IS THE START OF THE GAME **linked to the #ID startTrivia
document.getElementById('startTrivia').addEventListener('click', () => {
  newQuestion()
})


// we need and addeventlistener for the entire page! for when its clicked it will handle the event obj for the information that we are recalling from//
document.addEventListener('click', event => {
  // we just included answer in the answer btn btn-info. This links that with a event.target to let us know if they did choose one of them it will console.log the 'Following'// 
  if (event.target.classList.contains('answer')) {
    finalAnswer(event.target.dataset.answer)
  } else if (event.target.id === 'submitScore') {
    event.preventDefault()
    submitScore({
      username: document.getElementById('username').value,
      score: score
    })
  }
})


