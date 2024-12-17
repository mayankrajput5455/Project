let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () =>{
    const options =["rock","paper","scissor"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = ()=> {
    console.log("It's A Draw");
    msg.innerText = "It's A Draw , Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice ) => {
    if(userWin) {
        console.log(`You Win!, Your ${userChoice} beats ${compChoice}`);
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose!")
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice)=> {
    console.log("user choice = ", userChoice);
    const compChoice =genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
    drawGame();
    }else{
        let userWin = true;
        
        if (userChoice ==="rock"){
            //scissor,paper
            userWin = compChoice ==="paper" ? false:true;
        }else if (userChoice ==="paper"){
            //rock,scissor
            userWin = compChoice ==="scissor" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice ==="rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        console.log("choice was clicked");
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});