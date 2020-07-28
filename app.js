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
  ]}
  
]

// this is the variable for our questions index//
let questionIndex = 0


// takes the current index that we are at, and then should go grab the questions information for us to render//
const newQuestion = () => {
  document.getElementById(`question`).textContent = questions[questionIndex].question
}









//THIS IS THE START OF THE GAME **linked to the #ID startTrivia
document.getElementById('startTrivia').addEventListener('click', () => {
  newQuestion()
})


