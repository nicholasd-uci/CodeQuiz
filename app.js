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
let Index = 0


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

  }
}









//THIS IS THE START OF THE GAME **linked to the #ID startTrivia
document.getElementById('startTrivia').addEventListener('click', () => {
  newQuestion()
})


