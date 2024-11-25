import {ERROR_2, ERROR_3, ERROR_4} from "./constant.js";

document.getElementById('startGame').addEventListener('click', () => {
    const USER_NAME = document.getElementById('username').value.trim();
    const NUM_OF_PAIRS = parseInt(document.getElementById('num_of_pairs').value);
    const LEVEL_SPEED = parseInt(document.getElementById('level_speed').value);
    let isValid = true;

    if (USER_NAME === '') {
        alert(ERROR_2);
        isValid = false;
    } else if (isNaN(NUM_OF_PAIRS) ||
        NUM_OF_PAIRS < 2 || NUM_OF_PAIRS > 15) {
        alert(ERROR_3);
        isValid = false;
    }else if (isNaN(LEVEL_SPEED) ||
        LEVEL_SPEED < 1 || LEVEL_SPEED > 5){
        alert(ERROR_4);
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    window.location.href = `game.html?username=${encodeURIComponent(USER_NAME)}&pairs=${NUM_OF_PAIRS}&level=${LEVEL_SPEED}`;
});
