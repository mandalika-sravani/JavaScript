// element selectors -- methods used to target and manipulate HTML elements
//                      They allow to select one or multiple HTML elements from DOM

// The below are the built-in methods of DOM

//document.getElementById() -- Element OR Null
//document.getElementsByClassName() -- HTML Collection
//document.getElementsByTagName() -- HTML Collection
//document.querySelector() -- First Element OR Null
//document.querySelectorAll() -- Nodelist

//document.getElementById()
const heading = document.getElementById("test");
heading.style.backgroundColor = "orange";
heading.style.textAlign = "center";

console.log(heading);

//document.getElementsByClassName()
const ing = document.getElementById("ing");
const items = document.getElementsByClassName("items");

for(let item of items) {
    item.style.backgroundColor = "red";
}

console.log(items);

//document.getElementsByTagName()
const tag = document.getElementsByTagName("h1");

console.log(tag);

//document.querySelector()
const element = document.querySelector(".items");

element.style.backgroundColor = "white";

//document.querySelectorAll()

const query = document.querySelectorAll(".items");

query[0].style.backgroundColor = "pink";

console.log(query);