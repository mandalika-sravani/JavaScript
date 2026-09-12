// SUPER -- keyword is used in classes to call constructor or access the properties and 
//              methods of a parent (superClass) 
//                  this --- this object
//                  super --- the parent

class Animals {
    alive = true;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Dog extends Animals{
    
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`);
    }
}

class Dolphin extends Animals{

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim`);
    }
}

class Eagle extends Animals{

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`);
    }
}

const dog = new Dog("Bubble", 7, 25);
const dolphin = new Dolphin("Dolphin", 25, 123);
const eagle = new Eagle("Eagle", 50, 532);

dolphin.swim();
eagle.fly();
dog.run();  