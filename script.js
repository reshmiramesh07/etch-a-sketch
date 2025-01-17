/** @type {HTMLElement | null} */
const gridContainer = document.querySelector("#grid-container");

function createDivs(dimensions) {
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

// function colorIn(el) {
//   let el = el;
// }

createDivs(16);

const divs = document.querySelectorAll(".grid-box");
// div.addEventListener("mouseover", () => {
//   console.log("mouse, over,.");
// });
divs.forEach((el) =>
  el.addEventListener("mouseover", () => {
    el.style.backgroundColor = "red";
  })
);
