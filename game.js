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
    elem.addEventListener("click", guess, false);
    elem.color = colors[i];
}

function guess(evt) {
    //alert(evt.currentTarget.color);
    if (active_pill >= 0 && active_pill <= 4) {
        let pill_color = evt.currentTarget.color;
        drawPill(100 + active_pill * 100, 50, pill_color);
        state[active_pill] = pill_color;
        if (active_pill < 4) active_pill++;
        else checkBoard();
        drawArrow();
    }
}

function checkBoard() {
    console.log("stan planszy: " + state);
    active_pill = 0;
    startBoard();
    drawArrow();
    //Rysuj ostatnią próbę
    for (let i = 0; i < 5; i++){
        drawPill(100 + i * 100, 250, state[i])
    }
    //Oceń ostatnią próbę
}

function drawPill(x, y, type) {
    if (type == "empty") {
        ctx.strokeStyle = "white";
        ctx.strokeRect(x, y, PILL_WIDTH, PILL_HEIGHT);
    } else {
        ctx.fillStyle = type;
        ctx.fillRect(x, y, PILL_WIDTH, PILL_HEIGHT);
    }
}

function drawArrow() {
    ctx.fillStyle = "black";
    ctx.fillRect(100, 140, 480, 60);
    ctx.fillStyle = "white";
    ctx.font = "32px Arial";
    ctx.fillText("↑", 135 + active_pill * 100, 180);
}

function startBoard() {
    ctx.fillStyle = "black";
    ctx.fillRect(90, 40, 500, 100);
    for (let i = 0; i < 5; i++){
        drawPill(100 + i * 100, 50, "empty");
    }
    drawArrow();
}

window.addEventListener('load', function () {
    startBoard();
});