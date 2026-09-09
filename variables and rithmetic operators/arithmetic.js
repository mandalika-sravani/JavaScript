// Arithmetic Operators ---- operands (values, varaibles, expressions) and operators (+, -, *, /, %)

let students = 30;

//students = students + 5; // Addition
//students = students - 2; // Subtraction
//students = students * 2; // Multiplication
//students = students / 5; // Division
//students = students % 4; // Modulus

//Instead of using the above statements, we can use the shorthand operators
//students += 5;
//students -= 2;
//students *= 2;
//students /= 5;
//students %= 4;

// Increment and Decrement Operators
//students++;
//students--;

/*Operator Precedence
    1. Parentheses
    2. Exponents
    3. Multiplication and Division
    4. Addition and Subtraction
*/

let mul = 10 + 5 * 2; // Multiplication has higher precedence than addition
let par = (10 + 5) * 2; // Parentheses have the highest precedence
let div = 20 / 4 + 2; // Division has higher precedence than addition
let exp = 2 ** 3 + 1; // Exponentiation has higher precedence than addition
let mod = 10 % 3 + 1; // Modulus has higher precedence than addition


//console.log(students); // Output the final value of students
console.log(mul);
console.log(par);
console.log(div);
console.log(exp);
console.log(mod);
