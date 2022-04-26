let order = [];
let clickedOrder =[];
let score=0;


// 0= verde, 1 = vermelho, 2= amarelo e 3 = azul


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


let shuffOrder = () =>{
     colorOrder = Math.floor(Math.random() * 4);

     order[order.length] = colorOrder;

     clickedOrder=[];

     for(let i in order){
         
     }
}