let score = 0; //onoo zaaj ugnu
let TILE_COUNT = 9;
const timer = 10;
let MILLISECONDS = 0;
let SECONDS = timer;

const scoreTarget = document.querySelector('#scoreTarget'); // onoo haruulaad bga span tag
function updateScore(point) {
  // onoog hedeer nemeh hasahiig point gesen parametr orj irne
  score += point;
  scoreTarget.innerHTML = score;
  gameOverScoreTarget.innerHTML = score;
}
const parent = document.querySelector('ul'); // durvuljinguudiig haruulad bga
const timerTarget = document.querySelector('h5');
const gameOverScreen = document.querySelectorAll('.game-over-screen')[0];
const gameOverScoreTarget = document.querySelector('#gameOverTarget');

function gameOver() {
  gameOverScreen.classList.add('active');
  isGameOver = true;
}

function updateTimer(millis) {
  if (MILLISECONDS <= 0) {
    SECONDS--;
    MILLISECONDS = 990;
  }
  MILLISECONDS -= 10;

  if (MILLISECONDS <= 0 && SECONDS <= 0) {
    clearInterval(countDown);
    gameOver();
  }
  let timerResult = '';
  if (SECONDS <= 10) {
    timerResult + '0';
  }
  timerResult += SECONDS;
  timerResult += ':';
  if (MILLISECONDS < 100) {
    timerResult + '0';
  }
  if (MILLISECONDS < 10) {
    timerResult + '0';
  }
  timerResult += MILLISECONDS;
  timerTarget.innerHTML = timerResult;
}
const countDown = setInterval(updateTimer, 10);

function getRandomNumber(min, max) {
  // duriin too dood deed hyzgaariin avna
  return Math.round(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  //RGB
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return [red, green, blue];
}
function getDifferentColor(colors) {
  const random = getRandomNumber(0, 2);
  const newColors = [...colors];
  let color = newColors[random];
  if (color > 126) {
    color -= 100;
  } else {
    color += 100;
  }
  newColors[random] = color;
  return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
}
function reDraw() {
  parent.innerHTML = '';
  const colors = getRandomColor();

  const randomIndex = getRandomNumber(0, TILE_COUNT - 1);
  // const tileCount = 9; //if - this score, add more tiles etc.
  for (let i = 0; i < TILE_COUNT; i++) {
    const li = document.createElement('li');
    const isNormal = i !== randomIndex;
    if (isNormal) {
      li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    } else {
      li.style.backgroundColor = getDifferentColor(colors);
    }
    li.addEventListener('click', function () {
      if (!isNormal) {
        updateScore(1);
        SECONDS = timer;
        reDraw();
      } else {
        SECONDS -= 2;
      }
    });
    parent.appendChild(li);
  }
}

reDraw();
