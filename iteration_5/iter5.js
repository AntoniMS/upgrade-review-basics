/* Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá 
silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y 
retornar el resultado.  */

const rollDice = (diceFaces) => {
  let randomDice = Math.floor(diceFaces * Math.random()) + 1;
  return randomDice;
};

console.log(rollDice(6));
console.log(rollDice(12));
