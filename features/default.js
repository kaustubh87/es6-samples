/*function sayHello(name = 'World'){
  console.log('Hello ' +name+ '!');
}

sayHello();
sayHello('Kate')
*/

function greetUser( user = { name: 'Anonymous'}){
  console.log('Hello ' +user.name + '!');
}

greetUser();
greetUser({name:'Kvin Vinzanekar'});
greetUser({name: 'Kvin'})
