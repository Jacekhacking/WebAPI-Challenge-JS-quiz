//select elementsById
var startBtn = document.getElementById("startBtn");
var quiz_el = document.getElementById("quiz");
var question_el = document.getElementById("question");
var answers_el = document.getElementById("answers");
var results_el = document.getElementById("results");
var playerInitial = document.querySelector('#initials');
var highScores = document.querySelector('#highScores');
var timerEl = document.getElementById("countdown");
var mainEL = document.getElementById("main");
var currentQuestion = -1;
var maxQuestions = 3;
var inputGroup = document.getElementById("inputGroup");
//var lastQuestion = questions.length -1;
var runningQuetstions = 0
var timeLeft = 30;
//create questions
var questions = [
    {
        question: "Filler question",
        choices: ["asdlf;kj", "asdfs", "asdfasg"],
        answer: "1",
        used: false
    },
    {
        question: "Second question",
        choices: ["asdlf;kj", "asdfs", "asdfasg", "alsdjkfalsdkjf", "alsdjkfalksdjf"],
        answer: "3",
        used: false
    }, {
        question: "Third question",
        choices: ["filler", "asdfs", "filler", "alsdjkfalsdkjf", "alsdjkfalksdjf"],
        answer: "3",
        used: false
    }
];

// function to create questions in html format 
function nextQuestion() {

    currentQuestion = currentQuestion + 1;
    if (currentQuestion > maxQuestions) {
        return;
    }

    // get the next question
    var q = questions[currentQuestion];
    q.used = true;

    // build the answers inner html
    var choices = "";
    for (var i = 0; i < q.choices.length; i++) {
        choices = choices + "<li style='question' value='" + (i + 1) + "' onclick='selectAnswer(this.value)'>" + q.choices[i] + "</li > ";
    }

    // set the question text
    question_el.innerText = q.question;

    // set the answers
    answers_el.innerHTML = choices;

}

function selectAnswer(myAnswer) {

    // alert(value);

    var q = questions[currentQuestion]
    if (q.answer == myAnswer) {
        results_el.innerText = "YAY! Plus 5";
        timeLeft = timeLeft + 5;
    } else {
        results_el.innerText = "Boo! Minus 5";
        timeLeft = timeLeft - 5;
    }

    results_el.style.visibility = "visible";

    // go to the next question
    if (currentQuestion + 1 < maxQuestions) {

        nextQuestion();
        return;
    }

    endQuiz();
    results_el.innerText = "That's All FOLKS!!!!"
    clearInterval(timer);
}

function endQuiz() {

    quiz.style.visibility = "hidden";
    inputGroup.visibility = "visible";

    function displayScore(type, message) {
        msgDiv.textContent = message;
        msgDiv.setAttribute('class', type);
    }
    // show the results.
    displayScore('Score!' + timeLeft,)
}
function timer() {

    var timer = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = "Time:" + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timer);
            endQuiz();

        }

    }, 1000);
}



startBtn.addEventListener("click", function () {
    startBtn.style.visibility = "hidden";

    // createQuestions();
    quiz.style.visibility = "visible"
    opening.style.visibility = "hidden";
    nextQuestion();
    timer();
});