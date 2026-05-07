const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const answerScreen = document.getElementById('answer-screen');
const resultScreen = document.getElementById('result-screen');

const startQuizBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const question = document.getElementById('question-text');
const answer = document.getElementById('answer-box');

const currentQuestion = document.getElementById('current-question');
const maxQuestion = document.getElementById('max-question');
const currentScore = document.getElementById('current-score');

const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const totalScore = document.getElementById('total-score');
const maxScore = document.getElementById('max-score');
const resultMsg = document.getElementById('result-msg');

const quizQuestions = [
            {
                question: "Which is the capital of Bihar?",
                answers: [
                    { text: "London", correct: false },
                    { text: "New Delhi", correct: false },
                    { text: "Patna", correct: true },
                    { text: "Chennai", correct: false }
                ]
            },
            {
                question: "Which language is used for styling web pages?",
                answers: [
                    { text: "HTML", correct: false },
                    { text: "CSS", correct: true },
                    { text: "Python", correct: false },
                    { text: "Java", correct: false }
                ]
            },
            {
                question: "What does 'JS' stand for in web development?",
                answers: [
                    { text: "Java Style", correct: false },
                    { text: "Just Script", correct: false },
                    { text: "JavaScript", correct: true },
                    { text: "JQuery Suite", correct: false }
                ]
            },
            {
                question: "Which planet is known as the Red Planet?",
                answers: [
                    { text: "Jupiter", correct: false },
                    { text: "Mars", correct: true },
                    { text: "Venus", correct: false },
                    { text: "Saturn", correct: false }
                ]
            },
            {
                question: "Who painted the Mona Lisa?",
                answers: [
                    { text: "Van Gogh", correct: false },
                    { text: "Picasso", correct: false },
                    { text: "Da Vinci", correct: true },
                    { text: "Rembrandt", correct: false }
                ]
            },
            {
                question: "What is the hardest natural substance?",
                answers: [
                    { text: "Gold", correct: false },
                    { text: "Iron", correct: false },
                    { text: "Diamond", correct: true },
                    { text: "Platinum", correct: false }
                ]
            },
            {
                question: "Which movie won the Oscar for Best Picture in 2020?",
                answers: [
                    { text: "1917", correct: false },
                    { text: "Joker", correct: false },
                    { text: "Parasite", correct: true },
                    { text: "Once Upon a Time in Hollywood", correct: false }
                ]
            },
            {
                question: "Which country won the FIFA World Cup 2018?",
                answers: [
                    { text: "Brazil", correct: false },
                    { text: "Germany", correct: false },
                    { text: "France", correct: true },
                    { text: "Argentina", correct: false }
                ]
            },
            {
                question: "What is the chemical symbol for Gold?",
                answers: [
                    { text: "Go", correct: false },
                    { text: "Gd", correct: false },
                    { text: "Au", correct: true },
                    { text: "Ag", correct: false }
                ]
            },
            {
                question: "Who invented the light bulb? (Practical)",
                answers: [
                    { text: "Nikola Tesla", correct: false },
                    { text: "Thomas Edison", correct: true },
                    { text: "Albert Einstein", correct: false },
                    { text: "Benjamin Franklin", correct: false }
                ]
            }
        ];

let currentQuestionIndex = 0;
let score = 0;

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz(){

    startScreen.style.display = "none";
    questionScreen.style.display = "block";

    showQuestion();
}

function showQuestion(){

    let currentQuiz = quizQuestions[currentQuestionIndex];

    question.innerHTML = currentQuiz.question;

    answer.innerHTML = "";

    currentQuestion.innerHTML = currentQuestionIndex + 1;

    currentScore.innerHTML = score;

    let progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    progress.style.width = progressPercent + "%";

    currentQuiz.answers.forEach((ans) => {

        const button = document.createElement('button');

        button.innerHTML = ans.text;

        button.addEventListener('click', () => {

            if(ans.correct){
                score++;
            }

            currentQuestionIndex++;

            if(currentQuestionIndex < quizQuestions.length){

                showQuestion();

            }else{

                showResult();
            }

        });

        answer.appendChild(button);

    });

}

function showResult(){

    questionScreen.style.display = "none";

    resultScreen.style.display = "block";

    totalScore.innerHTML = score;

    maxScore.innerHTML = quizQuestions.length;

    if(score >= 7){

        resultMsg.innerHTML = "Excellent!";

    }else if(score >= 5){

        resultMsg.innerHTML = "Good Job!";

    }else{

        resultMsg.innerHTML = "Try Again!";
    }

}