let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-btn");
let newGameButton = document.querySelector(".newGame-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector(".message");
let turnO = true;


const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if (turnO){
            //player1
            box.innerText = "O";
            turnO = false;
        }else{
            //player2
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const disableBoxes = () => {
    for (let box of boxes){
        box.disabled =true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner =(winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    let isDraw = true;

    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }

    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        showDraw();
    }
};

const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};


newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
