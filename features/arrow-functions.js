var people = ['Kvin', 'Kvin12', 'John'];

people.forEach(function (name){
  console.log(name);
});

//people.forEach((name) => console.log(name));


people.forEach((name) => {
  console.log(`Welcome ${name}`);
});

function add(a,b){
  return a + b ;
}

console.log(add(3,9));

var add = (a,b) => a + b;
console.log(add(4,4));


var person = {
  name : 'Kvin',
  likes : ['Movies', 'Programming' ,'Running'],
  printLikes : function() {
    this.likes.forEach((like) => {
        console.log(`${this.name} likes ${like}`);
    });
  }

};

person.printLikes();
