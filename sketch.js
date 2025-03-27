function setup() {
  createCanvas(660, 400);
}
let xjogador1 = 0;
let xjogador2 = 0;
let xjogador3 = 0;
let xjogador4 = 0;

function draw() {
  ativajogo();
  desenhajogadores();
  desenhalinhadechegada();
  verificavencedor();
}
 function ativajogo(){
    if(focused == true){
  background('rgb(150,244,89)');
  }else {
    background('rgb(250,90,90)')
  }
 }

function desenhajogadores(){
  textSize(45)
  text("🛀", xjogador1, 50)
  text("🛌", xjogador2, 150)
  text("🧑‍🦼‍➡️", xjogador3, 250)
  text("🧑‍🦯‍➡️", xjogador4, 350)
}

function desenhalinhadechegada(){
  rect(600, 0, 10, 400)
}

function verificavencedor(){
     if (xjogador1 > 600) {
     text("cara da banheira venceu!", 80, 200);
     noLoop();
  }
     if (xjogador2 > 600) {
     text("cara da cama venceu!", 80, 200);
     noLoop();
  }
     if (xjogador3 > 600) {
     text("cadeirante venceu!", 80, 200);
     noLoop();
  }
     if (xjogador4 > 600) {
     text("cara da bengala venceu!", 80, 200);
     noLoop();
  }
}


function keyReleased() {
    if(key === 'a') {
        xjogador1 += random(30);
    }
    if(key == 's'){
        xjogador2 += random(30);
    }
  if(key === 'j') {
        xjogador3 += random(30);
    }
    if(key == 'k'){
        xjogador4 += random(30);
    }
}
