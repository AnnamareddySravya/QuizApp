const questions = [
    {
    //   "id":1,
      question:"Inside which HTML element do we put the JavaScript? ",
       answers:[
        
            {text:"script",correct:"true"},
            {text:"scripting",correct:"false"},
            {text:"javascript",correct:"false"},
            {text:"js",correct:"false"},
         ]   
    },
    {
        // "id":2,
      question:"What does the `typeof` operator return for `null` in JavaScript?",
       answers:[
        
            {text:"null",correct:"false"},
            {text:"object",correct:"true"},
            {text:"undefined",correct:"false"},
            {text:"number",correct:"false"},
         ]   

    },
    {
        question:"How do you check the length of an array in JavaScript?",
        answers:[
         
             {text:"array.length()",correct:"false"},
             {text:"array.size()",correct:"false"},
             {text:"length(array)",correct:"false"},
             {text:"array.length",correct:"true"},
          ]     
    },
    {
        question:"What is the difference between let and var in JavaScript for variable declaration?",
        answers:[
         
             {text:"They are interchangeable and can be used in the same way",correct:"false"},
             {text:"let is block-scoped, and var is global-scoped",correct:"true"},
             {text:"var is block-scoped, and let is function-scoped",correct:"false"},
             {text:"There is no difference; they serve the same purpose",correct:"false"},
          ]      
    },
    {
        question:"Which function is used to convert a string to an integer in JavaScript?",
        answers:[
         
             {text:"convertToInt()",correct:"false"},
             {text:"parseFloat()",correct:"false"},
             {text:"parseInt()",correct:"true"},
             {text:"toInteger()",correct:"false"},
          ]      
    }
]


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +":" + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Total Score is ${score} / ${questions.length}`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block"
}
// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
// function prev("previous-btn")
// {
//     document.getElementsByClassName('container')[id-1].style.display = "block";
//     document.getElementsByClassName('container')[id].style.display = "none";
// }
// previousButton.addEventListener("Click",()=>{
//     if(currentQuestionIndex < questions.length[1]){
//         handleNextButton();
//     }
//     else{

//     }
// })
startQuiz();





// let num1=[11,32,15,45,10];
// num1.forEach((currentnumber,index)=>{
//     console.log(`num1 at index ${index},${currentnumber}`)
// })

// //JOIN

// var names=["naresh","venkatesh","hemanth","sravya","gopi"];
// var naresh = document.getElementById('example');
// var output = names.map((data)=>`<li>${data}</li>`)
// naresh.innerHTML=output.join('')