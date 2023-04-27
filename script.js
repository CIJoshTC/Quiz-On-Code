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
        question: "where should javascript code be linked",
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
  var timer =document.getElementById("timer");

  let QuestionIndex = 0;
  let timeLeft = 60;
  let score = 0;
  let timerId;


  function showQuestion() {
    var question = quizQuestions[QuestionIndex];
    questionEl.textContent = question.question;
  }

  function startTimer() {
    
    timerId = setInterval(function() {
      timer.innerHTML=timeLeft
      timeLeft--;
      if (timeLeft <= 0) {
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
    var question = quizQuestions[QuestionIndex];
    var userAnswer = answerEl.value.trim().toLowerCase();

    if (userAnswer === question.answer.toLowerCase()) {
      score++;
    } else {
      timeLeft -= 10;
    }

    answerEl.value = "";

    QuestionIndex++;

    if (QuestionIndex === quizQuestions.length) {
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
  function saveScore() {
    var initials = initialsEl.value.trim();
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    scoresList.innerHTML = "";

    highScores.forEach(function(score) {
      var li = document.createElement("li");
      li.textContent = score.initials + " - " + score.score;
      scoresList.appendChild(li);
    });
  


    highScores.push({ initials, score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
     
  }

  startBtn.addEventListener("click", startQuiz);
  submitBtn.addEventListener("click", checkAnswer);
  saveBtn.addEventListener("click", saveScore );
 