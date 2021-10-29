document.addEventListener('DOMContentLoaded', () => {

    
    const accessKey = 'NujQpAnNkVy7GW_Dx2XmJGcRy3uNSjgBG9KCVSPhAxc'
    const randImgURL = 'https://api.unsplash.com/photos/random'
    const count = 6;
    // function to pull images from API and promise chain
    function pullRandomImages(){
        fetch(`${randImgURL}?client_id=${accessKey}&count=${count}`)
        .then(resp => resp.json())
        .then(randomImgs => {
            return randomImgs.map((img)=> img.urls.regular)   
        })
        .then(urls => {
            console.log("Images pulled successfully from API")
            const memGameArray = [
                {
                    name: 'blue',
                    img: urls[0],
                    matchId: 1
                    
                },
                {
                    name: 'blue',
                    img: urls[0],
                    matchId: 1
                },
                {
                    name: 'green',
                    img: urls[1],
                    matchId: 2
                },
                {
                    name: 'green',
                    img: urls[1],
                    matchId: 2
                },
                {
                    name: 'orange',
                    img: urls[2],
                    matchId: 3
                },
                {
                    name: 'orange',
                    img: urls[2],
                    matchId: 3
                },
                {
                    name: 'purple',
                    img: urls[3],
                    matchId: 4
                },
                {
                    name: 'purple',
                    img: urls[3],
                    matchId: 4
                },
                {
                    name: 'red',
                    img: urls[4],
                    matchId: 5
                },
                {
                    name: 'red',
                    img: urls[4],
                    matchId: 5
                },
                {
                    name: 'yellow',
                    img: urls[5],
                    matchId: 6
                },
                {
                    name: 'yellow',
                    img: urls[5],
                    matchId: 6
                }
            ]

            // randomizes placement of image tiles
            memGameArray.sort(() => 0.5 - Math.random())

            const grid = document.querySelector('.grid-container')
            const resultDisplay = document.querySelector('result')

            // sets up empty arrays for comparison logic
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
                    imgSquare.setAttribute('src', './img/default.jpg')
                    imgSquare.setAttribute('data-id', i)
                    imgSquare.setAttribute('class', 'image-tile')
                    
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

                var blankImg = './img/white.jpg'
                // Does not allow user to select already matched/blank tile
                if (blankImg == imgSrc){
                    alert("Please select a remaining image!")
                }
                else {
                // pushing data to temp arrays
                    imgChosen.push(memGameArray[dataId].name)
                    imgChosenId.push(dataId)
                    imgChosenAlt.push(matchId)
                    this.setAttribute('src', memGameArray[dataId].img)


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

                // Uses 2 factor verification for matches for both the image tiles
                // matchId and its data-id
                if (imgChosenAlt[0]===imgChosenAlt[1] && imgChosenId[0]!=imgChosenId[1]){
                    alert("You found a match!")
                    imgs[optionOne].setAttribute('src', './img/white.jpg')
                    imgs[optionTwo].setAttribute('src', './img/white.jpg')

                    wonArr.push(imgChosen)
                    score = score +1;
                    result.innerHTML = score
                }
                // If no match is found. Reset to default image tile
                else {
                    imgs[optionOne].setAttribute('src', './img/default.jpg')
                    imgs[optionTwo].setAttribute('src', './img/default.jpg')
                    alert("Incorrect! Please try again.")
                }
                imgChosen = []
                imgChosenId = []
                imgChosenAlt = []
                
                if (wonArr.length === memGameArray.length/2) {
                    setTimeout(() => alert('You matched everything!'), 2000)
                }
            }
            
            createBoard();
        })
       
    }
    pullRandomImages()
})

