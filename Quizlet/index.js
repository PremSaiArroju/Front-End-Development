const questions = [
    {
        question: "What is the latest Apple Chip?",
        answers: [
            { text: "M2", correct : false },
            { text: "M5", correct : false },
            { text: "M4", correct : true },
            { text: "M3", correct : false },
        ]
    },
    {
        question: "What is the latest Apple iPhone?",
        answers: [
            { text: "iPhone16", correct : true },
            { text: "iPhone14", correct : false },
            { text: "iPhone13", correct : false },
            { text: "iPhoneX", correct : false },
        ]
    },
    {
        question: "Which is the Apple product?",
        answers: [
            { text: "EchoDot", correct : false },
            { text: "Ultra24", correct : false },
            { text: "HomePod Mini", correct : true },
            { text: "eMac", correct : false },
        ]
    },
    {
        question: "What is the cost of Apple adapter ?",
        answers: [
            { text: "$20", correct : false },
            { text: "$19", correct : true },
            { text: "$11", correct : false },
            { text: "$99", correct : false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
