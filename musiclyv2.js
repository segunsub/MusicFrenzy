const startPage = document.querySelector(".start-page");
const categoriesPage = document.querySelector(".categories-page");
const quizPage = document.querySelector(".quiz-page");
const finalPage = document.querySelector(".final-page");
const restart= document.querySelector(".restart");
const startButton = document.getElementById("start-btn");
const categoryBtn = document.querySelectorAll(".btn-style");
const categoryTitle = document.querySelector(".category-title");
const again= document.querySelector('.arrow');
const restartButton = document.querySelector('.arrow');
const getScore = document.getElementById("score-number");
const roundSpan = document.getElementById("round-number");
const maxRounds = 4;
let currentRound = 1;
const quizOptions = document.querySelectorAll(".song-choices");
const finalScore = document.getElementById("final-score");
const message = document.createElement('p')
let arr= [];
//let chosenSong= '';
let picked= '';
let songs= '';
let right= '';
let randomarr= [];
let round = 1;
let cat= '';
let first= '';
let score = 0;
let chosenSongs = [];
let playedSongs= []
const genre = {
    "Hip Hop": {
        "Humble": "/Resources/rema.mp3",
        "Ozone": "/Resources/rema.mp3",
        "BreakingBad": "/Resources/rema.mp3",
       // "Welcome to the party": "/Resources/rema.mp3",
        "Come We Bill Ehh": "bill",
    },
    "R&B": {
        "To You": "/Resources/rema.mp3",
        "Walked In": "/Resources/rema.mp3",
        "Barking": "/Resources/rema.mp3",
    },
    "Indies": {
        "Drugs": "/Resources/rema.mp3",
        "Promise": "/Resources/rema.mp3",
        "One in a Million": "/Resources/rema.mp3",
        "That Thresh": "/Resources/rema.mp3",
    },
    "Top Hits": {
        "BoysALiar": "/Resources/rema.mp3",
        "KillBill": "/Resources/rema.mp3",
    },
    "Throwbacks": {
        "Just The Two of Us": "/Resources/rema.mp3",
        "Crazy": "/Resources/rema.mp3",
        "Aint No Sunshine": "/Resources/rema.mp3",
    },
    "Afrobeats": {
        "Party With a Jagaban": "/Resources/rema.mp3",
        "Come We Bill Eh": "/Resources/rema.mp3",
        "Last Last": "/Resources/rema.mp3",
        "KU LO SA": "/Resources/rema.mp3",
    },
};
changeText();
startButton.addEventListener('click', () => {
   // resetGame();
    startPage.style.display = 'none';
    categoriesPage.style.display = 'flex';
  });
  
startButton.addEventListener('mouseover', () => {
    startButton.style.backgroundColor = "#142455"
    startButton.style.width = "155px"
    startButton.style.height = "55px"
})

startButton.addEventListener('mouseout', () => {
    startButton.style.backgroundColor = ""
    startButton.style.width = ""
    startButton.style.height = ""
})

function getMusicList() {
    const songs = genre[categoryTitle.innerText];
    const options = Object.keys(songs);
    // Shuffle the options array
    options.sort(() => Math.random() - 0.5);
    return options;
}

function fillIn() {
    let counter = 0;
    let options = getMusicList();
    quizOptions.forEach(button => {
        let music = options[counter];
        button.innerText = `${music}`;
        counter++;
        if (counter === 4) return;
    })
}
// function fillIn() {
//     const options = getMusicList();
//     quizOptions.forEach((button, index) => {
//         button.innerText = options[index];
//     });
// }


function pickRandom() {
    const songs = getMusicList();
    let randomIndex = Math.floor(Math.random() * songs.length);
    let song = songs[randomIndex];
    while (chosenSongs.includes(song)) {
        randomIndex = Math.floor(Math.random() * songs.length);
        song = songs[randomIndex];
    }
    chosenSongs.push(song);
    if (chosenSongs.length === songs.length) {
        chosenSongs = [];
    }
    return song;
    // let randomIndex;
    // do {
    //   randomIndex = Math.floor(Math.random() * songs.length);
    // } while (playedSongs.includes(randomIndex));
  
    // playedSongs.push(randomIndex);
    // return songs[randomIndex];
  }
  
function correctChoice(){
    right = pickRandom()
}
let audio= ''
function playSong() {
//audio.pause()
console.log(right,'this is right')
audio = new Audio('./Resources/' + right + '.mp3');
audio.play();
}


function pickedSong() {
    quizOptions.forEach(button => {
        button.setAttribute('id', button.innerText);
        button.addEventListener('click', async () => {
        picked = `${button.innerText}`;
        //const pause= await audio.pause()
        if (audio.paused) {

            if (picked === right) {
                //  setTimeout(() => {
                //   message.remove();
                    nextRound();
               //  }, 1000);
            
                // Change background color of chosen option to green
                button.style.backgroundColor = 'green';
                score += 100;
                getScore.innerText = score;
               
            
                // setTimeout(() => {
                //     nextRound();
                // }, 1000);
            } 
    else {
                // Change background color of chosen option to red
                button.style.backgroundColor = 'red';
            
                // Find and highlight the correct answer
                quizOptions.forEach(option => {
                    if (option.innerText === right) {
                        option.style.backgroundColor = 'green';
                    }
                });
            
                // Add an error message
                const message = document.createElement('p');
                message.innerText = 'Wrong answer, try again!';
                message.classList.add('error');
                quizPage.appendChild(message);
            
                setTimeout(() => {
                    message.remove();
                    quizOptions.forEach(option => {
                        option.disabled = false;
                        option.style.backgroundColor = '';
                    });
                }, 1000);
            }
    
        }
        else {
            audio.pause()
            /*audio.load(); */
        }

    
        
        })
    })
}
  
  function nextRound() {
    // Update round number
    roundSpan.textContent = `Round ${currentRound}`;
    
  
    // Reset button colors
    quizOptions.forEach((button) => {
      button.style.backgroundColor = "";
      //button.disabled = false;
    });
  
    // Pick new random song and play it
    correctChoice();
    playSong();
    pickedSong();
  }
  
  function endGame() {
    // Hide quiz page and show final page
    quizPage.style.display = "none";
    finalPage.style.display = "flex";
  
    // Display final score
    
    finalScore.textContent = score;
  }


// function nextRound(){
//     correctChoice()
//     playSong()
//     pickedSong()
   
// }
function changeText() {
    categoryBtn.forEach(node => {
        node.addEventListener('click', () => {
            categoriesPage.style.display = "none";
            quizPage.style.display = "flex";
            categoryTitle.innerText = `${node.innerText}`;
            cat = `${node.innerText}`;
            //roundSpan.textContent = `Round ${currentRound}`;
            fillIn();
            correctChoice();
            playSong()
            pickedSong()

        })
    })
}