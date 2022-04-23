const jsQuiz = [
  {
    question: "Full Form Of HTML ?",
    a: "High Transfer Markup Lanaguage",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Machine Language",
    d: "None of these",
    correct: "b",
  },

  {
    question: "Who Invented JavaScipt ?",
    a: "Guido van Rossum",
    b: "Dennis Ritchie",
    c: "Brendan Eich",
    d: "  Mark Elliot Zuckerberg",
    correct: "c",
  },

  {
    question: "JavaScript is a __ -side programming language.",
    a: "Client",
    b: "Server",
    c: "Both",
    d: "None",
    correct: "a",
  },
  {
    question: "CSS File Has An Extension of:",
    a: ".css",
    b: ".cs",
    c: ".py",
    d: ".xml",
    correct: "a",
  },
  {
    question: "What we use to convert Number to String",
    a: ".parseInt",
    b: ".Number",
    c: ".reverse",
    d: ".toString()",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = jsQuiz[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === jsQuiz[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < jsQuiz.length) loadQuiz();
    else {
      quiz.innerHTML = `  
      <h2>You answered ${score}/${jsQuiz.length} questions correctly</h2>  
     
    `;
    }
  }
});
