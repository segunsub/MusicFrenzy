const startPage = document.querySelector(".start-page")
const categoriesPage = document.querySelector(".categories-page")
const quizPage = document.querySelector(".quiz-page")
const finalPage = document.querySelector(".final-page")
const restart= document.querySelector(".restart")
const startButton = document.getElementById("start-btn")
const categoryBtn = document.querySelectorAll(".btn-style")
const categoryTitle = document.querySelector(".category-title")
const quizOptions = document.querySelectorAll(".song-choices")
let arr= []
const chosenSong= ''
let picked= ''
let song= ''
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
    startPage.style.display = "none";
    categoriesPage.style.display = "flex";
})

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

changeText();

function changeText() {
    categoryBtn.forEach(node => {
        node.addEventListener('click', () => {
            categoriesPage.style.display = "none";
            quizPage.style.display = "flex";
            categoryTitle.innerText = `${node.innerText}`;
            pickRandom();
            fillIn(); 
            correctChoice();
            song = './Resources/' + correctChoice() + '.mp3';
            playSong(`${song}`) 
            pickedSong()
            isItCorrect()
            

            //playSong("./Resources")
        })
    })
}

function getGenre() {
    return categoryTitle.innerText
};

getGenre()

function getMusicList() {
    const songs = genre[getGenre()];
    arr= Object.keys(songs);
    return Object.keys(songs);
};

function playSong(songFile) {
    const audio = new Audio(songFile);
    audio.play();
}

function fillIn() {
    let counter = 0;
    quizOptions.forEach(button => {
        let music = getMusicList()[counter];
        button.innerText = `${music}`;
        counter++;
        if (counter === 4) return;
    })
}

function pickRandom() {
    const randomIndex = Math.floor(Math.random() * getMusicList().length);
    const song = arr[randomIndex];
    return song;
}
let right= ''
function correctChoice(){
    const randomCorrect= Math.floor(Math.random() * arr.length )
    right= arr[randomCorrect]
    return arr[randomCorrect];
}

function pickedSong() {
    let flag = false
    quizOptions.forEach(button => {
        button.setAttribute("id", button.innerText)
        button.addEventListener('click', () => {
        picked= `${button.innerText}`
        if (picked=== right){
            button.style.backgroundColor= 'green'
            document.getElementById('score-number').innerText = '100'
            quizOptions.forEach(button => {
                if (button.id !== picked) button.disabled = true
            })
        }else{
            button.style.backgroundColor= 'blue'
            button.style.backgroundColor= 'red'
            quizOptions.forEach(button => {
                if (button.id !== picked) button.disabled = true
            })
        }
        })  
    })
  
    
}


function isItCorrect(){
    if(`${button.innerText}` === right){
        button.style.backgroundColor = 'green'
        
    }else{
        button.style.backgroundColor= 'blue'
        button.style.backgroundColor= 'green'
    }
}