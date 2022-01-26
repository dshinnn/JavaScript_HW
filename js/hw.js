//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    addAge() {
        this.age += 1;
        console.log(this.age)
    }
}
let bob = new Person('Bob', 33);
console.log(bob)
bob.printInfo();
bob.addAge();
bob.addAge();
bob.addAge();

let joey = new Person('Joey', 32);
joey.printInfo();


//=======Exercise #2=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr){
    for(let i=0; i<arr.length; i++){
        if(i % 2 == 0) {
            arr.splice(i,1, 'even index');
        }
    }
    return arr;
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
