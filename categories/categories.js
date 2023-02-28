const cardButton= document.querySelectorAll("fine")

cardButton.addEventListener('mouseover', () => {
    cardButton.innerText= 'PLAY NOW'
})

cardButton.addEventListener('mouseout', () => {
    cardButton.style.backgroundColor = ""
})

