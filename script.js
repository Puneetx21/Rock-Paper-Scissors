

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");

const GenCompchoice = ()=>{
    const options = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

 const drawGame = ()=>{
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw. Try Again."
    msg.style.backgroundColor = "#00296b"
 }

 const showWinner  =(userWin,Userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userscorep.innerText = userScore;
        console.log("You Won");
        msg.innerText = `You Won!.Your ${Userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#29bf12";
    }else{
        compScore++;
        compscorep.innerText = compScore;
        console.log("You Lose");
        msg.innerText =`You Lose. Your ${Userchoice} Lost to ${compchoice}`
        msg.style.backgroundColor = "#d90429";
    }
 }

const Playgame = (Userchoice) =>{
    console.log("User Plays :",Userchoice);
    const compchoice = GenCompchoice();
    console.log("Comp Plays :",compchoice);

    if(Userchoice===compchoice){
        drawGame();
    } else{
        let userWin = true;
        if(Userchoice=== "rock"){
           userWin =  compchoice==="paper" ? false : true;
        }else if(Userchoice==="paper"){
            userWin = compchoice==="scissors" ? false : true ; 
        }else {
           userWin = compchoice==="rock" ? false : true;
        }
        showWinner(userWin,Userchoice,compchoice); 
    }
    
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const Userchoice = choice.getAttribute("id");
       Playgame(Userchoice);
    });
});
