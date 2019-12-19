/*-------------ANIMAÇÃO INTRO-------------*/

var cortinaEsquerda = document.getElementById('esquerda');
var cortinaDireita = document.getElementById('direita');

window.onload = function() {
  cortinaEsquerda.style.marginLeft = "-50vw";
  cortinaDireita.style.left = "100vw";

  document.getElementById('fundo-cortinas').style.display = "none";
}



/*-------------SLIDER-------------*/

var cOne = document.getElementById('cartazes-container-one');
var cTwo = document.getElementById('cartazes-container-two');

var mOne = document.getElementById('m-cartazes-container-one');
var mTwo = document.getElementById('m-cartazes-container-two');
var mThree = document.getElementById('m-cartazes-container-three');

function next() {
  cOne.style.marginLeft= "-73vw";
  cTwo.style.opacity = "1";
  cOne.style.opacity = "0";

  if (window.matchMedia("(max-width: 800px)").matches) {
      mOne.style.marginLeft= "-70vw";
      mTwo.style.opacity = "1";
      mOne.style.opacity = "0";
    }
}

function back() {
  cOne.style.marginLeft= "14vw";
  cTwo.style.opacity = "0";
  cOne.style.opacity = "1";

  if (window.matchMedia("(max-width: 800px)").matches) {
    mOne.style.marginLeft= "12vw";
    mTwo.style.opacity = "0";
    mOne.style.opacity = "1";
  }
}
