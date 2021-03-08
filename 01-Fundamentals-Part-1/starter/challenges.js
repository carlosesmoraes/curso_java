/*Challenge 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
let markhigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markhigherBMI);
*/
//Challenge 2
/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`)
} else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})`)
}
*/
//Challe   nge 3
const dolphinScore1 = 96;
const dolphinScore2 = 97;
const dolphinScore3 = 98;
const koalaScore1 = 99;
const koalaScore2 = 97;
const koalaScore3 = 98;
let dolphinAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
let koalaAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
console.log(dolphinAvg);
console.log(koalaAvg);
//Bonus 1: minimal score 100 to win
//Bonus 2: minimal score 100 to draw too
if ((dolphinAvg > koalaAvg) && (dolphinAvg >= 100 || koalaAvg >= 100)) {
    console.log('The winner is the Dolphins!');
} else if ((dolphinAvg < koalaAvg) && (dolphinAvg >= 100 || koalaAvg >= 100)) {
    console.log('The winner is the Koalas!');
} else if (dolphinAvg >= 100 || koalaAvg >= 100) {
    console.log(`It's a draw!`);
} else {
    console.log(`There is no winner!`)
}