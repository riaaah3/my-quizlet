const startButton = document.getElementById("start-btn");
var quizScreen = document.getElementById("quiz-screen");
var startScreen = document.getElementById("start-screen");
var questionElement = document.getElementById("quizStart");
var choiceElements = document.getElementsByClassName("options");
var rightAnswer = document.getElementById("rightAns");
var countDown = document.getElementById("countdown");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("score");
var showUsers = document.getElementById("all-users");
var timerObj;
var timerSeconds = 50;



// console.log(questions, choiceElements)
var score = 0
startButton.addEventListener("click", startQuiz);
var questionIndex = 0

for (let i = 0; i < choiceElements.length; i++) {
  choiceElements[i].addEventListener("click", checkAnswer)
}


function startQuiz() {
  console.log("Starting the quiz now!")
  startScreen.classList.add("hide")
  quizScreen.classList.remove("hide");
  timerObj = setInterval(function () {
    countDown.textContent = timerSeconds
    if (timerSeconds <= 0) {
      countDown.textContent = "Time Up!"
      endQuiz()
    } else {
      timerSeconds--
    }
  }, 1000)
  showQuestion()
}

function showQuestion() {
  console.log("Show question is running!")
  var currentQuestion = questions[questionIndex]

  questionElement.innerText = currentQuestion.question;
  console.log(currentQuestion, questionElement)


  var choices = currentQuestion.options

  for (let i = 0; i < choices.length; i++) {

    choiceElements[i].textContent = choices[i]

  }

}


function checkAnswer(event) {
  event.preventDefault()
  var correctAnswer = event.target.textContent
  console.log(correctAnswer)
  if (correctAnswer == questions[questionIndex].answer) {
    score += 5
    rightAnswer.textContent = "Right Answer"
    finalScore.textContent = "Score :"+score
  } else {
    rightAnswer.textContent = "Wrong Answer"
    timerSeconds -= 5
  }
  if (questionIndex < questions.length - 1) {
    questionIndex++
    showQuestion()
  } else {
    endQuiz()
  }
}



function endQuiz() {
  clearInterval(timerObj)
  endScreen.classList.remove("hide");
  quizScreen.classList.add("hide");
  showUsers.innerText= "Final score(score+time): "+(score+timerSeconds)
}

endScreen.addEventListener("submit", function(evt) {
  evt.preventDefault()
  var userName = document.getElementById("username").value
  var previousScore = JSON.parse(localStorage.getItem("Code Quiz"))||[]
  previousScore.push({
    user: userName, score: (score+timerSeconds)
  })
  localStorage.setItem("Code Quiz", JSON.stringify(previousScore))
})