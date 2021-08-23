const gridContainer = document.querySelector(".grid-container");
const resetButton = document.getElementById("reset");

function createGrid(num) {
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
createGrid(20);

function reset() {
  let boxes = Array.from(document.querySelectorAll(".box"));
  boxes.forEach((box) => box.remove());
  createGrid(20);
}

resetButton.addEventListener("click", reset);
