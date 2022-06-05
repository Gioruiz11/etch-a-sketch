const grid = document.querySelector(".grid")

// Calls grid creation function
divGenerator();

// Generates 16x16 grid
function divGenerator(){
    let divSize = 16;
    let divNumber = divSize * divSize;
    let divWidth = (500 / divSize - 2);
    for( let i = 0; i < divNumber; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.flex = `1 1 ${divWidth}px`;
        div.style.border = `1px solid gray`;
        grid.appendChild(div);
    }

}

// On mouseover, square turns black
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", function(e) {
        console.log(e);
        e.target.style.background = "black";
    })
})

// Prompt after clicking grid resize button
function PromptMe(){
    let size = prompt("Enter a grid size between 4-100!", 16);
    return size;
}










