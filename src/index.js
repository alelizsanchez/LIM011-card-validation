import isValid from './validator.js';

let template = `<img src="../img/logo2.PNG" class="logo">
<h1>Diversión y full adrenalina !!</h1>
<p>Validar tu tarjeta para realizar tu pago, obtener tu entrada y disfrutar de nuestras ofertas.</p>
<div class="cars">
<form class="cars__form">
<label class="cars__label">Usuario:</label>
<input class="cars__input" id="btn-input" maxlength="16" type="tel" placeholder="Ingresa N° de tarjeta" required/>
<button type="button" class="cars__button" id="btn-validar">Validar</button>
</form>
</div>`;

const imageGallery = `
<p> BIENVENIDX!! Su tarjeta fue Validada Disfruta los juegos extremos de JOYLAND</p>
<div class="gallery">
<img src="../img/img1.JPG" id="img-uno">
<img src="../img/img2.JPG" id="img-dos">
<img src="../img/img3.JPG" id="img-tres">
<img src="../img/img4.WEBP" id="img-cuatro">
<img src="../img/img5.JPG" id="img-cinco">
<img src="../img/img6.JPG" id="img-seis">
</div>`;

const mensaje = `
<p>su tarjeta es invalida lo siento no podra ingresar :(</p>
`;
const mensajetarjetavacia = `
<p>completar el campo</p>
`;

document.getElementById('contenedor').innerHTML = template;
const btnvalidar = document.getElementById('btn-validar');
const valorInput = document.getElementById('btn-input');
const resultado = document.getElementById('resultado');

btnvalidar.addEventListener('click', (event) => {
  event.preventDefault();
  if (valorInput.value !== '') {
    const validacion = isValid(valorInput.value);
    if (validacion === true) {
      resultado.innerHTML = imageGallery;
    } else {
      resultado.innerHTML = mensaje;
    }
  } else {
    resultado.innerHTML = mensajetarjetavacia;
  }
});



















