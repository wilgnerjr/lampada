const lampada = document.getElementById("lampada");
const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
let consertar = document.getElementById("consertar");


function taQuebrada () {
    return lampada.src.indexOf ('quebrada') > -1;
}


function ligado () {
    if ( !taQuebrada () ) {
        lampada.src = './imagens/ligada.jpg';
    }
}
function desligado () {
    if ( !taQuebrada () ) {
        lampada.src = './imagens/desligada.jpg';
    }
}
function quebrou () {
    lampada.src = './imagens/quebrada.jpg';
}
function consertado () {
    if ( taQuebrada () ) {
        lampada.src = './imagens/desligada.jpg';
    }
}

ligar.addEventListener('click', ligado);
desligar.addEventListener('click', desligado);
lampada.addEventListener('dblclick', quebrou);
consertar.addEventListener('click', consertado);
