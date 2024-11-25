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
    MAX_FLIPPED, TIMER_MOVE, TIMER_WIN, MILLI_SECOND
} from "./constant.js";

document.getElementById('backToMain').addEventListener(TEXT_2, () => {
    window.location.href = 'main.html';
});

let flippedCards = [], matchedCards = [];
let moves = 0;
let minute = 0, second = 0;
let timerStr = "00:00";
let timerIntervalId, movesIntervalId;


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
    moves++;
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === CURRENT_CARDS) {
            setTimeout(() => {
                alert("You win!" + '\n'
                    + " Moves: " + moves + '\n'
                    + " Time: " + timerStr + '\n'
                    + " Username: " + USER_NAME
                )
            }, TIMER_WIN);
        }
        clearInterval(timerIntervalId);
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
    restartMoves();
    restartTimer();
    creatBoardGame();
}

function restartMoves() {
    moves = 0;
    document.getElementById('moves').innerHTML = moves;
}

function timer() {
    let strSec = "", strMin = "", strClock = "";

    second++;
    strSec += second;

    if (second > 60) {
        minute++;
        second = 0;
        strSec = "0";
    }
    strMin += minute;
    return "0" + strMin + ":" + strSec;
}

function restartTimer() {
    timerStr = "00:00";
    minute = 0;
    second = 0;
    document.getElementById('timer').innerHTML = timerStr;
    clearInterval(timerIntervalId);
    timerIntervalId = startIntervalTimer();
}


movesIntervalId = startIntervalMoves();
timerIntervalId = startIntervalTimer();

function startIntervalMoves() {
    return setInterval(() => {
        document.getElementById('moves').innerHTML = moves;
    }, TIMER_MOVE);
}

function startIntervalTimer() {
    return setInterval(() => {
        timerStr = timer();
        document.getElementById('timer').innerHTML = timerStr;
    }, MILLI_SECOND);
}

document.getElementById("show_user").innerHTML = USER_NAME;

creatBoardGame();
