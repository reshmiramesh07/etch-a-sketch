/** @type {HTMLElement | null} */
const gridContainer = document.querySelector("#grid-container");

function createDivs(dimensions) {
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
  for (var i = 0; i < dimensions * dimensions; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-box");
    div.textContent = "hi";
    div.style.width = "20px";
    div.style.height = "20px";
    gridContainer.appendChild(div);
  }
}

createDivs(16);
