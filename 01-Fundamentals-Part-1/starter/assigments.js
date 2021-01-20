// Assigment 1: Values and Variables

let country = 'Brasil';
let continent = 'América do Sul';
let population = 212000000;
console.log(country);
console.log(continent);
console.log(population);

// Assigment 2: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Assigment 3: let, const and var
/*
let idioma = 'português'
const motherLanguage = 'português';
idioma = 'english';
motherLanguage = 'espanhol';
console.log(idioma);
*/

//Assigment 4: Bsic Operators
console.log(population / 2);
population++;
console.log(population);
const populationFinand = 6000000
console.log(population > populationFinand);
const averagePopulation = 33000000;
console.log(population < averagePopulation);
const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);

//Assigment 5:Strings and Template Literals
language = `portuguese`
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

//Assigment 6: Taking DEcisions: If/Else
const population6 = 34
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population6} million below average`);
}