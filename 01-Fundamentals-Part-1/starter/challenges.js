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