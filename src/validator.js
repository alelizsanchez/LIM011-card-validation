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
    return 'valido';
  } else {
    return 'invalido';
  }
}





