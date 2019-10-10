import { isValid } from './validator.js';

let template = `<div class="cars__title">LEGOLAND</div>
<p>validar la tarjeta para hacer pagos en juegos online</p>
<div class="cars">
<form class="cars__form">
<label class="cars__label">Usuario:</label>
<input class="cars__input" id="btn-input" maxlength="16" type="tel" placeholder="Ingresa tu numero de tarjeta" required/>
<button type="button" class="cars__button" id="btn-validar">Validar</button>
</form>
</div>`;
// <img src="./img/dota2.jpg" width="200" heigth="150" id="img-uno">
// <img src="./img/descarga.jpg" width="200" heigth="150" id="img-dos">
// <img src="./img/league.jpg" width="200" heigth="150" id="img-tres">
// <img src="./img/pokemongo.jpg" width="200" heigth="150" id="img-cuatro">

document.getElementById('contenedor').innerHTML = template;
const btnvalidar = document.getElementById('btn-validar');
const valorInput = document.getElementById('btn-input');


btnvalidar.addEventListener('click', (event) => {
  event.preventDefault();
  if (valorInput.value !== '') {
    isValid(valorInput);
    const pintar = isValid(valorInput);
    document.getElementById('resultado').innerHTML = pintar;   
  }else{
    alert('llena este campo')
  }
 });

document.getElementById('img-uno').addEventListener('click', () => {
  document.write('dota');
})
















