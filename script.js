const grid = document.querySelector(".grid");

// create an initial 16x16 grid
gridCreator(16);


// Grid creator function
function gridCreator(size){
    if(size <= 100 && size >= 4){
        let squareSize = 500 / size - 2;
        for( let i = 0; i < (size*size); i++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.style.border = "1px solid gray";
            newDiv.style.flex = `1 1 ${squareSize}px`;
            newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
        })
        grid.append(newDiv);
    }
 }
}

// Change current grid size to new input grid size
function changeSize(){
    let newSize = prompt("Type in a new grid size, from 4-100!");
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    gridCreator(newSize);
}


