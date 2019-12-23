/*-------------Frase (JSON_API)-------------*/

var url = "https://type.fit/api/quotes";
var req = new Request(url);

fetch(req).then(function(response) {
  return response.json();
}).then(function(data) {

  //console.log(data);

  var numeroRandom = Math.floor(Math.random() * data.length);

  var fraseRandom = data[numeroRandom];

  document.getElementById("frase").innerText = "'" + fraseRandom.text + "'";
  document.getElementById("autor").innerText = "- " + fraseRandom.author;

});


/*-------------ANIMAÇÃO INTRO-------------*/

var cortinaEsquerda = document.getElementById('esquerda');
var cortinaDireita = document.getElementById('direita');
var introText = document.getElementById('frase-intro');

function abrir() {
  cortinaEsquerda.style.marginLeft = "-50vw";
  cortinaDireita.style.left = "100vw";
  introText.style.display = "none";
}


/*-------------SLIDER-------------*/

var cOne = document.getElementById('cartazes-container-one');
var cTwo = document.getElementById('cartazes-container-two');

var mOne = document.getElementById('m-cartazes-container-one');
var mTwo = document.getElementById('m-cartazes-container-two');
var mThree = document.getElementById('m-cartazes-container-three');


function next() {
  cOne.style.marginLeft = "-73vw";
  cTwo.style.opacity = "1";
  cOne.style.opacity = "0";

  if (window.matchMedia("(max-width: 800px)").matches) {
    mOne.style.marginLeft = "-70vw";
    mTwo.style.opacity = "1";
    mOne.style.opacity = "0";
  }
}

function back() {
  cOne.style.marginLeft = "14vw";
  cTwo.style.opacity = "0";
  cOne.style.opacity = "1";

  if (window.matchMedia("(max-width: 800px)").matches) {
    mOne.style.marginLeft = "12vw";
    mTwo.style.opacity = "0";
    mOne.style.opacity = "1";
  }
}



/*-------------SUBSCRIÇÃO-------------*/
document.getElementById('subscrever').onclick = function() {
  //mensagens de erro caso estejam campos por preencher
  var x = document.getElementById("nome-sub").value;
  var y = document.getElementById("mail-sub").value;
  if (x == "") {
    alert("Por favor introduz o teu nome.");
    return false;
  } else if (y == "") {
    alert("Por favor introduz o teu e-mail.");
    return false;
  }

}
