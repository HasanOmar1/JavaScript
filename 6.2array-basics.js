let people = ['Greg' , 'Mary' , 'Devon', 'James'];

people.shift();
people.pop();
people.unshift('Matt');
people.push('Hasan');

const people2 = people.slice(2);

// console.log(people.indexOf('Mary'));
// console.log(people.indexOf('Foo')); // it returns -1 because its not found in the array.



people = ['Greg' , 'Mary' , 'Devon', 'James'];

people.splice(2 , 1 , 'Elizabeth' , 'Artie');

let withBob = people.concat(['Bob']);

console.log(people);
console.log(withBob);