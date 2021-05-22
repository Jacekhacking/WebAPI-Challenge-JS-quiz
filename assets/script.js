//select elementsById
var start = document.getElementById("start");
var timer = document.getElementById("timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correctAnswer = document.getElementById("correct");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");
var filler = document.getElementById("");

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
    var answer = "click"(questions[i].a);
    
    if(answer == questions[q] .correct){
        score++;
        answerIsCorrect();
    }else {
        score--;
        answerIsWrong();
    }

    
}




//timer stuff 