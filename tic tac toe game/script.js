let boxs = document.querySelectorAll('.boxs');
let resetBtn = document.querySelector('#reset-btn');
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');
let newBtn = document.querySelector('#new-btn');


let turnO = true;

const winPatterns = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal (left to right)
        [2, 4, 6]  // Diagonal (right to left)
    ];

boxs.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
         box.disabled= true;
         checkWinner();
    })
});

const resetGame = ()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add('hide');
    
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulation the winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();

};

let disabledBoxes = ()=>{
    for(let box of boxs){
        box.disabled=true;
    }
};

let enabledBoxes = ()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText=""; 
    }
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log('winner');
                showWinner(pos1val);
            }
        }
    }
};
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);