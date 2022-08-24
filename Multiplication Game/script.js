const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const scoreEl = document.querySelector("#score");
const questionEl = document.querySelector("#question");
const inputEl = document.querySelector("#input");

const formEl = document.querySelector("#form");

questionEl.innerText =`What is ${num1} multiply by ${num2} ?`;
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score =0;
}
const correctAnswer = num1 * num2;

formEl.addEventListener("submit",()=>{
    const userAnswer = +inputEl.value;
    console.log(userAnswer, typeof userAnswer);
    if(correctAnswer === userAnswer){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }

})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));

}

scoreEl.innerText = `Score: ${score}`










