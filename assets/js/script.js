// build a javascript variable list to connect with html element id's
var questionCardEl = document.querySelector("#question-card");
var countDownTimer = document.querySelector("#time")
// create a customizable array of high scores
var questionIdCounter = 0;
var highScores = [];


// display new questions

// starting page with start button
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
        startTimer();
    };
};   



// create html <li> elements using the choices class inside the <ul> element
var createQuestionEl = function() {
    // creates a h3 element used to display the question
    

    // iterate through the quizQuestions array
    
    for (var i = 0; i < quizQuestions.length; i++) {
        
        var questionEl = document.createElement("h3");
        questionEl.className = "question";
        questionEl.textContent = (quizQuestions[i].question);
        questionEl.setAttribute("id", "question-id");
        questionCardEl.appendChild(questionEl);
        console.log(questionEl);
        
        // debugger;
        // create a div with an ol element with li element that holds the answer options
        
        var answerOptionsHolder = document.createElement("div");
        answerOptionsHolder.className = "options-container";
        questionCardEl.appendChild(answerOptionsHolder);

            var answerOptionsEl = document.createElement("ol");
            answerOptionsEl.className = "option-list";
            answerOptionsHolder.appendChild(answerOptionsEl);

                answerOptionsElA = document.createElement("li");
                answerOptionsElA.className = "option";
                answerOptionsElA.textContent = (quizQuestions[i].a);
                answerOptionsElA.setAttribute("id", "a");
                answerOptionsEl.appendChild(answerOptionsElA);

                answerOptionsElB = document.createElement("li");
                answerOptionsElB.className = "option";
                answerOptionsElB.textContent = (quizQuestions[i].b);
                answerOptionsElB.setAttribute("id", "b");
                answerOptionsEl.appendChild(answerOptionsElB);

                answerOptionsElC = document.createElement("li");
                answerOptionsElC.className = "option";
                answerOptionsElC.textContent = (quizQuestions[i].c);
                answerOptionsElC.setAttribute("id", "c");
                if (!quizQuestions[i].c) {    
                } else {
                    answerOptionsEl.appendChild(answerOptionsElC);
                }                

                answerOptionsElD = document.createElement("li");
                answerOptionsElD.className = "option";
                answerOptionsElD.textContent = (quizQuestions[i].d);
                answerOptionsElD.setAttribute("id", "d");
                if (!quizQuestions[i].d) {    
                } else {
                    answerOptionsEl.appendChild(answerOptionsElD);
                }    
        // debugger;
        checkAnswer();

       
    };




};

var checkAnswer = function (event) {
    var selectedOption = event.target;
    console.log(selectedOption);
debugger;
}

var saveScore = function() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

var loadScore = function() {
    localStorage.getItem("highScores", JSON.parse(highScores));
};

// create a highscores display page

// create a countdown timer

// build an array of questions and answers
var quizQuestions = [
    {
        question: "Which HTML element holds the JavaScript?",
        
            a: "<link></link>",
            b: "<script></script>",
            c: "<js></js>",
            d: "<html></html>",
        
        answer: "b"
    },
    {
        question: "Which brackets are used to call a function?",
        
            a: "{}",
            b: "<>",
            c: "[]",
            d: "()",
        
        answer: "d"
    },
    {
        question: "DOM stands for document object method",
       
            a: "true",
            b: "false",
        
        answer: "b"
    },
    {
        question: "Which one is NOT a datatype?",

            a: "Boolean",
            b: "string",
            c: "variable",
            d: "array",
        
        answer: "c"
    },
    {
        question: "How do you add a comment in JavaScript?",
    
            a: "<!-- This is a comment -->",
            b: "// this is a comment",
            c: "/* this is a comment */",
            d: "both b and c",
        
        answer: "d"
    },
    {
        question: "console.log(); Logs a message to the browser console",

            a: "true",
            b: "false",
        
        answer: "a"
    },
    {
        question: "How is a Javascript variable declared?",

            a: "variable myVariable",
            b: "v = myVariable",
            c: "var myVariable",
            d: "variable is myVariable",
    
        answer: "c"
    },
    {
        question: "How do you create a function in JavaScript?",

            a: "myFunction ();",
            b: "function myFunction ()",
            c: "function = myFunction()",
            d: "function (myFunction)",
        
        answer: "b"
    },
    {
        question: "Is JavaScript case sensitive?",

            a: "true",
            b: "false",
        
        answer: "a"
    },
    {
        question: "What is the correct way to build a JavaScript array?",

            a: "var dogs = ['poodle', 'corgi', 'husky', 'mutt']",
            b: "var dogs = ('poodle', 'corgi', 'husky', 'mutt')",
            c: "var dogs = 'poodle', 'corgi', 'husky', 'mutt'",
            d: "var dogs = poodle, corgi, husky, mutt",
    
        answer: "a"
    }
];
// add event listener in the parent element of createElement additions to listen for clicks on the list elements
questionCardEl.addEventListener("click", checkAnswer);

// initial quiz loading page
quizStartPage ();