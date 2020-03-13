const cards = document.querySelectorAll('.memory-card');

let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
let movesCounter = 0;
let matchCounter = 0;
var delay;
var modal = document.getElementById("startModal");
var endModal = document.getElementById("endModal");
var plop = new Audio('audio/PLOP.aac');
var bading = new Audio('audio/BADING.aac');
var yaay = new Audio('audio/0237.mp3');

function setDelay(){
    delay = setTimeout(startModal, 500);
}
function startModal(){
    modal.style.display = "block";
}
function startGame(){
    resetGame();
    startTimer();
    cards.forEach(card => card.addEventListener('click', flipCard));
    cards.forEach(card => card.addEventListener('click', playSound));
    endModal.style.display = "none";
    modal.style.display = "none";
    resetBoard();
    shuffle();
    movesCounter = 0;
    matchCounter = 0;
}
function flipCard(){
    if(lockBoard) return;
    if(this===firstCard) return;
    this.classList.add('flip');
    

    if(!hasFlipped){
        hasFlipped = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    movesCounter += 1;
    checkForMatch();
}
function playSound(){
    plop.play()
}
function checkForMatch(){
    let isMatch = firstCard.dataset.framework ===
    secondCard.dataset.framework;
    if(isMatch){
        bading.play();
        points += 100;
        bonusPoints();
        matchCounter += 1;
        disableCards();
        if(matchCounter==6){
            endGame();
        }
    }
    else{
        points -= 100;
        unFlipCards();
    }
}

function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click', flipCard);
    removeCardVisibility(firstCard, secondCard);

    resetBoard();
}
function removeCardVisibility(cardOne, cardTwo){
    setTimeout(() => {
        cardOne.style.visibility = "hidden";
        cardTwo.style.visibility = "hidden";
    }, 1000);
}
function unFlipCards(){
    lockBoard = true;
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [hasFlipped, lockBoard] = [false, false];

    [firstCard, secondCard] = [null, null];
}

function shuffle(){
    setTimeout(() =>{
        cards.forEach(card =>{
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    }, 500);

};
function endGame(){
    yaay.play();
    endModal.style.display = "block";
    getPoints();
    stopTimer();
}
function resetGame(){
    resetBoard();
    resetTimer();
    cards.forEach(card=>{
        card.classList.remove('flip')
    });
    cards.forEach(card=>{
        card.style.visibility = "visible";
    });
    matchCounter = 0;
    movesCounter = 0;
    points = 0;
}