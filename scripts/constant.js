const CARDS = [
    'images/A1.png', 'images/A1.png',
    'images/K1.png', 'images/K1.png',
    'images/Q1.png', 'images/Q1.png',
    'images/J1.png', 'images/J1.png',
    'images/A2.png', 'images/A2.png',
    'images/K2.png', 'images/K2.png',
    'images/Q2.png', 'images/Q2.png',
    'images/J2.png', 'images/J2.png',
    'images/A3.png', 'images/A3.png',
    'images/K3.png', 'images/K3.png',
    'images/Q3.png', 'images/Q3.png',
    'images/J3.png', 'images/J3.png',
    'images/A4.png', 'images/A4.png',
    'images/K4.png', 'images/K4.png',
    'images/Q4.png', 'images/Q4.png',
    'images/J4.png', 'images/J4.png',
];

const URL_BACK = "url('images/back.png')";
const PARAMS = new URLSearchParams(window.location.search);
const USER_NAME = PARAMS.get('username');
const PAIRS = PARAMS.get('pairs');
const LEVEL_SPEED = PARAMS.get('level');
const CURRENT_LEVEL = (LEVEL_SPEED * 100);
const CURRENT_CARDS = PAIRS * 2;
const GAME_BOARD = document.getElementById('game-board');

const MIN_PAIR = 2;
const MAX_PAIR = 15;
const MIN_LEVEL = 1;
const MAX_LEVEL = 5;
const MAX_FLIPPED = 2;

const ERROR_1 = 'Invalid access! Back to the main page.';
const ERROR_2 = "Please enter your username";
const ERROR_3 = 'Please enter a valid number of pairs (2-15)';
const ERROR_4 = 'Please enter a valid level (1-5)';

const TEXT_1 = "flipped";
const TEXT_2 = "click";

export {
    CARDS, URL_BACK,PARAMS,
    USER_NAME,PAIRS,LEVEL_SPEED,
    CURRENT_LEVEL,CURRENT_CARDS,
    GAME_BOARD,ERROR_1,ERROR_2,ERROR_3,ERROR_4,
    TEXT_1,TEXT_2,
    MIN_PAIR,MAX_PAIR,MIN_LEVEL,MAX_LEVEL,MAX_FLIPPED
}