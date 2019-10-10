export const isValid = (creditCardNumber) => {

  let sumaImpar = 0;
  let sumaPar = 0;
  const numToString = creditCardNumber.value.toString().split("");

  for (let i = 0; i < numToString.length; i++) {
    if (i % 2 === 0) {
      if (numToString[i] * 2 >= 10) {
        sumaPar += ((numToString[i] * 2) - 9);
      } else {
        sumaPar += numToString[i] * 2;
      }
    }

    else {
      sumaImpar += parseInt(numToString[i]);
    }
  }
  if ((sumaImpar + sumaPar) % 10 === 0 === true) {
    const imagenes ='<img src="./img/dota2.jpg" width="200" heigth="150" id="img-uno">, <img src="./img/descarga.jpg" width="200" heigth="150" id="img-dos">,<img src="./img/league.jpg" width="200" heigth="150" id="img-tres">,<img src="./img/pokemongo.jpg" width="200" heigth="150" id="img-cuatro">';
    return imagenes
  } else {
    return 'invaldo';
  }
}






