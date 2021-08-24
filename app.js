const gridContainer = document.querySelector(".grid-container");
const resetButton = document.getElementById("reset");
const rainbowButton = document.getElementById("rainbow");

function createGrid(num, mode) {
  gridContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`
  );

  for (let i = 1; i <= num * num; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.border = "1px solid black";
    box.addEventListener("mouseover", (e) => {
      e.target.classList.add("hover");
    });
    gridContainer.appendChild(box);
  }
}
createGrid(16);

resetButton.addEventListener("click", reset);
rainbowButton.addEventListener("click", rainBowMode);

function reset() {
  let boxes = Array.from(document.querySelectorAll(".box"));
  boxes.forEach((box) => box.remove());
  let num = parseInt(
    prompt("Please insert number of boxes between 16 and 100")
  );
  createGrid(num);
}

function rainBowMode() {
  let boxes = Array.from(document.querySelectorAll(".box"));

  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      box.setAttribute("style", `background-color: ${randomColor}`);
    });
  });
}
