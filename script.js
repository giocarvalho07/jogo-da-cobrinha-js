let canvas = document.getElementById("snake");
// seleciona os arquivos que estão com id no html e fazem aparecer na tela
let context = canvas.getContext("2d");
// seleciona o arquivo dando a ele uma visão em 2d
let box = 32;

// ---------  array cobrinha ----
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// ---------  array cobrinha ----

let direction = "rigth";


function criarBG() {
    context.fillStyle = "lightgreen";
    // cor para nosso canvas
    context.fillRect(0, 0, 16 * box, 16 * box);
    // desenha nosso retangulo onde irá ocorrer o jogo e ele trabalha com 4 parametros, x-y (altura e largura)
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
    // ele vai percorrer todo tamanho do nosso array e incrementar 
}
// Para criar a cobrinha ela usa uma lógica de acrescer um item no array e retirar o último elemento fazendo assim que ela consiga andar

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "rigth") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshitft(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
// paramentro Interval - para dar movimentação e atualizar o jogo a cada milisegundo tornando assim a cobrinha movimentada