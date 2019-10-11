const isValid = (creditCardNumber) => {

  let sumaImpar = 0;
  let sumaPar = 0;
  const numToString = creditCardNumber.toString().split("");

  for (let i = 0; i < numToString.length; i++) {
    if (i % 2 === 0) {
      if (numToString[i] * 2 >= 10) {
        sumaPar += (numToString[i] * 2) - 9;
      } else {
        sumaPar += numToString[i] * 2;
      }
    }

    else {
      sumaImpar += parseInt(numToString[i]);
    }
  }
 return (sumaImpar + sumaPar) % 10 === 0
}
 
export default isValid;
