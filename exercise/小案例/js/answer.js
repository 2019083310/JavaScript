const quizData = [{
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a = document.getElementById('a_text')
const b = document.getElementById('b_text')
const c = document.getElementById('c_text')
const d = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectedAnswer()

  const currentQuizData = quizData[currentQuiz]

  a.innerText = currentQuizData['a']
  b.innerText = currentQuizData['b']
  c.innerText = currentQuizData['c']
  d.innerText = currentQuizData['d']
  questionEl.innerText = currentQuizData['question']
}

// ? 选中radio
function selectedAnswer() {
  let answer

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

// ? 取消选中
function deselectedAnswer() {
  answerEls.forEach(answer => answer.checked = false)
}

// ? 监听提交按钮
submitBtn.addEventListener('click', () => {
  const answer = selectedAnswer()

  if (answer) {
    if (answer === quizData[currentQuiz]['correct']) {
      score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>

      <button onclick="location.reload()">Reload</button>`
    }
  }
})