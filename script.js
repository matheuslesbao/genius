// Ordens do jogo 
let order = [];
// Ordem dos clicks
let handleClickOrder = [];
// Contagem
let score = 0;
// 0 = verde
// 1 = vermelho
// 2 = black
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const black = document.querySelector('.black');

//Cria ordem aleatoria de cores
let shufflerOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    handleClickOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a proxima Cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}
// checa se os botoes clicados se são os mesmo da ordem gerada pelo jogo
let checkOrder = () => {
    for(let i in handleClickOrder){
        if(handleClickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(handleClickOrder.length == order.lenght){
        alert(`Pontuação: ${score}\n Voce acertou! Iniciando Proximo nivel!`);
        nextLevel();
    }
}

//Função para o click do usuario
let handleClick = (color) => {
    handleClickOrder[handleClickOrder.length] = color;
    
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
}

// função que retorna uma cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return black;
    }else if(color == 3){
        return blue;
    }
}

//Função que cria o proximo nivel do game
let nextLevel = () => {
    score++;
    shufflerOrder();
}

//Função para retorna gameover e recomeçar o jogo
let gameOver = () => {
    alert(`Pontuação: ${score}\nVoce perdeu o jogo! \nClique em OK para iniciar um novo jogo `);
    order = [];
    handleClickOrder = []

    playGame();
}
// Função inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando um novo jogo!')
    score = 0;

    nextLevel();
}
// Evento de clicks para as cores pontuar
green.onclick = () => handleClick(0);
red.onclick = () => handleClick(1);
black.onclick = () => handleClick(2);
blue.onclick = () => handleClick(3);

// inicio do jogo
playGame();