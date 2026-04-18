import generateName from "sillyname";
import superheroes from "superheroes";

const sillyName = generateName();
const hero = superheroes.random();

console.log(`I am ${hero}!`);
console.log(`My name is ${sillyName}.`);