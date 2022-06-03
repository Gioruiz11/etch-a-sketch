const grid = document.querySelector(".grid")

// Loops to make 16x16 div grid square
for(let i = 0; i < 256; i++) {
const row = document.createElement("div");
row.classList.add(`row`);
grid.appendChild(row);
}




