const startPage = document.querySelector(".start-page");
const categoriesPage = document.querySelector(".categories-page");
const finalPage= document.querySelector(".final-page");
const quizPage = document.querySelector(".quiz-page");
const restart = document.querySelector(".restart");
const startButton = document.getElementById("start-btn");
const categoryBtn = document.querySelectorAll(".btn-style");
const categoryTitle = document.querySelector(".category-title");
const again = document.querySelector(".arrow");
const restartButton = document.querySelector(".arrow");
const getScore = document.getElementById("score-number");
const roundSpan = document.getElementById("round-number");
const optionsList = document.querySelectorAll(".options")[0]
const maxRounds = 5;
let currentRound = 1;
const finalScore = document.getElementById("final-score");
const message = document.createElement("p");
//let chosenSong= '';
let songs = "";
let round = 1;
let cat = "";
let score = 0;
let chosenSongs = [];
let playedSongs = [];
let rightSong ,currentSong 
const genre = {
  "Hip Hop": {
    "Humble": "/Resources/rema.mp3",
    "Ozone": "/Resources/rema.mp3",
    "BreakingBad": "/Resources/rema.mp3",
    "Come We Bill Ehh": "bill",
  },
  "R&B": {
    "Spread Thin": "/Resources/rema.mp3",
    "Rehab": "/Resources/rema.mp3",
    "Killing Me": "/Resources/rema.mp3",
    "Kill Bill": "/Resources/rema.mp3",
  },
  "Suprise": {
    "Grape": "/Resources/rema.mp3",
    "Creep": "/Resources/rema.mp3",
    "Fuck The World": "/Resources/rema.mp3",
    "In The End": "/Resources/rema.mp3",
  },
  "Top Hits": {
    "California Love": "/Resources/rema.mp3",
    "Kill Bill": "/Resources/rema.mp3",
    "Welcome to the party": "/Resources welcomeToTheParty.mp3",
    "Munch": "/Resources/Munch.mp3"
  },
  "Throwbacks": {
    "Just The Two of Us": "/Resources/rema.mp3",
    "Crazy": "/Resources/rema.mp3",
    "That Thing": "/Resources/rema.mp3",
    "Beautiful Morning": "/Resources/rema.mp3",
  },
  "Afrobeats": {
    "Party With a Jagaban": "/Resources/rema.mp3",
    "Come We Bill Ehh": "/Resources/rema.mp3",
    "Last Last": "/Resources/last-last.mp3",
    "KU LO SA": "/Resources/Kulosa.mp3",
  },
};
startButton.addEventListener("click", () => {
    // resetGame();
    setEventListener();
    startPage.style.display = "none";
    categoriesPage.style.display = "flex";
  });
  
  startButton.addEventListener("mouseover", () => {
    startButton.style.backgroundColor = "#142455";
    startButton.style.width = "155px";
    startButton.style.height = "55px";
  });
  
  startButton.addEventListener("mouseout", () => {
    startButton.style.backgroundColor = "";
    startButton.style.width = "";
    startButton.style.height = "";
  });

  const setEventListener = () => {
    categoryBtn.forEach((node) => {
        node.addEventListener("click", () => categoryClick(node)
        );
      });
  }
  const categoryClick = (e) => {
    categoriesPage.style.display = "none"
    quizPage.style.display = "flex"
    categoryTitle.innerText = `${e.innerText}`
    cat = `${e.innerText}`
    rightSong = correctChoice()
    currentSong = playSong(rightSong);
    fillIn()
  }
  function fillIn() {
    let options = getMusicList();
    options.forEach((music) => {
      const musicChoices = document.createElement("button");
      musicChoices.classList = ["song-choices btn btn-danger btn-lg btn-block"]
      musicChoices.addEventListener('click',musicOption,{once: true})
      musicChoices.innerText = `${music}`;
      optionsList.appendChild(musicChoices)
    });
  }
  function getMusicList() {
    const songs = genre[categoryTitle.innerText];
    const options = Object.keys(songs);
    // Shuffle the options array
    options.sort(() => Math.random() - 0.5);
    return options;
  }
  const musicOption = (e) => {
    if (e.target.innerText === rightSong) {
        currentRound++
        currentSong.pause()
        setTimeout(() => {
      //   message.remove();
        nextRound();
        }, 1000);

      // Change background color of chosen option to green
      e.target.style.backgroundColor = "green";
      score += 100;
      getScore.innerText = score;

    } else {
      // Change background color of chosen option to red
      score -= 100;
      getScore.innerText = score;
      e.target.style.backgroundColor = "red";
      
      // Find and highlight the correct answer
    const musicChoicesBtn = Array.from(optionsList.children)
      musicChoicesBtn.forEach((option) => {
        option.removeEventListener('click',musicOption,true)
        if (option.innerText === rightSong) {
          option.style.backgroundColor = "green";
        }
      });

      // Add an error message
    //   const message = document.createElement("p");
    //   message.innerText = "Wrong answer, try again!";
    //   message.classList.add("error");
    //   optionsList.appendChild(message);

      setTimeout(() => {
        musicChoicesBtn.forEach((option) => {
          option.disabled = false;
          option.style.backgroundColor = "";
        });
      }, 1000);
    }
  }
  function correctChoice() {
    return pickRandom();
  }
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
  }
  function playSong(rightSong) {
    const audio = new Audio("./Resources/" + rightSong + ".mp3");
    audio.play();
    return audio
  }
  function nextRound() {
    // Update round number
    roundSpan.textContent = `Round ${currentRound}`;
  
    // Pick new random song and play it
    rightSong = correctChoice();
    currentSong = playSong(rightSong);
    Array.from(optionsList.children).forEach((button) => {
        button.removeEventListener('click',musicOption,true)
        button.style.backgroundColor = "";
        button.addEventListener('click',musicOption,{once: true})
      });
      isGameDone()
  }

  function isGameDone(){
    if (maxRounds === currentRound){
      quizPage.style.display = "none"
      finalPage.style.display = "flex"
      finalScore.innerText= `${score}`
      currentSong.pause()
    }
  }
