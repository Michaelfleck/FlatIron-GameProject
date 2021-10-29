
// declaring variables
const playGame = document.querySelector('#start-connect');
const gameBoard = document.querySelector('.board');
const playerDisplay = document.querySelector('#player-display')
let playGamePressed = false;
let currentPlayer = 1;
const box = document.getElementsByClassName('box');
const end = document.getElementsByClassName('end');



//PLAY GAME BUTTON 
playGame.addEventListener('click', playOnlyIfUnclicked)

function playOnlyIfUnclicked() {
    if (playGamePressed === false){
        playGameOnce()
        console.log("step: playOnlyIfUnclicked()")
    }
    else if (playGamePressed === true){
        alert('You already started a game!')
    }  
};  
 
function playGameOnce() {       
    playerDisplay.innerText = `Player ${currentPlayer} gets the first move`
    //to prevent button from being clicked again
    playGamePressed = true;
    //playOnlyIfUnclicked();
    console.log("step: playGameOnce()")
    // conso    console.log("adding event listener, click, for changePlayerTurn")
    addBoxOnClick()
} 

// Changes player turns 
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


//////CHILLIGAN'S ISLAND EVENT LISTENER

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
