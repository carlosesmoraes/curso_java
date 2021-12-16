'use strict';
//      Challenge 1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(85, 53, 41);
const avgKoalas = calcAverage(85, 54, 41);
console.log(avgDolphins, avgKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`There is no winner!`);
    }
    return 0;
}
checkWinner(avgDolphins, avgKoalas);
*/
//      Challenge 2

/*const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(totals);
*/

//Challenge 3

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = mass / height ** 2
        return this.bmi
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = mass / height ** 2
        return this.bmi
    }
};
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi)
*/

//Challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i]
}
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}
console.log(bills)
console.log(tips)
console.log(totals)
console.log(calcAverage(totals))