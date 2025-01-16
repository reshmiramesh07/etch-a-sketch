const container = document.querySelector(".grid-container");

function createDivs(dimensions) {
  for (var i = 0; i < dimensions * dimensions; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-box");
    // div.style.borderWidth = "thick";
    // div.style.borderColor = "black";
    container.appendChild(div);
  }
}

createDivs(4);
