const grid = document.querySelector(".grid")

// Loops to make 16x16 div grid square
for(let i = 1; i <= 16; i++) {
const row = document.createElement("div");
row.classList.add(`row`);
grid.appendChild(row);
    for(let j = 1; j <= 16; j++) {
    const div = document.createElement("div");
    div.classList.add(`div`);
    row.appendChild(div);
    }
}




