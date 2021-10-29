document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded and parsed')
})

//declaring variables for html contents that won't change
const playGame = document.querySelector('#start-connect');
const gameBoard = document.querySelector('.board');
const playerDisplay = document.querySelector('#player-display')
let playGamePressed = false;
let currentPlayer = 1;
//const playerOneColor = "yellow";
//const playerTwoColor = "red";
const box = document.getElementsByClassName('box');
const end = document.getElementsByClassName('end');
//const playerAnnounce = document.createElement('h3')



console.log(`Box length: ${box.length}`)
console.log(`End length: ${end.length}`)

//PLAY GAME BUTTON 
//Could update code so that once pressed "Play Game"
//turns into "Play Again" and rerolls first player.
playGame.addEventListener('click', playOnlyIfUnclicked)

    // console.log(Array.from(box));

function playOnlyIfUnclicked() {
    if (playGamePressed === false){
        playGameOnce()
        console.log("step: playOnlyIfUnclicked()")
        // console.log(`Player: ${currentPlayer}`)
        // console.log(`playGamePressed:${playGamePressed}`)
    }
    else if (playGamePressed === true){
        alert('You already started a game!')
    }
        

    
};  
 
function playGameOnce() {
    //currentPlayer = (Math.floor(Math.random() * 2) + 1)
    
    playerDisplay.innerText = `Player ${currentPlayer} gets the first move`
    //need to prevent button from being clicked again
    playGamePressed = true;
    //playOnlyIfUnclicked();
    console.log("step: playGameOnce()")
    // console.log(`Player: ${currentPlayer}`)

    console.log("adding event listener, click, for changePlayerTurn")
    addBoxOnClick()
} 


function changePlayerTurn() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
        playerDisplay.innerText = 'Player 2\'s turn'
        console.log("switching from player 1 to 2")
    } else {
        currentPlayer = 1;
        playerDisplay.innerText = 'Player 1\'s turn'
        console.log("switching from player 2 to 1")
    }
    
} 
    
    
function addBoxOnClick() {
     
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = (e) => {
            console.log(e);
            const clickedBox = e.srcElement;
            const row = parseInt(clickedBox.id.split("-")[0])
            const column = parseInt(clickedBox.id.split("-")[1])
            console.log(`${row}, ${column}`)
            // if statement was moved inside for loop so player would not 
            // 
            if (currentPlayer===1){
                clickedBox.style["background-color"] = "yellow";
            }
            else{
                clickedBox.style["background-color"] = "red";
            }
            changePlayerTurn()
        }
    }      
}


    // function firstMove() {
    //     for (let i = 0; i < box.length; i++) {
    //         box[i].onclick = () => {
    //         box[i].style["background-color"] = "yellow";
    //     }
    // }}

    //need to update so that player turn changes only after first turn
    //need to update so that click even happens ONLY when box node is clicked
    //gameBoard.addEventListener('click', playerTurn)

    
//if box[i] color = red for all, announce win
//if box[i] color = yellow for all, announce win

//Win Arrays Rows
// [0, 7, 14, 21]
// [7, 14, 21, 28]
// [14, 21, 28, 35]
// [1, 8, 15, 22]
// [8, 15, 22, 29]
// [15, 22, 29, 36]
// [2, 9, 16, 23]
// [9, 16, 23, 30]
// [16, 23, 30, 37]
// [3, 10, 17, 24]
// [10, 17, 24, 31]
// [17, 24, 31, 38]
// [4, 11, 18, 25]    
// [11, 18, 25, 32]   
// [18, 25, 32, 39]
// [5, 12, 19, 26]
// [12, 19, 26, 33]
// [19, 26, 33, 40]
// [6, 13, 20, 27]
// [13, 20, 27, 34]
// [20, 27, 34, 41]

//Win Arrays Columns
// [0, 1, 2, 3]
// [1, 2, 3, 4]
// [2, 3, 4, 5]
// [3, 4, 5, 6]
// [7, 8, 9, 10]
// [8, 9, 10, 11]
// [9, 10, 11, 12]
// [10, 11, 12, 13]
// [14, 15, 16, 17]
// [15, 16, 17, 18]
// [16, 17, 18, 19]
// [17, 18, 19, 20]
// [21, 22, 23, 24]
// [22, 23, 24, 25]
// [23, 24, 25, 26]
// [24, 25, 26, 27]
// [28, 29, 30, 31]
// [29, 30, 31, 32]
// [30, 31, 32, 33]
// [31, 32, 33, 34]
// [35, 36, 37, 38]
// [36, 37, 38, 39]
// [37, 38, 39, 40]
// [38, 39, 40, 41]

//Win Arrays left up to right
// [3, 11, 19, 27]
// [2, 10, 18, 26]
// [10, 18, 26, 34]
// [1, 9, 17, 25]
// [9, 17, 25, 33]
// [17, 25, 33, 41]
// [0, 8, 16, 24]
// [8, 16, 24, 32]
// [16, 24, 32, 40]
// [7, 15, 23, 31]
// [15, 23, 31, 39]
// [14, 22, 30, 38]

//Win Arrays right up to left
// [21, 15, 9, 3]
// [28, 22, 16, 10]
// [22, 16, 10, 4]
// [35, 29, 23, 17]
// [29, 23, 17, 11]
// [23, 17, 11, 5]
// [36, 30, 24, 18]
// [30, 24, 18, 12]
// [24, 18, 12, 6]
// [37, 31, 25, 19]
// [31, 25, 19, 13]
// [38, 32, 26, 20]

//////CODE FOR ADDITIONAL EVENT LISTENER

const controller = document.getElementById('hover-over')
controller.addEventListener('mouseover', hoverOverController)

const pElement = document.createElement('p')
function hoverOverController(e) {
    e.preventDefault();
    
    controller.append(pElement)
    pElement.innerText = 'Congratulations! You found a secret. It doesn\'t really DO anything, but you should be proud of yourself for finding it anyway.'
    
    controller.addEventListener('onmouseout', removeHover)
    document.getElementById('hover-over').scrollIntoView();
    
    
}

function removeHover(e) {
    e.preventDefault();
    controller.remove(pElement)
}
