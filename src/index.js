import { isValid } from './validator.js';

let template = `<div class="cars__title">LEGOLAND</div>
<p>validar pagos con tarjetas virtuales para juegos en online</p>
<img src="./img/dota2.jpg" width="200" heigth="150" id="img-uno" >
<img src="./img/descarga.jpg" width="200" heigth="150" id="img-dos">
<img src="./img/league.jpg" width="200" heigth="150" id="img-tres" >
<img src="./img/pokemongo.jpg" width="200" heigth="150" id="img-cuatro" >
<div class="cars">
      <form class="cars__form">
      
          <label class="cars__label">Usuario:</label>
          <input class="cars__input" id="btn-input" type="text" placeholder="Ingresa tu numero de tarjeta"/>
          <button type="button" class="cars__button" id="btn-validar">Validar</button>
        </div>
      </form>
    </div>`;

document.getElementById('contenedor').innerHTML = template;
const btnvalidar = document.getElementById('btn-validar');

btnvalidar.addEventListener('click', (event) => {
  event.preventDefault;
  let valorInput = document.getElementById('btn-input');
  isValid(valorInput);
  const pintar = isValid(valorInput);
  document.getElementById('resultado').innerHTML = pintar
  // console.log(isValid(valorInput));
});

document.getElementById('img-uno').addEventListener('click', () => {
document.write('dota');

})
















