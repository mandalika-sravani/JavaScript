// inheritance -- allows a new class to inherit properties and methods from an existing class
//                  simply as (parent --> child) - helps with code reusability

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`The ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    jump() {
        console.log(`The ${this.name} is jumping`);
    }
}

class Fish extends Animal{
    name = "Fish";

    alive = true;

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
    sleep() {
        console.log(`The ${this.name} is sleeping`);
    }
}

class Hawk extends Animal{
    name = "Hawk";

    alive = true;

    fly() {
        console.log(`This ${this.name} is flying`);
    }
    sleep() {
        console.log(`The ${this.name} is sleeping`);
    }
}

class Tiger extends Animal{
    name = "Tiger";

    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`The ${this.name} is sleeping`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
const tiger = new Tiger();

console.log(hawk.alive);
fish.swim();
hawk.fly();
rabbit.jump();
tiger.eat();
