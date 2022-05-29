// build a javascript variable list to connect with html element id's
var questionCardEl = document.querySelector("#question-card");

// var subtractTime = countDownTimer
// create a customizable array of high scores and quizTaker variable to track score during quiz
var highScores = [];
var quizTaker = {
    score: 0,
}



// display new questions
// starting page with start quiz button
// debugger;
var quizStartPage = function() {
    // debugger;
    // creates quiz title
    var quizTitle = document.createElement("h2");
    quizTitle.className = ("quiz-title");
    quizTitle.textContent = "Riddle Me This - Coding Quiz Challenge";
    questionCardEl.appendChild(quizTitle);

    // welcome challenge and quiz parameters
    var quizParameters = document.createElement("p");
    quizParameters.className = ("quiz-info");
    quizParameters.textContent = "Multiple choice quiz.  Each correct answer adds 5 points to your score.  Each wrong answer subtracts 5 seconds from your time.  Have fun!!!";
    questionCardEl.appendChild(quizParameters);

    // quiz start button
    var quizStartBtn = document.createElement("button");
    quizStartBtn.className = "start-quiz";
    quizStartBtn.setAttribute("id", "start-quiz");
    quizStartBtn.textContent = "Start Quiz";
    questionCardEl.appendChild(quizStartBtn);

    // click start button actions
    quizStartBtn.onclick = function() {
        questionCardEl.removeChild(quizTitle);
        questionCardEl.removeChild(quizParameters);
        questionCardEl.removeChild(quizStartBtn);
        createQuestionEl();
        startCountDown();
    };
};   

// function startCountDown() {
// document.getElementById("start-quiz").addEventListener("click", function(){
//     var timeleft = 60;

//     var downloadTimer = setInterval(function function1(){
//     document.getElementById("time").innerHTML = timeleft + 
//     " "+"seconds remaining";

//     timeleft -= 1;
//     if(timeleft <= 0){
//         clearInterval(downloadTimer);
//         document.getElementById("time").innerHTML = "Time is up!"
//     }
//     }, 1000);

//     console.log(timeleft);
// });
// };
// timer function


var countDownTimer = document.getElementById("time");

// function startCountDown(click, continueCountDown) {

// const startingSeconds = 1;
// let time = startingSeconds * 60;
// setInterval(startCountDown, 1000);

//     function continueCountDown() {
//         // var minutes = Math.floor(time / 60);
//         let seconds = time % 61;

//         countDownTimer.innerHTML = ("Time: " + seconds);
//         time--;
        
//         if (seconds === 0) {
//             endQuiz(seconds);
//             clearTimeout(seconds);
//             return true;
//         }
        
//     };
// };
// create html <li> elements using the choices class inside the <ul> element
var createQuestionEl = function() {
    
    // creates a h3 element used to display the question
    // iterates through the quizQuestions array   
    for (var i = 0; i < quizQuestions.length; i++) {
        
        var questionEl = document.createElement("h3");
        questionEl.className = "question";
        questionEl.textContent = (quizQuestions[i].question);
        questionEl.setAttribute("id", "question-id");
        questionCardEl.appendChild(questionEl);
        // console.log(questionEl);
        
        // debugger;
        // create a div with an ol element with li element that holds the answer options       
        var answerOptionsHolder = document.createElement("div");
        answerOptionsHolder.className = "options-container";
        questionCardEl.appendChild(answerOptionsHolder);

            var answerOptionsEl = document.createElement("ul");
            answerOptionsEl.className = "option-list";
            answerOptionsHolder.appendChild(answerOptionsEl);

                answerOptionsBtnA = document.createElement("button");
                answerOptionsBtnA.className = "option-btn";
                answerOptionsBtnA.textContent = (quizQuestions[i].a);
                answerOptionsBtnA.setAttribute("id", "a");
                answerOptionsEl.appendChild(answerOptionsBtnA);
                // answerOptionsBtnA.addEventListener("click", checkAnswer);

                answerOptionsBtnB = document.createElement("button");
                answerOptionsBtnB.className = "option-btn";
                answerOptionsBtnB.textContent = (quizQuestions[i].b);
                answerOptionsBtnB.setAttribute("id", "b");
                answerOptionsEl.appendChild(answerOptionsBtnB);
                // answerOptionsBtnB.addEventListener("click", checkAnswer);

                answerOptionsBtnC = document.createElement("button");
                answerOptionsBtnC.className = "option-btn";
                answerOptionsBtnC.textContent = (quizQuestions[i].c);
                answerOptionsBtnC.setAttribute("id", "c");
                if (!quizQuestions[i].c) {    
                } else {
                    answerOptionsEl.appendChild(answerOptionsBtnC);
                    // answerOptionsBtnC.addEventListener("click", checkAnswer);
                }                
                

                answerOptionsBtnD = document.createElement("button");
                answerOptionsBtnD.className = "option-btn";
                answerOptionsBtnD.textContent = (quizQuestions[i].d);
                answerOptionsBtnD.setAttribute("id", "d");
                if (!quizQuestions[i].d) {    
                } else {
                    answerOptionsEl.appendChild(answerOptionsBtnD);
                    // answerOptionsBtnD.addEventListener("click", checkAnswer);
                }   
    var button = document.getElementById("");
    var selectedOption = button.addEventListener("click", checkAnswer);
    // var selectedOption = questionCardEl.addEventListener("click", checkAnswer);   
                
            // if ()
        // debugger;
        // var selectedOption = getElementById()
        // console.log(quizQuestions[i]);
        console.log(selectedOption);
        // checkAnswer(selectedOption, quizQuestions);   
        // console.log(quizQuestions[i].answer);   
        debugger;
    };
};

var checkAnswer = function (selectedOption, quizQuestions) {
    console.log(quizQuestions);
    // setTimeout(selectedOption);
    // console.log(selectedOption);

    if (selectedOption == quizQuestions.answer) {
        quizTaker.score = Math.floor(quizTaker.score, quizTaker.score + 5);
        createQuestionEl();
        console.log(quizTaker.score);
    } else if (selectedOption){ 
        
    }
// debugger;
};

var endQuiz = function(seconds) {
    if (seconds === 0) {
        var quizEndTitle = document.createElement("h2");
        quizEndTitle.className = ("quiz-title");
        quizEndTitle.textContent = "Time's Up";
        questionCardEl.appendChild(quizEndTitle);
    }
}

var saveScore = function() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

var loadScore = function() {
    localStorage.getItem("highScores", JSON.parse(highScores));
};

// create a highscores display page

// build an array of questions and answers
var quizQuestions = [
    {
        question: "Which HTML element holds the JavaScript?",
        
            a: "a: <link></link>",
            b: "b: <script></script>",
            c: "c: <js></js>",
            d: "d: <html></html>",
        
        answer: "b"
    },
    {
        question: "Which brackets are used to call a function?",
        
            a: "a: {}",
            b: "b: <>",
            c: "c: []",
            d: "d: ()",
        
        answer: "d"
    },
    {
        question: "DOM stands for document object method",
       
            a: "a: true",
            b: "b: false",
        
        answer: "b"
    },
    {
        question: "Which one is NOT a datatype?",

            a: "a: Boolean",
            b: "b: string",
            c: "c: variable",
            d: "d: array",
        
        answer: "c"
    },
    {
        question: "How do you add a comment in JavaScript?",
    
            a: "a: <!-- This is a comment -->",
            b: "b: // this is a comment",
            c: "c: /* this is a comment */",
            d: "d: both b and c",
        
        answer: "d"
    },
    {
        question: "console.log(); Logs a message to the browser console",

            a: "a: true",
            b: "b: false",
        
        answer: "a"
    },
    {
        question: "How is a Javascript variable declared?",

            a: "a: variable myVariable",
            b: "b: v = myVariable",
            c: "c: var myVariable",
            d: "d: variable is myVariable",
    
        answer: "c"
    },
    {
        question: "How do you create a function in JavaScript?",

            a: "a: myFunction ();",
            b: "b: function myFunction ()",
            c: "c: function = myFunction()",
            d: "d: function (myFunction)",
        
        answer: "b"
    },
    {
        question: "Is JavaScript case sensitive?",

            a: "a: true",
            b: "b: false",
        
        answer: "a"
    },
    {
        question: "What is the correct way to build a JavaScript array?",

            a: "a: var dogs = ['poodle', 'corgi', 'husky', 'mutt']",
            b: "b: var dogs = ('poodle', 'corgi', 'husky', 'mutt')",
            c: "c: var dogs = 'poodle', 'corgi', 'husky', 'mutt'",
            d: "d: var dogs = poodle, corgi, husky, mutt",
    
        answer: "a"
    }
];
// add event listener in the parent element of createElement additions to listen for clicks on the list elements
// questionCardEl.addEventListener("click", checkAnswer);

// initial quiz loading page
quizStartPage ();
// debugger;

