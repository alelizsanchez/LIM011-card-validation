import isValid from './validator.js';

let template = `<img src="./img/logo.png" class="logo">
<h1>Deseas divercion y full adrenalina !!</h1>
<p>Validar tu tarjeta YA! para realizar tu pago, obtener tu entrada y disfrutar de nuestras ofertas</p>
<div class="cars">
<form class="cars__form">
<label class="cars__label">Usuario:</label>
<input class="cars__input" id="btn-input" maxlength="16" type="tel" placeholder="Ingresa tu numero de tarjeta" required/>
<button type="button" class="cars__button" id="btn-validar">Validar</button>
</form>
</div>`;

const imageGallery = `
<p> BIENVENIDX !! Su tarjeta fue Valida Disfrute de las ofertas mas extremas de Legoland</p>
<div class="gallery">
<ul class="imgegallery">
<li>
<img src="./img/img1.jpg" width="150" heigth="75" id="img-uno">
</li>
<li>
<img src="./img/img2.jpg" width="150" heigth="75" id="img-dos">
</li>
<li>
<img src="./img/img3.jpg" width="150" heigth="75" id="img-tres">
</li>
<li>
<img src="./img/img4.webp" width="150" heigth="75" id="img-cuatro">
</li>
<li>
<img src="./img/img5.jpg" width="150" heigth="75" id="img-cinco">
</li>
<li>
<img src="./img/img6.jpg" width="150" heigth="75" id="img-seis">
</li>
</ul>
</div>`;

document.getElementById('contenedor').innerHTML = template;
const btnvalidar = document.getElementById('btn-validar');
const valorInput = document.getElementById('btn-input');
btnvalidar.addEventListener('click', (event) => {
  event.preventDefault();
  if (valorInput.value !== '') {
    const validacion = isValid(valorInput.value);
    if (validacion === true) {
      document.getElementById('resultado').innerHTML = imageGallery;
    } else {
    alert('tarjeta invalida')
    }
  }else {
      alert('llena este campo')
    }
  });


















