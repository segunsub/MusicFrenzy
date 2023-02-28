const startPage = document.querySelector(".start-page")
const categoriesPage = document.querySelector(".categories-page")
const quizPage = document.querySelector(".quiz-page")
const finalPage = document.querySelector(".final-page")

const startButton = document.getElementById("start-btn")
const categoryBtn = document.querySelectorAll(".btn-style")
const categoryTitle = document.querySelector(".category-title")

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
changeText();

function changeText () {
    categoryBtn.forEach(node => {
        node.addEventListener('click', () => {
            categoriesPage.style.display = "none";
            quizPage.style.display = "flex";
            categoryTitle.innerText = `${node.innerText}`;
        })
    })
}


let genre= {
    hiphop: {
        Humble: "audio",
        Ozone: "audio",
        // Breakingbad: <iframe src="https://open.spotify.com/embed/track/2KMPEI406H9G8UqiWDfuTK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        breakingBad: 
            "audio",
        Demons: "audio",
    },
    rb: {
        ToYou: "audio",
        WalkedIn: "audio"
    },
    indies: {
        drugs:

    },
    tophits:{
        BoysALiar: "audio",
        KillBill: "audio"

    },
    throwback:{},
    afrobeats:{
        PartyWithaJagaban: "audio",
        ComeWeBillEh: "audio",
        LastLast: "audio",
        KULOSA: "audio",
f
    },
}
console.log(genre.hiphop.Kendrick)
{/* <iframe autoplay src="https://open.spotify.com/embed/track/2KMPEI406H9G8UqiWDfuTK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}