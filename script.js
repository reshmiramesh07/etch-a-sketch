// todo: add individual erase fn

/** @type {HTMLElement | null} */

const setDimensions = document.querySelector("#set-dimen");
// let dimensions = 4;

function createDivs(dimensions) {
  const gridContainer = document.querySelector("#grid-container");
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
  for (var i = 0; i < dimensions * dimensions; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-box");
    div.style.width = "100%";
    div.style.height = "0";
    div.style.paddingBottom = "100%";
    gridContainer.appendChild(div);
  }
}

let divs = document.querySelectorAll(".grid-box");
divs.forEach((el) =>
  el.addEventListener("mouseover", () => {
    el.style.backgroundColor = "red";
  })
);

function setDimen() {
  let dimensions = prompt(
    "How many squares do you want on a side length of the grid?"
  );
  while (dimensions > 100) {
    dimensions = prompt(
      "${dimensions} is too large!\nHow many squares do you want on a side length of the grid?"
    );
  }
  return Number(dimensions);
}

setDimensions.addEventListener("click", () => {
  createDivs(setDimen());
});
