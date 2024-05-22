let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");

let user = document.querySelector(".user");
let machine = document.querySelector(".machine");

let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");

let rulBtn = document.querySelector(".btn-rule");
let ruleModal = document.querySelector(".rule-modal");

let nextButton = document.querySelector(".btn-next");

let score = JSON.parse(localStorage.getItem("score"));
let scoreElem = document.getElementById("score");
if(score){
    scoreElem.innerText = score;
}
let count = 0;

let scoreComp = JSON.parse(localStorage.getItem("scoreComp"));
let scoreElemComp = document.getElementById("score-computer");
if(scoreComp){
    scoreElemComp.innerText = scoreComp;
}
let countComp = 0;

rulBtn.addEventListener("click", () => {
    console.log("button Click");
    ruleModal.style.display = "block";
});

function toggleButtons(showRuleButton, showNextButton) {
    if (showRuleButton) {
        rulBtn.style.display = "block";
    } else {
        rulBtn.style.display = "none";
    }
    if (showNextButton) {
        nextButton.style.display = "block";
    } else {
        nextButton.style.display = "none";
    }
}



console.log(computer);
let triangle = document.querySelector(".tri");

let random = Math.floor(Math.random()*3);
con.forEach((element, index) =>[
    element.addEventListener("click", ()=>{

        user.style.opacity = "1";
        triangle.style.display = "none";
        con.forEach(item =>{
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");
        

        
        setTimeout(() => {
            machine.style.opacity = "1";
            setTimeout(() => {
                computer[random].style.display = "block";
                computer[random].classList.add("right");
                

                console.log("1");
            }, 1000);
            
            setTimeout(() => {
                if(random == index){
                    winModal.style.display = "grid";
                    winner.innerText = "TIE Up";
                    play.innerText = "REPLAY";
                    toggleButtons(true, false);
                }
                else if (index == 0 && random== 2 || index==1 && random == 0 || index==2 && random == 1) {
                    // winModal.style.display = "grid";
                    // winner.innerText = "You Win";
                    winModal.style.display = "block";
                    element.style.boxShadow = "0px 1px 100px 0px rgba(0, 50, 0, 0.9)";

                    count = score;
                    count++;
                    scoreElem.innerText = count;
                    localStorage.setItem("score", JSON.stringify(count));
                    toggleButtons(true, true);
                    
                }else{
                    
                    winModal.style.display = "grid";
                    winner.innerText = "You Loose";
                    computer[random].style.boxShadow = "0px 1px 100px 0px rgba(0, 50, 0, 0.9)";
                    countComp = scoreComp;
                    countComp++;
                    scoreElemComp.innerText = countComp;
                    localStorage.setItem("scoreComp", JSON.stringify(countComp));
                    toggleButtons(true, false);

                }
                console.log("1");
            }, 1500);
            console.log("1");
        }, 500);
    })
]);

play.addEventListener("click", ()=>{
    window.location.reload();
});

// rulBtn.addEventListener("click", ()=>{
//     setTimeout(() => {
//         ruleModal.style.display = "block";
//     }, 200);
// });




let close = document.querySelector(".cross");
close.addEventListener("click", ()=>{
    ruleModal.style.display = "none";
});

nextButton.addEventListener("click", () => {
    window.location.href = "win.html";
});

