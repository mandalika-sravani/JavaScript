// static -- keyword that defines properties or methods that belong to a class 
//              itself rather than the objects created from that class

class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
}

console.log("Output for static")
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

// Example 2

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Arjun");
const user2 = new User("Shravya");
const user3 = new User("Charitha");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);