/*-------------HAMBURGUER / MENU-------------*/

var hamburguer = document.getElementById('hamburguer');

var barraMeio = document.getElementById('barraMeio');
var barraBaixo = document.getElementById('barraBaixo');
var barraCima = document.getElementById('barraCima');

var menu = document.getElementById('menu');


//Função que transforma o hamburguer numa cruz e vice versa e que abre e fecha o menu
hamburguer[document.addEventListener ? 'addEventListener' : 'attachEvent']('click', function() {

  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

  barraMeio.style.transform = barraMeio.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';
  barraMeio.style.backgroundColor = barraMeio.style.backgroundColor === 'white' ? '#d92d2d' : 'white';
  barraMeio.style.boxShadow = barraMeio.style.boxShadow === 'none' ? '0px 0px 3px 0px #1f1f1f' : 'none';

  barraBaixo.style.transform = barraBaixo.style.transform === 'rotate(135deg)' ? 'rotate(0deg)' : 'rotate(135deg)';
  barraBaixo.style.backgroundColor = barraBaixo.style.backgroundColor === 'white' ? '#d92d2d' : 'white';
  barraBaixo.style.top = barraBaixo.style.top === '6vh' ? '7.2vh' : '6vh';
  barraBaixo.style.boxShadow = barraBaixo.style.boxShadow === 'none' ? '0px 0px 3px 0px #1f1f1f' : 'none';

  barraCima.style.transform = barraCima.style.transform === 'rotate(135deg)' ? 'rotate(0deg)' : 'rotate(135deg)';
  barraCima.style.top = barraCima.style.top === '6vh' ? '4.8vh' : '6vh';
  barraCima.style.boxShadow = barraCima.style.boxShadow === 'none' ? '0px 0px 3px 0px #1f1f1f' : 'none';
});
