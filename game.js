const canvas = document.getElementById("game_canvas");
const ctx = canvas.getContext("2d");

const PILL_HEIGHT = 80;
const PILL_WIDTH = 80;

let active_pill = 0;

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
        ctx.strokeStyle = "white";
        ctx.strokeRect(x, y, PILL_WIDTH, PILL_HEIGHT);
    }
}

function drawArrow() {
    ctx.fillStyle = "white";
    ctx.font = "32px Arial";
    ctx.fillText("↑", 135 + active_pill * 100, 180);
}

function startBoard() {
    for (let i = 0; i < 5; i++){
        drawPill(100 + i * 100, 50, "empty");
    }
    drawArrow();
}

window.addEventListener('load', function () {
    startBoard();
});