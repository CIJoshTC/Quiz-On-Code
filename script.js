var quizQuestions = [
    {
        question: "What do we type to test run a code in Java?",
        answer: "console.log"
    },
    {
        question: "What programming language controls the look of a webpage?",
        answer: "CSS"
    },
    {
        question: "what puncuation is used to seperate code in java and css",
        answer: "semicolon"
    },
    {
        question: "what punctuation holds the arguments to a function",
        answer: "parenthesis"
    },
    {
        question: "where should java code be linked",
        answer: "html body"
    }
  ];

  var quizContainer = document.getElementById("quiz-container");
  var startBtn = document.getElementById("start-btn");
  var submitBtn = document.getElementById("submit-btn");
  var scoreContainer = document.getElementById("score-container");
  var saveBtn = document.getElementById("save-btn");
  var questionEl = document.getElementById("question");
  var answerEl = document.getElementById("answer");
  var scoreEl = document.getElementById("score");
  var initialsEl = document.getElementById("initials");
