//select elementsById
var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correctAnswer = document.getElementById("correct");
var playerInitial = document.querySelector('#initials');
var highScores = document.querySelector('#highScores');
var timerEl = document.getElementById("countdown");
var mainEL = document.getElementById("main");
var lastQuestion = questions.length -1;
var runningQuetstions = 0
//create questions

 var questions = [
        {
        question: "FIller question",
        choiceA : "asdlf;kj",
        choiceB : "asdfs",
        choiceC : "asdfasg",
        choiceD : "ahadfda",
        correct :"C"
        },{
        question: "FIller question",
        choiceA : "asdlf;kj",
        choiceB : "asdfs",
        choiceC : "asdfasg",
        choiceD : "ahadfda",
        correct :"C"
        },{
        question: "FIller question",
        choiceA : "asdlf;kj",
        choiceB : "asdfs",
        choiceC : "asdfasg",
        choiceD : "ahadfda",
        correct :"C"
        },{
        question: "FIller question",
        choiceA : "asdlf;kj",
        choiceB : "asdfs",
        choiceC : "asdfasg",
        choiceD : "ahadfda",
        correct :"C"
        }
];

//loop over questions object
for( var i = 0; i < questions.length; i++){
    var answer = correct(questions[i].a);
    
    if(answer == questions[q] .correct){
        timer + 7;
        answerIsCorrect();
    }else {
        timer -7;
        answerIsWrong();
    }

    
}

// function to create questions in html format 
function createQuestions(){
var q = questions[runningQUestions];
question.innerHTML= "<p>"+ q.question + "<p>";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;
choiceD.innerHTML = q.choiceD;
}


//timer stuff 
function countdownTimer(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        if (timeLeft>1){
            timerEl.textContent =  "Time:" +  timeLeft;
            timeLeft--;
        }else if (timeLeft===1){
            timerEl.textContent =  "Time:" +  timeLeft;
            timeLeft--;
        }else{
            timerEl.textContent = '';
            clearInterval(timeInterval);
            // make function that shows score asks for initials and submits initials and score to local storage.
            insertFunctionHere
        }
    }, 1000)
}



startBtn.onClick = questions;