var age = 29;

function printHello(){
  console.log("Helllo");
}

var person =  {
  name: 'Kvin',
  age,
  printAge () {
    console.log(this.age);
  }
};

person.printAge();
