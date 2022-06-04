const grid = document.querySelector(".grid")

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

divGenerator();




