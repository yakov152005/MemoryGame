const CARDS = [
    'data/images/A1.png', 'data/images/A1.png',
    'data/images/K2.png', 'data/images/K2.png',
    'data/images/Q3.png', 'data/images/Q3.png',
    'data/images/J4.png', 'data/images/J4.png',
    'data/images/A2.png', 'data/images/A2.png',
    'data/images/K1.png', 'data/images/K1.png',
    'data/images/Q2.png', 'data/images/Q2.png',
    'data/images/J3.png', 'data/images/J3.png',
    'data/images/A3.png', 'data/mages/A3.png',
    'data/images/K3.png', 'data/images/K3.png',
    'data/images/Q4.png', 'data/images/Q4.png',
    'data/images/J2.png', 'data/images/J2.png',
    'data/images/A4.png', 'data/images/A4.png',
    'data/images/K4.png', 'data/images/K4.png',
    'data/images/Q1.png', 'data/images/Q1.png',
    'data/images/J1.png', 'data/images/J1.png',
];

const URL_BACK = "url('data/images/back.png')";
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

const TIMER_MOVE = 100;
const TIMER_WIN = 500;
const MILLI_SECOND = 1000;

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
    MIN_PAIR,MAX_PAIR,MIN_LEVEL,MAX_LEVEL,MAX_FLIPPED,
    TIMER_MOVE,TIMER_WIN,MILLI_SECOND
}