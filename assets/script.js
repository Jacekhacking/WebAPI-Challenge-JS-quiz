

//select elementsById
var startBtn = document.getElementById("startBtn");
var quiz_el = document.getElementById("quiz");
var question_el = document.getElementById("question");
var answers_el = document.getElementById("answers");
var results_el = document.getElementById("results");
var timer = document.getElementById("timer");
var playerInitial = document.querySelector('#initials');
var highScores = document.querySelector('#highScores');
var timerEl = document.getElementById("countdown");
var mainEL = document.getElementById("main");

var currentQuestion = -1;
var maxQuestions = 2;

//var lastQuestion = questions.length -1;
var runningQuetstions = 0
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
    }
];

//loop over questions object
// for (var i = 0; i < questions.length; i++) {
//     var answer = correct(questions[i].a);

//     if (answer == questions[q].correct) {
//         timer + 7;
//         answerIsCorrect();
//     } else {
//         timer - 7;
//         answerIsWrong();
//     }


// }

// function to create questions in html format 
function nextQuestion() {

    //
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
        results_el.innerText = "YAY!";
        timeLeft + 5
    } else {
        results_el.innerText = "Boo!";
        timeLeft -5
    }

    results_el.style.visibility = "visible";

    // go to the next question
    if (currentQuestion + 1 < maxQuestions) {

        nextQuestion();
        return;
    }

    endQuiz();
}

function endQuiz() {

    quiz.style.visibility = "hidden";

    // show the results.

}
function countdownTimer() {
    var timeLeft = 5;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }
// //timer stuff 
// function countdownTimer() {
//     var timeLeft = 60;
//     var timeInterval = setInterval(function () {
//         if (timeLeft > 1) {
//             timerEl.textContent = 'timeLeft';
//             timeLeft--;
//             console.log("hello");
//         } else if (timeLeft === 1) {
//             timerEl.textContent =  timeLeft;
//             timeLeft--;
//         } else {
//             timerEl.textContent = timeLeft;
//             clearInterval(timeInterval);
//             // make function that shows score asks for initials and submits initials and score to local storage.
//             insertFunctionHere
//         }
//     }, 1000)
// }


startBtn.addEventListener("click", function () {
    startBtn.style.visibility = "hidden";

    // createQuestions();
    quiz.style.visibility = "visible"

    nextQuestion();
    countdownTimer();
});