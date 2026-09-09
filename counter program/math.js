// Math --- built-in object for mathematical operations

let x = 5.62;
let y = 4;
let z = 6;

let math = Math.round(x); // Rounds x to the nearest integer
let mfloor = Math.floor(x); // Rounds x down to the nearest integer
let mceil = Math.ceil(x); // Rounds x up to the nearest integer
let mtrunc = Math.trunc(x); // Removes the decimal part of x
let mpow = Math.pow(z, y); // Raises z to the power of y
let mp = Math.pow(y, z); // Raises y to the power of z
let msqrt = Math.sqrt(z); // Returns the square root of z
let msq = Math.sqrt(y); // Returns the square root of y
let mmax = Math.max(x, y, z); // Returns the largest of the given numbers
let mmin = Math.min(x, y, z); // Returns the smallest of the given numbers
let msin = Math.sin(y); // Returns the sine of y (in radians)
let mcos = Math.cos(z); // Returns the cosine of z (in radians)
let mtan = Math.tan(x); // Returns the tangent of x (in radians)
let mlog = Math.log(y); // Returns the natural logarithm (base e) of y



console.log(math); // Output: 5
console.log(mfloor); // Output: 5
console.log(mceil); // Output: 6
console.log(mtrunc); // Output: 5
console.log(mpow); // Output: 625
console.log(mp); // Output: 1024
console.log(msqrt); // Output: 2.23606797749979
console.log(msq); // Output: 2  
console.log(mmax); // Output: 6
console.log(mmin); // Output: 4
console.log(msin); // Output: 0.766044443118978
console.log(mcos); // Output: 0.960170286650366 
console.log(mtan); // Output: 1.514574696260024
console.log(mlog); // Output: 1.3862943611198906