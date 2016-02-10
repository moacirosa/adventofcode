/**
  First rule: (.*[aeiou]){3}
  Second rule: (.)\1{1}
  Third rule: (ab|cd|pq|xy)
*/

var input = require('./input');

var firstConstraint = /(.*[aeiou]){3}/;
var secondConstraint = /(.)\1{1}/;
var thirdConstraint = /(ab|cd|pq|xy)/;

var answer = [];
var datasource = input.getData();

for (targetKey in datasource) {

  var target = datasource[targetKey];

  if (thirdConstraint.test(target)) {
    console.warn('Skipping "' + target + '" (rule #3)');
    continue;
  }

  if (!firstConstraint.test(target)) {
    console.warn('Skipping "' + target + '" (rule #1)');
    continue;
  }

  if (!secondConstraint.test(target)) {
    console.warn('Skipping "' + target + '" (rule #2)');
    continue;
  }

  console.info('Pushing "' + target + '" Nice!');

  answer.push(target);
}

console.log('How many strings are nice? ' + answer.length);
