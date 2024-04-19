const startButton = document.getElementById("start-btn");
var quizScreen = document.getElementById("quiz-screen");
var startScreen = document.getElementById("start-screen");
var questionElement = document.getElementById("quizStart");
var choiceElements = document.getElementsByClassName("options");
console.log(questions, choiceElements)
var score = 0
startButton.addEventListener("click", startQuiz);
var questionIndex = 0
for (let i = 0; i < choiceElements.length; i++) {
  choiceElements[i].addEventListener("click",checkAnswer)
}
function startQuiz() {
  console.log("Starting the quiz now!")
  startScreen.classList.add("hide")
  quizScreen.classList.remove("hide");
  showQuestion()
}

function showQuestion() {
  console.log("Show question is running!")
  var currentQuestion = questions[questionIndex]
  
  questionElement.innerText = currentQuestion.question;
  console.log(currentQuestion,questionElement)


  var choices = currentQuestion.options

  for (let i = 0; i < choices.length; i++) {
  
    choiceElements[i].textContent = choices[i]
   
  }

}


function checkAnswer(event){
  event.preventDefault()
  var correctAnswer = event.target.textContent
  console.log(correctAnswer)
  if (correctAnswer == questions[questionIndex].answer){
    score += 5
  }else{

  }
  if(questionIndex < questions.length-1){
    questionIndex++
    showQuestion()
  }
}

var timerEl = document.getElementById('countdown')

function countdown() {
  var timeLeft = 60;

}
