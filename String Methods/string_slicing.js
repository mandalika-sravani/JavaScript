// String Slicing -- creating a substring from a portion of another string
//                      string.slice(start, end)

const fullName = "Sravani Mandalika";
const email = "sravani@gmail.com"

let firstName = fullName.slice(0,7);
let lastName = fullName.slice(8, 17);
let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-3);

let user = email.slice(0, email.indexOf("@"));
let ext = email.slice(email.indexOf("@") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

console.log(user);
console.log(ext);