const textareaEl= document.getElementById("textarea");

const totalCounterEl = document.getElementById("total_counter");
const remainingCounterEl = document.getElementById("remaining_counter");


textareaEl.addEventListener("keyup",()=>{
    updateCounter();
    console.log("Clicked the key");
})

updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute('maxlength') - textareaEl.value.length

}