const canvas = document.getElementById("game_canvas");
const ctx = canvas.getContext();

colors = ["firebrick", "seagreen", "dodgerblue", "orange", "yellow", "sienna", "magenta", "gray"]
solution = ["firebrick", "seagreen", "dodgerblue", "magenta", "yellow"];
state = ["empty", "empty", "empty", "empty", "empty"];

for (let i = 0; i < 8; i++){
    let name = "#c" + (i + 1)
    let elem = document.querySelector(name);
    elem.style.backgroundColor = colors[i];
}

function drawPill(x, y, type) {
    if (type == "empty") {
        
    }
}


function startBoard() {
    for (let i = 0; i < 5; i++){
        drawPill(100 + i * 100, 50, "empty");
    }
}

window.addEventListener('load', function () {
    startBoard();
});ss