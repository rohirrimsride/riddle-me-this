// build a javascript variable list to connect with html element id's
questionCardEl = document.querySelector("#question-card");
// create a customizable array of high scores
var questionIdCounter = 0;
var highScores = [];


// display new questions

// starting page with start button
var quizStartPage = function() {
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
    quizStartBtn.className = "start-quiz"
    quizStartBtn.textContent = "Start Quiz"
    questionCardEl.appendChild(quizStartBtn);

    // start quiz function

};

// create html <li> elements using the choices class inside the <ul> element
var createQuestionEl = function() {
    // creates a h3 element used to display the question
    var questionEl = document.createElement("h3");
    questionEl.className = "question";
    questionEl.setAttribute("question-id", questionIdCounter);

    // create a ul element with li innerhtml element that holds the answer options
    var answerOptionsEl = document.createElement ("ul");
    answerOptionsEl.className = "options-holder";
    answerOptionsEl.innerHTML = "li class"





}   

var saveScore = function() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

var loadScore = function() {

}

// create a highscores display page

// create a countdown timer

// build an array of questions and answers
var quizQuestions = [
    {
        question: "Which HTML element holds the JavaScript?",
        options: {
            a: "<link></link>",
            b: "<script></script>",
            c: "<js></js>",
            d: "<html></html>"
        },
        answer: "b"
    },
    {
        question: "Which brackets are used to call a function?",
        options: {
            a: "{}",
            b: "<>",
            c: "[]",
            d: "()"
        },
        answer: "d"
    },
    {
        question: "DOM stands for document object method",
        options: {
            a: "true",
            b: "false"
        },
        answer: "b"
    },
    {
        question: "Which one is NOT a datatype?",
        options: {
            a: "Boolean",
            b: "string",
            c: "variable",
            d: "array"
        },
        answer: "c"
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: {
            a: "<!-- This is a comment -->",
            b: "// this is a comment",
            c: "/* this is a comment */",
            d: "both b and c"
        },
        answer: "d"
    },
    {
        question: "console.log(); logs a message to the browser console",
        options: {
            a: "true",
            b: "false"
        },
        answer: "a"
    },
    {
        question: "How is a Javascript variable declared?",
        options: {
            a: "variable myVariable",
            b: "v = myVariable",
            c: "var myVariable",
            d: "variable is myVariable"
        },
        answer: "c"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: {
            a: "myFunction ();",
            b: "function myFunction ()",
            c: "function = myFunction()",
            d: "function (myFunction)"
        },
        answer: "b"
    },
    {
        question: "Is JavaScript case sensitive?",
        options: {
            a: "true",
            b: "false"
        },
        answer: "a"
    },
    {
        question: "What is the correct way to build a JavaScript array?",
        options: {
            a: "var dogs = ['poodle', 'corgi', 'husky', 'mutt']",
            b: "var dogs = ('poodle', 'corgi', 'husky', 'mutt')",
            c: "var dogs = 'poodle', 'corgi', 'husky', 'mutt'",
            d: "var dogs = poodle, corgi, husky, mutt"
        },
        answer: "a"
    }
];

quizStartPage ();