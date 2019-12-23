/*-------------COMPRAR-------------*/
var pay = document.getElementById('pagamento');
var payInfo = document.getElementById('pagamento-info');

//abre e fecha o pop up de compra
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



/*-----------------------------------------------------*/
var evento = {
  titulos: ["CHICAGO", "Ornatos Violeta", "Pedro Teixeira da Mota", "Armstrong"],
  lugares: [10, 30, 50],
  cartaz: ["img/agenda/comprar1.jpg", "img/agenda/comprar2.jpg", "img/agenda/comprar3.jpg", "img/agenda/comprar4.jpg"]
};
/*-----------------------------------------------------*/



var title = document.createElement("h2");
payInfo.appendChild(title);
var descricao = document.createElement("p");
payInfo.appendChild(descricao);
var poster = document.createElement("img");
payInfo.appendChild(poster);


//deteta qual dos eventos foi escolhido para atribuir à informação de compra as respetivas caracteristicas do evento
if (chicagoC.addEventListener) {
  chicagoC.addEventListener("click", function() {
    title.innerText = evento.titulos[0];
    descricao.innerText = "Escolha o lugar que pretende para assistir ao espetáculo '" + evento.titulos[0] + "'.";
    poster.setAttribute('src', evento.cartaz[0]);
  });
}
if (ornatosC.addEventListener) {
  ornatosC.addEventListener("click", function() {
    title.innerText = evento.titulos[1];
    descricao.innerText = "Escolha o lugar que pretende para assistir ao espetáculo '" + evento.titulos[1] + "'.";
    poster.setAttribute('src', evento.cartaz[1]);
  });
}
if (ptmC.addEventListener) {
  ptmC.addEventListener("click", function() {
    title.innerText = evento.titulos[2];
    descricao.innerText = "Escolha o lugar que pretende para assistir ao espetáculo '" + evento.titulos[2] + "'.";
    poster.setAttribute('src', evento.cartaz[2]);
  });
}
if (armstrongC.addEventListener) {
  armstrongC.addEventListener("click", function() {
    title.innerText = evento.titulos[3];
    descricao.innerText = "Escolha o lugar que pretende para assistir ao espetáculo '" + evento.titulos[3] + "'.";
    poster.setAttribute('src', evento.cartaz[3]);
  });
}


/*------------FORM-COMPRA-------------*/
//cria o form
var listaPrecos = document.createElement("form");
listaPrecos.setAttribute('method', 'POST');
listaPrecos.setAttribute('action', 'comprar.php');
payInfo.appendChild(listaPrecos);


//percorre o array dos lugares/preços criando uma checkbox para cada um deles
for (var i = 0; i < evento.lugares.length; i++) {
  var lugar = evento.lugares[i];

  var precoVal = document.createElement("label");
  var pPreco = document.createElement("p");
  precoVal.setAttribute('class', 'container-check');
  precoVal.appendChild(pPreco);
  pPreco.innerText = lugar + " €";

  //este elemento é apenas decorativo
  var precoCheck = document.createElement("span");
  precoCheck.setAttribute('class', 'check-bg');

  //atributos de cada uma das checkboxes, radios neste caso
  var preco = document.createElement("input");
  preco.setAttribute('type', 'radio');
  preco.setAttribute('name', 'check');
  preco.setAttribute('id', 'check' + i);
  preco.setAttribute('value', +i);

  //adiciona ao form as 3 checkboxes
  listaPrecos.appendChild(precoVal);
  precoVal.appendChild(preco);
  precoVal.appendChild(precoCheck);
}



//cria um elemnt select dentro do form
var escolher = document.createElement("select");
escolher.setAttribute('name', 'event');
listaPrecos.appendChild(escolher);

//percorre o array dos titulos dos espetáculos
for (var j = 0; j < evento.titulos.length; j++) {
  var espetaculo = evento.titulos[j];

  //cria uma option para cada um dos espetáculos
  var opcoes = document.createElement("option");
  opcoes.innerText = espetaculo;

  //insere dentro do select as  4 opções
  escolher.appendChild(opcoes);
  opcoes.setAttribute('value', +j);
}



var escolherAviso = document.createElement('h3');
escolherAviso.innerText = "Confirmar o espetáculo que pretende";
listaPrecos.appendChild(escolherAviso);


//adiciona o input do mail
var mail = document.createElement("input");
mail.setAttribute('type', 'email');
mail.setAttribute('class', 'mail');
mail.setAttribute('id', 'mail');
mail.setAttribute('name', 'mail');
mail.setAttribute('placeholder', 'Endereço de e-mail');
listaPrecos.appendChild(mail);


//adiciona o input para escolher o número de bilhetes
var quanti = document.createElement("input");
quanti.setAttribute('class', "quant");
quanti.setAttribute('type', 'number');
quanti.setAttribute('value', "1");
quanti.setAttribute('min', "1");
quanti.setAttribute('max', "20");
quanti.setAttribute('name', 'quant');
listaPrecos.appendChild(quanti);


//adiciona o botão de submissão
var confirm = document.createElement("input");
confirm.setAttribute('type', 'submit');
confirm.setAttribute('value', 'submit');
confirm.setAttribute('class', 'submeter');
confirm.setAttribute('id', 'submeter');
confirm.setAttribute('name', 'comprar');
listaPrecos.appendChild(confirm);



/*------------MENSAGENS DE ERRO-------------*/
document.getElementById('submeter').onclick = function() {

  //caso seja pressionado o botão de submissão e o input do mail estiver vazio aparece uma mensagem de erro
  var x = document.getElementById("mail").value;
  if (x == "") {
    alert("Não te esqueças de introduzir o teu e-mail!");
    return false;
  }

  //caso seja pressionado o botão de submissão e nenhuma opção de preço foi escolhida aparece uma mensagem de erro
  var y1 = document.getElementById("check0");
  var y2 = document.getElementById("check1");
  var y3 = document.getElementById("check2");
  if (y1.checked == false && y2.checked == false && y3.checked == false) {
    alert("Por favor escolhe uma categoria de bilhetes.");
    return false;
  }
}
