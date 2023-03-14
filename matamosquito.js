let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;
let criaMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel === 'normal') {
    //15000
    criaMosquitoTempo = 1500;
} else if (nivel === 'dificil') {
    // 1000
    criaMosquitoTempo = 1000;
} else if (nivel === 'chucknorris') {
    // 750
    criaMosquitoTempo = 750;
};

function ajustaTamanhoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
};
ajustaTamanhoJogo();

let cronometro = setInterval( function () {
    tempo -= 1;
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000)


function positionRandom() {
    // Remover mosquiot anterior caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vidas).src = "imagemmosquito/imagens/coracao_vazio.png";
            vidas++;
        };
    };




    let positionX = Math.floor(Math.random() * largura) - 90;
    let positionY = Math.floor(Math.random() * altura) - 90;
    console.log(positionX, positionY);


    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    // creating element HTML
    let mosquito = document.createElement('img');
    mosquito.src = "imagemmosquito/imagens/mosquito.png";
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    }
    document.body.appendChild(mosquito);

};

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    };
};

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';

    };
}
