
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
    "question": "what does innerHTML do?",
    "correct_answer": "Returns content of an Element",
    "answers": [
      "Returns content of an Element",
      "connects your .css file",
      "creates a new element",
      "Calls an Index var"
    ]
  }
]

// This is the variable for our questions index// it is globally scooped//
let Index = 0
let playerScore = 0
let seconds = 90
let time = -5

// New Question Function
// Takes the current index at [I]
// Then grabs that question from "let questions"
const newQuestion = () => {

  // This is using the ID call to "questions in array" by using the .textContent & then setting it equal to questions array and giving it a LET of Index = 0. Then using          .Notation to call for which array you want to pull from.//
  document.getElementById(`question`).textContent = questions[Index].question

  // This is calling for a LET var of answers to be calling from the questions array? using .Notation//
  let answers = questions[Index].answers

  // This is using the LET answers to be called on. the innerHTML sets or returns the HTML content of an Element** // for loop  let us start at 0 in the index and move up one at time and calling each section of **answers inside of Questions ARRAY!//
  document.getElementById('answers').innerHTML = ''
  for (let i = 0; i < answers.length; i++) {

    // This is an createElement METHOD! This lets you create clickable answer buttons//
    let answerElem = document.createElement('button')

    // Included the word answer in the btn btn-info. 
    answerElem.className = 'answer btn btn-info btn-lg'
    // We included this after because we needed to grab the answer. This renders each btn separate and lets us get the value from each btn. as apposed to text.Content which only pulls the text. 
    answerElem.dataset.answer = answers[i]
    answerElem.textContent = answers[i]

    document.getElementById('answers').append(answerElem)
  }
}

const finalAnswer = answer => {
  // Another condition to check if the Answer they choose ==="MATCHES"=== with the correct answer//
  if (answer === questions[Index].correct_answer) {
    playerScore++
    document.getElementById('playerScore').textContent = playerScore
    let resultsElem = document.createElement('div')
    resultsElem.className = 'alert alert-success'
    resultsElem.textContent = 'Correct Answer'
    document.getElementById('answers').append(resultsElem)
  } else {
    time-- * 5
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
      <div class="form-group">
        <label for="playerName">Player's Name:</label>
        <input type="text" class="form-control" id="playerName">
        <button id="submitScore" class="btn btn-danger">Log High Score!</button>
      </div>
  </form>
  `
}

const submitScore = highScoreLog => {
  console.log(highScoreLog)
  
  let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []

  leaderboard.push(highScoreLog)

  localStorage.setItem('leaderboard', JSON.stringify(leaderboard))

  leaderboard.sort((a, b ) => {
    return b.score - a.score
    })

    let tableElem = document.createElement('table')
    tableElem.className = 'table'
    tableElem.innerHTML = `
      <thead>
        <tr>
          <th scope="col-2">#</th>
          <th scope="col-2">username</th>
          <th scope="col-2">score</th>
        </tr>
      </thead>
    `
    let bodyElem = document.createElement('tbody')

    for (let i = 0; i < leaderboard.length; i++) {
      let rowElem = document.createElement('tr')
      rowElem.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${leaderboard[i].username}</td>
        <td>${leaderboard[i].score}</td>

      `
      bodyElem.append(rowElem)
      
    }

    tableElem.append(bodyElem)

    document.getElementById('trivia').append(tableElem)

  }

//ACTIVATE GAME **linked to the ID "start"
document.getElementById('start').addEventListener('click', () => {

  time = setInterval (() => {
    seconds--
    document.getElementById('time').textContent = seconds

    if (seconds < 0) {
      clearInterval(time)
      endgame()
    }
  }, 1000)

  newQuestion()
})


// This is an "addEventListener" for the entire page! Logic for correct / wrong answers 
document.addEventListener('click', event => {
  // We just included answer in the answer btn btn-info. This links the event.target to let us know if they did choose one of the correct answers. 
  if (event.target.classList.contains('answer')) {
    finalAnswer(event.target.dataset.answer)
  } else if (event.target.id === 'submitScore') {
    event.preventDefault()
    submitScore({
      username: document.getElementById('username').value,
      playerScore: playerScore
    })
  }
})


