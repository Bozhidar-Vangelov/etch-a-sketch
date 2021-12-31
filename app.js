const gridContainer = document.querySelector('.grid-container');
const resetButton = document.getElementById('reset');
const rainbowButton = document.getElementById('rainbow');

function createGrid(num) {
  gridContainer.setAttribute(
    'style',
    `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`
  );

  for (let i = 1; i <= num * num; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.border = '1px solid black';
    box.addEventListener('mouseover', (e) => {
      e.target.classList.add('hover');
    });
    gridContainer.appendChild(box);
  }
}
createGrid(16);

resetButton.addEventListener('click', reset);
rainbowButton.addEventListener('click', rainBowMode);

function reset() {
  let boxes = Array.from(document.querySelectorAll('.box'));
  boxes.forEach((box) => box.remove());
  let num = parseInt(
    prompt('Please insert number of boxes between 16 and 100')
  );

  if (num < 16 || num > 100) {
    alert('Invalid number!');
  } else {
    if (!num) {
      createGrid(16);
    } else {
      createGrid(num);
    }
  }
}

function rainBowMode() {
  let boxes = Array.from(document.querySelectorAll('.box'));

  if (!rainbowButton.style.backgroundImage) {
    rainbowButton.style.backgroundImage =
      'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';

    boxes.forEach((box) => {
      box.addEventListener('mouseover', (e) => {
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
        e.target.setAttribute('style', `background-color: ${randomColor}`);
      });
    });
  } else {
    rainbowButton.style.backgroundImage = '';

    boxes.forEach((box) => {
      box.addEventListener('mouseover', (e) => {
        e.target.setAttribute('style', `background-color: black`);
      });
    });
  }
}
