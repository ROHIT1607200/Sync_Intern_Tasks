const quizData = [{
    question: "What is the capital of India?",
    a: "Delhi",
    b: "New Delhi",
    c: "Kolkata",
    d: "Chennai",
    correct: "b",
},
{
    question: "Who is the current president of the United States?",
    a: "Joe Biden",
    b: "Donald Trump",
    c: "Barack Obama",
    d: "Hillary Clinton",
    correct: "a",
},
{
    question: "What is the largest animal in the world?",
    a: "Elephant",
    b: "Giraffe",
    c: "Whale",
    d: "none of the above",
    correct: "c",
},
{
    question:  "What is the name of the largest bone in the human body?",
    a: "Humerus",
    b: "Tibia",
    c: "Pelvis",
    d: "Femur",
    correct: "d",
},
{
    question:"Which planet is the second smallest in the solar system?",
    a: "Mercury",
    b: "Mars",
    c: "Venus",
    d: "Pluto",
    correct: "b",
}

];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
<div class="col">
        <h2 class="w-100"> Great! you've scored ${correct} / ${total} </h2>
    </div>
`
}
loadQuestion(index);