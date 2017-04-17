
class Person{
    constructor (name) {
        this.name = typeof name === 'string' ? name : 'anonymous';
    }

      //getter and setter functions
    set name (value) {
      this._name = Person.capitalizeWord(value);
    }

    get name() {
      return this._name;
    }

    printGreeting() {
        console.log(`Hi I am ${this.name}!`);
    }

    //Static method doesn't require an instance of Person class. Use without creating instance

    static capitalizeWord (word) {
      return word[0].toUpperCase() + word.slice(1);
    }
}

var person1 = new Person('kvin');
person1.name = 'jen';
person1.printGreeting();

var person2 = new Person();
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));


var obj = {
  set age (val){
    this._age = val + 10;
  },
  get age() {
    return this._age;
  }
}

obj.age = 21;
console.log(obj.age);
