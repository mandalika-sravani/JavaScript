// Logical Operators --- used to combine and manipulate boolean values
//                  AND -- &&
//                  OR -- ||
//                  NOT -- !


const temp = -200;

if(temp > 0 && temp <= 30) {
    console.log("The weather is VERY GOOD")
}
else if (temp > 30 && temp <= 100) {
    console.log("The weather is HOT");
}
else if(temp < 0 || temp >= 150) {
    console.log("The waether is BAD");
}

const isStudent = false;

if(!isStudent) {
    console.log("You are NOT a student");
}
else {
    console.log("You are a student");
}