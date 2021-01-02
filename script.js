

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var question
var name
var currentQuestionIndex
var correct
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    selectedQuestion = question
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}


function setNextQuestion() {
    resetState()
    showQuestion(selectedQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button') 
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
} 

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//Ability to select answer
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {        //Must convert to an Array to use forEach
        setStatusClass(button, button .dataset.correct)
    })
//Ensure that next question will populate otherwise show Restart button if end of questions
    if (selectedQuestion.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

     
}

//Defining setStatusClass Function
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
    
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


}












