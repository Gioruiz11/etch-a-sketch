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


// Get modal elements
let modal = document.getElementById("myModal");
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];
// When the button is pressed, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the x or outside the modal is clicked, close the modal.
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(e) {
    if(e.target == modal){
        modal.style.display = "none";
    }
}




