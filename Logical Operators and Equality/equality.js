// Equal to symbol is used in different ways for different operations
//              = -- assignment
//             == -- comparison operator (compares the values if equal)
//            === -- strict equality operator (compares the values and also datatypes if equal)
//             != -- inequality operator
//            !== -- strict inequality operator

const PI = 3.14;

if(PI === "3.14") {
    console.log("This is a PI");
}
else {
    console.log("This is NOT a PI");
}

if(PI != "3.14") {
    console.log("This is NOT a PI");
}
else {
    console.log("This is a PI");
}
