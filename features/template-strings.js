/*function greet (name = 'Kvin'){
  console.log('Hello ' +name + '!');
  console.log(`Hello ${name}!`);
}

greet();
greet('Kvin Vinz');

console.log(`Hey
This is cool
`);
*/


var person = {
  name: 'Kaustubh',
  age: 321
};

function welcomePerson(person = {name : 'Anonymous', age:0}){
  console.log(`Hi ${person.name}! You are ${person.age}`);
}

welcomePerson();
welcomePerson(person);
