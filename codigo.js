let tela;

let ctx;

let proxX;

let proxY;

window.onload = function () {
    tela = document.getElementById("canvas");

    ctx = tela.getContext("2d");

    let vel = 8;

    setInterval(desenharJogo, 1000 / vel);
}

function keyDownEvent(tecla) {
    if (tecla = 37) {
        proxX = -1;
        proxY = 0;
    }
    if (tecla = 38) {
        proxX = 0;
        proxY = -1;
    }
    if (tecla = 39) {
        proxX = 1;
        proxY = 0;
    }
    if (tecla = 40) {
        proxX = 0;
        proxY = 1;
    }
}