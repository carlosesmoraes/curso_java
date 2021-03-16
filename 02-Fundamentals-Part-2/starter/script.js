'use strict';
//      Challenge 1
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

