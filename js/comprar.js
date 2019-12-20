/*-------------COMPRAR-------------*/
var pay = document.getElementById('pagamento');
var payInfo = document.getElementById('pagamento-info');

function comprar() {
  pay.style.display = "block";
}

function comprado() {
  pay.style.display = "none";
}

//Saber qual evento foi escolhdio
var chicagoC = document.getElementById("comprar-chicago");
var ornatosC = document.getElementById("comprar-ornatos");
var ptmC = document.getElementById("comprar-ptm");
var armstrongC = document.getElementById("comprar-armstrong");


var evento = {
  titulos: ["CHICAGO", "Ornatos Violeta", "Pedro Teixeira da Mota" , "Armstrong"],
  lugares: [10 , 30, 50],
  cartaz: ["img/agenda/comprar1.jpg" , "img/agenda/comprar2.jpg", "img/agenda/comprar3.jpg", "img/agenda/comprar4.jpg"]
};


var title = document.createElement("h2");
payInfo.appendChild(title);
var descricao = document.createElement("p");
payInfo.appendChild(descricao);
var poster = document.createElement("img");
payInfo.appendChild(poster);

var escolher = document.createElement("select");
escolher.setAttribute('name' , 'event');


if (chicagoC.addEventListener) { chicagoC.addEventListener("click", function() {
  title.innerText = evento.titulos[0];
  descricao.innerText = "Escolha o lugar que pretende para assistir ao espetáculo '" + evento.titulos[0] + "'.";
  poster.setAttribute('src', evento.cartaz[0]);
});
}
if (ornatosC.addEventListener) { ornatosC.addEventListener("click", function() {
  title.innerText = evento.titulos[1];
  descricao.innerText = "Escolha o lugar que pretende para assistir ao espetáculo '" + evento.titulos[1] + "'.";
  poster.setAttribute('src', evento.cartaz[1]);
});
}
if (ptmC.addEventListener) { ptmC.addEventListener("click", function() {
  title.innerText = evento.titulos[2];
  descricao.innerText = "Escolha o lugar que pretende para assistir ao espetáculo '" + evento.titulos[2] + "'.";
  poster.setAttribute('src', evento.cartaz[2]);
});
}
if (armstrongC.addEventListener) { armstrongC.addEventListener("click", function() {
  title.innerText = evento.titulos[3];
  descricao.innerText = "Escolha o lugar que pretende para assistir ao espetáculo '" + evento.titulos[3] + "'.";
  poster.setAttribute('src', evento.cartaz[3]);
});
}


/*------------FORM-COMPRA-------------*/
var listaPrecos = document.createElement("form");
listaPrecos.setAttribute('method' , 'POST');
listaPrecos.setAttribute('action' , 'comprar.php');


for (var i = 0; i < evento.lugares.length; i++) {
  var lugar = evento.lugares[i];


  var precoVal = document.createElement("label");
  var pPreco = document.createElement("p");
  precoVal.setAttribute('class','containerCheck');
  precoVal.appendChild(pPreco);
  pPreco.innerText = lugar + " €";

  var precoCheck = document.createElement("span");
  precoCheck.setAttribute('class','check-bg');

  var preco = document.createElement("input");
  preco.setAttribute('type','checkbox');
  preco.setAttribute('name' , 'check');
  preco.setAttribute('value' , +i);


  listaPrecos.appendChild(precoVal);
  precoVal.appendChild(preco);
  precoVal.appendChild(precoCheck);
}
payInfo.appendChild(listaPrecos);


for (var j = 0; j < evento.titulos.length; j++) {
  var espetaculo = evento.titulos[j];

  var opcoes = document.createElement("option");
  opcoes.innerText = espetaculo;

  escolher.appendChild(opcoes);
  opcoes.setAttribute('value' , +j);
}
listaPrecos.appendChild(escolher);
var escolherAviso = document.createElement('h3');
escolherAviso.innerText = "Confirmar o espetáculo que pretende";
listaPrecos.appendChild(escolherAviso);

var quanti = document.createElement("input");
quanti.setAttribute('class',"quant");
quanti.setAttribute('type','number');
quanti.setAttribute('value',"1");
quanti.setAttribute('min',"1");
quanti.setAttribute('max',"20");
quanti.setAttribute('name' , 'quant');


var confirm = document.createElement("input");
confirm.setAttribute('type','submit');
confirm.setAttribute('class','submeter');
confirm.setAttribute('name','comprar');
confirm.setAttribute('name','comprar');

listaPrecos.appendChild(quanti);
listaPrecos.appendChild(confirm);

