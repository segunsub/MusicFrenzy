const startPage = document.querySelector(".start-page")
const categoriesPage = document.querySelector(".categories-page")
const quizPage = document.querySelector(".quiz-page")
const finalPage = document.querySelector(".final-page")
const restart= document.querySelector(".restart")
const startButton = document.getElementById("start-btn")
const categoryBtn = document.querySelectorAll(".btn-style")
const categoryTitle = document.querySelector(".category-title")
const again= document.querySelector('.arrow')
const restartButton = document.querySelector('.arrow');
const getScore = document.getElementById("score-number")


const quizOptions = document.querySelectorAll(".song-choices")
let arr= []
let chosenSong= ''
let picked= ''
let songs= ''
let right= ''
let randomarr= []
let round = 1;
let cat= ''
let first= ''
let score = 0
const genre = {
    "Hip Hop": {
        "Humble": "/Resources/rema.mp3",
        "Ozone": "/Resources/rema.mp3",
        "Breaking Bad": "/Resources/rema.mp3",
        "Demon": "/Resources/rema.mp3",
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
	let songs = genre[categoryTitle.innerText];
    noRepeats= genre[categoryTitle.innerText]
  return Object.keys(songs);
};

function fillIn() {
    let counter = 0;
    let options = getMusicList();
    options.sort(() => Math.random() - 0.5); // Shuffle the array
    quizOptions.forEach(button => {
        let music = options[counter];
        button.innerText = `${music}`;
        counter++;
        if (counter === 4) return;
    })
}

function pickRandom() {
    const options = getMusicList().filter(option => !randomarr.includes(option));
    if (options.length === 0) {
        randomarr = [];
    }
    const randomIndex = Math.floor(Math.random() * options.length);
    const song = options[randomIndex];
    randomarr.push(song);
    return song;
}


function correctChoice(){
    right = pickRandom()
}
let audio= ''
function playSong() {
 audio = new Audio('../CroppedSongs/' + right + '.mp3');
audio.play();
}

// function check() {
//     if (picked === right) {
//         button.style.backgroundColor = 'green';
//         score += 100;
//         getScore.innerText = score;
//     }
// }
function checkAnswer(event) {
    const userChoice = event.target.innerHTML;
    if (userChoice === right) {
      event.target.classList.add('correct');
      message.textContent = 'Correct!';
      score++;
    } else {
      event.target.classList.add('incorrect');
      message.textContent = 'Wrong!';
    }
  
    // Clear options for next round
    options.innerHTML = '';
  
    // Check if current round has ended
    if (currentIndex === songsPerRound - 1) {
      // Show transition message
      message.textContent = `Moving on to Round ${currentLevel + 1}...`;
  
      // Wait for transition duration
      setTimeout(() => {
        // Start next round
        currentLevel++;
        currentIndex = 0;
        right = chooseRandomSong();
        songs = shuffle(songs);
        songs.splice(songs.indexOf(right), 1);
        options.innerHTML = renderOptions();
        song.src = `songs/${right}.mp3`;
        message.textContent = `Round ${currentLevel}`;
        roundCounter.textContent = `Round ${currentLevel}`;
      }, transitionDuration);
    } else {
      // Move on to next song in current round
      currentIndex++;
      right = chooseRandomSong();
      songs.splice(songs.indexOf(right), 1);
      options.innerHTML = renderOptions();
      song.src = `songs/${right}.mp3`;
    }
  
    // Update score
    scoreCounter.textContent = `Score: ${score}/${currentLevel}`;
  }
  

function pickedSong() {
    quizOptions.forEach(button => {
        button.setAttribute('id', button.innerText);
        button.addEventListener('click', () => {
        picked = `${button.innerText}`;
        //if (button.id !== picked || picked !== '') button.disabled = true;
            if (picked === right) {
                //button.style.backgroundColor = 'green';
                score += 100;
                getScore.innerText = score;
                audio.pause()
                nextRound()

            }
        })
        fillIn()
        // add a transition class to the quiz page to trigger the opacity transition
quizPage.classList.add('transition');

// wait for 500 milliseconds (or any duration you want) before removing the transition class
setTimeout(() => {
    quizPage.classList.remove('transition');
}, 500);

    })
}

function playRound() {
    fillIn();
    correctChoice();
    playSong();
    pickedSong();
}

function nextRound(){
    correctChoice()
    playSong()
    removeSongOptionEventListener() // Remove event listener from previous round
    pickedSong()
    
    round++
    let roundText = `Round ${round}`
    setTimeout(function(){ 
        document.querySelector(".round-text").textContent = roundText
        document.querySelector(".quiz-page").classList.add('fade-in');
        document.querySelector(".quiz-page").style.display= "flex";
        setTimeout(function(){
            document.querySelector(".quiz-page").classList.remove('fade-in');
        }, 1000);
    }, 1000);
}


changeText();

  function changeText() {
    categoryBtn.forEach(node => {
        node.addEventListener('click', () => {
            categoriesPage.style.display = "none";
            quizPage.style.display = "flex";
            categoryTitle.innerText = `${node.innerText}`;
            cat = `${node.innerText}`;
            fillIn();
            correctChoice();
            playSong();
            pickedSong();
            // Add the current round to the transition message
            quizPage.querySelector('.transition').innerText = `Round ${round}`;
        })
    })
}






function resetGame() {
    round = 1;
    score = 0;
    chosenSong = '';
    picked = '';
    songs = '';
    right = '';
    randomarr = [];
    getScore.innerText = score;
    quizOptions.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = '';
    });
}

//   restart.addEventListener('click', () => {
//     finalPage.style.display = "none";
//     categoriesPage.style.display = "flex";
//   });