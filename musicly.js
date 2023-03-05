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


const quizOptions = document.querySelectorAll(".song-choices")
let arr= []
let chosenSong= ''
let picked= ''
let songs= ''
let right= ''
let randomarr= []
let round = 1;
let cat= ''
const genre = {
    "Hip Hop": {
        "Humble": "/Resources/rema.mp3",
        "Ozone": "/Resources/rema.mp3",
        "BreakingBad": "/Resources/rema.mp3",
        "California Love": "/Resources/rema.mp3",
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
restart.addEventListener('click', () => {
    startPage.style.display = "flex";
    categoriesPage.style.display = "none";
    
})


function undisableButtons() {
    quizOptions.forEach(button => {
      button.disabled = false;
    })
  }
  

function getGenre() {
    return categoryTitle.innerText
};

getGenre()

function getMusicList() {
    songs = genre[getGenre()];
    arr = Object.keys(songs);
    randomarr = Object.keys(songs);
    return Object.keys(songs);
};

function playSong(songFile) {
    const audio = new Audio(songFile);
    audio.play();
    return audio;
}

let currentAudio;

function changeSong() {
    const song = './Resources/' + right + '.mp3';
   // if (currentAudio) {
        currentAudio.pause();
  //  }
  //  currentAudio = playSong(song);
}



function fillIn() {
    let counter = 0;
    const options = getMusicList();
    // Fisher-Yates shuffle
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    quizOptions.forEach(button => {
        let music = options[counter];
        button.innerText = `${music}`;
        counter++;
        if (counter === 4) return;
    })
}


// function pickRandom() {
//     const randomIndex = Math.f   loor(Math.random() * getMusicList().length);
//     const song = arr[randomIndex];
//     return song;
// }

function correctChoice(){
    const randomCorrect= Math.floor(Math.random() * arr.length )
    right= arr[randomCorrect]
    return arr[randomCorrect];
}

function pickedSong() {
    //let flag = false;
    quizOptions.forEach(button => {
      button.setAttribute('id', button.innerText);
      button.addEventListener('click', () => {
        picked = `${button.innerText}`;
        if (picked === right) {
          button.style.backgroundColor = 'green';
          counter--;
          document.getElementById('score-number').innerText = counter * 25;
          if (counter === 0) {
            setTimeout(() => {
              quizPage.style.display = 'none';
              finalPage.style.display = 'flex';
              document.getElementById('final-score').innerText = counter * 25;
            }, 1000);
          }
          quizOptions.forEach(button => {
            if (button.id !== picked) button.disabled = true;
          });
        } else {
          button.style.backgroundColor = 'red';
          quizOptions.forEach(button => {
            if (button.id !== picked) button.disabled = true;
          });
        //   if (counter === 0) {
        //     setTimeout(() => {
        //       quizPage.style.display = 'none';
        //       finalPage.style.display = 'flex';
        //       document.getElementById('final-score').innerText = counter * 25;
        //     }, 1000);
        //   }
        }
      });
    });
  }
  

function isItCorrect(){
    counter= 0
    button.style.backgroundColor= 'green'
    if(`${button.innerText}` === right){
        button.style.backgroundColor = 'green'
        
    }else{
        button.style.backgroundColor= 'blue'
        
    }
}
//let counter = 4

function resetGame() {
    let redocounter=4
    //let optionsredo = getMusicList();
    //arr = [];
    chosenSong = '';
    picked = '';
    songs = '';
    right = '';
    //randomarr = [];
    categoryTitle.innerText = cat
    for (let i = options.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [optionsredo[i], optionsredo[j]] = [optionsredo[j], optionsredo[i]];
    }
    quizOptions.forEach(button => {
      button.style.backgroundColor = '';
      button.disabled = false;
      let music = options[redocounter];
        button.innerText = `${music}`;
        redocounter--;
        if (counter === 0) return;
    });
  }

  restartButton.addEventListener('click', () => {
  resetGame();
});
  function fillIn() {
    let counter = 0;
    const options = getMusicList();
    // Fisher-Yates shuffle
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    quizOptions.forEach(button => {
        let music = options[counter];
        button.innerText = `${music}`;
        counter++;
        if (counter === 4) return;
    })
}
changeText();

function changeText() {
    categoryBtn.forEach(node => {
        node.addEventListener('click', () => {
            categoriesPage.style.display = "none";
            quizPage.style.display = "flex";
            categoryTitle.innerText = `${node.innerText}`;
            cat= `${node.innerText}`;
        })
    })
}

