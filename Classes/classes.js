// class -- provides a more structured and cleaner way to work with objects compared to 
//            traditional constructor functions - static, inheritance

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);

    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.10;

const product1 = new Product("Shirt", 20.56);
const product2 = new Product("Pant", 70.68);
const product3 = new Product("Suit", 150.68);
const product4 = new Product("Jump Suit", 80.8);

const total = product1.calculateTotal(salesTax);
const total2 = product2.calculateTotal(salesTax);
const total3 = product3.calculateTotal(salesTax);
const total4 = product4.calculateTotal(salesTax);

console.log("Output for Classes")
product1.displayProduct();
console.log(`Total tax (with tax) for product1: ${total}`);
product2.displayProduct();
console.log(`Total tax (with tax) for product2: ${total2}`);
product3.displayProduct();
console.log(`Total tax (with tax) for product3: ${total3}`);
product4.displayProduct();
console.log(`Total tax (with tax) for product4: ${total4}`);

const avgTax = (product1.calculateTotal(salesTax) + 
               product2.calculateTotal(salesTax) +
               product3.calculateTotal(salesTax) +
               product4.calculateTotal(salesTax)) / 4;

console.log(`The average tax is : ${avgTax}`);


