///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge,
 but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// New code
const calcAverageHumanAge1 = function (Ages) {
  Ages.map(age => (age > 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, currentAge, i, arr) => acc + currentAge / arr.length, 0);
};
const avg1 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
