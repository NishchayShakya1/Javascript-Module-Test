let rulBtn = document.querySelector(".btn-rule");
let ruleModal = document.querySelector(".rule-modal");
let playAgain = document.querySelector(".play-again");

rulBtn.addEventListener("click", ()=>{
    setTimeout(() => {
        ruleModal.style.display = "block";
    }, 200);
});

let close = document.querySelector(".cross");
close.addEventListener("click", ()=>{
    ruleModal.style.display = "none";
});

playAgain.addEventListener("click", ()=>{
    window.location.href = "index.html";
});