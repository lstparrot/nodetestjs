var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());



var arr = [11,2,3,34,5];
console.log(arr.join("||"));
console.log(arr.sort());




class Person {
    constructor(name, age, happy){
        this.name = name;
        this.age = age;
        this.happy = happy;
    }
    info() {
        console.log("Men " + this.name + "Age " + this.age);
    }
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 10, true);


alex.name = 'alex2';

console.log(alex.age);
console.log(alex.name);
console.log(bob.age);
console.log(bob.name);

alex.info();
bob.info();


