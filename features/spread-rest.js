/*function add (a, b) {
  return a + b;
}

var numbers = [4,22];

console.log(add(1,4));
console.log(add(...numbers));



var groupA = [33,99];
var groupB = [11];
var unified = [...groupA, ...groupB, 100,0];
unified.push(...[55,33]);
console.log(unified);


function greetUsers(...names){
  names.forEach(function(name){
    console.log('Hello ' +name);
  });
}

greetUsers('kvin', 'vin', 'vin1');
*/


function adder(base , ...numbers){
    numbers.forEach(function(number){
      console.log(base + number);
    });
}

adder(3,5,7,1);
