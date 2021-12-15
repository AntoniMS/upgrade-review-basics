/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición 
del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */

const animals = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    if (text === animal) {
      console.log(animal + " Position: " + i);
    }
  } 
}

findArrayIndex(animals, "Caracolito"); //no muestra nada
findArrayIndex(animals, "Salamandra");
findArrayIndex(animals, "Mosquito");
findArrayIndex(animals, "Ajolote");