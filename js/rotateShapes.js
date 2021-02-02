
let currentDegree = 0;

const interval = setInterval(function () {
    rotateSquares();
}, 500);


// Rotates all square divs by 10 degrees twice a second.
function rotateSquares() {
    if (currentDegree === 90) currentDegree = 10
    else currentDegree += 10;
    
    var squareDiv = document.getElementsByClassName("square");

    for( var i = 0; i < squareDiv.length; i++){
        squareDiv[i].style.transform = "rotate(" + currentDegree +"deg)";
    }
}
