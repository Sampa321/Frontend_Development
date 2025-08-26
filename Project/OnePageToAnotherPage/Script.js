const questions=[
    {
        question:"Which of the following is a primary memory?",
        answers:[
            {text:"Hard Disk",correct:false},
            {text:"RAM",correct:true},
            {text:"USB Drive",correct:false},
            {text:"CD-Rom",correct:false}
        ]
    },
    {
        
        question:"What is the smallest header in HTML by default?",
        answers:[
            {text:"h1",correct:false},
            {text:"h6",correct:true},
            {text:"h5",correct:false},
            {text:"h3",correct:false}
        ]
    },
    {
        question:"What is full Form of CSS?",
        answers:[
            {text:"Case Sensitive Screen",correct:false},
            {text:"Case Screen Style ",correct:false},
            {text:"Cascading Style Sheet",correct:true},
            {text:"None of these",correct:false}
        ]
    },
    {
        question:"What Keyword is used to define a function in javaScript",
        answers:[
            {text:"def",correct:false},
            {text:"func",correct:false},
            {text:"function",correct:true},
            {text:"None of these",correct:false}
        ]
    },
    {
        question:"What will be the result of the following code: x='Welcome' print(x[3]?",
        answers:[
            {text:"c",correct:true},
            {text:"l",correct:false},
            {text:"e",correct:false},
            {text:"Welcome Welcome Welcome",correct:false}
        ]
    },
    {
        question:"In java,which method is often used to print variables?",
        answers:[
            {text:"printline()",correct:false},
            {text:"echo()",correct:false},
            {text:"println()",correct:true},
            {text:"printvar()",correct:false}
        ]
    },
    {
        question:"What is a boolean data type in c used for?",
        answers:[
            {text:"Storing foating-point numbers",correct:false},
            {text:"Storing characters",correct:false},
            {text:"Storing whole numbers",correct:false},
            {text:"Storing true or false values",correct:true}
        ]
    },
    {
        question:"What object is used to print text in c++?",
        answers:[
            {text:"cin",correct:false},
            {text:"println",correct:false},
            {text:"echo",correct:false},
            {text:"cout",correct:true}
        ]
    },
    {
        question:"What command do you use to delete folders?",
        answers:[
            {text:"mkdir",correct:false},
            {text:"del",correct:false},
            {text:"rmdir",correct:true},
            {text:"rm",correct:false}
        ]
    },
    {
        question:"In PHP,the variable name starts with:",
        answers:[
            {text:"#(Hash)",correct:false},
            {text:"$(Dollar)",correct:true},
            {text:"&(Ampersand)",correct:false},
            {text:"!(Exclamation)",correct:false}
        ]
    }
   
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    });
}


function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();