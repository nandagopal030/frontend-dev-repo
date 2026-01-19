// Coding Challenge #4
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

//1
const underToCamel = function (names) {
  const words = names.split('_');
  let camelCase = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCase += words[i][0].toUpperCase() + words[i].slice(1);
  }
  return camelCase;
};
console.log(underToCamel('nanda_gopal'));
console.log(underToCamel('karthik_raja'));
console.log(underToCamel('karthik_raja_guru_murthy'));

//2
document.body.append(document.createElement('button'));
document.body.append(document.createElement('textarea'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // console.log(first, second, row);
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }

  console.log(rows);
});

//-------------------------------------------------------------------------------------------------------------------------------------
