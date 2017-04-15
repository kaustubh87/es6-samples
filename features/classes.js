class Person{
    constructor (name) {
        this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'anonymous';
    }

    printGreeting(){
        console.log(`Hi I am ${this.name}!`);
    }

    //Static method doesn't require an instance of Person class. Use without creating instance

    static capitalizeWord (word){
      return word[0].toUpperCase() + word.slice(1);
    }
}

var person1 = new Person('kvin');

person1.printGreeting();

var person2 = new Person();
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));
