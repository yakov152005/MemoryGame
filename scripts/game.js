import {
    CARDS,
    URL_BACK,
    USER_NAME,
    PAIRS,
    LEVEL_SPEED,
    CURRENT_LEVEL,
    CURRENT_CARDS,
    GAME_BOARD,
    ERROR_1,
    TEXT_1,
    TEXT_2,
    MIN_PAIR,
    MAX_PAIR,
    MAX_LEVEL,
    MIN_LEVEL,
    MAX_FLIPPED
} from "./constant.js";

document.getElementById('backToMain').addEventListener(TEXT_2, () => {
    window.location.href = 'main.html';
});

let flippedCards = [], matchedCards = [];
let moves = document.getElementById('moves');

if (!USER_NAME
    || !PAIRS || isNaN(PAIRS)
    || PAIRS < MIN_PAIR || PAIRS > MAX_PAIR
    || LEVEL_SPEED < MIN_LEVEL || LEVEL_SPEED > MAX_LEVEL) {
    alert(ERROR_1);
    window.location.href = 'main.html';
}

function shuffleCards(cards) {
    let newPackagePairs = cards.slice(0, CURRENT_CARDS);
    for (let i = newPackagePairs.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newPackagePairs[i], newPackagePairs[j]] = [newPackagePairs[j], newPackagePairs[i]];
    }
    return newPackagePairs;
}

function creatBoardGame() {
    GAME_BOARD.innerHTML = "";
    let packageCards = shuffleCards(CARDS);
    for (let i = 0; i < packageCards.length; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.value = packageCards[i];
        card.style.backgroundImage = URL_BACK;
        card.addEventListener(TEXT_2, flipCard);
        GAME_BOARD.appendChild(card);
    }
}

function flipCard() {
    if (this.classList.contains(TEXT_1) || flippedCards.length === 2) {
        return;
    }

    this.classList.add(TEXT_1);
    this.style.backgroundImage = `url('${this.dataset.value}')`;
    this.textContent = "";
    flippedCards.push(this);

    if (flippedCards.length === MAX_FLIPPED) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === CURRENT_CARDS) {
            setTimeout(() => {
                alert("You win!" + '\n'
                    + " Moves: " + moves + '\n'
                    + " Username: " + USER_NAME
                )
            }, 500);
        }
    } else {
        setTimeout(() => {
            notMatchedCard(card1, card2);
        }, CURRENT_LEVEL);
    }
}

function notMatchedCard(card1, card2) {
    card1.classList.remove(TEXT_1);
    card2.classList.remove(TEXT_1);
    card1.style.backgroundImage = URL_BACK;
    card2.style.backgroundImage = URL_BACK;
    flippedCards = [];
}

document.getElementById("restart").onclick = () => {
    restartGame()
};

function restartGame() {
    matchedCards = [];
    flippedCards = [];
    creatBoardGame();
}

document.addEventListener(TEXT_2, () => {
    moves++;
})

document.getElementById("show_user").innerHTML = USER_NAME;

creatBoardGame();
