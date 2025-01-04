
// Variable Declarations and Helper Functions
let id = (id) => document.getElementById(id);
let query = (q) => document.querySelectorAll(q);

let quiz = id('quiz');
let question = id('question');
let a = id('id_j');
let b = id('id_k');
let c = id('id_l');
let d = id('id_m');
let btn = id('btn');
let option = query('.option');

// Quiz Data
let quizApp = [

    {
        question: 'Who is PM of pakistan?',
        a: 'liaquat ali khan',
        b: 'imran khan',
        c: 'shahbaz sharif',
        d: 'asif zardari',
        correct: 'c',
    },
    {
        question: 'capital of pakistan??',
        a: 'islamabad',
        b: 'lahore',
        c: 'karachi',
        d: 'multan',
        correct: 'a',

    },
    {
        question: 'President of pakistan?',
        a: 'ali amin ',
        b: 'arif alvi',
        c: 'akram dogar',
        d: 'ali haider',
        correct: 'd',
    },
];

// Helper Functions
let clear = () => {
    for (let i = 0; i < option.length; i++) {
        option[i].checked = false;

    }
};

let checked = () => {
    let check;
    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            check = option[i].id;
        }

    }
    return check;
};



// Score and Quiz Control Variables
let score = 0;
let initialstart = 0;

// Load Quiz Function
let loadQuiz = () => {
    clear();
    let currentQuiz = quizApp[initialstart];
    question.innerText = currentQuiz.question;
    a.innerText = currentQuiz.a;
    b.innerText = currentQuiz.b;
    c.innerText = currentQuiz.c;
    d.innerText = currentQuiz.d;

};
loadQuiz();

// Button Event Listener
btn.addEventListener('click',(e) => {
    let ch = checked();
    if (ch) {
        if (ch === quizApp[initialstart].correct) {
            score = score + 10;
        }

        initialstart++;
        if (initialstart < quizApp.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2> Your score is ${score} out of 30</h2> <button onclick="location.reload()">Reload the Quiz</button>`;
        }
    }
    else {
        alert('please select an option')
    }

});

loadQuiz();








