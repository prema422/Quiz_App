const quizData = [
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Java", "Python"],
        correct: 1
    },
    {
        question: "Which is not a JavaScript framework?",
        options: ["React", "Angular", "Django", "Vue"],
        correct: 2
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        correct: 2
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("scoreText");

function loadQuestion(){
    const data = quizData[currentQuestion];
    questionEl.textContent = data.question;
    optionsEl.innerHTML = "";

    data.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => selectOption(button, index);
        optionsEl.appendChild(button);
    });

    nextBtn.style.display = "none";
}

function selectOption(button, index){
    const correctIndex = quizData[currentQuestion].correct;
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true);

    if(index === correctIndex){
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
    }

    nextBtn.style.display = "inline-block";
}

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult(){
    document.getElementById("quiz-box").style.display = "none";
    resultBox.style.display = "block";
    scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
}

function restartQuiz(){
    currentQuestion = 0;
    score = 0;
    resultBox.style.display = "none";
    document.getElementById("quiz-box").style.display = "block";
    loadQuestion();
}

loadQuestion();
