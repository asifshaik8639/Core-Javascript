function Person(name){
   this.name = name;
}
Person.prototype.sayHi = function() {
    console.log('Say Hello to ' + this.name);
}

let person = new Person('shaik');
person.sayHi();
Object.getPrototypeOf(person).sayHi();