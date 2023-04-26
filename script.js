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

  let currentQuestionIndex = 0;
  let timeLeft = 60;
  let score = 0;
  let timerId;


  function showQuestion() {
    var question = quizQuestions[currentQuestionIndex];
    questionEl.textContent = question.question;
  }

  function startTimer() {
    timerId = setInterval(function() {
      timeLeft--;
      if (timeLeft === 0) {
        endQuiz();
      }
    }, 1000);
  }

  function startQuiz() {
    startBtn.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
    startTimer();
  }

  function checkAnswer() {
    var question = quizQuestions[currentQuestionIndex];
    var userAnswer = answerEl.value.trim().toLowerCase();

    if (userAnswer === question.answer.toLowerCase()) {
      score++;
    } else {
      timeLeft -= 10;
    }

    answerEl.value = "";

    currentQuestionIndex++;

    if (currentQuestionIndex === quizQuestions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  function endQuiz() {
    clearInterval(timerId);
    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";
    scoreEl.textContent = score;
  }




  startBtn.addEventListener("click", startQuiz);