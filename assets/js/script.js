// build a javascript variable list to connect with html element id's
var questionCardEl = document.querySelector("#question-card");
var countDownTimer = document.getElementById("time");
var highScoresEl = document.getElementById("high-scores");

// create a customizable array of high scores and quizTaker variable to track score during quiz
var highScores = [];
var quizTaker = {
    score: 0,
}

// display new questions
// starting page with start quiz button
var quizStartPage = function() {
    // debugger;
    // creates quiz title
    var quizTitle = document.createElement("h2");
    quizTitle.className = ("quiz-title");
    quizTitle.textContent = "Riddle Me This - Coding Quiz Challenge";
    questionCardEl.appendChild(quizTitle);

    // welcome title and quiz parameters
    var quizParameters = document.createElement("p");
    quizParameters.className = ("quiz-info");
    quizParameters.textContent = "Multiple choice quiz.  Each correct answer adds 5 points to your score. \r\n " 
    quizParameters.textContent += "Each wrong answer subtracts 5 seconds from your time.  Have fun!!!";
    questionCardEl.appendChild(quizParameters);

    // create quiz start button
    var quizStartBtn = document.createElement("button");
    quizStartBtn.className = "start-quiz";
    quizStartBtn.setAttribute("id", "start-quiz");
    quizStartBtn.setAttribute("onclick", "startCountDown()");
    quizStartBtn.textContent = "Start Quiz";
    questionCardEl.appendChild(quizStartBtn);

    // click start quiz button actions
    quizStartBtn.onclick = function() {
        questionCardEl.removeChild(quizTitle);
        questionCardEl.removeChild(quizParameters);
        questionCardEl.removeChild(quizStartBtn);
        createQuestionEl();         
        quizTimer();
    };
}; 


// Timer (Unable to get it connected with the click of the start quiz button)
function quizTimer(){
    var totalTime = 99
    var countdown = function(){
        // console.log(totalTime);
        countDownTimer.innerHTML = ("Time: " + totalTime);
        totalTime--;
            if(totalTime === -1){   
                clearInterval(startCountDown);
                endQuiz();
            };
    };
    var startCountDown = setInterval(countdown, 1000);
};

// create question and answer option elements
var createQuestionEl = function() {
    
    // creates a h3 element used to display the question
    // iterates through the quizQuestions array   
    /* I don't think this is the best way to iterate through the question array, but I've been unable to find a better option*/
    for (var i = 0; i < quizQuestions.length; i++) {
        // Creates questions
        var questionEl = document.createElement("h3");
        questionEl.className = "question";
        questionEl.textContent = (quizQuestions[i].question);
        questionEl.setAttribute("id", "question-id");
        questionCardEl.appendChild(questionEl); 
        
        // creates a div with an ul element with button element that holds the answer options       
        var answerOptionsHolder = document.createElement("div");
        answerOptionsHolder.className = "options-container";
        questionCardEl.appendChild(answerOptionsHolder);
            // creates ul container for the buttons
            var answerOptionsEl = document.createElement("ul");
            answerOptionsEl.className = "option-list";
            answerOptionsHolder.appendChild(answerOptionsEl);
                // creates answer options buttons
                answerOptionsBtnA = document.createElement("button");
                answerOptionsBtnA.className = "optionBtn";
                answerOptionsBtnA.textContent = (quizQuestions[i].a);
                answerOptionsBtnA.setAttribute("id", "a");
                answerOptionsEl.appendChild(answerOptionsBtnA);

                answerOptionsBtnB = document.createElement("button");
                answerOptionsBtnB.className = "optionBtn";
                answerOptionsBtnB.textContent = (quizQuestions[i].b);
                answerOptionsBtnB.setAttribute("id", "b");
                answerOptionsEl.appendChild(answerOptionsBtnB);

                answerOptionsBtnC = document.createElement("button");
                answerOptionsBtnC.className = "optionBtn";
                answerOptionsBtnC.textContent = (quizQuestions[i].c);
                answerOptionsBtnC.setAttribute("id", "c");
                if (!quizQuestions[i].c) {    
                } else {
                    answerOptionsEl.appendChild(answerOptionsBtnC);
                }                
                
                answerOptionsBtnD = document.createElement("button");
                answerOptionsBtnD.className = "optionBtn";
                answerOptionsBtnD.textContent = (quizQuestions[i].d);
                answerOptionsBtnD.setAttribute("id", "d");
                if (!quizQuestions[i].d) {    
                } else {
                    answerOptionsEl.appendChild(answerOptionsBtnD);
                }
                if (i == quizQuestions.length) {
                    questionCardEl.removeChild(questionEl);
                }
        // debugger;
        quizQuestions = quizQuestions[i];

        
        // answerOptionsEl.addEventListener("click", checkAnswer())
        // console.log("click");
    };
};

var checkAnswer = function (event) {
    console.log(quizQuestions.answer);
    // event.target.getAttribute("id")
    var selectedOption = event.target;
    console.log(selectedOption);
    // setTimeout(selectedOption);
    // console.log(selectedOption);

    if (selectedOption == quizQuestions.answer) {
        quizTaker.score = Math.floor(quizTaker.score, quizTaker.score + 5);
        var updatedScore
        createQuestionEl();
        console.log(quizTaker.score);
    } else if (selectedOption != quizQuestions.answer) { 
        // remove 5 seconds from timer
        var totalTime = totalTime - 5;
        quizTimer(totalTime);
        createQuestionEl();   
    } else {
        
    }
};

var endQuiz = function() {

    var quizEndTitle = document.createElement("h2");
    quizEndTitle.className = ("quiz-title");
    quizEndTitle.textContent = "Time's Up";
    questionCardEl.appendChild(quizEndTitle);
    debugger;
    saveScore();
    
};

var saveScore = function() {


    localStorage.setItem("highScores", JSON.stringify(highScores));

    var playerScoreTitle = document.createElement("h3");
        playerScoreTitle.className = "question";
        playerScoreTitle.textContent = "Your score is " + quizTaker.score;
        questionCardEl.appendChild(playerScoreTitle);
};

var loadScore = function() {
    localStorage.getItem("highScores", JSON.parse(highScores));
};

// create on high-scores-index.html
var highScoresPage = function(event){

    var displayHighScores = event.target;
    if (displayHighScores == click){
        questionCardEl = document.createElement("h3");
        questionCardEl.className = "question";
        questionCardEl.textContent = "High Scores";
    }
    // print array of high scores
};

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
questionCardEl.addEventListener("click", checkAnswer);
highScoresEl.addEventListener("click", highScoresPage);

// initial quiz loading page
quizStartPage ();
// debugger;
