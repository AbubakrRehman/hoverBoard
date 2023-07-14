let squares = document.querySelectorAll(".square");
let board = document.getElementById("board");
const colors = ['#FFFC00', '#25D366', '#282828','#006AFF','#1DA1F2','#E50914'];
const no_of_squares = 513;

function setColor(element) {
    const index = Math.floor(Math.random() * colors.length);
    element.style.background = colors[index];
    element.style.boxShadow = `0 0 2px ${colors[index]}`;
}

function unsetColor(element) {
    const index = Math.floor(Math.random() * colors.length);
    element.style.background = "white";
    element.style.boxShadow = `0 0 2px white`;
}


for (let index = 0; index < no_of_squares; index++) {

    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", (e) => {
        square.style.transitionDuration = "0s";
        setColor(square);
    })


    square.addEventListener("mouseout", (e) => {
        square.style.transitionDuration = "3s";
        unsetColor(square);
        
    })

    board.appendChild(square);

}


// squares.forEach((square) => {
//     square.addEventListener("mouseover", (e) => {
//         console.log("mouse enter");
//         square.style.transitionDuration = "0s";
//         setColor(square);
//     })

//     square.addEventListener("mouseout", (e) => {

//         unsetColor(square);
//         square.style.transitionDuration = "3s";
//     })
// })