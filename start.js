const startButton = document.getElementById("start-btn");
var quizScreen = document.getElementById("quiz-screen");
console.log(questions)
startButton.addEventListener("click", startQuiz);
var questionIndex = 0
function startQuiz() {
console.log("Starting the quiz now!")
var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide")
  quizScreen.classList.remove("hide");
  showQuestion()
}

function showQuestion() {
  console.log("Show question is running!")
  var currentQuestion = questions[questionIndex]
  console.log(currentQuestion)
  var questionElement = document.createElement("h2")
  console.log(questionElement )
  questionElement.textContent =currentQuestion.question;
  console.log(questionElement)
  quizScreen.appendChild(questionElement)

  var choices = currentQuestion.options

  for (let i = 0; i < choices.length; i++) {
    var choiceElement = document.createElement("button")
    choiceElement.innerHTML = choices[i]
    quizScreen.append(choiceElement)
  }
  
}


var timerEl = document.getElementById('countdown')

function countdown() {
  var timeLeft = 60;
  
}

function logValue(x){
  console.log(x)
}

logValue(3)