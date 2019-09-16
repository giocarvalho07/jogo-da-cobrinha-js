let canvas = document.getElementById("snake");
// seleciona os arquivos que estão com id no html e fazem aparecer na tela
let context = canvas.getContext("2d");
// seleciona o arquivo dando a ele uma visão em 2d
let box = 32;

function criarBackground() {
    context.fillStyle = "lightgreen";
    // cor para nosso canvas
    context.fillRect(0, 0, 16 * box, 16 * box);
    // desenha nosso retangulo onde irá ocorrer o jogo e ele trabalha com 4 parametros, x-y (altura e largura)


}

criarBackground();