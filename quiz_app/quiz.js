const questions =[
    {
        question:"which is largest animal in the world ",
        answer:[
            {text:"shark",correct:false},
            {text:"Blue whale ",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    },
    {
        question:"which is smallest country in the world ",
        answer:[
            {text:"Vatican city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri lanka",correct:false}
        ]
    },
    {
        question:"which is largest desert in the world ",
        answer:[
            {text:"Kalhari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarcitica",correct:true}
        ]
    },
    {
        question:"which is smallest continent in the world ",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australlia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false}
        ]
    }
];

const nextbtn = document.querySelector("#next")
const answerbtn = document.querySelector("#ans-btn")
const questionElement = document.querySelector("#quetions")

let currentquetionIndex = 0;
let score = 0;

function startquiz(){
    currentquetionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next"
    showquestion()
}

function showquestion(){
    resete()
    let currentquetion = questions[currentquetionIndex];
    let quetionNo = currentquetionIndex+1 
    questionElement.innerHTML = quetionNo+". "+currentquetion.question
    
    currentquetion.answer.forEach(function(ans){
        let button = document.createElement("button")
        button.innerHTML = ans.text
        button.classList.add("btn")
        answerbtn.appendChild(button)
    })
    
}

startquiz()
