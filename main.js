document.addEventListener('DOMContentLoaded', () => {

    // function to pull images
    // function pullRandomImages(){
    //     .fetch()
    //     .then()
    // }

    pullRandomImages()

    const memGameArray = [
        {
            name: 'blue',
            img: '../img/blue.jpg',
            matchId: 1
            
        },
        {
            name: 'blue',
            img: '../img/blue.jpg',
            matchId: 1
        },
        {
            name: 'green',
            img: '../img/green.jpg',
            matchId: 2
        },
        {
            name: 'green',
            img: '../img/green.jpg',
            matchId: 2
        },
        {
            name: 'orange',
            img: '../img/orange.jpg',
            matchId: 3
        },
        {
            name: 'orange',
            img: '../img/orange.jpg',
            matchId: 3
        },
        {
            name: 'purple',
            img: '../img/purple.jpg',
            matchId: 4
        },
        {
            name: 'purple',
            img: '../img/purple.jpg',
            matchId: 4
        },
        {
            name: 'red',
            img: '../img/red.jpg',
            matchId: 5
        },
        {
            name: 'red',
            img: '../img/red.jpg',
            matchId: 5
        },
        {
            name: 'yellow',
            img: '../img/yellow.jpg',
            matchId: 6
        },
        {
            name: 'yellow',
            img: '../img/yellow.jpg',
            matchId: 6
        }
    ]

memGameArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid-container')
const resultDisplay = document.querySelector('result')

var imgChosen = [] 
var imgChosenId = []
var imgChosenAlt = []
var wonArr = []
var score = 0


//creating the board
function createBoard() {
    for (let i=0; i<memGameArray.length; i++){
        // creating image tiles
        var imgSquare = document.createElement('img')

        // assigning attributes
        imgSquare.setAttribute('src', '../img/default.jpg')
        imgSquare.setAttribute('data-id', i)
        // adding in alt to try and solve matching problem and add further verification
        imgSquare.setAttribute('alt', memGameArray[i].matchId)

        // add event listener on click to run flipImage function
        imgSquare.addEventListener('click', flipImage)
        // appending attributes to image tile
        var gridContainer = document.querySelector('.grid-container');
        gridContainer.append(imgSquare)
    }
}

function flipImage(){
    
    
    var dataId = this.getAttribute('data-id')
    var matchId = this.getAttribute('alt')
    var imgSrc = this.getAttribute('src')

    var blankImg = '../img/white.jpg'

    if (blankImg == imgSrc){
        alert("Please select a remaining image!")
    }
    else {
    // pushing data to temp arrays
        imgChosen.push(memGameArray[dataId].name)
        imgChosenId.push(dataId)
        imgChosenAlt.push(matchId)
        this.setAttribute('src', memGameArray[dataId].img)
        console.log(`This is imgChosen: ${imgChosen}`)
        console.log(`This is imgChosenId: ${imgChosenId[0]}`)
        console.log(`This is imgChosenId: ${imgChosenId[1]}`)
        console.log(`--------------`)
        // console.log(dataId)
        if (imgChosenId.length === 2) {
            setTimeout(checkForMatch, 500)
        }   
    }
    

}

//check for matches
function checkForMatch(){
    var imgs = document.querySelectorAll('img')
    const optionOne = imgChosenId[0];
    const optionTwo = imgChosenId[1];

    if (imgChosenAlt[0]===imgChosenAlt[1] && imgChosenId[0]!=imgChosenId[1]){
        alert("You found a match!")
        imgs[optionOne].setAttribute('src', '../img/white.jpg')
        imgs[optionTwo].setAttribute('src', '../img/white.jpg')

        wonArr.push(imgChosen)
        score = score +1;
        result.innerHTML = score
        }

        else {
            imgs[optionOne].setAttribute('src', '../img/default.jpg')
            imgs[optionTwo].setAttribute('src', '../img/default.jpg')
            alert("Incorrect! Please try again.")
    }
    imgChosen = []
    imgChosenId = []
    imgChosenAlt = []
    
    if (wonArr.length === memGameArray.length/2) {
        alert('You matched everything!')
    }
}

createBoard();

})