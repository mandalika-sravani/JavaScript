// nested objects -- objects inside of other objects

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const per1 = new Person("Arjun", 10, "Vinayak Nagar",
                                         "Hyderabad", 
                                         "India");

const per2 = new Person("Savitri", 15, "S R Nagar",
                                          "Hyderabad", 
                                          "India");
                        
const per3 = new Person("Vidya", 20, "Ameerpet",
                                         "Hyderabad", 
                                         "India");

console.log(per2.address.street);
console.log(per1.address.city);


