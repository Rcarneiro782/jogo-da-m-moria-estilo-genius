let order = [];
let clickedOrder = [];
let score = 0;



// 0= verde, 1 = vermelho, 2= amarelo e 3 = azul


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


let shuffOrder = () => {
     colorOrder = Math.floor(Math.random() * 4);

     order[order.length] = colorOrder;

     clickedOrder = [];

     for (let i in order) {
          let elementColor = createColorElement(order[i]);
          lightColor(elementColor, Number(i) + 1);
     }
}


let lightColor = (element, number) => {
     number = number * 500;
     setTimeout(() => {
          element.classList.add('selected')
     }, number - 250);
     setTimeou(() => {
          element.classList.remove('selected');
     });
}
//
let checkOrder = () => {
     for (let i in clickedOrder){
          if(clickedOrder[i] != order[i]){
               GameOver();
               break;
          }
     }

     if(clickedOrder.length == order.length){
          alert(`Pontuação ${score}\n Você acertou! Ininciando o próximo nível`);
          nextLevel();
     }
}

//
let click = (color) => {
     clickedOrder[clickedOrder.length] = color;
     createColorElement(color).classList.add('selected');

     setTimeout(() => {
      createColorElement(color).classList.remove('selected');
      checkOrder();
     },250)

    
}


//

let createColorElement = (color) => {
     if(color == 0){
          return green;
   }else if(color == 1){
        return red;
   }else if(color == 2){
        return yellow;
   }else if(color == 3){
        return blue;
   }
}


//

let nextLevel = () => {
     score++;
     shuffOrder();


}

//

let GameOver = () =>{
     alert(`Portuação ${score}\n você perdeu o jogo\n clique em ok para iniciar de novo`);
     order =[];
     clickedOrder = [];

     playGame();
}


let playGame = () =>{
     alert(`Bem vindo ao Genesis! Iniciando o novo Jogo`);
     score = 0;

     nextLevel();
}


green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));


playGame();






